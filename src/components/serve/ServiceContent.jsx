/* eslint-disable react/prop-types */

const ServiceContent = ({ maintitle, subtitle, iconmore, iconmain }) => {
	return (
		<div className="bg-white dark:bg-black pt-24 pb-8 pr-0 pl-10 rounded-2xl border dark:border-none w-full md:w-fit">
			<div className="w-[228px] mb-1 ">
				{iconmain}
				<h3 className="font-semibold text-title dark:text-title-white">
					{maintitle}
					<br /> {subtitle}
				</h3>
			</div>
			<a
				href="#"
				className="flex items-center gap-1 text-sm text-title dark:text-title-white hover:translate-x-1 transition-all .3s ease-in-out"
			>
				View More
				<span>{iconmore}</span>
			</a>
		</div>
	);
};

export default ServiceContent;
