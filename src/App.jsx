import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import * as contentful from "contentful";
import { Page } from "./Page";

export const client = contentful.createClient({
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

export const getBackgroundColor = (paramColor, shade) => {
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
        {/* <ReactTooltip
            type="light"
            border={true}
            padding="8px 16px"
            offset={{ top: 20 }}
            effect="solid"
            clickable={true}
            className="font-serif max-w-2xs"
        /> */}
    </div>
);

export default App;
