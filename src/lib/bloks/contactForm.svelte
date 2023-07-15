<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';
	import type { FormFields } from '$lib/types';

	// Helpers
	import { mixpanelEvent } from '$lib/mixpanelEvent';

	// Libraries
	import mixpanel from 'mixpanel-browser';

	// Svelte
	import { dev } from '$app/environment';

	// Components
	import RichTextRender from '$lib/components/richTextRender.svelte';
	import LoadingRing from '$lib/icons/loadingRing.svelte';

	let loading: boolean = false;
	let fullName: string,
		emailAddress: string,
		organization: string,
		websiteUrl: string,
		message: string;
	let formResponse: string = '';
	let formSuccess: boolean | undefined;
	const inputClass: string =
		'rounded-md border border-gray-250 px-4 py-3 focus:border-gray-250 transition duration-100 ring-0 focus:ring-4 focus:ring-gray-200';

	const handleSubmit = async () => {
		loading = true;
		formSuccess = undefined;
		formResponse = '';
		mixpanelEvent('Submit form', { 'Form name': 'Rental Info Request' });
		if (!dev) {
			mixpanel.register({
				Email: emailAddress,
				Name: fullName
			});
			mixpanel.identify(emailAddress);
			mixpanel.people.set({ Name: `${fullName}`, Email: `${emailAddress}` });
		}
		const res: any = await fetch(`/api/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				fullName,
				emailAddress,
				organization,
				websiteUrl,
				message
			} as FormFields)
		})
			.then((res) => res.json())
			.catch(() => {
				formResponse = 'Something went wrong, please try again later.';
				formSuccess = false;
				document.getElementById('formMsg')?.scrollIntoView();
				return;
			});
		formResponse =
			JSON.stringify(res) === '{}'
				? "Thanks for reaching out! I'll be in contact shortly."
				: 'Something went wrong, please try again later.';
		formSuccess = JSON.stringify(res) === '{}' ? true : false;
		document.getElementById('formMsg')?.scrollIntoView();
		if (formSuccess) {
			fullName = '';
			emailAddress = '';
			organization = '';
			websiteUrl = '';
			message = '';
		}
		loading = false;
	};
</script>

{#if blok.component === 'contactForm'}
	<div id="contact">
		<div class="mx-auto max-w-3xl py-8 sm:px-6 lg:px-8">
			<div class="mb-3 text-center font-forma text-3xl font-bold sm:text-4xl">
				{blok.heading}
			</div>
			{#if blok.description?.content?.length > 0}
				<div class="mx-auto max-w-xl pb-3 text-center text-gray-600">
					{#each blok.description.content as section}
						<RichTextRender {section} />
					{/each}
				</div>
			{/if}
			<form on:submit|preventDefault={handleSubmit} class="noscript">
				<div class="mb-14 mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
					<div class="flex flex-col gap-1">
						<label for="fullName" class="text-[.9rem] font-medium">Name</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							required
							minlength="2"
							maxlength="64"
							bind:value={fullName}
							class={inputClass}
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="emailAddress" class="text-[.9rem] font-medium">Email address</label>
						<input
							type="email"
							id="emailAddress"
							name="emailAddress"
							required
							bind:value={emailAddress}
							class={inputClass}
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="organization" class="text-[.9rem] font-medium">Organization</label>
						<input
							type="text"
							id="organization"
							name="organization"
							bind:value={organization}
							class={inputClass}
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="websiteUrl" class="text-[.9rem] font-medium">Website URL</label>
						<input
							type="text"
							id="websiteUrl"
							name="websiteUrl"
							bind:value={websiteUrl}
							class={inputClass}
						/>
					</div>
					<div class="col-span-2 flex flex-col gap-1">
						<label for="message" class="text-[.9rem] font-medium">Message</label>
						<textarea
							name="message"
							autocomplete="off"
							id="message"
							required
							minlength="2"
							maxlength="512"
							bind:value={message}
							class={inputClass}
						/>
					</div>
				</div>
				<div class="flex justify-center">
					<button
						type="submit"
						class="flex w-full max-w-[16rem] items-center justify-center rounded-full bg-gray-900 py-3.5 text-center font-medium leading-5 text-white ring-0 transition hover:ring-4 hover:ring-gray-350 focus:outline-none focus:ring-4 focus:ring-gray-350"
					>
						{#if loading}
							<LoadingRing class="-my-[2px]" />
						{:else}
							{blok.submitText}
						{/if}
					</button>
				</div>
			</form>
			<div id="formMsg">
				{#if formSuccess !== undefined}
					<div
						class="mt-8 rounded-lg px-6 py-4 {formSuccess
							? 'bg-green-100 text-green-900'
							: 'bg-red-100 text-red-900'}"
					>
						<p>{formResponse}</p>
					</div>
				{/if}
			</div>
			<!-- If JavaScript is disabled -->
			<div
				class="noscripttext mt-8 hidden w-full overflow-hidden rounded-md bg-amber-100 px-5 pb-10 pt-8 text-amber-900 transition duration-150 sm:px-8"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
					/>
				</svg>
				<p class="mt-2">
					This form requires JavaScript to be enabled in order to function correctly. Please
					re-enable JavaScript in your browser's settings and refresh the page.
				</p>
			</div>
		</div>
	</div>
{/if}
