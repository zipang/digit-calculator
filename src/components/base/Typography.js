import { Box, Heading } from "@chakra-ui/layout";

/**
 * Heading default styles
 * @param {Object} propsWithChildren
 */
export const Title = ({ children, ...moreProps }) => (
	<Heading as="h2" mt={4} color="#293845" {...moreProps}>
		{children}
	</Heading>
);

/**
 * Display some code result inside a grey box
 * @param {Object} propsWithChildren
 */
export const CodeBox = ({ children, error = false, ...moreProps }) => (
	<Box p={5} bgColor="#f2f5f7" border={error ? "2px dashed red" : "2px solid #c3cfd9"}>
		<code>{children}</code>
	</Box>
);
