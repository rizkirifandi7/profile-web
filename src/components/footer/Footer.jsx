import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="bg-white border">
			<div className="py-14">
				<h1 className="font-semibold text-3xl text-center mb-4">Rizki Rifani</h1>

				<ul className="flex justify-center gap-6 mb-8">
					<li>
						<a href="#about" className="text-title font-medium text-lg hover:text-black">
							About
						</a>
					</li>

					<li>
						<a href="#portfolio" className="text-title font-medium text-lg hover:text-black">
							Portfolio
						</a>
					</li>

					<li>
						<a href="#services" className="text-title font-medium text-lg hover:text-black">
							Services
						</a>
					</li>
				</ul>

				<div className="flex justify-center gap-4 items-center">
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

				<span className="block mt-16 text-center text-sm text-title">&#169; Rizki Rifani. All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
