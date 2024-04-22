import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const FooterSocial = () => {
	return (
		<div className="flex justify-center gap-4 items-center text-title dark:text-title-white">
			<a href="https://www.instagram.com/rizki.rifandii/?hl=id" className="text-3xl">
				<FaInstagramSquare />
			</a>

			<a href="https://github.com/rizkirifandi7" className="text-3xl">
				<FaGithubSquare />
			</a>

			<a href="https://www.linkedin.com/in/rizkirifani" className="text-3xl">
				<FaLinkedin />
			</a>
		</div>
	);
};

export default FooterSocial;
