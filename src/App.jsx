import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<>
			<Header />
			<div className="bg-body">
				<Home />
				<About />
				<Skills />
				<Service />
				<Qualification />
				<Work />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App;

