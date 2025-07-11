import {useState} from "react";
import {LINKS} from "../constants";
import {FaTimes} from "react-icons/fa";
import {FaBars} from "react-icons/fa6";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLinkClick = (e, href) => {
		e.preventDefault();
		const targetElement = document.querySelector(href);
		if (targetElement) {
			const offset = -85;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + scrollY + offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<div>
			<nav className="fixed left-0 right-0 top-4 z-50">
				{/* Desktop Menu */}
				<div className="mx-auto hidden w-full items-center justify-around border-y border-white-300/30 py-3 backdrop-blur-lg lg:flex text-xl">
					<div className="flex items-center justify-between gap-6">
						<div>
							<a href="#">
								<p className="uppercase me-36 hover:text-yellow-400">Ret-Met</p>
							</a>
						</div>

						<div>
							<ul className="flex items-center gap-4">
								{LINKS.map((item, index) => (
									<li key={index}>
										<a
											href={item.href}
											onClick={(e) => handleLinkClick(e, item.href)}
											className="text-lg hover:text-yellow-400">
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/* Mobile Menu */}
				<div className="backdrop-blur-md lg:hidden">
					<div className="flex items-center justify-center">
						<div>
							<a href="#">
								<p className="uppercase pe-48">RET-MET</p>
							</a>
						</div>
						<div className="flex items-center ms-11">
							<button
								onClick={toggleMobileMenu}
								className="focus:outline-none lg:hidden">
								{isMobileMenuOpen ? (
									<FaTimes className="m-2 h-6 w-5 cursor-pointer" />
								) : (
									<FaBars className="m-2 h-6 w-5 cursor-pointer" />
								)}
							</button>
						</div>
					</div>
					{isMobileMenuOpen && (
						<ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
							{LINKS.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className="block w-full text-lg ps-16 pb-4 hover:text-yellow-400"
										onClick={(e) => handleLinkClick(e, item.href)}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
