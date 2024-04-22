/* eslint-disable react/prop-types */
import { IoArrowForward } from "react-icons/io5";

import { DataWebDevelopment, DataWebDesigner } from "./ServiceData";
import ServiceModal from "./ServiceModal";

const ServiceContent = ({ maintitle, subtitle, iconmain, onClick, toggleState, toggleTab }) => {
	return (
		<div className="relative bg-white dark:bg-black pt-24 pr-0 pb-8 pl-10 rounded-2xl border dark:border-none w-full md:w-fit">
			<div className="w-60">
				{iconmain}
				<div className="my-2">
					<h3 className="font-semibold text-title dark:text-title-white">
						{maintitle}
						<br />
						{subtitle}
					</h3>
				</div>
			</div>

			<span
				onClick={onClick}
				className="text-title dark:text-surface-600 text-sm inline-flex items-center gap-1 cursor-pointer transition duration-300 ease-in-out hover:translate-x-1"
			>
				View More
				<IoArrowForward />
			</span>

			<ServiceModal
				toggleState={toggleState === 1}
				toggleTab={toggleTab}
				title="Web Development"
				description="The process of creating, developing, and maintaining a website or web application."
				data={DataWebDevelopment}
			/>

			<ServiceModal
				toggleState={toggleState === 2}
				toggleTab={() => toggleTab(0)}
				title="Web Designer"
				description="Designing the visual aspects and appearance of an attractive website."
				data={DataWebDesigner}
			/>
		</div>
	);
};

export default ServiceContent;
