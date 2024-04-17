import Title from "../reusable_ui/Title";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="contact" >
			<Title maintitle={"Contact"} subtitle={"Get in touch"} />

			<div className="flex flex-col md:grid container md:grid-cols-twomax justify-center gap-24 pb-12">
				<ContactInfo />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
