/* eslint-disable react/prop-types */
import { IoArrowForward } from "react-icons/io5";

const WorksItems = ({ item }) => {
	return (
		<div className="bg-white border p-5 rounded-2xl w-full md:w-fit" key={item.id}>
			<img src={item.image} alt="" className="w-full md:w-[295px] h-[200px] rounded-2xl mb-4" />
			<h3 className="text-base font-medium mb-2">{item.title}</h3>
			<a
				href={item.link}
				className="text-text text-sm flex items-center gap-1 hover:translate-x-1 transition-all .3s ease-in-out"
			>
				Demo <IoArrowForward className="text-base transition duration-300 ease-in-out" />
			</a>
		</div>
	);
};

export default WorksItems;
