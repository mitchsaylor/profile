<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Logos
	import Algolia from '$lib/logos/algolia.svelte';
	import Stripe from '$lib/logos/stripe.svelte';
	import Mixpanel from '$lib/logos/mixpanel.svelte';

	// Helpers
	import { clickLink } from '$lib/mixpanelEvent';

	// Components
	import Picture from '$lib/components/picture.svelte';

	const options = [
		{ name: 'algolia', component: Algolia },
		{ name: 'stripe', component: Stripe },
		{ name: 'mixpanel', component: Mixpanel }
	];
</script>

{#if blok.component === 'logoCloud'}
	<div class="mx-auto max-w-7xl pt-24 sm:px-6 sm:pb-24 lg:px-8">
		<h2 class="mb-2 text-center text-[.9rem] font-medium uppercase tracking-wider text-gray-500">
			{blok.heading}
		</h2>
		<div
			class="relative isolate overflow-hidden bg-gray-150 px-6 sm:rounded-3xl sm:px-16 sm:py-12 lg:px-24"
		>
			{#if blok.logos?.length > 0}
				<ul
					class="flex grid-cols-2 flex-col divide-y divide-gray-300 sm:grid sm:gap-y-8 sm:divide-y-0 md:grid-cols-3"
				>
					{#each blok.logos as logo}
						<li class="relative z-10 flex items-center justify-center py-8 sm:py-0">
							{#if options.filter((option) => option.name === logo.image)[0]?.component}
								<a
									href={logo.link?.url}
									target={logo.link?.target}
									tabindex="0"
									rel={logo.link?.target === '_blank' ? 'external' : ''}
									on:click={() => clickLink(`Service logo link`, logo.link?.url)}
									class="rounded-xl text-gray-600 ring-0 transition duration-100 hover:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300"
								>
									<span class="sr-only">{logo.name}</span>
									<svelte:component
										this={options.filter((option) => option.name === logo.image)[0]?.component}
										class="h-16 p-4"
									/>
								</a>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
			{#if blok.backgroundImage?.filename}
				<figure class="absolute right-0 top-0 hidden h-full md:block">
					<div class="relative">
						<Picture
							src={blok.backgroundImage?.filename}
							alt={blok.backgroundImage?.alt}
							sizes={[{ minScreenWidth: 1, imageWidth: 800 }]}
							noRing
							noPadding
							class="-mt-4 h-[30rem] rotate-3 mix-blend-darken"
						/>
						<div
							class="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-gray-150 to-gray-150/75"
						/>
					</div>
				</figure>
			{/if}
		</div>
	</div>
{/if}
