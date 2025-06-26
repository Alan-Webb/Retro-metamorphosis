import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Features from "./components/Features";

const App = () => {
	return (
		<main className="text-neutral-300 bg-purple-700 antialiased">
			<Navbar />
			<Hero />
			<Marquee />
			<Services />
			<Features />
		</main>
	);
};

export default App;
