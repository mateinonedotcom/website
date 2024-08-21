export class Piece {
	readonly type: string;
	readonly color: string;

	constructor(type: string, color: string) {
		this.type = type;
		this.color = color;
	}
}

export const Pieces = {
	isKing: (piece: Piece) => piece.type === 'King',
	isBlack: (piece: Piece) => piece.color === 'Black',
	isWhite: (piece: Piece) => piece.color === 'White',

	isBlackKing: (piece: Piece) => Pieces.isKing(piece) && Pieces.isBlack(piece)
};
