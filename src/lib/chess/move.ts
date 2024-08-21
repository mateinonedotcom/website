import { Square } from '$lib/chess/square';

export class Move {
	readonly from: Square;
	readonly to: Square;

	constructor(from: Square, to: Square) {
		this.from = from;
		this.to = to;
	}
}
