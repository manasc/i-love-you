import Ping from "components/Ping";
import Image from "next/image";
import imageLoader from "utils/imageLoader";
import Head from "next/head";
import { useContextProvider } from "providers/GlobalContextProvider";
import ReactTooltip from "react-tooltip";

export default function HomePage() {
	const {
		boxPadding,
		bgColor,
		embed,
		daniMessage,
		changeDaniMessage,
		manasMessage,
		changeManasMessage,
	} = useContextProvider();

	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<meta name="description" content={"D&M"} />
				<link rel="icon" href="favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="favicon-16x16.png"
				/>
				<link rel="manifest" href="site.webmanifest" />
				<link
					rel="mask-icon"
					href="safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="manifest.json" />
				<title>{"D&M"}</title>
			</Head>
			<div
				className={`h-screen w-screen flex flex-col items-center justify-center ${boxPadding} ${bgColor}`}
			>
				<div className="relative mb-1 flex">
					<div
						className="px-5 cursor-pointer flex items-center"
						data-tip={daniMessage}
						onMouseLeave={changeDaniMessage}
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
					<div className="px-2 relative flex items-center justify-center z-0">
						{[1, 2].map((_, index) => (
							<Ping key={`ping-${index}`} index={index} />
						))}
						<div className="relative transform flex items-center translate-y-px">
							<Image
								loader={imageLoader}
								unoptimized
								alt="heart"
								src="/images/heart.png"
								width={20}
								height={20}
							/>
						</div>
					</div>
					<div
						className="px-5 cursor-pointer flex items-center"
						data-tip={manasMessage}
						onMouseLeave={changeManasMessage}
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
					<div className="font-serif pt-4 opacity-75 text-sm text-center">
						{"Hazme un clic y te daré un poquito amor."}
					</div>
				)}
			</div>
			<ReactTooltip
				type="light"
				border={true}
				padding="8px 16px"
				offset={{ top: 20 }}
				effect="solid"
				clickable={true}
				className="font-serif max-w-2xs"
			/>
		</>
	);
}
