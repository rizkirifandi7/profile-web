import HomeContent from "./home-content";
import SocialHome from "./home-social";

const Home = () => {
	return (
		<section className={`md:max-w-container mx-auto mt-24 md:mt-30 p-10 md:p-4 w-full`} id="home">
			<div className="grid gap-28 mx-auto">
				<div className="grid sm:grid-cols-customthree md:grid-cols-twocontent md:pt-14 lg:grid-cols-twocontent gap-8 items-center">
					<SocialHome className="hidden" />

					<div className="flex justify-center items-end md:order-1">
						<div className="bg-profile bg-no-repeat bg-center bg-cover bg-gray-900 shadow-profile w-[200px] h-[200px] md:w-[300px] md:h-[300px] animate-profile"></div>
					</div>

					<HomeContent />
				</div>
			</div>
		</section>
	);
};

export default Home;
