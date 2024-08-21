<script lang="ts">
	import { Square, Squares } from '$lib/chess/square';
	import { ColorPalette } from '$lib/color-palette';

	export let colorPalette: ColorPalette;
	export let square: Square;

	const backgroundColorClass = (square: Square) =>
		Squares.isEvenXor(square) ? colorPalette.squareBlack.bg : colorPalette.squareWhite.bg;
</script>

<div class="aspect-square {backgroundColorClass(square)}">
	<slot {square} />
</div>
