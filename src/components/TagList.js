import { HStack } from "@chakra-ui/layout";
import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";

/**
 * @typedef TagListProps
 * @property {Array<String>} selected The array of values (strings) to display
 * @property {Function} onRemove Callback function to call when a user removes a tag with the x button
 */

/**
 * Display an editable tag list
 * (individual tags can be removed)
 * @param {TagListProps} props
 * @returns {JSX.Element}
 */
export const TagList = ({ selected = [], onRemove }) => {
	const remove = (label) => (evt) => {
		if (typeof onRemove === "function") {
			onRemove(label);
		}
	};
	return (
		<HStack spacing={4}>
			{selected.map((label) => (
				<Tag
					size="md"
					key={label}
					borderRadius="full"
					variant="solid"
					bgColor="#788896"
					color="white"
				>
					<TagLabel>{label}</TagLabel>
					<TagCloseButton onClick={remove(label)} />
				</Tag>
			))}
		</HStack>
	);
};
