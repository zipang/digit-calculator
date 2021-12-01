import { Heading } from "@chakra-ui/layout";

/**
 * Heading default styles
 * @param {Object} propsWithChildren
 */
export const Title = ({ children, ...moreProps }) => (
	<Heading as="h2" color="#293845" {...moreProps}>
		{children}
	</Heading>
);
