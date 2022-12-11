<script lang="ts">
	export let icon: Icon, classNames: string;

	import type { Icon } from '$lib/types';

	import CogIcon from '$lib/icons/cog.svelte';
	import MobileIcon from '$lib/icons/mobile.svelte';
	import CloudIcon from '$lib/icons/cloud.svelte';

	const options = [
		{ icon: 'Cog', component: CogIcon },
		{ icon: 'Mobile', component: MobileIcon },
		{ icon: 'Cloud', component: CloudIcon }
	];
</script>

<svelte:component
	this={options.filter((option) => option.icon === icon)[0].component}
	{classNames}
/>
