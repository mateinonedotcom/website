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
			},
			animation: {
				'shake-x': 'shake-x 0.5s ease-in-out'
			},
			keyframes: {
				'shake-x': {
					'0%, 100%': { transform: 'translateX(0)' },
					'20%, 60%': { transform: 'translateX(5px)' },
					'40%, 80%': { transform: 'translateX(-5px)' }
				}
			}
		}
	},
	plugins: []
};
