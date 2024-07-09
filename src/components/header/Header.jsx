import { useEffect, useState, useContext } from "react";
import { Link } from "react-scroll";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import { DarkModeContext } from "../../hooks/DarkModeContext";

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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className="w-full z-20 bg-body dark:bg-surface-100 fixed top-0 shadow-custom-light dark:shadow-custom-dark">
			<div className="max-w-container mx-auto flex justify-between items-center md:px-4 h-16">
				<div className="text-title dark:text-white font-semibold cursor-pointer md:pl-0 pl-4">
					<Link to="home" offset={-200} onClick={() => setActive("home")}>
						Rizki Rifani
					</Link>
				</div>
				<div
					className={`md:flex gap-4 md:gap-8 text-title dark:text-white font-semibold text-small justify-center items-center ${
						isOpen
							? "flex flex-col justify-center items-center absolute top-[63px] dark:top-[64px] p-4 bg-body dark:bg-surface-100 w-full shadow-custom-light dark:shadow-custom-dark "
							: "hidden"
					}`}
				>
					{NavbarMenu.map((menu, index) => {
						return (
							<Link
								key={index}
								offset={-100}
								to={menu.href}
								onClick={() => {
									setActive(menu.href);
									if (isOpen) toggleDropdown();
								}}
								className={`${
									active === menu.href
										? "text-black dark:text-white opacity-100"
										: "text-black dark:text-white opacity-70 hover:opacity-100"
								} cursor-pointer`}
							>
								{menu.title}
							</Link>
						);
					})}
					<button
						onClick={toggleDarkMode}
						className="text-lg hover:bg-gray-200 hover:text-black rounded-md p-2"
					>
						{darkMode ? (
							<FaSun className="text-xl" />
						) : (
							<BsFillMoonStarsFill className="text-xl" />
						)}
					</button>
				</div>
				<div
					className="md:hidden lg:hidden pr-4 md:pr-0"
					onClick={toggleDropdown}
				>
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
