<script lang="ts">
	import { ColorPalette, ColorPalettes } from '$lib/color-palette';
	import { GameState } from '$lib/game/game-state';
	import { invalidateAll } from '$app/navigation';
	import { type Puzzle, Puzzles } from '$lib/puzzle/puzzle';
	import CallToActionComponent from '$lib/hub/call-to-action-component.svelte';
	import ColorComponent from '$lib/hub/color-component.svelte';
	import MetaComponent from '$lib/_/meta-component.svelte';
	import PuzzleComponent from '$lib/puzzle/puzzle-component.svelte';

	export let data;

	var puzzleClone: Puzzle = Puzzles.empty();
	const setPuzzleClone = () => {
		puzzleClone = Puzzles.empty();
		window.setTimeout(() => (puzzleClone = Puzzles.clone(data.puzzle)), 0);
	};

	var gameState: GameState = GameState.Waiting;
	const onMove = (isCheckmate: boolean) => {
		gameState = isCheckmate ? GameState.Win : GameState.Lose;
	};

	const onSkip = async () => {
		puzzleClone = Puzzles.empty();
		await invalidateAll();
		onReset();
	};

	const onReset = () => {
		gameState = GameState.Waiting;
		setPuzzleClone();
	};

	onReset();

	let colorPalette: ColorPalette = ColorPalettes.default;
</script>

<MetaComponent
	title="Mate in One"
	description="Skips the repetitive openings and jumps straight into the action — the checkmate. You have one shot to deliver the winning move. Think you can do it?"
	image="https://mateinone.com/favicon.png"
/>

<ColorComponent {colorPalette} />

<div class="h-full max-w-xl mx-auto flex flex-col justify-between gap-5">
	<h1 class="mt-4 text-2xl text-center font-extrabold uppercase">Mate in One</h1>

	{#if null !== puzzleClone}
		<div class="max-w-xl mx-1">
			<PuzzleComponent puzzle={puzzleClone} {onMove} />
		</div>
	{/if}

	<div class="mb-2 mx-1">
		<CallToActionComponent {colorPalette} {gameState} {onSkip} {onReset} />
	</div>
</div>
