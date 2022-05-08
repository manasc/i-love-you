import DefaultLayout from "layouts/DefaultLayout";
import Heart from "components/Heart";
import MessageBubble from "components/MessageBubble";
import Image from "next/image";
import Link from "next/Link";
import { useContextProvider } from "providers/GlobalContextProvider";
import imageLoader from "utils/imageLoader";
import { useState } from "react";

export default function HomePage() {
	const {
		embed,
		daniMessage,
		changeDaniMessage,
		manasMessage,
		changeManasMessage,
	} = useContextProvider();

	const [showDaniMessage, setShowDaniMessage] = useState(false);
	const [showManasMessage, setShowManasMessage] = useState(false);

	return (
		<DefaultLayout title="D&M">
			<div className="w-screen min-h-screen flex flex-col items-center justify-center">
				{showDaniMessage && (
					<MessageBubble orientation="left">
						{daniMessage}
					</MessageBubble>
				)}
				{showManasMessage && (
					<MessageBubble orientation="right">
						{manasMessage}
					</MessageBubble>
				)}
				<div className="relative mb-1 flex">
					<div
						className="px-5 cursor-pointer flex items-center justify-center"
						onMouseEnter={() => {
							setShowDaniMessage(true);
						}}
						onMouseLeave={() => {
							setShowDaniMessage(false);
							changeDaniMessage();
						}}
					>
						<Image
							loader={imageLoader}
							unoptimized
							alt="daniela"
							src="/images/daniela.png"
							width={35}
							height={35}
						/>
					</div>
					<Heart />
					<div
						className="px-5 cursor-pointer flex items-center justify-center"
						onMouseEnter={() => {
							setShowManasMessage(true);
						}}
						onMouseLeave={() => {
							setShowManasMessage(false);
							changeManasMessage();
						}}
					>
						<Image
							loader={imageLoader}
							unoptimized
							alt="manas"
							src="/images/manas.png"
							width={35}
							height={35}
						/>
					</div>
				</div>
				{!embed && (
					<div className="pt-4 opacity-75 text-sm text-center">
						<p className="mb-4">
							{"Hazme un clic y te daré un poquito amor."}
						</p>
						<p>
							<Link passHref href="/a-little-letter">
								<a className="hover:underline flex items-center text-xs justify-center">
									A little letter to you, mi amor
									<Image
										loader={imageLoader}
										unoptimized
										alt="link to letter"
										src="/images/arrow-right.svg"
										width={18}
										height={18}
									/>
								</a>
							</Link>
						</p>
					</div>
				)}
			</div>
		</DefaultLayout>
	);
}
