import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { DarkModeContext } from "./hooks/useDarkModeContext";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Service from "./components/serve/Service";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [aosInitialized, setAosInitialized] = useState(false);

	const toggleDarkMode = () => {
		// Disable AOS animations temporarily
		AOS.refreshHard();

		setDarkMode(!darkMode);
		if (typeof window !== "undefined") {
			document.documentElement.classList.toggle("dark");
		}

		// Re-enable AOS animations after a delay
		setTimeout(() => {
			AOS.refresh();
		}, 1000);
	};

	useEffect(() => {
		if (!aosInitialized) {
			AOS.init({
				duration: 1000,
			});
			setAosInitialized(true);
		}
	}, [aosInitialized]);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			<div>
				<Header />
				<Home />
				<About />
				<Skills />
				<Service />
				<Qualification />
				<Work />
				<Contact />
				<Footer />
			</div>
		</DarkModeContext.Provider>
	);
}

export default App;
