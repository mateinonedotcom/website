import type { Move } from '$lib/chess/move';
import { PieceSquare } from '$lib/chess/piece-square';
import { Square, Squares } from '$lib/chess/square';

export class Puzzle {
	pieceSquares: PieceSquare[];
	readonly turn: string;
	readonly validMoves: Move[];
	readonly checkmateMoves: Move[];

	constructor(
		pieceSquares: PieceSquare[],
		turn: string,
		validMoves: Move[],
		checkmateMoves: Move[]
	) {
		this.pieceSquares = pieceSquares;
		this.turn = turn;
		this.validMoves = validMoves;
		this.checkmateMoves = checkmateMoves;
	}
}

export const Puzzles = {
	empty: () => new Puzzle([], '', [], []),
	clone: (puzzle: Puzzle) => Puzzles.fromJson(JSON.stringify(puzzle)),
	fromJson: (str: string) => {
		const empty = Puzzles.empty();
		const json = JSON.parse(str);

		return Object.assign(empty, json) as Puzzle;
	},
	getPieceAt: (puzzle: Puzzle, square: Square) =>
		puzzle.pieceSquares.find((pieceSquare) => Squares.isEqual(pieceSquare.square, square))?.piece ??
		null,
	getValidMoveDestinations: (puzzle: Puzzle, from: Square) =>
		puzzle.validMoves.filter((move) => Squares.isEqual(move.from, from)).map((move) => move.to),
	updatePieceSquare: (puzzle: Puzzle, move: Move) => {
		const clone = Puzzles.clone(puzzle);
		const piece = Puzzles.getPieceAt(clone, move.from);

		if (null === piece) {
			return clone;
		}

		const pieceSquare = new PieceSquare(piece, move.to);

		clone.pieceSquares = [
			pieceSquare,
			...clone.pieceSquares.filter(
				(pieceSquare) =>
					!Squares.isEqual(pieceSquare.square, move.from) &&
					!Squares.isEqual(pieceSquare.square, move.to)
			)
		];

		return clone;
	},
	isMoveCheckmate: (puzzle: Puzzle, move: Move) =>
		puzzle.checkmateMoves.some(
			(checkmateMove) =>
				Squares.isEqual(checkmateMove.from, move.from) && Squares.isEqual(checkmateMove.to, move.to)
		)
};
