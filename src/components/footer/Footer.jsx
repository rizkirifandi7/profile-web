import FooterMenu from "./FooterMenu";
import FooterSocial from "./FooterSocial";

const Footer = () => {
	return (
		<footer className="dark:bg-black dark:text-white bg-white border dark:border-none">
			<div className="py-14 border-t-2">
				<h1 className="font-semibold text-3xl text-center mb-4">Rizki Rifani</h1>

				<FooterMenu />

				<FooterSocial />

				<span className="block mt-16 text-center text-sm text-title dark:text-title-white">&#169; Rizki Rifani. All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
