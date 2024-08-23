<script lang="ts">
	import { Piece, Pieces } from '$lib/chess/piece';

	export let piece: Piece;

	const getIcon = (piece: Piece) =>
		({
			Pawn: 'o',
			Rook: 't',
			Knight: 'm',
			Bishop: 'v',
			Queen: 'w',
			King: 'l'
		})[piece.type];

	const getColor = (piece: Piece) =>
		({
			White: 'text-board-piece-white',
			Black: 'text-board-piece-black'
		})[piece.color];
</script>

<div
	class="font-chess drop-shadow-md text-3xl min-[324px]:text-4xl min-[432px]:text-5xl min-[540px]:text-6xl min-[648px]:text-7xl {getColor(
		piece
	)}"
	class:animate-pulse={Pieces.isBlackKing(piece)}
>
	{getIcon(piece)}
</div>
