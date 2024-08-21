<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let image: string;

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Game',
		name: title,
		description: description,
		image: image,
		url: $page.url.toString()
	};

	const jsonLd = JSON.stringify(schema);
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags @typescript-eslint/no-unused-expressions -->
	{@html '<script type="application/ld+json">' + jsonLd + '</script>'}
</svelte:head>
