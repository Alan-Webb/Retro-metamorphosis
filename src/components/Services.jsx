import {SERVICES} from "../constants";

const Services = () => {
	return (
		<section id="services">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{SERVICES.sectionTitle}
					</h2>
					<p className="mt-4 text-yellow-300 max-w-xl mx-auto text-2xl">
						{SERVICES.sectionDescription}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{SERVICES.service.map((service, index) => (
						<div
							key={index}
							className="bg-neutral-900/50 p-6 rounded-xl shadow-lg flex flex-col justify-between text-center">
							<div>
								<h3 className="text-xl text-yellow-400 font-semibold mb-4">{service.title}</h3>
								<p className="text-white mb-4">{service.description}</p>
							</div>
							<div className="flex justify-center">
								<img
									src={service.imageSrc}
									alt={service.imageAlt}
									className="rounded-lg"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
