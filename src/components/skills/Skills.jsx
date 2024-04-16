import { LuBadgeCheck } from "react-icons/lu";

const Skills = () => {
	return (
		<section className="max-w-container mx-auto p-4 my-56 w-full" id="skills" data-aos="fade-right">
			<div className="flex justify-center items-center flex-col mb-16">
				<h1 className="text-title text-h1 font-semibold">Skills</h1>
				<p className="text-normal text-text">My technical level</p>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center gap-8 text-title m-2 md:m-0">
				<div className="bg-white py-8 px-16 rounded-2xl border w-full md:w-fit" >
					<p className="text-center mb-6 font-medium text-base">Frontend Developer</p>
					<div className="flex gap-10 justify-center items-center">
						<div className="flex flex-col gap-5">
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">HTML</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">CSS</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">Javascript</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5">
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">React</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">NextJS</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">TailwindCSS</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white py-8 px-16 rounded-2xl border w-full md:w-fit" >
					<p className="text-center mb-6 font-medium text-base">Backend Developer</p>
					<div className="flex justify-center gap-10">
						<div className="flex flex-col gap-5">
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div className="">
									<h3 className="font-medium text-base">PHP</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">ExpressJS</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">MongoDB</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5">
							<div className="flex gap-3">
								<i className="mt-1">
									<LuBadgeCheck />
								</i>
								<div>
									<h3 className="font-medium text-base">PostgreSQL</h3>
									<span className="text-xs text-text">Proficient</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
