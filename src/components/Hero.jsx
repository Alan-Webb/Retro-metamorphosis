import {HERO_CONTENT} from "../constants";

const Hero = () => {
	return (
		<section className="pt-20 lg:pt-36">
			<div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
				<div className="px-3 py-2 rounded-full text-2xl">
					{HERO_CONTENT.tagLine}
				</div>
				<h1 className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-yellow-50 via-yellow-300 to-yellow-700 bg-clip-text text-transparent">
					{HERO_CONTENT.mainHeading}
				</h1>
				<p className="mt-6 text-2xl text-center max-w-xl">
					{HERO_CONTENT.subHeading}
				</p>
			</div>
		</section>
	);
};

export default Hero;
