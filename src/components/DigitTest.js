import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Title } from "./base/Typography";
import { TagList } from "./TagList";

const DigitTest = () => {
	// We must store the selected digits
	const [selectedDigits, setSelectedDigits] = useState([1]);
	const [sum, updateSum] = useState(0);

	// Anytime the selection is updated, we must update the sum
	useEffect(() => {
		updateSum(selectedDigits.reduce((sum, d) => sum + d, 0));
	}, [selectedDigits]);

	// Utility method to add and remove digits from the selection
	const addDigit = (d) => {
		try {
			const digitValue = Number.parseInt(d, 10); // It must be an integer
			if (!selectedDigits.find((x) => x === digitValue)) {
				setSelectedDigits([digitValue, ...selectedDigits]);
			}
		} catch (err) {
			console.error(`addDigit(${d}) failed`, error);
		}
	};
	const removeDigit = (d) => {
		try {
			const digitValue = Number.parseInt(d, 10); // It must be an integer
			setSelectedDigits(selectedDigits.filter((x) => x !== digitValue));
		} catch (err) {
			console.error(`addDigit(${d}) failed`, error);
		}
	};

	return (
		<Box className="digit-sum-calculator">
			<Title>Select Digits to create a sum</Title>

			<Title as="h3">Sum</Title>
			<code>{sum}</code>

			<Title as="h3">Selected digits</Title>
			{sum === 0 ? (
				<Box>You have not selected any digit</Box>
			) : (
				<TagList selected={selectedDigits} onRemove={removeDigit} />
			)}
		</Box>
	);
};

export default DigitTest;
