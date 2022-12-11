<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const slideList: Array<string> = [
		'SvelteKit',
		'Serverless',
		'Application',
		'API',
		'Headless',
		'Plugin'
	];
</script>

<p
	class="mx-auto flex flex-col flex-wrap items-center justify-center gap-y-10 px-8 py-24 font-meno text-6xl lowercase print:flex-row print:gap-y-5 print:py-10 print:text-4xl md:max-w-3xl md:flex-row md:gap-y-3 md:px-0 lg:max-w-4xl overflow-hidden lg:overflow-visible"
>
	<strong class="relative text-center font-medium md:whitespace-nowrap">
		<i
			class="absolute left-1/2 bottom-full -mb-2 mr-3 rotate-3 font-filmotype text-4xl font-normal not-italic text-contrast contrast-more:text-accent print:left-auto print:right-full print:bottom-0 print:mb-0 print:text-2xl sm:left-auto sm:right-full sm:bottom-0 sm:mb-0"
		>
			Mediocre
		</i>
		Designer<span class="text-contrast contrast-more:text-accent">&#9998;</span>.
	</strong>
	<strong class="relative text-center font-medium md:whitespace-nowrap">
		<i
			class="absolute left-0 bottom-full inline-flex -rotate-6 text-left font-filmotype text-4xl font-normal not-italic text-contrast contrast-more:text-accent print:text-2xl md:-rotate-12"
		>
			&#10553;
			<Splide
				options={{
					type: 'fade',
					rewind: true,
					perPage: 1,
					perMove: 1,
					arrows: false,
					pagination: false,
					autoplay: true,
					pauseOnHover: false,
					pauseOnFocus: false,
					padding: '5px'
				}}
				class="-translate-y-2 md:mb-6"
			>
				{#each slideList as slide}
					<SplideSlide>{slide}</SplideSlide>
				{/each}
			</Splide>
		</i>
		Developer<span class="text-contrast contrast-more:text-accent">&#123;&#125;</span>.
	</strong>
	<strong class="relative text-center font-medium md:whitespace-nowrap">
		Analyst<span class="text-contrast contrast-more:text-accent">&#8805;</span>.
		<i
			class="absolute top-full left-3/4 -rotate-3 font-filmotype text-4xl font-normal not-italic text-contrast contrast-more:text-accent print:text-2xl"
		>
			(Sometimes)
		</i>
	</strong>
	<strong class="relative text-center font-medium md:whitespace-nowrap">
		Content Specialist<span class="text-contrast contrast-more:text-accent">&para;</span>.
		<i
			class="absolute top-full left-1/4 mt-2 -rotate-[1deg] font-filmotype text-4xl font-normal not-italic text-contrast contrast-more:text-accent print:text-2xl"
		>
			&#10159;And Everything In-Between!
		</i>
	</strong>
</p>
