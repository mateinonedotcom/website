<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let image: string;
</script>

<svelte:head>
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.toString()} />
</svelte:head>
