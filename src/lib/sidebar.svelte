<script lang="ts">
	// Components
	import Logo from '$lib/logo.svelte';
	import BombergersLabsLogo from '$lib/bombergersLabsLogo.svelte';
	import GithubLogo from '$lib/githubLogo.svelte';
</script>

<div class="relative lg:static">
	<div class="px-8 lg:fixed lg:inset-0 lg:pr-0 lg:pl-20">
		<div class="mx-auto h-full max-w-lg gap-12 py-8 lg:max-w-7xl">
			<div
				class="flex h-full flex-col gap-12 lg:max-w-[40%] lg:overflow-y-auto lg:pr-12 xl:max-w-lg"
			>
				<header class="flex grow flex-col justify-center pt-6 pb-8 lg:pb-0">
					<div class="flex flex-wrap items-center gap-6">
						<a href="/" class="text-theme-main h-8">
							<Logo />
						</a>
						<h1 class="grow text-2xl font-semibold tracking-tighter whitespace-nowrap">
							Mitch Saylor
						</h1>
						<a href="https://github.com/mitchsaylor" target="_blank">
							<span class="sr-only">GitHub</span>
							<GithubLogo />
						</a>
					</div>
					<p class="mt-18 mb-6 text-4xl tracking-tighter">
						Currently Building High-Performance Infrastructure For
						<span class="text-theme-light">Modern Commerce & Services</span>
					</p>
					<p class="text-light-gray mb-14">
						There's never been a better time to be building digital content and architecture, and I
						love seeing the impact that this has on businesses that are passionate about connecting
						with their audiences in new and more effective ways.
					</p>
					<p class="text-light-gray mb-3.5 font-light">Check out my latest work at:</p>
					<div class="flex">
						<a href="https://bombergers.dev" target="_blank" class="w-12">
							<span class="sr-only">Bomberger's Labs</span>
							<BombergersLabsLogo />
						</a>
					</div>
				</header>
				<footer class="text-dark-gray hidden text-sm lg:block">
					&copy; {new Date().getFullYear() > 2022 ? `2022-${new Date().getFullYear()}` : '2022'} Mitch
					Saylor / All Rights Reserved.
				</footer>
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-0 left-0 -z-10 h-full w-full overflow-hidden lg:fixed lg:h-dvh lg:w-1/2"
	>
		<div class="relative size-full">
			<div
				class="absolute right-0 bottom-0 h-200 w-full scale-x-150 bg-radial-[at_50%_100%] from-orange-300/15 to-transparent to-75% lg:top-0 lg:h-full lg:w-200 lg:scale-x-100 lg:scale-y-150 lg:bg-radial-[at_100%_50%]"
			></div>
			<div
				class="absolute -bottom-px h-[2px] w-full bg-linear-to-r from-white/3 via-white/10 to-white/3 lg:top-0 lg:-right-px lg:h-full lg:w-[2px] lg:bg-linear-to-t"
			></div>
		</div>
	</div>
</div>
