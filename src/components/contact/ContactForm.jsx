/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Label from "../common/Label";

const SuccessMessage = ({ show }) => {
	if (!show) return null;
	return (
		<div className="bg-green-100 p-4 rounded text-center w-full h-full mb-5 border">
			<p>Message sent successfully!</p>
		</div>
	);
};

const ContactForm = () => {
	const form = useRef();
	const [showSuccess, setShowSuccess] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		try {
			await emailjs.sendForm(
				"service_bg6oi4n",
				"template_gnadhbm",
				form.current,
				"X-ZemrM9dNqWz9C-F"
			);
			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 2000); // hide the message after 3 seconds
		} catch (error) {
			console.error("An error occurred while sending the message.", error);
		}

		e.target.reset();
	};

	return (
		<div className="flex flex-col items-center">
			<h3 className="text-center text-xl font-medium mb-6 dark:text-title-white">
				Write me your project
			</h3>

			<SuccessMessage show={showSuccess} />

			<form ref={form} onSubmit={sendEmail} className="w-full md:w-[360px]">
				<div className="relative mb-8 h-16">
					<Label text={"Name"} />
					<input
						type="text"
						name="name"
						className="absolute top-0 left-0 w-full h-full border-2  text-text bg-body dark:bg-surface-100 dark:text-title-white outline-none rounded-xl p-6 z-[1]"
						placeholder="Insert your name"
					/>
				</div>

				<div className="relative mb-8 h-16">
					<Label text={"Email"} />
					<input
						type="email"
						name="email"
						className="absolute top-0 left-0 w-full h-full border-2  text-text bg-body dark:bg-surface-100 outline-none rounded-xl p-6 z-[1]"
						placeholder="Insert your email"
					/>
				</div>

				<div className="relative mb-10 h-44">
					<Label text={"Project"} />
					<textarea
						name="project"
						cols="30"
						rows="10"
						className="absolute top-0 left-0 w-full h-full border-2  text-text bg-body dark:bg-surface-100 outline-none rounded-xl p-6 z-[1]"
						placeholder="Write your project"
					></textarea>
				</div>
				<button className="bg-title dark:bg-white dark:text-black dark:font-semibold  px-6 py-3 cursor-pointer rounded-md text-white dark:hover:bg-slate-200 hover:bg-titletwo w-full md:w-fit">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
	