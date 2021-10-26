<script>
	let name = "";
	let email = "";
	let message = "";

	let errors = {};

	function sendMessage() {
		if (name == "") {
			errors.name = "Name is required";
		}
		if (email == "") {
			errors.email = "Email is required";
		}
		if (message == "") {
			errors.message = "Message is required";
		}
		if (Object.keys(errors).length === 0) {
			alert("Message sent!");
		} else {
			alert("erros");
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
		</div>
		<div class="form-input">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} />
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
		</div>

		<button class="text-button" on:click={sendMessage}>Send</button>
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
</style>
