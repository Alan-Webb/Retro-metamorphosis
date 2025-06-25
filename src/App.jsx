import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";

const App = () => {
	return (
		<main className="text-neutral-300 bg-purple-700 antialiased">
			<Navbar />
			<Hero />
			<Marquee />
			<Services />
		</main>
	);
};

export default App;
