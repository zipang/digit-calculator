import { Box } from "@chakra-ui/layout";
import Head from "next/head";

/**
 * Wrap a page component inside a simple <main> layout
 * @param {*} props
 * @returns
 */
export default function SimpleLayout({ pageTitle, children }) {
	return (
		<>
			<Head>
				<title>Concept XYZ - {pageTitle}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box as="main" bgColor="#ddd">
				{children}
			</Box>
		</>
	);
}
