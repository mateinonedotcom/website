(function (window) {
	const getElement = (square) => {
		const selector = `.square[data-rank="${square.rank}"][data-file="${square.file}"] ${containerClass}`;
		return document.querySelector(selector);
	};

	const containerClass = '.piece-container';
	const validMoveClass = 'valid-move';

	window.mateinone = window.mateinone || {};
	window.mateinone.game = window.mateinone.game || {};
	window.mateinone.game.Square = {
		addPiece: (square, pieceElement) => getElement(square).appendChild(pieceElement),
		isEqual: (square1, square2) => square1.rank === square2.rank && square1.file === square2.file,
		addAllValidMoveHighlights: (squares) =>
			squares.forEach((square) => getElement(square).classList.add(validMoveClass)),
		removeAllValidMoveHighlights: () => {
			document.querySelectorAll(`.${validMoveClass}`).forEach((square) => {
				square.classList.remove(validMoveClass);
				square.replaceWith(square.cloneNode(true));
			});
		},
		movePiece: (from, to) =>
			window.mateinone.game.Square.addPiece(to, getElement(from).children[0]),
		addAllClickEventListeners: (squares, handler) =>
			squares.forEach((square) =>
				getElement(square).addEventListener('click', () => handler(square))
			),
		removeAllClickEventListeners: () =>
			document
				.querySelectorAll(containerClass)
				.forEach((container) => container.replaceWith(container.cloneNode(true)))
	};
})(this);
