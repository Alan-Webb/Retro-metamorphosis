import {FEATURES_CONTENT} from "../constants";

const Features = () => {
	return (
		<section id="features">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
						{FEATURES_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4">{FEATURES_CONTENT.sectionDescription}</p>
				</div>

				<div className="flex flex-wrap justify-between">
					{FEATURES_CONTENT.features.map((feature) => (
						<div
							key={feature.id}
							className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6">
							<div className="flex justify-center items-center mb-4">
								{feature.icon}
							</div>
							<h3 className="text-xl">{feature.title}</h3>
							<p className="mt-2 text-neutral-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
