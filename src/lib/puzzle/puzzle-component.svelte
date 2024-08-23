<script lang="ts">
	import { Move } from '$lib/chess/move';
	import { Pieces } from '$lib/chess/piece';
	import { type Square, Squares } from '$lib/chess/square';
	import { Puzzle, Puzzles } from '$lib/puzzle/puzzle';

	import BoardComponent from '$lib/chess/board-component.svelte';
	import PieceComponent from '$lib/chess/piece-component.svelte';
	import SquareComponent from '$lib/chess/square-component.svelte';

	export let puzzle: Puzzle;
	export let onMove: (isCheckmate: boolean) => void;

	var moveOrigin: null | Square = null;
	var moveDestination: null | Square = null;
	var moveDestinations: Square[] = [];

	const updateMoveOrigin = (square: Square) => {
		if (null === moveOrigin || !Squares.isEqual(moveOrigin, square)) {
			moveOrigin = square;
			moveDestinations = Puzzles.getValidMoveDestinations(puzzle, square);
		} else {
			moveOrigin = null;
			moveDestinations = [];
		}
	};

	const updateMoveDestination = (square: Square) => {
		if (null === moveOrigin) return;

		moveDestination = square;
		moveDestinations = [];

		const move = new Move(moveOrigin, square);
		puzzle = Puzzles.updatePieceSquare(puzzle, move);

		const isMoveCheckmate = Puzzles.isMoveCheckmate(puzzle, move);

		onMove(isMoveCheckmate);
	};
</script>

<BoardComponent let:square>
	<SquareComponent {square}>
		{@const piece = Puzzles.getPieceAt(puzzle, square)}
		{@const isPieceWhite = null !== piece && Pieces.isWhite(piece)}
		{@const isMoveDestinationValid = moveDestinations.some((validMoveDestination) =>
			Squares.isEqual(validMoveDestination, square)
		)}

		{@const onClick = () => {
			if (null !== moveDestination) return;
			else if (isPieceWhite) updateMoveOrigin(square);
			else if (isMoveDestinationValid) updateMoveDestination(square);
		}}

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative h-full w-full"
			class:cursor-pointer={null === moveDestination && (isPieceWhite || isMoveDestinationValid)}
			on:click={onClick}
		>
			{#if isMoveDestinationValid}
				<div
					class="bg-board-square-active absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
				></div>
			{/if}

			{#if null !== piece}
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<PieceComponent {piece} />
				</div>
			{/if}
		</div>
	</SquareComponent>
</BoardComponent>
