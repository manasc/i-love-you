import React from "react";

export function DigitBox({ number, label }) {
	return (
		<div className="px-2">
			<div className="w-12 flex flex-col items-center">
				<div className="font-mono font-light mb-2">{number}</div>
				<div className="text-xs uppercase text-gray-500">{label}</div>
			</div>
		</div>
	);
}
