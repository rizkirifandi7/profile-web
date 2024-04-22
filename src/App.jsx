import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { DarkModeContext } from "./hooks/useDarkModeContext";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/navbar/navbar";
import Home from "./components/home/home";
import Qualification from "./components/qualification/qualification";
import Service from "./components/serve/service";
import Skills from "./components/skills/skills";
import Work from "./components/work/work";

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
