import { FaCode } from "react-icons/fa6";
import { BsWindowSplit } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import Title from "../reusable_ui/Title";
import ServiceContent from "./ServiceContent";

const Service = () => {
	return (
		<section className="max-w-container mx-auto my-56 p-4 w-full" id="services" >
			<Title maintitle={"Services"} subtitle={"What I Offer?"} />
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-4 md:mx-0">
				<ServiceContent
					maintitle={"Web"}
					subtitle={"Development"}
					iconmore={<IoArrowForward />}
					iconmain={<FaCode className="text-3xl text-title dark:text-title-white mb-4" />}
				/>
				<ServiceContent
					maintitle={"Web"}
					subtitle={"Designer"}
					iconmore={<IoArrowForward />}
					iconmain={<BsWindowSplit className="text-3xl text-title dark:text-title-white mb-4 " />}
				/>
			</div>
		</section>
	);
};

export default Service;
