import { FiAward } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const About = () => {
	return (
		<section className="max-w-container mx-auto pt-24 mt-56 w-full">
			<div className="flex justify-center items-center flex-col" id="about">
				<h1 className="text-title text-h1 font-semibold">About Me</h1>
				<p className="text-normal text-text">My Introduce</p>
			</div>
			<div className="flex justify-around items-center pt-14">
				<div className="basis-4/12">
					<img src="/fotoprofile.png" alt="" className="w-full h-[350px] rounded-2xl" />
				</div>
				<div className="flex flex-col basis-6/12 gap-2">
					<div className="flex flex-row gap-4 items-center">
						<div className="flex flex-col justify-center items-center border py-4 px-5 rounded-xl gap-2 bg-white w-full">
							<p className="text-2xl">
								<FiAward />
							</p>
							<h3 className="text-sm font-semibold">Experience</h3>
							<p className="text-xs text-text">2 Years</p>
						</div>
						<div className="flex flex-col justify-center items-center border py-4 px-5 rounded-xl gap-2 bg-white w-full">
							<p className="text-2xl">
								<MdOutlineWorkOutline />
							</p>
							<h3 className="text-sm font-semibold">Completed</h3>
							<p className="text-xs text-text">10+ Projects</p>
						</div>
						<div className="flex flex-col justify-center items-center border py-4 px-5 rounded-xl gap-2 bg-white w-full	">
							<p className="text-2xl">
								<BiSupport />
							</p>
							<h3 className="text-sm font-semibold">Support</h3>
							<p className="text-xs text-text">Online 12/7</p>
						</div>
					</div>
					<p className="py-6 text-text">
						Undergraduate informatics engineering student. Detailed-oriented, responsible, and passionate with expertise
						in Web Developer.
					</p>
					<a
						href="https://drive.google.com/file/d/1CeTu4XRDkNKPz69MCwMSUj6daqsrlz9x/view?usp=sharing"
						className="bg-title px-6 py-3 rounded-md text-white w-fit hover:bg-titletwo"
					>
						Explore CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
