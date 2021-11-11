import React from "react";
import ReactTooltip from "react-tooltip";

import daniela from "./images/daniela.png";
import manas from "./images/manas.png";
import heart from "./images/heart.png";

import { Ping } from "./components/Ping";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams,
} from "react-router-dom";

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

const commonMessages = [
    "Hello hello",
    "Hola, mi amorcito lindo",
    "Hola, mi amor",
    "Te quiero mucho, mi amor",
    "Te amo mucho",
    "Te amo tanto",
];

const manasMessages = [
    "Hola, mi hermosa",
    "Baby girl, te amo.",
    "Dame la cosita",
    ...commonMessages,
];

const daniMessages = ["Mi amooooor", "My cuuuutie", ...commonMessages];

const getRandomInt = () => {
    let max;

    if (manasMessages.length >= daniMessages.length) {
        max = manasMessages.length - 1;
    } else {
        max = daniMessages.length - 1;
    }

    return Math.floor(Math.random() * max);
};

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

    const [daniMessage, setDaniMessage] = React.useState(
        daniMessages[getRandomInt()]
    );
    const [manasMessage, setManasMessage] = React.useState(
        manasMessages[getRandomInt()]
    );

    const changeManasMessage = () => {
        setManasMessage(manasMessages[getRandomInt()]);

        if (manasMessage === "Dame la cosita") {
            setDaniMessage("Ya te la di!");
        }
    };
    const changeDaniMessage = () => {
        setDaniMessage(daniMessages[getRandomInt()]);

        if (daniMessage === "Dame la cosita") {
            setManasMessage("Ya te la di!");
        }
    };

    return (
        <div
            className={`h-screen w-screen flex flex-col items-center justify-center ${boxPadding} ${bgColor}`}
        >
            <div className="relative mb-1 flex">
                <div
                    className="p-5 cursor-pointer"
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
                <div className="px-2 relative flex items-center justify-center bg z-0">
                    <Ping size={9} opacity={75} />
                    <Ping size={7} opacity={50} />
                    <Ping size={5} opacity={50} />
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
                    className="p-5 cursor-pointer"
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
        </div>
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
            // delayHide={3000}
        />
    </div>
);

export default App;
