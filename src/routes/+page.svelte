<script lang="ts">
	// Components
	import Service from '$lib/service.svelte';

	const metaTitle: string =
		'Mitch Saylor - High-Performance Infrastructure For Modern Commerce & Services';
	const metaDescription: string =
		'Design & development for modern digital systems that are engineered for speed, security and scale, to help your business excel, no matter the market.';
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
</svelte:head>

<p
	class="text-dark-gray mx-auto mb-16 max-w-lg px-8 text-sm tracking-[.1em] uppercase lg:mx-0 lg:max-w-2xl lg:px-20"
>
	Services
</p>
<Service title="Digital Design">
	<p class="text-light-gray mb-3 leading-6">
		Digital content can be found everywhere, from websites, to products, to large-screen displays,
		and your brand has never been more important. Imagery, typography, color and style all play
		important parts in defining a brand's identity and appearance, including in logos, customer
		engagements, marketing materials, and online advertising.
	</p>
	<p class="text-light-gray leading-6">
		Make sure your clients see the right message when they come across your brand, and elevate your
		impact with a visual style that's unique and definitive.
	</p>
</Service>
<Service title="Web Applications">
	<p class="text-light-gray mb-3 leading-6">
		Modern web applications cover a lot of territory including marketing, commerce,
		service-as-a-service (SAAS), client dashboards, blogs, integrations (API), and more.
	</p>
	<p class="text-light-gray leading-6">
		Improve your operational tools with a custom built web-based business system that is tailored to
		your exact needs, or an expert implementation of an industry leading platform that will unlock
		your growth potential; always built around efficiency, security, and scale.
	</p>
</Service>
<Service title="Search Engine Optimization">
	<p class="text-light-gray mb-3 leading-6">
		The first rule of the internet has always been: Content is king. Quality and relevence of your
		text and media are the most important aspects of nailing SEO, however SEO goes far deeper than
		this as well. Some of the most important aspects after content include how that content is
		delivered: site speed, rendering strategy, media optimizations, language formatting, data
		markup, and more.
	</p>
	<p class="text-light-gray leading-6">
		Any platform can be improved in its optimizations, but to really get this right, a modern
		composable web architecture lays all the right foundations for outstanding SEO.
	</p>
</Service>
<Service title="Systems & Analytics">
	<p class="text-light-gray mb-3 leading-6">
		Any platform is only as good as the system that it's built on top of, whether that's a software
		package, a physical network, or a stack of multiple systems. Don't get left in the dark by a
		shaky infrastructure - make sure you're running on a system that will scale with you.
	</p>
	<p class="text-light-gray leading-6">
		In addition, what good would a system be if you couldn't tell how well it was operating? Stay in
		the loop not just with metrics on your clients and performance, but also monitor the systems
		that keep those numbers rolling in.
	</p>
</Service>
<div class="mx-auto mb-18 max-w-lg px-8 lg:mx-0 lg:max-w-2xl lg:px-20">
	<div class="mb-3 flex text-[#95BF47]">
		<a href="https://shopify.com" target="_blank" class="flex items-end gap-4">
			<svg
				stroke="currentColor"
				fill="currentColor"
				stroke-width="0"
				viewBox="0 0 448 512"
				height="200px"
				width="200px"
				xmlns="http://www.w3.org/2000/svg"
				class="size-8"
			>
				<path
					d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
				></path>
			</svg>
			<h3 class="text-xl/6 font-semibold tracking-tight">Shopify Technology Partner</h3>
		</a>
	</div>
	<p class="text-light-gray mb-3 leading-6">
		If your business is retail, there is no better solution than Shopify for fast, secure, and
		scalable commerce. Work with a Shopify partner to help build your custom storefront, unlock your
		unique consumer value, and accelerate your time to market.
	</p>
	<a
		href="https://www.shopify.com/blog/what-is-shopify"
		target="_blank"
		class="text-sm font-medium hover:underline"
	>
		Find out why Shopify is the premier solution for digital commerce
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="-mt-px inline size-4"
		>
			<path
				fill-rule="evenodd"
				d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
</div>
<div class="mx-auto mb-24 max-w-lg px-8 lg:mx-0 lg:max-w-2xl lg:px-20">
	<div class="mb-3 flex text-[#00b3b0]">
		<a href="https://storyblok.com" target="_blank" class="flex items-end gap-4">
			<svg
				stroke="currentColor"
				fill="currentColor"
				stroke-width="0"
				role="img"
				viewBox="0 0 24 24"
				height="200px"
				width="200px"
				xmlns="http://www.w3.org/2000/svg"
				class="size-7"
			>
				<path
					d="M13.953 11.462H9.088v2.34h4.748c.281 0 .538-.118.749-.305.187-.187.304-.468.304-.819a1.404 1.404 0 0 0-.257-.842c-.188-.234-.398-.374-.679-.374zm.164-2.83c.21-.14.304-.445.304-.843 0-.35-.094-.608-.257-.771a.935.935 0 0 0-.608-.234H9.088v2.105h4.374c.234 0 .468-.117.655-.257zM21.251 0H2.89c-.585 0-1.053.468-1.053 1.03v18.385c0 .562.468.912 1.03.912H5.58V24l3.368-3.65h12.304c.562 0 .913-.35.913-.935V1.053c0-.562-.351-1.03-.936-1.03zm-3.087 14.9a2.827 2.827 0 0 1-1.006 1.03c-.445.28-.936.538-1.497.655-.562.14-1.17.257-1.801.257H5.579v-13.1h9.403c.468 0 .866.094 1.24.305.351.187.679.444.936.748.524.64.806 1.443.795 2.27 0 .608-.164 1.192-.468 1.754a2.924 2.924 0 0 1-1.403 1.263c.748.21 1.333.585 1.778 1.123.42.561.631 1.286.631 2.199 0 .584-.117 1.076-.35 1.497z"
				></path>
			</svg>
			<h3 class="text-xl font-semibold tracking-tight">Storyblok Technology Partner</h3>
		</a>
	</div>
	<p class="text-light-gray mb-3 leading-6">
		Build anything, publish anywhere, and integrate with any technology stack with the Storyblok
		composable content management system. Craft your digital content without worrying about speed,
		security or scale, and take advantage of leading-edge content creation tools.
	</p>
	<a
		href="https://www.storyblok.com/platform"
		target="_blank"
		class="text-sm font-medium hover:underline"
	>
		Explore the possibilities that the Storyblok CMS makes possible
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="-mt-px inline size-4"
		>
			<path
				fill-rule="evenodd"
				d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
</div>
