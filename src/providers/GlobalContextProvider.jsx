import * as contentful from "contentful";
import React, { createContext, useEffect, useContext, useState } from "react";
import tailwindColors from "tailwindcss/colors";
import { useRouter } from "next/router";

const GlobalContext = createContext({
	boxPadding: undefined,
	bgColor: undefined,
	embed: undefined,
	daniMessage: undefined,
	changeDaniMessage: undefined,
	manasMessage: undefined,
	changeManasMessage: undefined,
});

const client = contentful.createClient({
	space: "vi6fb9e5s542",
	accessToken: "J1Um9AQnAiB5K4NCWKuoPVU9mlO-Iw4trMGz1b-ztI8",
});

const colors = Object.keys(tailwindColors);

const getBackgroundColor = (paramColor, shade) => {
	if (
		paramColor === "white" ||
		paramColor === "black" ||
		paramColor === "transparent"
	) {
		return `bg-${paramColor}`;
	}

	if (colors.includes(paramColor) && shade) {
		return `bg-${paramColor}-${shade}`;
	}

	return "bg-pink-200";
};

export const useContextProvider = () => useContext(GlobalContext);

export default function GlobalContextProvider({ children }) {
	const router = useRouter();
	const { color, shade } = router.query;
	const embed = Boolean(
		"embed" in router.query &&
			(router.query.embed !== "false" || router.query.embed !== false)
	);

	console.log(router.query);

	const bgColor = getBackgroundColor(color, shade);
	const boxPadding = Boolean(embed) ? "" : "pb-10";

	const [daniMessages, setDaniMessages] = React.useState(["Hello, Hello"]);
	const [manasMessages, setManasMessages] = React.useState(["Hello, Hello"]);

	const getRandomInt = (name = "manas") => {
		let max;

		if (name === "manas") {
			max = manasMessages.length - 1;
		}

		if (name === "dani") {
			max = daniMessages.length - 1;
		}

		return Math.floor(Math.random() * max);
	};

	const [daniMessage, setDaniMessage] = useState(daniMessages[0]);
	const [manasMessage, setManasMessage] = useState(manasMessages[0]);

	const changeManasMessage = () => {
		setManasMessage(manasMessages[getRandomInt("manas")]);

		if (manasMessage === "Dame la cosita") {
			setDaniMessage("Ya te la di!");
		}
	};

	const changeDaniMessage = () => {
		setDaniMessage(daniMessages[getRandomInt("dani")]);

		if (daniMessage === "Dame la cosita") {
			setManasMessage("Ya te la di!");
		}
	};

	useEffect(() => {
		client
			.getEntries({
				content_type: "quote",
			})
			.then((response) => {
				// console.log(response);

				const tempManasMessages = [];
				const tempDaniMessages = [];

				response.items.forEach((quote) => {
					if (quote.fields.person.fields.personName === "Both") {
						tempDaniMessages.push(quote.fields.text);
						tempManasMessages.push(quote.fields.text);
					}

					if (quote.fields.person.fields.personName === "Manas") {
						tempManasMessages.push(quote.fields.text);
					}

					if (quote.fields.person.fields.personName === "Dani") {
						tempDaniMessages.push(quote.fields.text);
					}
				});

				tempManasMessages.length > 0 &&
					setManasMessages(tempManasMessages);
				tempDaniMessages.length > 0 &&
					setDaniMessages(tempDaniMessages);
			});
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				boxPadding,
				bgColor,
				embed: Boolean(embed),
				daniMessage,
				changeDaniMessage,
				manasMessage,
				changeManasMessage,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
