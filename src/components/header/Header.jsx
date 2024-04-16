import { useState } from "react";
import { Link } from "react-scroll";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
	const [active, setActive] = useState("#home");
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
		<nav className="w-full z-20 bg-body border fixed top-0">
			<div className="max-w-container mx-auto flex justify-between items-center h-16 px-4">
				<div className="text-title font-semibold cursor-pointer">
					<Link to="home" offset={-200} onClick={() => setActive("#home")}>
						Rizki Rifani
					</Link>
				</div>
				<div
					className={`md:flex gap-8 text-title font-semibold text-small ${
						isOpen ? "block flex flex-col absolute right-4 top-20 p-4 bg-white rounded shadow-lg" : "hidden"
					}`}
				>
					<Link
						to="home"
						offset={-200}
						onClick={() => setActive("#home")}
						className={`${active === "#home" ? "font-bold text-black" : ""} cursor-pointer`}
					>
						Home
					</Link>
					<Link
						to="about"
						offset={-100}
						onClick={() => setActive("#about")}
						className={`${active === "#about" ? "font-bold text-black" : ""} cursor-pointer`}
					>
						About
					</Link>
					<Link
						to="skills"
						offset={-100}
						onClick={() => setActive("#skills")}
						className={`${active === "#skills" ? "font-bold text-black" : ""} cursor-pointer`}
					>
						Skills
					</Link>
					<Link
						to="services"
						offset={-100}
						onClick={() => setActive("#services")}
						className={`${active === "#services" ? "font-bold text-black" : ""} cursor-pointer`}
					>
						Services
					</Link>
					<Link
						to="portfolio"
						offset={-100}
						onClick={() => setActive("#portfolio")}
						className={`${active === "#portfolio" ? "font-bold text-black" : ""} cursor-pointer`}
					>
						Portfolio
					</Link>
					<Link
						to="contact"
						offset={-100}
						onClick={() => setActive("#contact")}
						className={`${active === "#contact" ? "font-bold text-black" : ""} cursor-pointer`}
					>
						Contact
					</Link>
				</div>
				<div className="md:hidden" onClick={toggleDropdown}>
					{isOpen ? <IoClose className="text-2xl font-semibold"/> : <RxHamburgerMenu className="text-2xl font-semibold"/>}
				</div>
			</div>
		</nav>
	);
};

export default Header;
