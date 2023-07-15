<script lang="ts">
	export let value: string,
		marks: RichTextMark[]

	// Types
	import type { RichTextMark } from '$lib/types';

	// Helpers
	import { clickLink } from '$lib/mixpanelEvent.js';

	// Components
	import TextExtraRender from '$lib/components/textExtraRender.svelte';
	import TextContentRender from '$lib/components/textContentRender.svelte';
</script>

{#if marks?.length > 0}
	{#if marks?.filter((mark) => mark.type === 'link')?.length > 0}
		{#if marks.filter((mark) => mark.type !== 'link').length > 0}
			<a
				href={marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href !== '/home'
					? marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href
					: '/'}
				tabIndex={0}
				on:click={() =>
					clickLink(
						`${value}`,
						`${
							marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href !== '/home'
								? marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href
								: '/'
						}`
					)}
				class="whitespace-nowrap rounded px-1.5 py-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'link')} />
			</a>
		{:else}
			<a
				bind:innerHTML={value}
				contenteditable="false"
				tabIndex={0}
				on:click={() =>
					clickLink(
						`${value}`,
						`${
							marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href !== '/home'
								? marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href
								: '/'
						}`
					)}
				target={marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.target || undefined}
				rel={marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.target === '_blank' ||
				marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href?.startsWith('http')
					? 'external'
					: ''}
				href={marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href !== '/home'
					? marks?.filter((mark) => mark.type === 'link')[0]?.attrs?.href
					: '/'}
				class="whitespace-nowrap border-b border-white focus:border-b-4 focus:border-accent focus:outline-none"
			>
				<TextExtraRender marks={[]} />
			</a>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'italic').length > 0}
		{#if marks.filter((mark) => mark.type !== 'italic').length > 0}
			<i>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'italic')} />
			</i>
		{:else}
			<i bind:innerHTML={value} contenteditable="false">
				<TextExtraRender marks={[]} />
			</i>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'bold').length > 0}
		{#if marks.filter((mark) => mark.type !== 'bold').length > 0}
			<strong>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'bold')} />
			</strong>
		{:else}
			<strong bind:innerHTML={value} contenteditable="false">
				<TextExtraRender marks={[]} />
			</strong>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'superscript').length > 0}
		{#if marks.filter((mark) => mark.type !== 'superscript').length > 0}
			<sup>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'superscript')} />
			</sup>
		{:else}
			<sup bind:innerHTML={value} contenteditable="false">
				<TextExtraRender marks={[]} />
			</sup>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'subscript').length > 0}
		{#if marks.filter((mark) => mark.type !== 'subscript').length > 0}
			<sub>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'subscript')} />
			</sub>
		{:else}
			<sub bind:innerHTML={value} contenteditable="false">
				<TextExtraRender marks={[]} />
			</sub>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'strike').length > 0}
		{#if marks.filter((mark) => mark.type !== 'strike').length > 0}
			<s>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'strike')} />
			</s>
		{:else}
			<s bind:innerHTML={value} contenteditable="false">
				<TextExtraRender marks={[]} />
			</s>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'underline').length > 0}
		{#if marks.filter((mark) => mark.type !== 'underline').length > 0}
			<u>
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'underline')} />
			</u>
		{:else}
			<u bind:innerHTML={value} contenteditable="false">
				<TextExtraRender marks={[]} />
			</u>
		{/if}
	{:else if marks?.filter((mark) => mark.type === 'code').length > 0}
		{#if marks.filter((mark) => mark.type !== 'code').length > 0}
			<code class="rounded border border-gray-300 bg-gray-200 px-1.5 py-0.5 font-mono font-normal">
				<TextContentRender {value} marks={marks.filter((mark) => mark.type !== 'code')} />
			</code>
		{:else}
			<code
				bind:innerHTML={value}
				contenteditable="false"
				class="rounded border border-gray-300 bg-gray-200 px-1.5 py-0.5 font-mono font-normal"
			>
				<TextExtraRender marks={[]} />
			</code>
		{/if}
	{:else}
		<span bind:innerHTML={value} contenteditable="false" />
		<TextExtraRender {marks} />
	{/if}
{:else}
	<span bind:innerHTML={value} contenteditable="false" />
	<TextExtraRender {marks} />
{/if}
