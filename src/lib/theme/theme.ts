export class Theme {
	readonly name: string;
	readonly cssClassName: string;

	constructor(name: string, cssClassName: string) {
		this.name = name;
		this.cssClassName = cssClassName;
	}
}

const chessDotCom = new Theme('Chess.com', 'theme-chessdotcom');
const lichessDotOrg = new Theme('Lichess.org', 'theme-lichessdotorg');
const chessplode = new Theme('Chessplode', 'theme-chessplode');

const localStorageKey = 'theme';

export const Themes = {
	all: () => [chessDotCom, lichessDotOrg, chessplode],

	writeToBrowser: (theme: Theme) => {
		const classList = window.document.documentElement.classList;

		[...classList]
			.filter((element) => element.startsWith('theme-'))
			.forEach((element) => classList.remove(element));

		classList.add(theme.cssClassName);
	},

	writeToLocalStorage: (theme: Theme) => {
		localStorage.setItem(localStorageKey, theme.name);
	},

	readFromLocalStorage: () => {
		const themeName = localStorage.getItem(localStorageKey);
		const theme = Themes.all().find((theme) => theme.name === themeName);

		return theme || chessDotCom;
	},

	isEqual: (a: Theme, b: Theme) => a.cssClassName === b.cssClassName
};
