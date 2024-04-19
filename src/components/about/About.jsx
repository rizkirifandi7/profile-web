import Button from "../reusable_ui/Button";
import Title from "../reusable_ui/Title";
import BoxContent from "./BoxContent";

const About = () => {
	return (
		<section className="max-w-container mx-auto mt-56 w-full" id="about">
			<Title maintitle={"About Me"} subtitle={"My Introduce"} />
			<div className="flex flex-col md:gap-6 md:flex-row md:justify-around md:items-center px-8 md:px-0">
				<div className="flex items-center justify-center basis-4/12 w-[250px] md:w-[350px] md:h-[320px] ">
					<img src="/fotoprofile.png" alt="" className="w-full h-full rounded-2xl" />
				</div>
				<div className="flex flex-col justify-center basis-6/12 md:gap-2 mt-8 md:mt-0 ">
					<BoxContent />

					<p className="py-5 text-text text-center md:text-left dark:text-gray-300">
						Undergraduate informatics engineering student. Detailed-oriented, responsible, and passionate with expertise
						in Web Developer.
					</p>

					<div className="text-center mt-3 md:text-left">
						<Button text={"Explore CV"} href={"https://rb.gy/9aot91"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
