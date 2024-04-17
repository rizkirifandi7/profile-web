import Title from "../reusable_ui/Title";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="skills" >
			<Title maintitle={"Skills"} subtitle={"My technical level"} />

			<div className="flex flex-col md:flex-row justify-center items-center gap-8 text-title m-2 md:m-0">
				<Frontend />
				<Backend />
			</div>
		</section>
	);
};

export default Skills;
