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
	name: 'Catalin Stancalie',
	text: 'My purpose as a full stack developer is to help individuals or companies reach as many people as posible, using the latest technologies.',
	email: 'catalin.stancalie@creativedb.ro',
	btnText: 'Learn More',
};

export const projects = [
	{
		id: 0,
		title: 'Music Events App',
		description:
			"This application displays upcoming music events. As a non-registered user you can view all upcoming events. When you register you have the ability to add a new event or edit/delete one of your created events via the Dashboard section.The 'Details' section of each event will take you to a dedicated page for the event where you can see all the event information , including a map showing where the event is.[p] This project is built with React-Next.js and uses Strapi cms as a backend to store users and events into a PostgreSQL database. This also uses a combination of mapbox and positionstack to display the event position on the map. Project is deployed to a docker container.",
		imagesPath: 'images/project0/',
		imagesNr: 11,
		features: [
			'Display upcoming music events',
			'Display event information and event location(map)',
			'User registration',
			'Registered users can add new events',
			'Registered users can edit/delete their created events',
		],
		tags: ['React', 'Next.js', 'Strapi', 'PostgreSQL', 'Docker'],
		source: 'https://github.com/Spiider2020/music-events-frontend',
		visit: 'https://projects.creativedb.eu/music-events',
	},
	{
		id: 1,
		title: 'Reverse bidding',
		description:
			"This is a reverse bidding system for courses I started building a while back. What is this reverse bidding you might ask, well, in a few words the teachers were supposed to lower their fees for teaching courses if they felt they didnt get enough work. The site had fixed prices for courses witch ment the lower the price for the teacher the more profit the site made. The courses were one on one so this made things easier. The company that I was building this for went another direction so didn't completly finish this, meaning it has no backend. This is completly functional , the only drawback is that everything is hardcoded, so on refresh every new user,booking,setting will be lost.[p] I will explain a little bit how this works and what it does. Your can register as a Student or as a Teacher. The Student account has acces to the dashboard where they can see their booked courses or book a new course. When booking the course they will go through a 4 step process where they select the course, then the date and then they will receive available(green) timeslots for that course witch will corespond to the availability of the teachers that have the course in their list. After they select the timeslot they will be promted to play , and then they can finish the booking. The teacher what will be assigned to the course is the one with the lowest price in that timeslot, then that teacher will not be available for that timeslot anymore , the one with the second lowest price will, and so on..( basically maximizing profits ) . The Profile section is self explanatory.[p] Compared to a Student account , the Teacher account has a few extra thing in the Profile section, like adding qulification and experience , and also adding or editing the taught courses list. Dashboard has your bookings and course history where you can see the courses you taught and some basic stats.[p] The Admin account basically the same Dashboard and Profile, the only difference beeing thta they can see all the booked courses , with a profit field as well. Admin has also a Post Course section where you can add - delete - edit the courses available on your site. On deletion the course will be removed from availability, and it will not affect already booked courses.",
		imagesPath: 'images/project1/',
		imagesNr: 12,
		features: [
			'Reverse bidding/booking system',
			'User registration with user role',
			'User profile editing based on user role',
			'3 user roles',
			'Course booking 1 on 1 based on teacher timeslot availability',
			'Teacher - Student matching to maximize profit',
		],
		tags: ['React', 'JavaScript', 'Sass'],
		source: 'https://github.com/Spiider2020/reverse-course-bidding',
		visit: 'https://projects.creativedb.eu/reverse-bidding-system',
	},
	{
		id: 2,
		title: 'Company Presentation',
		description:
			'This is a company presentation site built with react. The landing page has all the information , including:hero section, small about us paragraph, services offered section, projects section, worflow section, customers(partners)section, footer with contact form and information. Then it has dedicated pages for : Projects, News, About, Contact.[p] The site has dual language support , and all of the text can be edited in the config files located in the src folder.[p] The contact form is submitted to a custom api that sends the data via email to designated adresses.',
		imagesPath: 'images/project2/',
		imagesNr: 12,
		features: [
			'Fully animated landing page',
			'Dedicated pages for Projects, News, About, Contact',
			'Dual language support',
			'Easy content edit via config files',
			'Easy connection to any api for the contact form',
			'Default connection to mu form-sendmail API (one of my other projects)',
		],
		tags: ['React', 'JavaScript', 'Sass'],
		source: 'https://github.com/Spiider2020/company-presentation-site',
		visit: 'https://projects.creativedb.eu/company-presentation-site/',
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
	{ year: 2019, text: 'Started my journey into webdevelopment' },
	{ year: 2020, text: 'Worked as a freelance developer' },
	{ year: 2021, text: 'Colaborated with a few companies on digitalization' },
	{ year: 2022, text: 'Co-Founded Creative Digital Business' },
];

export const AchievementsData = [
	{ number: 20, text: 'Open Source Projects' },
	{ number: 1000, text: 'Students' },
	{ number: 1900, text: 'Github Followers' },
	{ number: 5000, text: 'Github Stars' },
];
