import "../styles/globals.css";
import GlobalContextProvider from "providers/GlobalContextProvider";

function MyApp({ Component, pageProps }) {
	return (
		<GlobalContextProvider>
			<Component {...pageProps} />
		</GlobalContextProvider>
	);
}

export default MyApp;
