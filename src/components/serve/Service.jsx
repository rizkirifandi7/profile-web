import { useState } from "react";

import { IoCode } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Title from "../common/Title";
import ServiceContent from "./ServiceContent";

const Service = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="max-w-container mx-auto my-56 p-4 w-full" id="services">
			<Title maintitle={"Services"} subtitle={"What I Offer?"} />
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-4 md:mx-0">
				<ServiceContent
					maintitle={"Web"}
					subtitle={"Development"}
					iconmain={<IoCode className="text-3xl text-title dark:text-title-white mb-4" />}
					onClick={() => toggleTab(1)}
					toggleTab={() => toggleTab(0)}
					toggleState={toggleState}
				/>
				<ServiceContent
					maintitle={"Web"}
					subtitle={"Designer"}
					iconmain={<MdOutlineSpaceDashboard className="text-3xl text-title dark:text-title-white mb-4 " />}
					onClick={() => toggleTab(2)}
					toggleTab={() => toggleTab(0)}
					toggleState={toggleState}
				/>
			</div>
		</section>
	);
};

export default Service;
