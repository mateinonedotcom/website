<script lang="ts">
	import RobotsComponent from './meta/robots-component.svelte';
	import OpenGraphComponent from './meta/open-graph-component.svelte';
	import TwitterCardComponent from './meta/twitter-card-component.svelte';
	import JsonLdComponent from './meta/json-ld-component.svelte';

	export let title: string;
	export let description: string;
	export let image: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="chess, mate, checkmate" />

	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
</svelte:head>

<RobotsComponent />

<OpenGraphComponent {title} {description} {image} />
<TwitterCardComponent {title} {description} {image} />

<JsonLdComponent {title} {description} {image} />
