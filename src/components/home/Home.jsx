import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Home = () => {
	return (
		<section className="max-w-container mx-auto mt-40 p-4 w-full" id="home">
			<div className="flex flex-col-reverse md:flex-row items-center gap-8">
				<div className="basis-1/12 me-6">
					<div className="flex relative left-12 bottom-16  md:flex-col my-auto items-start gap-6 text-2xl text-title">
						<a href="">
							<FiInstagram />
						</a>
						<a href="">
							<FiLinkedin />
						</a>
						<a href="">
							<FiGithub />
						</a>
					</div>
				</div>
				<div className="basis-5/12 flex flex-col gap-2">
					<h1 className="text-big font-semibold text-title">Rizki Rifani</h1>
					<h3 className="text-h3 font-normal text-title">Web Developer</h3>
					<p className="text-normal font-normal text-text">
						Undergraduate informatics engineering student. Detailed-oriented, responsible, and passionate with expertise
						in Web Developer.
					</p>
					<div className="mt-6">
						<button className="bg-title px-6 py-3 rounded-md text-white hover:bg-titletwo">Say Hello!</button>
					</div>
				</div>
				<div className="basis-5/12 flex items-end justify-end">
					<div className="bg-profile bg-no-repeat bg-center bg-cover bg-gray-900 shadow-profile order-1 self-center w-80 h-80 animate-profile"></div>
				</div>
			</div>
		</section>
	);
};

export default Home;
