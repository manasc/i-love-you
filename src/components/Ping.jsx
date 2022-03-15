import React from "react";

export default function Ping({ index, ...props }) {
	const animationDelay = `${index * 400}ms`;

	return (
		<div
			className={`animate-ping-heart absolute block h-1 w-1 rounded-full bg-red-500`}
			style={{ animationDelay }}
			{...props}
		/>
	);
}
