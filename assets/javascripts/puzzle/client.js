(function (window) {
    const url = "/assets/puzzles/checkmate-lichess-2012-12-31.jsonl";
    const promisePuzzles = fetch(url)
        .then(response => response.text())
        .then(data =>
            data.split("\n")
                .filter(line => line.trim() !== "")
                .map(line => JSON.parse(line))
        )

    window.mateinone = window.mateinone || {};
    window.mateinone.puzzle = window.mateinone.puzzle || {};
    window.mateinone.puzzle.Client = {
        getOneRandomly: () => promisePuzzles.then(puzzles => puzzles[Math.floor(Math.random() * puzzles.length)]),
    }
})(this);
