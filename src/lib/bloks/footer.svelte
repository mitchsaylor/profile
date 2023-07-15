<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Logos
	import Logo from '$lib/logo.svelte';
</script>

{#if blok.component === 'footer'}
	<footer class="mx-auto max-w-7xl pt-24 sm:px-6 sm:pb-24 lg:px-8">
		<div
			class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16 lg:px-24"
		>
			<svg
				viewBox="0 0 1024 1024"
				class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
				aria-hidden="true"
			>
				<circle
					cx="512"
					cy="512"
					r="512"
					fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
					fill-opacity="0.7"
				/>
				<defs>
					<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
						<stop stop-color="#C92020" />
						<stop offset="1" stop-color="#C92020" />
					</radialGradient>
				</defs>
			</svg>
			<div class="flex flex-col items-end justify-between gap-y-5 lg:flex-row">
				<div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
					<strong class="font-forma text-4xl font-extrabold text-white sm:text-5xl">
						{blok.heading}
					</strong>
					<div class="mt-16">
						<small class="text-sm leading-8 text-gray-300">
							&copy; {new Date().getFullYear() > 2022 ? `2022-${new Date().getFullYear()}` : '2022'}
							Mitch Saylor / All Rights Reserved.
						</small>
					</div>
				</div>
				<figure class="flex w-full justify-center lg:justify-end">
					<Logo class="mb-1 w-20 text-accent" />
					<figcaption class="sr-only">Mitch Saylor</figcaption>
				</figure>
			</div>
			<!-- Background -->
			<figure
				class="pointer-events-none absolute left-0 top-[25%] -z-10 w-full pt-12 sm:top-[20%] sm:pt-6 lg:pt-0 xl:top-[25%]"
			>
				<div class="mx-auto flex w-full max-w-10xl justify-center text-white/10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="150"
						width="1000"
						viewBox="0 0 1000 150"
						stroke="currentColor"
						class="h-full w-full min-w-[600px] stroke-[3px] sm:stroke-2 lg:stroke-1"
					>
						<path d="M0,50 C120,30 180,0 300,0 S530,60 650,60 S880,50 1000,40" fill="none">
							<animate
								attributeName="d"
								values="M0,50 C120,30 180,0 300,0 S530,60 650,60 S880,50 1000,40;M0,40 C120,30 180,0 300,10 S530,75 650,70 S840,40 1000,60;M0,50 C120,30 180,0 300,0 S530,60 650,60 S880,50 1000,40"
								dur="6s"
								keySplines=".5 0 .5 1; .5 0 .5 1"
								calcMode="spline"
								repeatCount="indefinite"
							/>
						</path>
						<path d="M0,80 C130,80 250,65 380,65 S530,85 680,85 S850,75 1000,90" fill="none">
							<animate
								attributeName="d"
								values="M0,80 C130,80 250,65 380,65 S530,85 680,85 S850,75 1000,90;M0,70 C130,80 250,80 380,75 S530,85 680,90 S880,85 1000,70;M0,80 C130,80 250,65 380,65 S530,85 680,85 S850,75 1000,90"
								dur="7s"
								keySplines=".5 0 .5 1; .5 0 .5 1"
								calcMode="spline"
								repeatCount="indefinite"
							/>
						</path>
						<path d="M0,100 C120,130 350,80 450,80 S580,95 680,110 S850,135 1000,140" fill="none">
							<animate
								attributeName="d"
								values="M0,100 C120,130 350,80 450,80 S580,95 680,110 S850,135 1000,140;M0,95 C100,110 350,85 450,85 S580,102 680,115 S880,125 1000,130;M0,100 C120,130 350,80 450,80 S580,95 680,110 S850,135 1000,140"
								dur="5s"
								keySplines=".5 0 .5 1; .5 0 .5 1"
								calcMode="spline"
								repeatCount="indefinite"
							/>
						</path>
						<path d="M0,140 C80,135 170,125 320,120 S650,25 800,25 S940,30 1000,35" fill="none">
							<animate
								attributeName="d"
								values="M0,140 C80,135 170,125 320,120 S650,25 800,25 S940,30 1000,35;M0,150 C60,135 140,125 300,130 S630,40 780,30 S920,25 1000,25;M0,140 C80,135 170,125 320,120 S650,25 800,25 S940,30 1000,35"
								dur="8s"
								keySplines=".5 0 .5 1; .5 0 .5 1"
								calcMode="spline"
								repeatCount="indefinite"
							/>
						</path>
					</svg>
				</div>
			</figure>
		</div>
	</footer>
{/if}
