import { useEffect, useState } from "react";
import { projectsData, ProjectsNav } from "./work-data";
import WorksItems from "./work-card";

const Works = () => {
	const [item, setItem] = useState({ name: "all" });
	const [projects, setProjects] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (item.name === "all") {
			setProjects(projectsData);
		} else {
			const newProjects = projectsData.filter((project) => {
				return project.category.toLowerCase() === item.name;
			});
			setProjects(newProjects);
		}
	}, [item]);

	const handleClick = (e, index) => {
		setItem({ name: e.target.textContent.toLowerCase() });
		setActive(index);
	};
	return (
		<div>
			<div className="flex justify-center items-center gap-3 mb-8">
				{ProjectsNav.map((item, index) => {
					return (
						<span
							onClick={(e) => {
								handleClick(e, index);
							}}
							className={`${active === index ? "bg-title text-white" : ''} cursor-pointer text-title dark:text-title-white font-semibold text-base px-3 py-2 capitalize rounded-md hover:bg-title hover:text-white transition duration-300 ease-in-out`}
							key={index}
						>
							{item.name}
						</span>
					);
				})}
			</div>

			<div className="flex flex-col md:grid md:grid-cols-twomax gap-6 md:gap-12 mx-4 md:mx-auto justify-center items-center">
				{projects.map((item) => {
					return <WorksItems item={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default Works;
