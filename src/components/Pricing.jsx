import {PRICING_CONTENT} from "../constants";

const Pricing = () => {
	return (
		<section id="pricing">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{PRICING_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4">{PRICING_CONTENT.sectionDescription}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
			</div>
		</section>
	);
};

export default Pricing;
