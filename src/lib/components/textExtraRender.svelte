<script lang="ts">
	export let marks: RichTextMark[];

	// Types
	import type { RichTextMark } from '$lib/types';

	const sendAnchorToClipboard = async (anchor: string) => {
		let link: string = document.getElementById(`btn-${anchor}`)?.getAttribute('href') || '';
		navigator.clipboard.writeText(link);
	};
</script>

{#if marks?.length > 0 && marks?.filter((mark) => mark.type === 'anchor').length > 0}
	<a
		href="#{marks?.filter((mark) => mark.type === 'anchor')[0]?.attrs?.id}"
		on:click={() =>
			sendAnchorToClipboard(marks?.filter((mark) => mark.type === 'anchor')[0]?.attrs?.id)}
		id={`btn-${marks?.filter((mark) => mark.type === 'anchor')[0]?.attrs?.id}`}
		class="inline-flex translate-y-1 rounded p-0.5"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="h-5 w-5 opacity-50"
		>
			<path
				d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
			/>
			<path
				d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
			/>
		</svg>
	</a>
{/if}
