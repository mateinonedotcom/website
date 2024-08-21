const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse();

export class Square {
	readonly file: string;
	readonly rank: string;

	constructor(file: string, rank: string) {
		this.file = file;
		this.rank = rank;
	}
}

export const Squares = {
	all: (() => {
		const squares: Square[] = [];
		for (const rank of ranks) {
			for (const file of files) {
				const square = new Square(file, rank);
				squares.push(square);
			}
		}

		return squares;
	})(),

	getNotation: (square: Square) => square.file + square.rank,

	isEvenXor(square: Square): boolean {
		const isEvenFile = files.indexOf(square.file) % 2 === 0;
		const isEvenRank = ranks.indexOf(square.rank) % 2 === 0;

		return isEvenFile !== isEvenRank;
	},

	isEqual: (a: Square, b: Square) => a.file === b.file && a.rank === b.rank
};
