<script>
	import GithubIcon from '$lib/icons/github.svelte';
	import BehanceIcon from '$lib/icons/behance.svelte';
	import EmailIcon from '$lib/icons/email.svelte';
</script>

<menu class="flex items-center justify-end gap-x-3 text-accent/50">
	<li class="flex">
		<a
			href="mailto:mitch@saylor.io"
			target="_blank"
			rel="noreferrer"
			tabIndex={0}
			class="rounded-md p-1 transition duration-150 hover:text-accent/70 focus:outline-none focus:ring-2 focus:ring-contrast"
		>
			<EmailIcon classNames="h-6 w-6" />
			<span class="sr-only">Email</span>
		</a>
	</li>
	<li class="ml-0.5 flex">
		<a
			href="https://www.behance.net/mitchsaylor"
			target="_blank"
			rel="noreferrer"
			tabIndex={0}
			class="rounded-md p-1 transition duration-150 hover:text-accent/70 focus:outline-none focus:ring-2 focus:ring-contrast"
		>
			<BehanceIcon classNames="h-6 w-6" />
			<span class="sr-only">Behance</span>
		</a>
	</li>
	<li class="flex">
		<a
			href="https://github.com/mitchsaylor"
			target="_blank"
			rel="noreferrer"
			tabIndex={0}
			class="rounded-md p-1 transition duration-150 hover:text-accent/70 focus:outline-none focus:ring-2 focus:ring-contrast"
		>
			<GithubIcon classNames="h-6 w-6" />
			<span class="sr-only">Github</span>
		</a>
	</li>
</menu>
