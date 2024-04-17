import { TfiEmail } from "react-icons/tfi";
import { IoArrowForward } from "react-icons/io5";

const ContactInfo = () => {
	return (
		<div className="flex flex-col items-center">
			<h3 className="text-center text-xl font-medium mb-6 dark:text-title-white">Talk to me</h3>

			<div className="grid gap-4 w-full md:grid-cols-[300px]">
				<div className="flex flex-col justify-center items-center bg-white dark:bg-black border dark:border-none p-4 rounded-xl text-center">
					<span></span>
					<TfiEmail className="text-2xl text-text mb-2 dark:text-title-white" />
					<h3 className="text-sm font-medium dark:text-title-white">Email</h3>
					<span className="text-sm mb-3 dark:text-title-white">rizkirifani123@gmail.com</span>

					<a
						href="mailto:rizkirifani123@gmail.com"
						className="text-text dark:text-title-white text-sm inline-flex items-center justify-center gap-1 hover:transform hover:translate-x-1 transition-all .3s ease-in-out"
					>
						Write me
						<IoArrowForward className="text-lg dark:text-title-white" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
