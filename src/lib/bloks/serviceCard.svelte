<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Helpers
	import { clickLink } from '$lib/mixpanelEvent';

	// Components
	import RichTextRender from '$lib/components/richTextRender.svelte';
</script>

{#if blok.component === 'serviceCard'}
	<li class="group/card py-24 first:pt-8 last:pb-8">
		<h2 class="mb-2 text-lg font-light sm:group-even/card:text-right">{blok.subHeading}</h2>
		<div
			class="mb-8 flex flex-col justify-between gap-x-4 gap-y-3 sm:flex-row sm:group-even/card:flex-row-reverse sm:group-even/card:text-right"
		>
			<strong class="max-w-sm font-forma text-3xl font-bold sm:group-even/card:self-end">
				{blok.heading}
			</strong>
			<div class="flex sm:flex-col">
				<a
					href={blok.serviceLink.url}
					target={blok.serviceLink.target}
					rel={blok.serviceLink.target === '_blank' ? 'external' : ''}
					on:click={() =>
						clickLink(
							`Service details`,
							blok.component === 'serviceCard' ? blok.serviceLink.url : ''
						)}
					class="rounded-full border border-gray-500 px-6 py-3 text-center"
				>
					{blok.balloonText}
				</a>
			</div>
		</div>
		{#if blok.paragraph?.content?.length > 0}
			<div class="mb-6 font-light sm:mb-3">
				{#each blok.paragraph.content as section}
					<RichTextRender {section} />
				{/each}
			</div>
		{/if}
		{#if blok.primaryLink && blok.primaryLinkText}
			<div class="flex">
				<a
					href={blok.primaryLink.url}
					target={blok.primaryLink.target}
					tabindex="0"
					rel={blok.primaryLink.target === '_blank' ? 'external' : ''}
					on:click={() =>
						clickLink(
							`Primary service link`,
							blok.component === 'serviceCard' ? blok.primaryLink.url : ''
						)}
					class="group relative border-transparent font-medium ring-0 transition-all hover:border-gray-500 focus:rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-250 focus:ring-offset-4 sm:border-b"
				>
					{blok.primaryLinkText}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="-mr-1 -mt-px inline-flex h-5 w-5 translate-x-0 transition ease-in-out group-hover:translate-x-1 sm:hidden"
					>
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="absolute left-full top-0.5 ml-1 hidden h-5 w-5 translate-x-0 leading-4 transition ease-in-out group-hover:translate-x-1 sm:inline-flex"
					>
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
		{/if}
		{#if blok.secondaryLink && blok.secondaryLinkText}
			<div class="mt-5 flex justify-end text-sm sm:mt-4 sm:group-even/card:justify-start">
				<a
					href={blok.secondaryLink.url}
					target={blok.secondaryLink.target}
					tabindex="0"
					rel={blok.secondaryLink.target === '_blank' ? 'external' : ''}
					on:click={() =>
						clickLink(
							`Secondary service link`,
							blok.component === 'serviceCard' ? blok.secondaryLink.url : ''
						)}
					class="group rounded-full bg-gray-900 px-6 py-3 text-center font-medium text-white ring-0 ring-transparent transition-all ease-in-out hover:ring-4 hover:ring-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-350"
				>
					{blok.secondaryLinkText}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="-mr-1 -mt-px inline-flex h-5 w-5 translate-x-0 transition ease-in-out group-hover:translate-x-1"
					>
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
		{/if}
	</li>
{/if}
