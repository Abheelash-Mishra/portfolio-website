import Hero from "./components/Hero.jsx";
import PortfolioIntro from "./components/PortfolioIntro.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";

function App() {
	return (
		<div className={ "flex flex-col items-center" }>
			<Navbar/>
			<Hero/>
			<PortfolioIntro/>
			<AboutMe/>

			<div className={ "mt-32" }>
				<img src="/SectionChange.png" alt="///LOADING"/>
			</div>

			<Projects/>
			<Experience />
		</div>

	)
}

export default App
