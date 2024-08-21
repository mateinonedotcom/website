import type { Piece } from '$lib/chess/piece';
import type { Square } from '$lib/chess/square';

export class PieceSquare {
	readonly piece: Piece;
	readonly square: Square;

	constructor(piece: Piece, square: Square) {
		this.piece = piece;
		this.square = square;
	}
}
