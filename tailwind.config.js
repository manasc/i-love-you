module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [
		{
			pattern: /bg-(\w+)-(\w+)/,
		},
	],
	theme: {
		extend: {
			keyframes: {
				"ping-heart": {
					"0%": {
						height: 0,
						width: 0,
						opacity: 1,
					},
					"75%, 80%": {
						height: "3.75rem",
						width: "3.75rem",
						opacity: 0,
					},
					"100%": {
						height: 0,
						width: 0,
						opacity: 0,
					},
				},
			},
			animation: {
				"ping-heart": Object.values({
					animationName: "ping-heart",
					animationDuration: "2s",
					animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					// animationDelay: "0ms",
					animationIterationCount: "infinite",
					animationDirection: "normal",
				}).join(" "),
			},
		},
	},
	plugins: [],
};
