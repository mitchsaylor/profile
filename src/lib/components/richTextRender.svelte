<script lang="ts">
	export let section: RichText,
		darkBackground: boolean = false;

	// Types
	import type { RichText } from '$lib/types';

	// Components
	import RichTextRender from '$lib/components/richTextRender.svelte';
	import TextTypeRender from '$lib/components/textTypeRender.svelte';
	import Container from '$lib/layout/container.svelte';
	import BlokRouter from '$lib/components/blokRouter.svelte';
</script>

{#if section.type === 'heading' && section.attrs?.level === 1}
	<h1>
		{#each section.content as text}
			<TextTypeRender {text} />
		{/each}
	</h1>
{:else if section.type === 'heading' && section.attrs?.level === 2}
	<h2>
		{#each section.content as text}
			<TextTypeRender {text} />
		{/each}
	</h2>
{:else if section.type === 'heading' && section.attrs?.level === 3}
	<h3>
		{#each section.content as text}
			<TextTypeRender {text} />
		{/each}
	</h3>
{:else if section.type === 'heading' && section.attrs?.level === 4}
	<h4>
		{#each section.content as text}
			<TextTypeRender {text} />
		{/each}
	</h4>
{:else if section.type === 'blockquote'}
	<div class="my-8">
		<div class="border-gray-400 border-l-2 px-[2%] bg-gray-50 py-px sm:px-5">
			{#if section.content?.length > 0}
				{#each section.content as subSection}
					<RichTextRender section={subSection} />
				{/each}
			{/if}
		</div>
	</div>
{:else if section.type === 'paragraph'}
	<p>
		{#if section.content?.length > 0}
			{#each section.content as text}
				<TextTypeRender {text} {darkBackground} />
			{/each}
		{/if}
	</p>
{:else if section.type === 'bullet_list'}
	<ul>
		{#each section.content as text}
			<TextTypeRender {text} />
		{/each}
	</ul>
{:else if section.type === 'ordered_list'}
	<ol>
		{#each section.content as text}
			<TextTypeRender {text} />
		{/each}
	</ol>
{:else if section.type === 'blok'}
	{#if section.attrs?.body?.length > 0}
		{#each section.attrs.body as blok}
			<BlokRouter {blok} />
		{/each}
	{/if}
{:else}
	<Container class="my-8">
		<div class="rounded border border-red-800 bg-red-50 px-4 py-2 font-semibold text-red-800">
			Component not found: <span class="pl-1 font-mono text-sm font-normal">{section.type}</span>
		</div>
	</Container>
{/if}