import axios from "axios";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { Ping } from "./components/Ping";
import daniela from "./images/daniela.png";
import heart from "./images/heart.png";
import manas from "./images/manas.png";
import * as contentful from "contentful";

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "vi6fb9e5s542",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "J1Um9AQnAiB5K4NCWKuoPVU9mlO-Iw4trMGz1b-ztI8",
});

const colorsArr = [
    "blueGray",
    "coolGray",
    "gray",
    "trueGray",
    "warmGray",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
];

// git remote add origin https://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@github.com/manasc/dnm.git

const getBackgroundColor = (paramColor, shade) => {
    if (
        paramColor === "white" ||
        paramColor === "black" ||
        paramColor === "transparents"
    ) {
        return `bg-${paramColor}`;
    }

    if (colorsArr.includes(paramColor) && shade) {
        return `bg-${paramColor}-${shade}`;
    }

    return "bg-pink-200";
};

const Page = ({ embed }) => {
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
                        {/*                     
                    Besame y sonreiré.
                    <br />
                    Abrazame y te consentiré.
                    <br /> */}
                        Hazme un clic y te daré un poquito amor.
                    </div>
                )}
            </div>
        )
    );
};

const App = () => (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Page />}>
                    <Route path=":color" element={<Page />} />
                    <Route path=":color/:shade" element={<Page />} />
                </Route>

                <Route path="/embed" element={<Page embed={true} />}>
                    <Route path=":color" element={<Page embed={true} />} />
                    <Route
                        path=":color/:shade"
                        element={<Page embed={true} />}
                    />
                </Route>
            </Routes>
        </Router>
        <ReactTooltip
            type="light"
            border={true}
            padding="8px 16px"
            offset={{ top: 20 }}
            effect="solid"
            clickable={true}
            className="font-serif max-w-2xs"
        />
    </div>
);

export default App;
