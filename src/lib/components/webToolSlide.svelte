<script lang="ts">
	export let slide: WebTool;

	import type { WebTool } from '$lib/types';

	import { SplideSlide } from '@splidejs/svelte-splide';
</script>

<SplideSlide
	class="group relative aspect-square w-full overflow-hidden rounded-3xl bg-accent/10 transition duration-300 hover:bg-accent/20"
>
	<a
		href={slide.link}
		target="_blank"
		rel="noreferrer"
		class="flex aspect-square h-full w-full flex-col items-center justify-center py-8 px-3 transition-all duration-300"
	>
		<picture>
			<source type="image/avif" srcset={`${slide.logo.url}?fm=avif&w=100 100w`} sizes="100px" />
			<source type="image/webp" srcset={`${slide.logo.url}?fm=webp&w=100 100w`} sizes="100px" />
			<source type="image/jpeg" srcset={`${slide.logo.url}?w=100 100w`} sizes="100px" />
			<img
				src={slide.logo.url}
				alt={slide.logo.title}
				class="h-14 w-14 rounded-full transition duration-300 ease-out -translate-y-4 sm:translate-y-0 sm:group-hover:-translate-y-6"
			/>
		</picture>
	</a>
	<div
		class="pointer-events-none absolute bottom-0 left-0 z-30 w-full sm:translate-y-full p-2 transition duration-300 ease-out sm:group-hover:translate-y-0"
	>
		<div
			class="rounded-full sm:bg-white/30 p-2 text-center font-medium leading-4 tracking-tighter text-dark/80"
		>
			{slide.title}
		</div>
	</div>
</SplideSlide>
