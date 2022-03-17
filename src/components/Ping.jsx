import React from "react";

export default function Ping({ index, ...props }) {
	const animationDelay = `${index * 400}ms`;

	return (
		<spa
			className={`animate-ping-heart absolute inline-flex rounded-full bg-red-500`}
			style={{
				animationDelay,
				height: 0,
				width: 0,
			}}
			{...props}
		></spa>
	);
}
