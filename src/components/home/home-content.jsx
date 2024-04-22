import Button from "../common-component/button";
import SocialHome from "./home-social";

const HomeContent = () => {
	return (
		<div className="grid col-span-onethree text-center md:text-left">
			<h1 className="font-semibold text-title dark:text-title-white text-4xl mb-6 md:text-big ">Rizki Rifani</h1>
			<h3 className="text-h3 font-normal text-title dark:text-gray-200 mb-4">Web Developer</h3>
			<p className="text-normal font-normal text-text dark:text-gray-300 dark:font-normal max-w-[400px] mb-12">
				A web developer-focused programmer. Detailed-oriented, responsible, and passionate with expertise in Web
				Developer.
			</p>
			<div className="flex justify-center items-center md:justify-start gap-6">
				<Button text={"Say Hello!"} href={"#contact"} />
				<SocialHome className="md:hidden" />
			</div>
		</div>
	);
};

export default HomeContent;
