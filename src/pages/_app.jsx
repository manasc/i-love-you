import "styles/globals.css";
import GlobalContextProvider from "providers/GlobalContextProvider";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<GlobalContextProvider>
				<Component {...pageProps} />
			</GlobalContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
