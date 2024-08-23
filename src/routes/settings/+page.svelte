<script lang="ts">
	import CheckIcon from '$lib/_/icon/check-icon.svelte';
	import CloseIcon from '$lib/_/icon/close-icon.svelte';
	import MetaComponent from '$lib/_/meta-component.svelte';
	import { Theme, Themes } from '$lib/theme/theme';
	import ThemeComponent from '$lib/theme/theme-component.svelte';
	import RootRoute from '$routes/(root)/route';

	let currentTheme = Themes.readFromLocalStorage();

	const onClick = (theme: Theme) => {
		Themes.writeToLocalStorage(theme);
		Themes.writeToBrowser(theme);

		currentTheme = theme;
	};
</script>

<MetaComponent
	title="Mate in One | Settings"
	description="Skips the repetitive openings and jumps straight into the action — the checkmate. You have one shot to deliver the winning move. Think you can do it?"
	image="https://mateinone.com/favicon.png"
/>

<ThemeComponent />

<div class="h-full max-w-xl mx-auto flex flex-col gap-5">
	<div class="mt-4 mx-2 flex justify-between items-center">
		<h1 class="text-2xl font-extrabold uppercase">Settings</h1>
		<a href={RootRoute()}>
			<CloseIcon class="h-8 w-8" />
		</a>
	</div>

	<div class="grid grid-cols-1 gap-4 mx-2">
		<h2 class="text-xl font-bold">Themes</h2>
		{#each Themes.all() as theme (theme.cssClassName)}
			<div>
				<h3>{theme.name}</h3>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="relative {theme.cssClassName}" on:click={() => onClick(theme)}>
					<div class="grid grid-cols-5">
						<div class="bg-hub-background w-full aspect-square" />
						<div class="bg-board-square-white w-full aspect-square" />
						<div class="bg-board-square-black w-full aspect-square" />
						<div class="bg-board-piece-white w-full aspect-square" />
						<div class="bg-board-piece-black w-full aspect-square" />
					</div>

					{#if Themes.isEqual(theme, currentTheme)}
						<div class="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
							<div class="rounded-full bg-white">
								<CheckIcon class="h-6 w-6 m-3 text-black" />
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
