import { useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import LeftQualification from "./QualificationLeft";
import RightQualification from "./QualificationRight";
import Title from "../common/Title";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="qualification">
			<Title maintitle={"Qualification"} subtitle={"My personal journey"} />

			<div className="max-w-[768px] mx-auto">
				<div className="flex justify-center gap-8 mb-8">
					<div
						className={toggleState === 1 ? "font-semibold text-h3" : "font-medium text-h3"}
						onClick={() => toggleTab(1)}
					>
						<div className="flex items-center gap-2 text-title dark:text-title-white cursor-pointer">
							<IoSchoolOutline />
							Education
						</div>
					</div>

					<div
						className={toggleState === 2 ? "font-semibold text-h3" : "font-medium text-h3"}
						onClick={() => toggleTab(2)}
					>
						<div className="flex items-center gap-2 text-title dark:text-title-white cursor-pointer">
							<MdWorkOutline />
							Experience
						</div>
					</div>
				</div>

				<div className="grid grid-cols-initial md:grid-cols-custom justify-center mx-4">
					<div className={toggleState === 1 ? "block" : "hidden"}>
						{/* Kesatu */}
						<LeftQualification
							maintitle={"Natural Sciences Major"}
							subtitle={"Indonesia - High School 21 Bandung"}
							icon={<MdOutlineDateRange />}
							year={"2018 - 2021"}
						/>

						{/* Kedua */}
						<RightQualification
							maintitle={"Undergraduate Informatics Engineering Student"}
							subtitle={"Indonesian - Indonesia Computer University"}
							icon={<MdOutlineDateRange className="text-base" />}
							year={"2021 - 2025 (Expected)"}
						/>
					</div>

					<div className={toggleState === 2 ? "block" : "hidden"}>
						{/* Kesatu */}
						<LeftQualification
							maintitle={"Web Development"}
							subtitle={"Freelancer"}
							icon={<MdOutlineDateRange />}
							year={"2021 - Present"}
						/>

						{/* Kedua */}
						<RightQualification
							maintitle={"Graphic Designer"}
							subtitle={"Freelancer"}
							icon={<MdOutlineDateRange className="text-base" />}
							year={"2020 - 2021"}
						/>

						{/* Ketiga */}
						<LeftQualification
							maintitle={"Web Designer"}
							subtitle={"Freelancer"}
							icon={<MdOutlineDateRange />}
							year={"2021 - Present"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
