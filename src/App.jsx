import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

const App = () => {
	return (
		<main className="text-neutral-300 bg-purple-800 antialiased">
			<Navbar />
			<Hero />
			<Marquee />
		</main>
	);
};

export default App;
