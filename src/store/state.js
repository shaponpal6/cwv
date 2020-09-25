const INITIAL = {
	router: "chatWidget",
	showWidget: true,
	welcomeBox: true,
	isLogedIn: true,
	chatButton: true,
	operators: [
		{ name: "Shapon Pal", avater: "" },
		{ name: "Shapon Pal2", avater: "" },
		{ name: "Shapon Pal3", avater: "" },
		{ name: "Shapon Pal4", avater: "" },
	],
	locales: {
		chatWith: "Chat With222",
		writeMessage: "Write Message here..",
		startChat: "Start Chat",
	},
	messages: {
		messageId: 111,
		data: [
			{
				id: "dkdxkd",
				text: "Hello there!!",
				name: "Shapon Pal",
				time: "12 Jun, 2019",
				avater: "",
				type: "c",
			},
			{
				id: "dkdedxkd",
				text: "Hello there!!",
				name: "Shapon Pal",
				time: "12 Jun, 2019",
				avater: "",
				type: "c",
			},
			{
				id: "dkdwwxkd",
				text: "Hello there!!",
				name: "Shapon Pal",
				time: "12 Jun, 2019",
				avater: "",
				type: "c",
			},
		],
	},
	query: "",
	chatWidget: {
		header: {
			isLogedIn: false,
			operators: [
				{ name: "Shapon Pal", avater: "" },
				{ name: "Shapon Pal2", avater: "" },
				{ name: "Shapon Pal3", avater: "" },
				{ name: "Shapon Pal4", avater: "" },
			],
			chatText: "Chat With",
		},
		todos: [],
		text: "",
		footer: {
			placeholder: "Type here....",
		},
	},
	chatDashboard: {
		header: {
			isLogedIn: false,
			operators: [
				{ name: "Shapon Pal", avater: "" },
				{ name: "Shapon Pal2", avater: "" },
				{ name: "Shapon Pal3", avater: "" },
				{ name: "Shapon Pal4", avater: "" },
			],
			chatText: "Chat With",
		},
		todos2: [],
		text: "",
		footer: {
			placeholder: "Type here....",
		},
	},
	chatIntro: {
		chatIntroType: "general",
	},
};

export default INITIAL;