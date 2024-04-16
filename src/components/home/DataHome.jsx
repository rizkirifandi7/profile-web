import SocialHome from "./SocialHome";

const DataHome = () => {
	return (
		<div className="grid col-span-onethree text-center md:text-left">
			<h1 className="font-semibold text-title text-4xl mb-6 md:text-big ">Rizki Rifani</h1>
			<h3 className="text-h3 font-normal text-title mb-4">Web Developer</h3>
			<p className="text-normal font-normal text-text max-w-[400px] mb-12">
				Undergraduate informatics engineering student. Detailed-oriented, responsible, and passionate with expertise in
				Web Developer.
			</p>
			<div className="flex justify-center items-center md:justify-start gap-6">				
        <button className="bg-title px-6 py-3 rounded-md text-white hover:bg-titletwo w-fit">Say Hello!</button>
        <SocialHome className="md:hidden"/>
      </div>
		</div>
	);
};

export default DataHome;
