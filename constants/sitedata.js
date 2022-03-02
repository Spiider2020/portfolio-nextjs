export const HeaderData = {
	LogoText: 'Portfolio',
	nav: [
		{
			text: 'Projects',
			link: '#projects',
		},
		{
			text: 'Technologies',
			link: '#tech',
		},
		{
			text: 'About',
			link: '#about',
		},
	],
	github: 'https://github.com/Spiider2020',
	linkedin: 'https://www.linkedin.com/',
	instagram: 'https://www.instagram.com/',
};

export const HeroData = {
	title: 'My Personal Portfolio',
	text: 'My purpose as a full stack developer is to help individuals or companies reach as many people as posible, using the latest technologies.',
	email: 'catalin.stancalie@creativedb.ro',
	btnText: 'Learn More',
};

export const projects = [
	{
		id: 0,
		title: 'MERN Memories',
		description:
			"Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
		imagesPath: 'images/project0/',
		imagesNr: 6,
		features: ['fature nr 1', 'features nr 2'],
		tags: ['Mongo', 'Express', 'React', 'Node'],
		source: '',
		visit: '',
	},
	{
		id: 1,
		title: 'E-Commerce',
		description:
			"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
		imagesPath: 'images/project1/',
		imagesNr: 1,
		features: [],
		tags: ['React', 'JavaScript'],
		source: 'https://google.com',
		visit: 'https://google.com',
	},
	{
		id: 2,
		title: 'WebRTC App',
		description:
			"This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
		imagesPath: 'images/project2/',
		imagesNr: 1,
		features: ['fature nr 1', 'features nr 2'],
		tags: ['React', 'WebRTC'],
		source: 'https://google.com',
		visit: 'https://google.com',
	},
	{
		id: 3,
		title: 'Unichat',
		description:
			'This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application',
		imagesPath: 'images/project3/',
		imagesNr: 1,
		features: [],
		tags: ['React', 'ChatEngine', 'Firebase'],
		source: 'https://google.com',
		visit: 'https://google.com',
	},
];

export const TimeLineData = [
	{ year: 2017, text: 'Started my journey' },
	{ year: 2018, text: 'Worked as a freelance developer' },
	{ year: 2019, text: 'Founded JavaScript Mastery' },
	{ year: 2020, text: 'Shared my projects with the world' },
	{ year: 2021, text: 'Started my own platform' },
];

export const AchievementsData = [
	{ number: 20, text: 'Open Source Projects' },
	{ number: 1000, text: 'Students' },
	{ number: 1900, text: 'Github Followers' },
	{ number: 5000, text: 'Github Stars' },
];
