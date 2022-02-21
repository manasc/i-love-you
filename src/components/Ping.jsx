import React from "react";

export const Ping = ({ size = 9, color = "red", opacity = 100 }) => {
    return (
        <div
            className={`animate-ping-heart absolute block h-10 w-10 rounded-full bg-red-500 opacity-${opacity}`}
        />
    );
};
