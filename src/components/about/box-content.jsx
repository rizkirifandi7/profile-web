import { FiAward } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const data = [
	{
		icon: <FiAward />,
		title: "Experience",
		value: "2 Years",
	},
	{
		icon: <MdOutlineWorkOutline />,
		title: "Completed",
		value: "10+ Projects",
	},
	{
		icon: <BiSupport />,
		title: "Support",
		value: "Online 24/7",
	},
];

const BoxContent = () => {
	return (
		<div className="grid  grid-cols-3 md:grid-cols-three justify-center md:justify-start gap-2 md:gap-4 items-center  ">
			{data.map((item, index) => {
				return (
					<div
						key={index}
						className="flex flex-col justify-center items-center border dark:border-none py-4 md:p-box-large rounded-xl gap-2 bg-white dark:bg-black"
					>
						<p className="text-2xl dark:text-gray-200">{item.icon}</p>
						<h3 className="text-sm font-semibold dark:text-gray-200">{item.title}</h3>
						<p className="text-xs text-text dark:text-gray-200">{item.value}</p>
					</div>
				);
			})}
		</div>
	);
};

export default BoxContent;
