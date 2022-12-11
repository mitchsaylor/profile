<script lang="ts">
	export let webTools: Array<WebTool>;

	import type { WebTool } from '$lib/types';

	import WebToolSlide from '$lib/components/webToolSlide.svelte';
	import WebToolSlider from '$lib/components/webToolSlider.svelte';
</script>

<section class="flex flex-col items-center gap-y-6 py-24 print:py-10">
	<h2 class="text-3xl font-extralight lowercase tracking-tighter text-accent print:text-xl">
		Uses & Recommends:👍
	</h2>
	<figure
		class="flex w-full max-w-4xl flex-col gap-y-4 rounded-xl border border-accent/10 py-12 shadow-sm print:hidden overflow-hidden"
	>
		<WebToolSlider direction="ltr">
			{#each webTools.slice(0, 6) as slide}
				<WebToolSlide {slide} />
			{/each}
		</WebToolSlider>
		<WebToolSlider direction="rtl">
			{#each webTools.slice(6) as slide}
				<WebToolSlide {slide} />
			{/each}
		</WebToolSlider>
	</figure>
	<ul
		class="hidden w-full max-w-4xl grid-cols-3 gap-3 rounded-xl border border-accent/10 p-6 py-6 shadow-sm print:grid"
	>
		{#each webTools as webTool}
			<li class="flex w-full justify-center gap-3 text-center font-meno text-accent">
				<picture>
					<source
						type="image/avif"
						srcset={`${webTool.logo.url}?fm=avif&w=100 100w`}
						sizes="100px"
					/>
					<source
						type="image/webp"
						srcset={`${webTool.logo.url}?fm=webp&w=100 100w`}
						sizes="100px"
					/>
					<source type="image/jpeg" srcset={`${webTool.logo.url}?w=100 100w`} sizes="100px" />
					<img
						src={webTool.logo.url}
						alt={webTool.logo.title}
						class="h-6 w-6 rounded-full transition duration-300 ease-out group-hover:-translate-y-6"
					/>
				</picture>
				{webTool.title}
			</li>
		{/each}
	</ul>
</section>
