<script>
	let name = "";
	let email = "";
	let message = "";

	let errors = {};

	let sending = false;
	let sendFeedback = "";

	function sendMessage() {
		errors = {};
		sending = true;
		if (name == "") {
			errors.name = "Name is required";
		}
		if (name.length < 3) {
			errors.name = "Name must be at least 3 characters";
		}
		if (
			email == "" ||
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false
		) {
			errors.email = "Valid email is required";
		}
		if (message == "") {
			errors.message = "Message is required";
		}
		if (Object.keys(errors).length === 0) {
			fetch("https://stuartsewell.dev/.netlify/functions/mailer", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message }),
			})
				.then(() => {
					sending = false;
					sendFeedback = "Message has been sent. I'll be in touch soon!";
					name = "";
					email = "";
					message = "";
				})
				.catch((err) => {
					console.error(err);
					sending = false;
					errors.send =
						"There was an error sending your message. Please try again later.";
				});
		}
	}
</script>

<section id="contact">
	<div>
		<h2 class="text-heading-2">Get in touch</h2>
		<p class="text-body-1">
			Please feel free to contact my through this form or email me at <a
				href="mailto:hello@stuartsewell.dev">hello@stuartsewell.dev</a
			>
		</p>
	</div>

	<div class="contact-form">
		<div class="form-input">
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={name} />
			{#if errors.name}<span class="error">{errors.name}</span>{/if}
		</div>
		<div class="form-input">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} />
			{#if errors.email}<span class="error">{errors.email}</span>{/if}
		</div>

		<div class="form-input">
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				cols="30"
				rows="5"
				bind:value={message}
			/>
			{#if errors.message}<span class="error">{errors.message}</span>{/if}
		</div>

		<button class="text-button" on:click={sendMessage} disabled={sending}>
			{sending ? "Sending" : "Send"}
		</button>
		{#if errors.send}<span class="error">{errors.send}</span>{/if}
		{#if sendFeedback}<span class="success">{sendFeedback}</span>{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		padding: 120px 182px;
		gap: 40px;
	}

	div {
		flex: 1;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		justify-content: start;
		gap: 40px;
	}

	.form-input {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	input,
	textarea {
		border: none;
		background-color: var(--level-1);
		padding: 10px;
		color: var(--text);
	}

	button {
		background-color: var(--primary);
		color: var(--text);
		padding: 10px;
		border: none;
		cursor: pointer;
	}

	.text-body-1 {
		color: var(--light-grey);
	}

	a {
		text-decoration: none;
		color: var(--blue-accent);
	}

	.error {
		color: red;
	}

	.success {
		color: var(--green-accent);
	}

	label {
		display: inline;
	}

	@media (max-width: 768px) {
		section {
			padding: 64px 20px;
			flex-direction: column;
		}
	}
</style>
