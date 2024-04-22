import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../common/Button";
import Label from "../common/Label";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_bg6oi4n", "template_gnadhbm", form.current, "X-ZemrM9dNqWz9C-F");
		e.target.reset();
	};

	return (
		<div className="flex flex-col items-center">
			<h3 className="text-center text-xl font-medium mb-6 dark:text-title-white">Write me your project</h3>

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

				<Button text={"Send Message"} />
			</form>
		</div>
	);
};

export default ContactForm;
