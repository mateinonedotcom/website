/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				chess: ['CASEFONT']
			},
			textColor: {
				'hub-text': 'var(--color-hub-text)',
				'hub-background': 'var(--color-hub-background)',
				'hub-button-next': 'var(--color-hub-button-next)',
				'hub-button-skip': 'var(--color-hub-button-skip)',
				'hub-button-retry': 'var(--color-hub-button-retry)',
				'board-square-white': 'var(--color-board-square-white)',
				'board-square-black': 'var(--color-board-square-black)',
				'board-square-active': 'var(--color-board-square-active)',
				'board-piece-white': 'var(--color-board-piece-white)',
				'board-piece-black': 'var(--color-board-piece-black)'
			},
			backgroundColor: {
				'hub-text': 'var(--color-hub-text)',
				'hub-background': 'var(--color-hub-background)',
				'hub-button-next': 'var(--color-hub-button-next)',
				'hub-button-skip': 'var(--color-hub-button-skip)',
				'hub-button-retry': 'var(--color-hub-button-retry)',
				'board-square-white': 'var(--color-board-square-white)',
				'board-square-black': 'var(--color-board-square-black)',
				'board-square-active': 'var(--color-board-square-active)',
				'board-piece-white': 'var(--color-board-piece-white)',
				'board-piece-black': 'var(--color-board-piece-black)'
			}
		}
	},
	plugins: []
};
