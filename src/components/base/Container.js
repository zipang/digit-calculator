import { VStack } from "@chakra-ui/layout";

/**
 * Centered, responsive container
 * Use it inside page sections to restrict the text width
 */
const Container = ({ children, fluid = false, ...moreStyles }) => (
	<VStack
		className="container"
		width="100%"
		height="100%"
		position="relative"
		alignItems="flex-start"
		m="0 auto"
		p={2}
		maxWidth={
			fluid
				? "90%"
				: {
						sm: "90%",
						lg: "75%",
						xl: "70ch"
				  }
		}
		{...moreStyles}
	>
		{children}
	</VStack>
);

export default Container;
