(function (window) {
	window.mateinone = window.mateinone || {};
	window.mateinone.game = window.mateinone.game || {};
	window.mateinone.game.HUB = {
		showMessage: (isCheckmate) => {
			document.querySelector('.message .player').classList.add('hidden');

			document
				.querySelector(`.message .${isCheckmate ? 'win' : 'lose'}`)
				.classList.remove('hidden');
		},
		addAllClickEventListeners: (nextHandler, retryHandler) => {
			document
				.querySelectorAll('.message button.next')
				.forEach((button) => button.addEventListener('click', nextHandler));

			document
				.querySelectorAll('.message button.retry')
				.forEach((button) => button.addEventListener('click', retryHandler));
		},
		reset: (puzzle) => {
			document.querySelector('.message .player .pill').classList.remove('white', 'black');

			document.querySelector('.message .player .pill').classList.add(puzzle.turn.toLowerCase());

			document.querySelector('.message .player').classList.remove('hidden');

			document
				.querySelectorAll('.message .win, .message .lose')
				.forEach((element) => element.classList.add('hidden'));
		}
	};
})(this);
