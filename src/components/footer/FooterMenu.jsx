const FooterMenu = () => {
	return (
		<div className="flex justify-center gap-6 mb-8 text-title  dark:text-title-white">
			<a href="#about" className="font-medium text-lg hover:text-black ">
				About
			</a>

			<a href="#portfodivo" className="font-medium text-lg hover:text-black">
				Portfolio
			</a>

			<a href="#services" className="font-medium text-lg hover:text-black">
				Services
			</a>
		</div>
	);
};

export default FooterMenu;
