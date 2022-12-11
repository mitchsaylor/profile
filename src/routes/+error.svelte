<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
	<meta name="robots" content="noindex,follow" />
</svelte:head>

<div class="mb-8 flex grow flex-col items-center justify-center text-center">
	<h1 class="text-8xl font-black tracking-tighter">{$page.status}</h1>
	<p class="-mt-3 text-lg font-light text-accent">{$page.error?.message}</p>
	<div class="my-8">
		<a
			href="/"
			class="transitioon rounded-full border-2 border-accent bg-transparent px-10 py-2 font-filmotype text-3xl text-accent shadow-sm duration-300 ease-out hover:bg-accent hover:text-light"
		>
			Go Home
		</a>
	</div>
</div>
