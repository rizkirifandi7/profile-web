import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TfiEmail } from "react-icons/tfi";
import { IoArrowForward } from "react-icons/io5";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_bg6oi4n", "template_gnadhbm", form.current, "X-ZemrM9dNqWz9C-F");
		e.target.reset();
	};
	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="contact" data-aos="fade-right">
			<div className="flex justify-center items-center flex-col mb-16">
				<h1 className="text-title text-h1 font-semibold">Get in touch</h1>
				<p className="text-normal text-text">Contact Me</p>
			</div>

			<div className="flex flex-col md:grid container md:grid-cols-twomax justify-center gap-24 pb-12">
				<div className="flex flex-col items-center">
					<h3 className="text-center text-xl font-medium mb-6">Talk to me</h3>

					<div className="grid gap-4 w-full md:grid-cols-[300px]">
						<div className="flex flex-col justify-center items-center bg-white border p-4 rounded-xl text-center">
							<span></span>
							<TfiEmail className="text-2xl text-text mb-2" />
							<h3 className="text-sm font-medium">Email</h3>
							<span className="text-sm mb-3">rizkirifani123@gmail.com</span>

							<a
								href="mailto:rizkirifani123@gmail.com"
								className="text-text text-sm inline-flex items-center justify-center gap-1 hover:transform hover:translate-x-1 transition-all .3s ease-in-out"
							>
								Write me
								<IoArrowForward className="text-lg" />
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center">
					<h3 className="text-center text-xl font-medium mb-6">Write me your project</h3>

					<form ref={form} onSubmit={sendEmail} className="w-full md:w-[360px]">
						<div className="relative mb-8 h-16">
							<label htmlFor="" className="absolute top-[-0.75rem] left-5 text-sm p-1 bg-body z-10">Name</label>
							<input
								type="text"
								name="name"
								className="absolute top-0 left-0 w-full h-full border-2  text-text bg-body outline-none rounded-xl p-6 z-[1]"
								placeholder="Insert your name"
							/>
						</div>

						<div className="relative mb-8 h-16">
						<label htmlFor="" className="absolute top-[-0.75rem] left-5 text-sm p-1 bg-body z-10">Email</label>
							<input
								type="email"
								name="email"
								className="absolute top-0 left-0 w-full h-full border-2  text-text bg-body outline-none rounded-xl p-6 z-[1]"
								placeholder="Insert your email"
							/>
						</div>

						<div className="relative mb-8 h-44">
						<label htmlFor="" className="absolute top-[-0.75rem] left-5 text-sm p-1 bg-body z-10">Project</label>
							<textarea
								name="project"
								cols="30"
								rows="10"
								className="absolute top-0 left-0 w-full h-full border-2  text-text bg-body outline-none rounded-xl p-6 z-[1]"
								placeholder="Write your project"
							></textarea>
						</div>

						<button className="bg-title px-6 py-3 rounded-md text-white w-fit hover:bg-titletwo">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
