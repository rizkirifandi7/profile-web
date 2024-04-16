import { FiAward } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const BoxContent = () => {
	return (
		<div className="grid  grid-cols-3 md:grid-cols-three justify-center md:justify-start gap-2 my-2 md:gap-4 items-center  ">
			<div className="flex flex-col justify-center items-center border py-4 md:p-box-large rounded-xl gap-2 bg-white">
				<p className="text-2xl">
					<FiAward />
				</p>
				<h3 className="text-sm font-semibold">Experience</h3>
				<p className="text-xs text-text">2 Years</p>
			</div>
			<div className="flex flex-col justify-center items-center border py-4 md:p-box-large rounded-xl gap-2 bg-white">
				<p className="text-2xl">
					<MdOutlineWorkOutline />
				</p>
				<h3 className="text-sm font-semibold">Completed</h3>
				<p className="text-xs text-text">10+ Projects</p>
			</div>
			<div className="flex flex-col justify-center items-center border py-4 md:p-box-large rounded-xl gap-2 bg-white	">
				<p className="text-2xl">
					<BiSupport />
				</p>
				<h3 className="text-sm font-semibold">Support</h3>
				<p className="text-xs text-text">Online 12/7</p>
			</div>
		</div>
	);
};

export default BoxContent;
