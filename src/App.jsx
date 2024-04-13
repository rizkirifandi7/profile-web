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
	return (
		<>
			<Header />
			<div className="h-screen bg-body">
				<Home />
				<About />
				<Skills />
				<Service />
				<Qualification />
				<Work />
				<Contact/>
				<Footer/>
			</div>
		</>
	);
}

export default App;

