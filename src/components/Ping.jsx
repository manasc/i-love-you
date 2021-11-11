import React from "react";

export const Ping = ({ size = 9, color = "red", opacity = 100 }) => {
    return (
        <div
            className={`animate-ping-heart absolute inline-flex h-${size} w-${size} rounded-full bg-${color}-500 opacity-${opacity}`}
        />
    );
};
