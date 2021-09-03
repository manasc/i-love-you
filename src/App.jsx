import React from "react";
import daniela from "./images/daniela.png";
import manas from "./images/manas.png";
import heart from "./images/heart.png";

import { Ping } from "./components/Ping";
import {
    BrowserRouter as Router,
    Route,
    Switch,
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

// git remote add origin https://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@github.com/manasc/dnm.git

const getBackgroundColor = (paramColor = "gray", shade = 900) => {
    switch (paramColor) {
    case "transparent":
    case "white":
    case "black":
        return `bg-${paramColor}`;
    default:
        return `bg-${paramColor}-${shade}`;
    }
};

const Page = ({ embed }) => {
    let { color, shade } = useParams();
    const bgColor = getBackgroundColor(color, shade);
    const boxPadding = embed ? "" : "pb-10";

    return (
        <div
            className={`h-screen w-screen flex flex-col items-center justify-center ${boxPadding} ${bgColor}`}
        >
            <div className="relative mb-1 flex">
                <div className="px-1 z-40">
                    <img
                        alt="daniela"
                        src={daniela}
                        width={40}
                        height={"auto"}
                    />
                </div>
                <div className="px-1 relative flex items-center justify-center bg z-0">
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
                <div className="px-1 z-40">
                    <img alt="manas" src={manas} width={40} height={"auto"} />
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Page />
                </Route>
                <Route path="/embed/:color?/:shade?">
                    <Page embed={true} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
