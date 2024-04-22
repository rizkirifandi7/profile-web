import { dataleftBE, datarightBE } from "./SkillsData";

const Backend = () => {
	return (
		<div className="bg-white dark:bg-black py-8 px-16 rounded-2xl border dark:border-none w-full md:w-fit">
			<p className="text-center mb-6 font-medium text-base dark:text-title-white">Backend Developer</p>
			<div className="flex justify-center gap-10">
				<div className="flex flex-col gap-5">
					{dataleftBE.map((item, index) => {
						return (
							<div className="flex gap-3 dark:text-title-white" key={index}>
								<i className="mt-1">{item.icon}</i>
								<div>
									<h3 className="font-medium text-base ">{item.title}</h3>
									<span className="text-xs text-text dark:text-surface-600">{item.value}</span>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col gap-5">
					{datarightBE.map((item, index) => {
						return (
							<div className="flex gap-3 dark:text-title-white" key={index}>
								<i className="mt-1">{item.icon}</i>
								<div>
									<h3 className="font-medium text-base">{item.title}</h3>
									<span className="text-xs text-text dark:text-surface-600">{item.value}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Backend;
