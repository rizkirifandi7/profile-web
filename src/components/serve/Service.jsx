import { FaCode } from "react-icons/fa6";
import { BsWindowSplit } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";

const Service = () => {
	return (
		<section className="max-w-container mx-auto my-56 p-4 w-full" id="services" data-aos="fade-left">
			<div className="flex justify-center items-center flex-col mb-16">
				<h1 className="text-title text-h1 font-semibold">Services</h1>
				<p className="text-normal text-text">What I Offer?</p>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-4 md:mx-0">
				<div className="bg-white pt-24 pb-8 pr-0 pl-10 rounded-2xl border w-full md:w-fit">
					<div className="w-[228px] mb-1">
						<FaCode className="text-3xl text-title mb-4" />
						<h3 className="font-semibold text-title">
							Web
							<br /> Development
						</h3>
					</div>
					<a
						href="#"
						className="flex items-center gap-1 text-sm text-title hover:translate-x-1 transition-all .3s ease-in-out"
					>
						View More
						<span>
							<IoArrowForward />
						</span>
					</a>
				</div>
				<div className="bg-white pt-24 pb-8 pr-0 pl-10 rounded-2xl border w-full md:w-fit">
					<div className="w-[228px] mb-1">
						<BsWindowSplit className="text-3xl text-title mb-4 " />
						<h3 className="font-semibold text-title">
							Web
							<br /> Designer
						</h3>
					</div>
					<a
						href="#"
						className="flex items-center gap-1 text-sm text-title hover:translate-x-1 transition-all .3s ease-in-out"
					>
						View More
						<span>
							<IoArrowForward />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Service;
