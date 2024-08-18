(function (window) {
    const addPiecesInSquares = (puzzle) =>
        puzzle
            .pieceSquares
            .forEach(pieceSquare => {
                const element = mateinone.game.Piece.createElement(pieceSquare.piece);
                mateinone.game.Square.addPiece(pieceSquare.square, element);
            });

    const addOriginSquareOnClickEvents = (puzzle) => {
        const froms = puzzle
            .validMoves
            .map(move => JSON.stringify(move.from))
            .filter((value, index, self) => self.indexOf(value) === index)
            .map(from => JSON.parse(from));

        mateinone.game.Square.addAllClickEventListeners(
            froms,
            (from) => originSquareOnClickEvents(from, puzzle)
        )
    }

    const originSquareOnClickEvents = (from, puzzle) => {
        mateinone.game.Square.removeAllValidMoveHighlights();

        const tos = puzzle
            .validMoves
            .filter(move => mateinone.game.Square.isEqual(move.from, from))
            .map(move => move.to);

        mateinone.game.Square.addAllValidMoveHighlights(tos);
        mateinone.game.Square.addAllClickEventListeners(
            tos,
            (to) => destinationSquareOnClickEvents(from, to, puzzle)
        );
    }

    const destinationSquareOnClickEvents = (from, to, puzzle) => {
        mateinone.game.Square.removeAllValidMoveHighlights();
        mateinone.game.Square.removeAllClickEventListeners();

        mateinone.game.Square.movePiece(from, to);

        const isCheckmateMove = puzzle
            .checkmateMoves
            .filter(move =>
                mateinone.game.Square.isEqual(move.from, from) &&
                mateinone.game.Square.isEqual(move.to, to)
            ).length > 0;

        mateinone.game.HUB.showMessage(isCheckmateMove);
    }

    var puzzle = null
    window.mateinone = window.mateinone || {};
    window.mateinone.game = window.mateinone.game || {};
    window.mateinone.game.Board = {
        init: async (client) => {
            puzzle = await client.getOneRandomly();

            mateinone.game.HUB.addAllClickEventListeners(
                async () => {
                    puzzle = await client.getOneRandomly();
                    mateinone.game.Board.setup(puzzle)
                },
                () => mateinone.game.Board.setup(puzzle)
            );

            mateinone.game.Board.setup(puzzle);
        },
        setup: (puzzle) => {
            mateinone.game.Board.reset();
            mateinone.game.HUB.reset(puzzle);

            addPiecesInSquares(puzzle);
            addOriginSquareOnClickEvents(puzzle);
        },
        reset: () => {
            mateinone.game.Piece.removeAll();

            mateinone.game.Square.removeAllValidMoveHighlights();
            mateinone.game.Square.removeAllClickEventListeners();
        },
    }
})(this);
