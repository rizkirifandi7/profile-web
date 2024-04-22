import Button from "../common-component/button";
import Title from "../common-component/heading";
import BoxContent from "./box-content";

const About = () => {
	return (
		<section className="max-w-container mx-auto mt-56 w-full" id="about">
			<Title maintitle={"About Me"} subtitle={"My Introduce"} />
			<div className="flex flex-col md:gap-6 md:flex-row md:justify-around md:items-center px-8 md:px-0">
				<div className="flex items-center justify-center basis-4/12">
					<img src="/fotoprofile.png" alt="" className="w-[250px] md:w-[350px] md:h-[320px] rounded-2xl" />
				</div>
				<div className="flex flex-col justify-center basis-6/12 md:gap-3 mt-8 md:mt-0 ">
					<BoxContent />

					<p className=" text-text text-center pt-6 md:py-4 md:text-left dark:text-gray-300">
						A web developer-focused programmer. Detailed-oriented, responsible, and passionate with expertise in Web
						Developer.
					</p>

					<div className="text-center mt-8 md:text-left md:mt-2">
						<Button text={"Explore CV"} href={"https://rb.gy/9aot91"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
