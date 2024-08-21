<script lang="ts">
	import type { ColorPalette } from '$lib/color-palette';

	export let colorPalette: ColorPalette;

	window.document.body.classList.add(colorPalette.background.bg, colorPalette.pieceBlack.text);
</script>
