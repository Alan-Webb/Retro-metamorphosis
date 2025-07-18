import {PRICING_CONTENT} from "../constants";

const Pricing = () => {
	return (
		<section id="pricing">
			<div className="max-w-7xl mx-auto px-6 mt-20">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{PRICING_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4 text-xl pb-10">
						{PRICING_CONTENT.sectionDescription}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
					{PRICING_CONTENT.plans.map((plan, index) => (
						<div
							key={index}
							className={`
							p-8 rounded-xl bg-neutral-900/50 shadow-lg ${
								plan.popular
									? "border border-yellow-500/80"
									: "border border-neutral-800 pt-18"
							}
							`}>
							{plan.popular && (
								<div className="text-center mb-4">
									<span className="bg-purple-600 text-white text-xs py-1 px-3 rounded-full uppercase">
										{PRICING_CONTENT.popularBadge}
									</span>
								</div>
							)}
							<h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
								{plan.name}
							</h3>
							<p className="text-white mb-6">{plan.description}</p>
							<div className="text-2xl lg:text-3xl bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-medium mb-6">
								{plan.price}
							</div>
							<ul className="mb-8 space-y-2 text-white">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-center">
										<span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
										{feature}
									</li>
								))}
							</ul>
							<button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-yellow-300 rounded-lg cursor-pointer">
								{PRICING_CONTENT.ctaText}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
