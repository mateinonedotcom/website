<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let image: string;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:url" content={$page.url.toString()} />
</svelte:head>
