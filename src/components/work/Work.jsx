import Title from "../reusable_ui/Title";
import Works from "./Works";

const Work = () => {
	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="portfolio">
			<Title maintitle={"Portfolio"} subtitle={"Most recent works"} />
			<Works />
		</section>
	);
};

export default Work;
