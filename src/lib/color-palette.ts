export class Color {
	readonly bg: string;
	readonly text: string;

	constructor(bg: string, text: string) {
		this.bg = bg;
		this.text = text;
	}
}

export class ColorPalette {
	readonly background: Color;
	readonly squareWhite: Color;
	readonly squareBlack: Color;
	readonly squareActive: Color;
	readonly pieceWhite: Color;
	readonly pieceBlack: Color;

	constructor(
		background: Color,
		squareWhite: Color,
		squareBlack: Color,
		squareActive: Color,
		pieceWhite: Color,
		pieceBlack: Color
	) {
		this.background = background;
		this.squareWhite = squareWhite;
		this.squareBlack = squareBlack;
		this.squareActive = squareActive;
		this.pieceWhite = pieceWhite;
		this.pieceBlack = pieceBlack;
	}
}

export const ColorPalettes = {
	default: new ColorPalette(
		new Color('bg-[#302E2B]', 'text-[#302E2B]'),
		new Color('bg-[#EBECD3]', 'text-[#EBECD3]'),
		new Color('bg-[#7A945A]', 'text-[#7A945A]'),
		new Color('bg-[#BDC95E]', 'text-[#BDC95E]'),
		new Color('bg-[#F9F9F9]', 'text-[#F9F9F9]'),
		new Color('bg-[#5B5957]', 'text-[#5B5957]')
	)
};
