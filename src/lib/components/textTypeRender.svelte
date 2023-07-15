<script lang="ts">
	export let text: RichText

	// Types
	import type { RichText } from '$lib/types';

	// Components
	import TextTypeRender from '$lib/components/textTypeRender.svelte';
	import Picture from '$lib/components/picture.svelte';
	import Container from '$lib/layout/container.svelte';
	import TextContentRender from '$lib/components/textContentRender.svelte';
	import BlokRouter from '$lib/components/blokRouter.svelte';
	import RichTextRender from '$lib/components/richTextRender.svelte';
</script>

{#if text.type === 'text'}
	{#if text.marks?.filter((mark) => mark.type === 'anchor').length > 0 || text.marks?.filter((mark) => mark.type === 'textStyle' && mark.attrs?.color).length > 0 || text.marks?.filter((mark) => mark.type === 'highlight').length > 0}
		<span
			id={text.marks?.filter((mark) => mark.type === 'anchor').length > 0
				? text.marks?.filter((mark) => mark.type === 'anchor')[0]?.attrs?.id
				: null}
			style={text.marks?.filter((mark) => mark.type === 'textStyle' && mark.attrs?.color).length >
				0 || text.marks?.filter((mark) => mark.type === 'highlight').length > 0
				? `${
						text.marks?.filter((mark) => mark.type === 'textStyle' && mark.attrs?.color).length > 0
							? `color:${
									text.marks.filter((mark) => mark.type === 'textStyle' && mark.attrs?.color)[0]
										.attrs.color
							  };`
							: ''
				  }${
						text.marks?.filter((mark) => mark.type === 'highlight').length > 0
							? `background-color:${
									text.marks?.filter((mark) => mark.type === 'highlight')[0]?.attrs?.color
							  };padding-left:4px;margin-right:4px;`
							: ''
				  }`
				: null}
		>
			<TextContentRender
				value={text.text}
				marks={text.marks?.filter(
					(mark) => mark.type !== 'textStyle' && mark.type !== 'highlight'
				) || []}
			/>
		</span>
	{:else}
		<TextContentRender value={text.text} marks={text.marks || []} />
	{/if}
{:else if text.type === 'emoji'}
	<span>{text.attrs?.emoji}</span>
{:else if text.type === 'list_item' && text.content?.length > 0}
	<li>
		{#each text.content as subContent}
			{#if subContent.type === 'paragraph'}
				{#each subContent.content as text}
					<TextTypeRender {text} />
				{/each}
			{:else if subContent.type === 'blok' && subContent.attrs?.body?.length > 0}
				{#each subContent.attrs?.body as subBlok}
					<BlokRouter blok={subBlok} />
				{/each}
			{:else if subContent.type === 'blockquote'}
				<div class="my-6 border-l-[3px] border-gray-400 bg-gray-50 py-px pl-6">
					{#each subContent.content as text}
						<RichTextRender section={text} />
					{/each}
				</div>
			{:else}
				<div
					class="my-6 rounded border border-red-800 bg-red-50 px-4 py-2 font-semibold text-red-800"
				>
					Component not found: <span class="pl-1 font-mono text-sm font-normal">
						{subContent.type}
					</span>
				</div>
			{/if}
		{/each}
	</li>
{:else if text.type === 'image'}
	{#if text.attrs?.src}
		<div class="mx-auto w-full max-w-xl">
			<Picture
				src={text.attrs.src}
				alt={text.attrs.alt}
				sizes={[
					{ minScreenWidth: 1, imageWidth: 700 },
					{ minScreenWidth: 500, imageWidth: 1100 }
				]}
				caption={text.attrs?.title}
				padding
			/>
		</div>
	{/if}
{:else}
	<Container class="my-8">
		<div class="rounded border border-red-800 bg-red-50 px-4 py-2 font-semibold text-red-800">
			Component not found: <span class="pl-1 font-mono text-sm font-normal">{text.type}</span>
		</div>
	</Container>
{/if}
