<script>
	let loading = false;
	let error = false;
	let sent = false;
	const onSubmit = (event) => {
		loading = true;
		const formData = new FormData(event.target);
		fetch("/email", {method: "POST", body: JSON.stringify(Object.fromEntries(formData)), 
		headers:{
			"Content-Type": "application/json"
		}}).then(()=>sent=true).catch(() => error = true).finally(() => loading = false);
	}
</script>

<section class="text-center flex flex-col items-center py-16 relative overflow-y-hidden" id="contact">
	<img src="/images/stars-decoration.svg" class="z-0 absolute top-0 opacity-80 w-full" alt="Stars" draggable={false} loading="lazy">
	<div class="md:max-w-3/5 px-8 md:px-12">
		<h2 class="text-4xl md:text-5xl my-2">Contact</h2>
		<p class="text-lg">
		Are you interested in our services?
		Send a non-binding request.
		</p>
	</div>
	<form action="/email" class="w-full spacing-def md:max-w-5/7 mt-4 z-1" method="post" on:submit|preventDefault={onSubmit}>
		<input type="text" placeholder="Name" class="main-input my-4" name="name" aria-label="Name" required/>
		<input type="email" placeholder="Email" class="main-input my-4" name="email" aria-label="Email" required/>
		<textarea placeholder="Message" class="main-input" name="message" aria-label="Message" required/>
		<button class="btn-primary text-primary-blue w-full mt-4 border-none flex justify-center {error ? 'bg-red-500' : ''} transition transition-colors" type="submit" disabled={loading || error || sent}>
			{#if loading}
				Sending..
			{:else if error} Error occured
			{:else if sent} Successfuly sent
			{:else} Send 
			{/if}
		</button>
	</form>
</section>