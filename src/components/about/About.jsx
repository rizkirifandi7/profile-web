import { FiAward } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const About = () => {
	return (
		<section className="max-w-container mx-auto mt-56 w-full" id="about" data-aos="fade-left">
			<div className="flex justify-center items-center flex-col">
				<h1 className="text-title text-h1 font-semibold">About Me</h1>
				<p className="text-normal text-text">My Introduce</p>
			</div>
			<div className="flex flex-col md:gap-6 md:flex-row md:justify-around md:items-center pt-14 px-8 md:px-0">
				<div className="flex items-center justify-center basis-4/12">
					<img src="/fotoprofile.png" alt="" className="w-[250px] md:w-[350px] md:h-[320px] rounded-2xl" />
				</div>
				<div className="flex flex-col justify-center basis-6/12 md:gap-2 mt-8 md:mt-0">
					<div className="flex flex-row gap-2 md:gap-4 items-center">
						<div className="flex flex-col justify-center items-center border px-3 py-4 md:px-5 rounded-xl gap-2 bg-white w-full">
							<p className="text-2xl">
								<FiAward />
							</p>
							<h3 className="text-sm font-semibold">Experience</h3>
							<p className="text-xs text-text">2 Years</p>
						</div>
						<div className="flex flex-col justify-center items-center border px-3 py-4 md:px-5 rounded-xl gap-2 bg-white w-full">
							<p className="text-2xl">
								<MdOutlineWorkOutline />
							</p>
							<h3 className="text-sm font-semibold">Completed</h3>
							<p className="text-xs text-text">10+ Projects</p>
						</div>
						<div className="flex flex-col justify-center items-center border px-3 py-4 md:px-5 rounded-xl gap-2 bg-white w-full	">
							<p className="text-2xl">
								<BiSupport />
							</p>
							<h3 className="text-sm font-semibold">Support</h3>
							<p className="text-xs text-text">Online 12/7</p>
						</div>
					</div>
					<p className="py-6 text-text text-center md:text-left">
						Undergraduate informatics engineering student. Detailed-oriented, responsible, and passionate with expertise
						in Web Developer.
					</p>
					<div className="text-center mt-3 md:text-left">
						<a
							href="https://drive.google.com/file/d/1CeTu4XRDkNKPz69MCwMSUj6daqsrlz9x/view?usp=sharing"
							className=" bg-title px-6 py-3 rounded-md text-white w-fit hover:bg-titletwo"
						>
							Explore CV
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
