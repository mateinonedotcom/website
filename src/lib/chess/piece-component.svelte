<script lang="ts">
	import { Piece, Pieces } from '$lib/chess/piece';
	import { ColorPalette } from '$lib/color-palette';

	export let piece: Piece;
	export let colorPalette: ColorPalette;

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
			White: colorPalette.pieceWhite.text,
			Black: colorPalette.pieceBlack.text
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
