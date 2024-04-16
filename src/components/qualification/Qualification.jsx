import { useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="qualification" data-aos="fade-right">
			<div className="flex justify-center items-center flex-col mb-16">
				<h1 className="text-title text-h1 font-semibold">Qualification</h1>
				<p className="text-normal text-text">My personal journey</p>
			</div>

			<div className="max-w-[768px] md:mx-6">
				<div className="flex justify-center gap-8 mb-8">
					<div
						className={toggleState === 1 ? "font-semibold text-h3" : "font-medium text-h3"}
						onClick={() => toggleTab(1)}
					>
						<div className="flex items-center gap-2 text-title cursor-pointer">
							<IoSchoolOutline />
							Education
						</div>
					</div>

					<div
						className={toggleState === 2 ? "font-semibold text-h3" : "font-medium text-h3"}
						onClick={() => toggleTab(2)}
					>
						<div className="flex items-center gap-2 text-title cursor-pointer">
							<MdWorkOutline />
							Experience
						</div>
					</div>
				</div>

				<div className="grid grid-cols-initial md:grid-cols-custom justify-center mx-4">
					<div className={toggleState === 1 ? "block" : "hidden"}>
						{/* Kesatu */}
						<div className="grid gap-2 sm:gap-6 md:gap-6 grid-cols-onefr">
							<div>
								<h3 className="text-base font-medium text-title">Natural Sciences Major</h3>
								<span className="text-sm mb-4 inline-block text-text">Indonesia - High School 21 Bandung</span>
								<div className="text-sm flex items-center gap-1 text-text">
									<MdOutlineDateRange /> 2018 - 2021
								</div>
							</div>

							<div>
								<span className="w-[13px] h-[13px] bg-text inline-block rounded-full"></span>
								<span className="w-[1px] h-full bg-text transform translate-x-[6px] translate-y-[-7px] block"></span>
							</div>
						</div>

						{/* Kedua */}
						<div className="grid gap-2 sm:gap-6 md:gap-6 grid-cols-onefr">
							<div></div>

							<div>
								<span className="w-[13px] h-[13px] bg-text inline-block rounded-full"></span>
								<span className="w-[1px] h-full bg-text transform translate-x-[6px] translate-y-[-7px] block"></span>
							</div>

							<div>
								<h3 className="text-base font-medium text-title">Undergraduate Informatics Engineering Student</h3>
								<span className="text-sm mb-4 inline-block text-text">Indonesian - Indonesia Computer University</span>
								<div className="inline-flex text-sm text-text gap-1">
									<MdOutlineDateRange className="text-base" /> 2021 - 2025 (Expected)
								</div>
							</div>
						</div>
					</div>

					<div className={toggleState === 2 ? "block" : "hidden"}>
						{/* Kesatu */}
						<div className="grid gap-6 grid-cols-onefr">
							<div>
								<h3 className="text-base font-medium text-title">Web Development</h3>
								<span className="text-sm mb-4 inline-block text-text">Freelancer</span>
								<div className="text-sm flex items-center gap-1 text-text">
									<MdOutlineDateRange /> 2021 - Present
								</div>
							</div>

							<div>
								<span className="w-[13px] h-[13px] bg-text inline-block rounded-full"></span>
								<span className="w-[1px] h-full bg-text transform translate-x-[6px] translate-y-[-7px] block"></span>
							</div>
						</div>

						{/* Kedua */}
						<div className="grid gap-6 grid-cols-onefr">
							<div></div>

							<div>
								<span className="w-[13px] h-[13px] bg-text inline-block rounded-full"></span>
								<span className="w-[1px] h-full bg-text transform translate-x-[6px] translate-y-[-7px] block"></span>
							</div>

							<div>
								<h3 className="text-base font-medium text-title">Graphic Designer</h3>
								<span className="text-sm mb-4 inline-block text-text">Freelancer</span>
								<div className="text-sm flex items-center gap-1 text-text">
									<MdOutlineDateRange /> 2020 - 2021
								</div>
							</div>
						</div>

						{/* Ketiga */}
						<div className="grid gap-6 grid-cols-onefr">
							<div>
								<h3 className="text-base font-medium text-title">Web Designer</h3>
								<span className="text-sm mb-4 inline-block text-text">Freelancer</span>
								<div className="text-sm flex items-center gap-1 text-text">
									<MdOutlineDateRange /> 2021 - Present
								</div>
							</div>

							<div>
								<span className="w-[13px] h-[13px] bg-text inline-block rounded-full"></span>
								<span className="w-[1px] h-full bg-text transform translate-x-[6px] translate-y-[-7px] block"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
