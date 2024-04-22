/* eslint-disable react/prop-types */
import { LuArrowRightCircle } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const ServiceModal = ({ toggleState, toggleTab, title, description, data }) => (
	<div
		className={
			toggleState
				? "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 opacity-1 visible transition-all duration-300"
				: "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 opacity-0 invisible transition-all duration-300"
		}
	>
		<div className="relative w-[500px] bg-body dark:bg-black dark:border-2 dark:border-white p-20 pt-10 pb-10 rounded-3xl">
			<IoClose
				onClick={toggleTab}
				className="absolute top-6 right-6 text-2xl text-title cursor-pointer dark:text-title-white"
			/>

			<h3 className="text-center mb-2 mt-6 font-semibold text-xl dark:text-title-white">{title}</h3>
			<p className="text-center mb-2 py-4 px-10 text-sm dark:text-title-white">{description}</p>

			<div className="flex flex-col gap-6">
				{data.map((data) => (
					<div key={data.id} className="flex items-center gap-2">
						<LuArrowRightCircle className="dark:text-title-white" />
						<p className="text-sm dark:text-title-white">{data.textContent}</p>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default ServiceModal;
