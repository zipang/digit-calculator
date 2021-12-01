import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

/**
 * Provide Chakra UI Theming to all pages
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
