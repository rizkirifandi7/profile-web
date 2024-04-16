import Works from "./Works";

const Work = () => {
	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="portfolio" data-aos="fade-left">
			<div className="flex justify-center items-center flex-col mb-16">
				<h1 className="text-title text-h1 font-semibold">Portfolio</h1>
				<p className="text-normal text-text">Most recent works</p>
			</div>

			<Works />
		</section>
	);
};

export default Work;
