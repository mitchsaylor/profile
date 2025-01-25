<script lang="ts">
	let { children } = $props();

	// CSS
	import '../app.css';
</script>

<div class="min-h-dvh flex flex-col">
	<main class="grow">
		{@render children()}
	</main>
</div>
