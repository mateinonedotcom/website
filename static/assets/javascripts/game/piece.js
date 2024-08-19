(function (window) {
	const getPieceIcon = (piece) =>
		({
			Pawn: 'o',
			Rook: 't',
			Knight: 'm',
			Bishop: 'v',
			Queen: 'w',
			King: 'l'
		})[piece.type];

	const getPieceColor = (piece) =>
		({
			White: 'white',
			Black: 'black'
		})[piece.color];

	window.mateinone = window.mateinone || {};
	window.mateinone.game = window.mateinone.game || {};
	window.mateinone.game.Piece = {
		createElement: (piece) => {
			const pieceIcon = getPieceIcon(piece);
			const pieceColor = getPieceColor(piece);

			const element = document.createElement('div');
			element.classList.add('piece');
			element.setAttribute('data-color', pieceColor);
			element.innerText = pieceIcon;

			return element;
		},
		removeAll: () => document.querySelectorAll('.piece').forEach((piece) => piece.remove())
	};
})(this);
