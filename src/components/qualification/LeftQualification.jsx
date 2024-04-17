/* eslint-disable react/prop-types */
const LeftQualification = ({ maintitle, subtitle, icon, year }) => {
	return (
		<div className="grid gap-2 sm:gap-6 md:gap-6 grid-cols-onefr">
			<div>
				<h3 className="text-base font-medium text-title dark:text-title-white">{maintitle}</h3>
				<span className="text-sm mb-4 inline-block text-text">{subtitle}</span>
				<div className="text-sm flex items-center gap-1 text-text">
					{icon} {year}
				</div>
			</div>

			<div>
				<span className="w-[13px] h-[13px] bg-text dark:bg-title-white inline-block rounded-full"></span>
				<span className="w-[1px] h-full bg-text dark:bg-title-white transform translate-x-[6px] translate-y-[-7px] block"></span>
			</div>
		</div>
	);
};

export default LeftQualification;
