<script lang="ts">
	import { Square, Squares } from '$lib/chess/square';

	export let square: Square;

	const backgroundColorClass = (square: Square) =>
		Squares.isEvenXor(square) ? 'bg-board-square-black' : 'bg-board-square-white';
</script>

<div class="aspect-square {backgroundColorClass(square)}">
	<slot {square} />
</div>
