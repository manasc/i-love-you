import React from "react";
import { useParams } from "react-router-dom";
import { client, getBackgroundColor } from "./App";
import daniela from "./images/daniela.png";
import heart from "./images/heart.png";
import manas from "./images/manas.png";

export const Page = ({ embed }) => {
    let { color, shade } = useParams();
    const bgColor = getBackgroundColor(color, shade);
    const boxPadding = embed ? "" : "pb-10";

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

    const [daniMessage, setDaniMessage] = React.useState(daniMessages[0]);
    const [manasMessage, setManasMessage] = React.useState(manasMessages[0]);

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

    React.useEffect(() => {
        client
            .getEntries({
                content_type: "quote",
            })
            .then((response) => {
                console.log(response);

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
        manasMessages.length > 0 &&
        daniMessages.length > 0 && (
            <div
                className={`h-screen w-screen flex flex-col items-center justify-center ${boxPadding} ${bgColor}`}
            >
                <div className="relative mb-1 flex">
                    <div
                        className="px-5 cursor-pointer"
                        data-tip={daniMessage}
                        onMouseLeave={changeDaniMessage}
                    >
                        <img
                            alt="daniela"
                            src={daniela}
                            style={{
                                height: 35,
                                width: "auto",
                            }}
                        />
                    </div>
                    <div className="px-2 relative flex items-center justify-center z-0">
                        <div className="animate-ping-heart absolute block h-9 w-9 rounded-full bg-red-500 opacity-75" />
                        <div className="animate-ping-heart absolute block h-7 w-7 rounded-full bg-red-500 opacity-50" />
                        <div className="animate-ping-heart absolute block h-5 w-5 rounded-full bg-red-500 opacity-50" />
                        <div className="relative transform translate-y-px">
                            <img
                                src={heart}
                                alt="heart"
                                width={20}
                                height={"auto"}
                            />
                        </div>
                    </div>
                    <div
                        className="px-5 cursor-pointer"
                        data-tip={manasMessage}
                        onMouseLeave={changeManasMessage}
                    >
                        <img
                            alt="manas"
                            src={manas}
                            style={{
                                height: 35,
                                width: "auto",
                            }}
                        />
                    </div>
                </div>
                {!embed && (
                    <div className="font-serif pt-4 opacity-75 text-sm text-center">
                        Hazme un clic y te daré un poquito amor.
                    </div>
                )}
            </div>
        )
    );
};
