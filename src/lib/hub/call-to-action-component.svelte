<script lang="ts">
	import { ColorPalette } from '$lib/color-palette';
	import { GameState } from '$lib/game/game-state';

	export let colorPalette: ColorPalette;
	export let gameState: GameState;
	export let onSkip: () => void;
	export let onReset: () => void;

	const defaultClasses: string = 'w-full rounded p-2 text-2xl uppercase font-semibold';
</script>

{#if GameState.Waiting === gameState}
	<button
		class="{defaultClasses} {colorPalette.pieceWhite.bg} {colorPalette.background.text}"
		on:click|preventDefault={onSkip}
	>
		Skip
	</button>
{:else if GameState.Win === gameState}
	<button
		class="{defaultClasses} {colorPalette.pieceWhite.bg} {colorPalette.background.text}"
		on:click|preventDefault={onSkip}
	>
		Next
	</button>
{:else if GameState.Lose === gameState}
	<div class="flex gap-x-1">
		<button
			class="{defaultClasses} {colorPalette.pieceBlack.bg} {colorPalette.background.text}"
			on:click|preventDefault={onReset}
		>
			Retry
		</button>
		<button
			class="{defaultClasses} {colorPalette.pieceWhite.bg} {colorPalette.background.text}"
			on:click|preventDefault={onSkip}
		>
			Skip
		</button>
	</div>
{/if}
