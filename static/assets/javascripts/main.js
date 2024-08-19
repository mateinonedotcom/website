var main = async () => {
	window.mateinone.game.Board.init(window.mateinone.puzzle.Client);
};

var setPieceSize = () => {
	const squareWidth = document.querySelector('.square').clientWidth;
	const pieceWidth = Math.min(75, squareWidth - 5);

	document.styleSheets[0].addRule('.piece', `font-size: ${pieceWidth}px`);
};

// Svelte app is not ready yet, so we need to wait a bit
[0, 100, 250, 500, 750].forEach((delay) => setTimeout(setPieceSize, delay));

main();
