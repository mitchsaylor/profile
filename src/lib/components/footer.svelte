<script>
	import { PUBLIC_DOMAIN } from '$env/static/public';

	import Social from '$lib/components/social.svelte';
</script>

<footer
	class="mx-auto mt-24 flex w-full max-w-4xl flex-col items-center gap-y-12 border-t border-accent/20 px-[3%] pt-14 pb-10 print:mt-10 print:gap-y-4 print:py-6"
>
	<a
		href="mailto:mitch@saylor.io"
		tabIndex={0}
		rel="external"
		class="rounded-md px-2 text-4xl font-extrabold tracking-tighter text-accent focus:outline-none focus:ring-2 focus:ring-contrast print:text-2xl"
	>
		mitch@{PUBLIC_DOMAIN.split('//')[1].replace('www.', '')}
	</a>
	<Social />
	<div class="flex flex-col justify-center text-center">
		<p class="mb-3 flex flex-wrap items-end justify-center gap-x-1 font-meno text-2xl">
			<em class="font-medium not-italic">Built with SvelteKit 💯.</em>
			<a
				href="https://github.com/mitchsaylor/profile-page"
				target="_blank"
				rel="external noreferrer"
				tabIndex={0}
				class="rounded-md text-lg font-light underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-contrast"
			>
				View the source code
			</a>
		</p>
		<small class="text-center text-sm leading-3 text-accent">&copy; Copyright</small>
		<i class="text-center font-meno text-lg not-italic text-contrast contrast-more:text-accent">
			Mitch Saylor
		</i>
		<small class="text-center text-sm leading-3 text-accent">All Rights Reserved</small>
	</div>
</footer>
