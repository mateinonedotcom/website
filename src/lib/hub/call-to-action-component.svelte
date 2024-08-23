<script lang="ts">
	import { GameState } from '$lib/game/game-state';

	export let gameState: GameState;
	export let onSkip: () => void;
	export let onReset: () => void;

	const defaultClasses: string = 'w-full rounded p-2 text-2xl uppercase font-semibold';
</script>

{#if GameState.Waiting === gameState}
	<button class="{defaultClasses} bg-hub-button-skip" on:click|preventDefault={onSkip}>
		Skip
	</button>
{:else if GameState.Win === gameState}
	<button class="{defaultClasses} bg-hub-button-next" on:click|preventDefault={onSkip}>
		Next
	</button>
{:else if GameState.Lose === gameState}
	<div class="flex gap-x-1">
		<button class="{defaultClasses} bg-hub-button-retry" on:click|preventDefault={onReset}>
			Retry
		</button>
		<button class="{defaultClasses} bg-hub-button-skip" on:click|preventDefault={onSkip}>
			Skip
		</button>
	</div>
{/if}
