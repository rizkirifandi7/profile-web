import { useEffect, useState } from "react";
import { projectsData, ProjectsNav } from "./WorkData";
import WorksItems from "./WorkCard";

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
						<button
							key={item.id}
							onClick={(e) => {
								handleClick(e, index);
							}}
							className={`${
								active === index ? "border-b-2 border-title text-title dark:border-title-white border-opacity-50" : ""
							} cursor-pointer text-title dark:text-title-white font-semibold text-base px-3 py-2 capitalize `}
						>
							{item.name}
						</button>
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
