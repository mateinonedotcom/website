<script lang="ts">
	import { Squares } from '$lib/chess/square';
</script>

<div class="grid grid-cols-8 gap-0.5">
	{#each Squares.all as square (Squares.getNotation(square))}
		<slot {square} />
	{/each}
</div>
