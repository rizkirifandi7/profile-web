import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const SocialHome = ({ className }) => {
	return (
		<div
			className={`flex flex-row md:grid md:grid-cols-maxcontent gap-6 text-2xl text-title order-3 md:order-[-1] ${className}`}
		>
			<a href="https://www.instagram.com/rizki.rifandii/">
				<FiInstagram />
			</a>
			<a href="https://www.linkedin.com/in/rizkirifani/">
				<FiLinkedin />
			</a>
			<a href="https://github.com/rizkirifandi7">
				<FiGithub />
			</a>
		</div>
	);
};

export default SocialHome;
