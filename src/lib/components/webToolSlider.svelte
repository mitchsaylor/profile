<script lang="ts">
	export let direction: 'ltr' | 'rtl';

	import { Splide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
</script>

<Splide
	extensions={{ AutoScroll }}
	options={{
		type: 'loop',
		perPage: 5,
		breakpoints: {
			540: {
				perPage: 2
			},
			768: {
				perPage: 3
			},
			940: {
				perPage: 4
			}
		},
		drag: 'free',
		focus: 'center',
		direction: direction,
		arrows: false,
		pagination: false,
		autoScroll: {
			speed: 0.5
		},
		gap: '20px'
	}}
>
	<slot />
</Splide>
