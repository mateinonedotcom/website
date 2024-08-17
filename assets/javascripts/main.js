
const getPuzzles = () =>
    fetch("/assets/puzzles/checkmate-lichess-2012-12-31.jsonl")
        .then(response => response.text())
        .then(data =>
            data.split("\n")
                .filter(line => line.trim() !== "")
                .map(line => JSON.parse(line))
        );

const getRandomPuzzle = (puzzles) =>
    puzzles[Math.floor(Math.random() * puzzles.length)];

const getPieceIcon = (piece) => ({
    "Pawn": "o",
    "Rook": "t",
    "Knight": "m",
    "Bishop": "v",
    "Queen": "w",
    "King": "l",
}[piece.type]);

const getPieceColor = (piece) => ({
    "White": "white",
    "Black": "black",
}[piece.color]);

const createPieceElement = (puzzle, pieceSquare) => {
    const pieceIcon = getPieceIcon(pieceSquare.piece);
    const pieceColor = getPieceColor(pieceSquare.piece);

    const element = document.createElement("div");
    element.classList.add("piece");
    element.setAttribute("data-color", pieceColor);
    element.innerText = pieceIcon;

    return element;
}

const getPieceContainer = (square) => {
    const selector = `.square[data-rank="${square.rank}"][data-file="${square.file}"] .piece-container`;
    return document.querySelector(selector);
}

const addPiece = (element, square) =>
    getPieceContainer(square).appendChild(element);

const addEndMessage = (isCheckmate) => {
    document
        .querySelector('.message .player')
        .classList.add('hidden');

    document
        .querySelector(`.message .${isCheckmate ? 'win' : 'lose'}`)
        .classList.remove('hidden');
}

const addDraggableSquares = (element, validSquares, checkmateSquares) =>
    validSquares.forEach(validSquare => {
        const isCheckmate = checkmateSquares.find(square => squareMatch(square.to, validSquare.to));

        const container = getPieceContainer(validSquare.to)

        container.classList.add('valid-move');
        container.addEventListener("dragover", (event) => event.preventDefault());
        container.addEventListener("drop", (event) => {
            container.appendChild(element);

            removeEventListeners();
            addEndMessage(isCheckmate);
        });
    });

const removeDraggableSquares = (squares) =>
    squares.forEach(square => {
        const container = getPieceContainer(square.to)

        container.classList.remove('valid-move');
        container.replaceWith(container.cloneNode(true));
    });

const squareMatch = (square1, square2) =>
    square1.rank === square2.rank && square1.file === square2.file;

const addPieceEventListener = (element, turn, square, validMoves, checkmateMoves) => {
    if (element.getAttribute("data-color") !== turn.toLowerCase()) {
        return;
    }

    const validSquares = validMoves.filter(move => squareMatch(move.from, square));
    const checkmateSquares = checkmateMoves.filter(move => squareMatch(move.from, square));

    element.setAttribute("draggable", "true");

    element.addEventListener("dragstart", (event) => {
        addDraggableSquares(element, validSquares, checkmateSquares);
    });
    element.addEventListener("dragend", (event) => {
        removeDraggableSquares(validSquares);
    });
}

const removeEventListeners = (element) => {
    const board = document.querySelector('.board')
    board.replaceWith(board.cloneNode(true));

    document
        .querySelectorAll('.piece')
        .forEach(piece => piece.removeAttribute("draggable"));
}

const setupBoard = (puzzle) =>
    puzzle
        .pieceSquares
        .forEach(pieceSquare => {
            const element = createPieceElement(puzzle, pieceSquare);

            addPiece(element, pieceSquare.square);

            addPieceEventListener(element, puzzle.turn, pieceSquare.square, puzzle.validMoves, puzzle.checkmateMoves);
        });

const setupMessage = (puzzle) => {
    const turnElement = document.querySelector('.message .player .pill');
    turnElement.classList.add(puzzle.turn.toLowerCase());

    document
        .querySelectorAll('.message .win, .message .lose')
        .forEach(element => element.classList.add('hidden'));

    document
        .querySelectorAll('.message button.next')
        .forEach(button => button.addEventListener("click", (event) => {
            event.preventDefault()
            main()
        }));

    document
        .querySelectorAll('.message button.retry')
        .forEach(button => button.addEventListener("click", (event) => {
            event.preventDefault();

            reset();

            setupBoard(puzzle);
            setupMessage(puzzle);
        }));
}

const main = async () => {
    reset();

    const puzzles = await getPuzzles();
    const puzzle = getRandomPuzzle(puzzles);

    setupBoard(puzzle);
    setupMessage(puzzle);
};

const setPieceSize = () => {
    const setPieceSize = () => {
        const squareWidth = document.querySelector('.square').clientWidth;
        const pieceWidth = Math.min(75, squareWidth - 5);

        document.styleSheets[0].addRule('.piece', `font-size: ${pieceWidth}px`);
    }

    window.addEventListener("resize", setPieceSize);
    setPieceSize();
}

const initialState = document.body.innerHTML;
const reset = () => document.body.innerHTML = initialState;

setPieceSize();
main();
