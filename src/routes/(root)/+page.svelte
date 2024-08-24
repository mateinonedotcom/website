<script lang="ts">
	import { GameState } from '$lib/game/game-state';
	import { invalidateAll } from '$app/navigation';
	import { type Puzzle, Puzzles } from '$lib/puzzle/puzzle';
	import CallToActionComponent from '$lib/hub/call-to-action-component.svelte';
	import ThemeComponent from '$lib/theme/theme-component.svelte';
	import MetaComponent from '$lib/_/meta-component.svelte';
	import PuzzleComponent from '$lib/puzzle/puzzle-component.svelte';
	import GearIcon from '$lib/_/icon/gear-icon.svelte';
	import SettingsRoute from '$routes/settings/route';

	import confetti from 'canvas-confetti';

	export let data;

	var puzzleClone: null | Puzzle = null;
	const setPuzzleClone = () => {
		puzzleClone = null;
		window.setTimeout(() => (puzzleClone = Puzzles.clone(data.puzzle)), 0);
	};

	var gameState: GameState = GameState.Waiting;
	const onMove = (isCheckmate: boolean) => {
		gameState = isCheckmate ? GameState.Win : GameState.Lose;

		if (isCheckmate) {
			confetti({ origin: { x: 0.5, y: 0.9 } });
		}
	};

	const onSkip = async () => {
		puzzleClone = Puzzles.empty();
		await invalidateAll();
		onReset();
	};

	const onReset = () => {
		gameState = GameState.Waiting;
		setPuzzleClone();

		confetti.reset();
	};

	onReset();
</script>

<MetaComponent
	title="Mate in One"
	description="Skips the repetitive openings and jumps straight into the action — the checkmate. You have one shot to deliver the winning move. Think you can do it?"
	image="https://mateinone.com/favicon.png"
/>

<ThemeComponent />

<div class="h-full max-w-xl mx-auto flex flex-col justify-between gap-5">
	<div class="mt-4 mx-2 flex justify-between items-center">
		<h1 class="text-2xl font-extrabold uppercase">Mate in One</h1>
		<a href={SettingsRoute()}>
			<GearIcon class="h-8 w-8" />
		</a>
	</div>

	{#if null !== puzzleClone}
		<div class="max-w-xl mx-2" class:animate-shake-x={gameState === GameState.Lose}>
			<PuzzleComponent puzzle={puzzleClone} {onMove} />
		</div>
	{/if}

	<div class="mb-2 mx-2">
		<CallToActionComponent {gameState} {onSkip} {onReset} />
	</div>
</div>
