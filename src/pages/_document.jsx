import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-8JZH9G6X3X"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						
							gtag('config', 'G-8JZH9G6X3X');
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
