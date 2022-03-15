module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"ping-heart": {
					"75%, 100%": {
						// height: "60px",
						// width: "60px",
						transform: "scale(15)",
						opacity: 0,
					},
				},
			},
			animation: {
				"ping-heart": Object.values({
					animationName: "ping-heart",
					animationDuration: "2.5s",
					animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					animationDelay: "0ms",
					animationIterationCount: "infinite",
					animationDirection: "normal",
				}).join(" "),
			},
		},
	},
	plugins: [],
};
