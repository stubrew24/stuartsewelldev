import sgMail from "@sendgrid/mail";

exports.handler = function (event, context, callback) {
	const { name, email, message } = JSON.parse(event.body);

	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: "hello@stuartsewell.dev",
		from: email,
		subject: "New message from stuartsewell.dev",
		text: `${name} says: ${message}`,
	};

	sgMail.send(msg);

	callback(null, {
		statusCode: 200,
		body: "Hello World",
	});
};
