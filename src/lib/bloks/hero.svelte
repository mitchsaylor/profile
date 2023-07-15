<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Logos
	import Logo from '$lib/logo.svelte';

	// Helpers
	import { clickLink } from '$lib/mixpanelEvent';

	// Components
	import Picture from '$lib/components/picture.svelte';
	import RichTextRender from '$lib/components/richTextRender.svelte';
</script>

{#if blok.component === 'hero'}
	<div class="relative">
		<div class="mx-auto max-w-7xl pb-24 sm:px-6 sm:pt-24 lg:px-8">
			<div
				class="relative isolate z-20 overflow-hidden bg-gray-900 px-6 py-24 text-white shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16 lg:px-24"
			>
				<div class="relative z-20">
					<div class="flex flex-col gap-y-16 sm:flex-row sm:justify-between">
						<figure>
							<Logo class="mb-1 w-24 text-accent" />
							<h1 class="font-forma text-[1.05rem] font-normal uppercase">Mitch Saylor</h1>
						</figure>
						<div class="flex flex-row-reverse items-center justify-end gap-x-3.5 sm:flex-row">
							<div class="flex flex-col justify-center gap-y-px text-left font-sans">
								<nav class="flex items-center gap-2.5 sm:justify-end">
									{#if blok.githubUsername}
										<a
											href={`https://github.com/${blok.githubUsername}`}
											target="_blank"
											rel="external"
											tabindex="0"
											on:click={() =>
												clickLink(
													'Github',
													`https://github.com/${
														blok.component === 'hero' ? blok.githubUsername : ''
													}`
												)}
											class="rounded-md opacity-60 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-900"
										>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													class="h-5 w-5"
													viewBox="0 0 496 512"
												>
													<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
													<path
														d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
													/>
												</svg>
											</div>
										</a>
										<a
											href="/#contact"
											tabindex="0"
											class="rounded-md opacity-60 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-900"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 -960 960 960"
												class="h-6 w-6"
												fill="currentColor"
											>
												<path d="M120-160v-245l302-75-302-77v-243l760 320-760 320Z" />
											</svg>
										</a>
									{/if}
								</nav>
								<div class="leading-5">{blok.fullName || ''}</div>
								<address class="font-serif text-sm not-italic leading-5">{blok.location}</address>
							</div>
							<div class="h-16 w-16">
								<Picture
									src={blok.profileImage?.filename}
									alt={blok.profileImage?.alt}
									sizes={[{ minScreenWidth: 1, imageWidth: 240 }]}
									class="rounded-full"
									noPadding
								/>
							</div>
						</div>
					</div>
					<div class="mb-6 mt-8 sm:mt-12">
						<em class="w-full font-scribe text-3xl text-gray-350 sm:text-4xl">
							{blok.heading}
						</em>
					</div>
					{#if blok.paragraph?.content?.length > 0}
						<div class="max-w-4xl pb-3 font-forma text-5xl font-extrabold sm:text-6xl">
							{#each blok.paragraph.content as section}
								<RichTextRender {section} />
							{/each}
						</div>
					{/if}
				</div>
				{#if blok.foregroundImage?.filename}
					<div class="pointer-events-none absolute right-0 top-0 z-0 h-full w-2/3">
						<Picture
							src={blok.foregroundImage.filename}
							alt={blok.foregroundImage.alt}
							sizes={[{ minScreenWidth: 1, imageWidth: 1600 }]}
							noRing
							noPadding
							class="h-full w-full object-cover"
						/>
					</div>
					<div
						class="absolute right-0 top-0 z-10 h-full w-2/3 bg-gradient-to-r from-gray-900 to-gray-900/[96%] sm:to-gray-900/[94%]"
					/>
				{/if}
			</div>
		</div>
		{#if blok.backgroundImage?.filename}
			<div class="pointer-events-none absolute left-0 top-0 -z-10 h-[125%] w-full">
				<Picture
					src={blok.backgroundImage.filename}
					alt={blok.backgroundImage.alt}
					sizes={[{ minScreenWidth: 1, imageWidth: 2000 }]}
					noRing
					noPadding
					class="h-full w-full object-cover"
				/>
			</div>
			<div
				class="absolute left-0 top-0 -z-10 h-[125%] w-full bg-gradient-to-b from-white/90 via-white/90 to-white sm:from-white/[92%] sm:via-white/[92%] sm:to-white"
			/>
		{/if}
	</div>
{/if}
