import { useState } from "react";
import { Link } from "react-scroll";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import { useContext } from "react";
import { DarkModeContext } from "../../useContext/DarkModeContext";

const NavbarMenu = [
	{ title: "Home", href: "home" },
	{ title: "About", href: "about" },
	{ title: "Skills", href: "skills" },
	{ title: "Services", href: "services" },
	{ title: "Portfolio", href: "portfolio" },
	{ title: "Contact", href: "contact" },
];

const Header = () => {
	const [active, setActive] = useState("home");
	const [isOpen, setIsOpen] = useState(false);
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
		<nav className="w-full z-20 bg-body dark:bg-surface-100 fixed top-0">
			<div className="max-w-container mx-auto flex justify-between items-center md:px-4 h-16">
				<div className="text-title dark:text-white font-semibold cursor-pointer md:pl-0 pl-4">
					<Link to="home" offset={-200} onClick={() => setActive("home")}>
						Rizki Rifani
					</Link>
				</div>
				<div
					className={`md:flex gap-4 md:gap-8 text-title dark:text-white font-semibold text-small justify-center items-center ${
						isOpen
							? "flex flex-col justify-center items-center absolute top-[63px] dark:top-[64px] p-4 bg-body dark:bg-surface-100 w-full"
							: "hidden"
					}`}
				>
					{NavbarMenu.map((menu, index) => {
						return (
							<Link
								to={menu.href}
								offset={-100}
								onClick={() => {
									setActive(menu.href);
									if (isOpen) toggleDropdown();
								}}
								className={`${active === menu.href ? "font-bold text-black dark:text-white" : ""} cursor-pointer`}
								key={index}
							>
								{menu.title}
							</Link>
						);
					})}
					<button onClick={toggleDarkMode} className="text-lg hover:bg-gray-200 hover:text-black rounded-md p-2">
						{darkMode ? <FaSun className="text-xl" /> : <BsFillMoonStarsFill className="text-xl" />}
					</button>
				</div>
				<div className="md:hidden pr-4 md:pr-0" onClick={toggleDropdown}>
					{isOpen ? (
						<IoClose className="text-2xl font-semibold dark:text-white" />
					) : (
						<RxHamburgerMenu className="text-2xl font-semibold dark:text-white" />
					)}
				</div>
			</div>
		</nav>
	);
};

export default Header;
