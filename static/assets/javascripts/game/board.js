(function (window) {
	const addPiecesInSquares = (puzzle) =>
		puzzle.pieceSquares.forEach((pieceSquare) => {
			const element = window.mateinone.game.Piece.createElement(pieceSquare.piece);
			window.mateinone.game.Square.addPiece(pieceSquare.square, element);
		});

	const addOriginSquareOnClickEvents = (puzzle) => {
		const froms = puzzle.validMoves
			.map((move) => JSON.stringify(move.from))
			.filter((value, index, self) => self.indexOf(value) === index)
			.map((from) => JSON.parse(from));

		window.mateinone.game.Square.addAllClickEventListeners(froms, (from) =>
			originSquareOnClickEvents(from, puzzle)
		);
	};

	const originSquareOnClickEvents = (from, puzzle) => {
		window.mateinone.game.Square.removeAllValidMoveHighlights();

		const tos = puzzle.validMoves
			.filter((move) => window.mateinone.game.Square.isEqual(move.from, from))
			.map((move) => move.to);

		window.mateinone.game.Square.addAllValidMoveHighlights(tos);
		window.mateinone.game.Square.addAllClickEventListeners(tos, (to) =>
			destinationSquareOnClickEvents(from, to, puzzle)
		);
	};

	const destinationSquareOnClickEvents = (from, to, puzzle) => {
		window.mateinone.game.Square.removeAllValidMoveHighlights();
		window.mateinone.game.Square.removeAllClickEventListeners();

		window.mateinone.game.Square.movePiece(from, to);

		const isCheckmateMove =
			puzzle.checkmateMoves.filter(
				(move) =>
					window.mateinone.game.Square.isEqual(move.from, from) &&
					window.mateinone.game.Square.isEqual(move.to, to)
			).length > 0;

		window.mateinone.game.HUB.showMessage(isCheckmateMove);
	};

	var puzzle = null;
	window.window.mateinone = window.window.mateinone || {};
	window.window.mateinone.game = window.window.mateinone.game || {};
	window.window.mateinone.game.Board = {
		init: async (client) => {
			puzzle = await client.getOneRandomly();

			window.mateinone.game.HUB.addAllClickEventListeners(
				async () => {
					puzzle = await client.getOneRandomly();
					window.mateinone.game.Board.setup(puzzle);
				},
				() => window.mateinone.game.Board.setup(puzzle)
			);

			window.mateinone.game.Board.setup(puzzle);
		},
		setup: (puzzle) => {
			window.mateinone.game.Board.reset();
			window.mateinone.game.HUB.reset(puzzle);

			addPiecesInSquares(puzzle);
			addOriginSquareOnClickEvents(puzzle);
		},
		reset: () => {
			window.mateinone.game.Piece.removeAll();

			window.mateinone.game.Square.removeAllValidMoveHighlights();
			window.mateinone.game.Square.removeAllClickEventListeners();
		}
	};
})(this);
