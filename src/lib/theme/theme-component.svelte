<script lang="ts">
	import { Themes } from '$lib/theme/theme';

	const theme = Themes.readFromLocalStorage();
	Themes.writeToBrowser(theme);
</script>
