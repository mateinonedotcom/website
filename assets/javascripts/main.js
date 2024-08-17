const main = async () => {
    mateinone.game.Board.init(mateinone.puzzle.Client);
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

setPieceSize();
main();
