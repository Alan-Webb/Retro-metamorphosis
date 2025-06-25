import service1 from "../assets/services1.webp";
import service2 from "../assets/services2.webp";
import service3 from "../assets/services3.webp";
import service4 from "../assets/services4.webp";
import service5 from "../assets/services5.webp";
import service6 from "../assets/services6.webp";
import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
	{href: "#services", label: "Services"},
	{href: "#features", label: "Features"},
	{href: "#pricing", label: "Pricing"},
	{href: "#testimonials", label: "Testimonials"},
	{href: "#contact", label: "Contact"},
];

export const HERO_CONTENT = {
	tagLine: "From old school to modern",
	mainHeading: "Retro Metamorphosis",
	subHeading:
		"Transform your treasured analogue recordings into easily accessible digital files. Preserving your memories and making them simple to share and enjoy.",
	callToAction: {
		primary: "Our Services",
		secondary: "Get A Quote",
	},
	formatsConverted: "Transcription Services",
};

export const MARQUEE_TEXT =
	"VHS - Betamax - Vinyl - Cassette - 8 Track - Reel-to-Reel - Microcassette - U-matic - 8mm film -";

export const SERVICES = {
	sectionTitle: "Services",
	sectionDescription: "Treasured Memories, Beautifully Re-imagined.",
	service: [
		{
			title: "Cassette to Digital",
			description:
				"Bring your old mix-tapes, voice recordings, and family audio back to life with high-fidelity digital transfers.",
			imageSrc: service1,
			imageAlt: "Cassette Tapes",
		},
		{
			title: "Vinyl to Digital",
			description:
				"Capture the warmth and character of your record collection with professional-grade audio digitization.",
			imageSrc: service2,
			imageAlt: "Vinyl Records",
		},
		{
			title: "VHS to Digital",
			description:
				"Convert your home videos and cherished moments from VHS tapes into shareable, long-lasting digital files.",
			imageSrc: service3,
			imageAlt: "VHS Tapes",
		},
		{
			title: "Film Reels to Digital (8mm/16mm)",
			description:
				"Preserve vintage home movies with frame-by-frame digital transfers for crisp playback and lasting quality.",
			imageSrc: service4,
			imageAlt: "8mm Film",
		},
		{
			title: "8-Track to Digital",
			description:
				"Relive the golden age of music by converting your classic 8-track tapes into clean, accessible digital audio files.",
			imageSrc: service5,
			imageAlt: "8-track Tapes",
		},
		{
			title: "Reel-to-Reel to Digital",
			description:
				"Preserve high-quality analog recordings from reel-to-reel tapes with precision transfers that maintain their original richness.",
			imageSrc: service6,
			imageAlt: "Reel-to-Reel Tapes",
		},
	],
};

export const TESTIMONIALS_CONTENT = {
	sectionTitle: "What Our Customers Say",
	sectionDescription:
		"Hear from some of our customers who used Ret-Met to bring their analogue memories back to life.",
	reviews: [
		{
			name: "Diane R",
			location: "San Diego, CA",
			review:
				"I hadn’t seen my wedding video in over 30 years—now I can share it with my grand kids on my phone. I cried happy tears. Thank you!",
			image: user1,
		},
		{
			name: "Marcus T",
			location: " Richmond, VA",
			review:
				"You treated my dad’s old audio tapes like treasures. Hearing his voice again meant the world to us.",
			image: user2,
		},
		{
			name: "Sophie K",
			location: "Brooklyn, NY",
			review:
				"I was worried my old VHS tapes wouldn’t survive the transfer, but everything came back looking and sounding amazing!",
			image: user3,
		},
		{
			name: "James L",
			location: "Portland, OR",
			review:
				"From start to finish, the process was simple and reassuring. Our family films are now safely backed up and ready for future generations.",
			image: user4,
		},
		{
			name: "Angela D",
			location: "Denver, CO",
			review:
				"Thank you for preserving the only footage we had of my parents together. Your work is priceless.",
			image: user5,
		},
		{
			name: "Elliot M",
			location: "Chicago, IL",
			review:
				"The care and detail you put into converting my Super 8 reels was incredible. You didn’t just digitize film—you saved memories.",
			image: user6,
		},
	],
};
