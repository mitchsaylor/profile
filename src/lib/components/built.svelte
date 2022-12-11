<script lang="ts">
	export let services: Array<Service>;

	import type { Service } from '$lib/types';

	import IconRouter from '$lib/iconRouter.svelte';
</script>

<section class="flex flex-col items-center gap-y-10 py-16 px-[3%] print:py-8 lg:px-0">
	<h2 class="text-3xl font-extralight lowercase tracking-tighter text-accent print:text-xl">
		Has Built:🏗
	</h2>
	<ul
		class="grid w-full max-w-sm grid-cols-1 gap-12 print:max-w-md print:gap-6 md:max-w-3xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3"
	>
		{#each services as service}
			<li class="group flex flex-col">
				<strong
					class="font-meno text-xl font-medium lowercase text-contrast contrast-more:text-accent lg:group-[:nth-of-type(2)]:order-2 lg:group-[:nth-of-type(3)]:order-3"
				>
					{service.subTitle}
				</strong>
				<h3
					class="py-1 text-5xl font-black leading-10 tracking-tighter print:text-3xl lg:group-[:nth-of-type(2)]:order-4 lg:group-[:nth-of-type(3)]:order-2"
				>
					{service.title}
				</h3>
				<p
					class="py-3 text-accent print:text-sm lg:group-[:nth-of-type(2)]:order-1 lg:group-[:nth-of-type(3)]:order-4"
				>
					{service.content}
				</p>
				<div
					class="flex items-start gap-3 py-6 print:py-2 lg:group-[:nth-of-type(2)]:order-2 lg:group-[:nth-of-type(3)]:order-1 lg:group-[:nth-of-type(3)]:items-end lg:group-[:nth-of-type(2)]:items-center"
				>
					<figure
						class="flex h-24 w-24 items-center justify-center rounded-xl border border-accent/50 shadow-sm print:h-auto print:w-auto print:border-0 print:shadow-none"
					>
						<IconRouter icon={service.icon} classNames="h-10 w-10 text-accent/50" />
					</figure>
					<small
						class="rounded-md bg-contrast px-6 py-1 text-sm text-light contrast-more:bg-accent print:hidden"
					>
						{service.button}
					</small>
				</div>
			</li>
		{/each}
	</ul>
</section>
