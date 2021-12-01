import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useEffect, useState } from "react";
import { CodeBox, Title } from "./base/Typography";
import { TagList } from "./TagList";

const availableDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DigitTest = () => {
	// We store the selected digits
	const [selectedDigits, setSelectedDigits] = useState([]);
	const [sum, updateSum] = useState(0);

	// Anytime the selection is updated, we must update the sum
	useEffect(() => {
		updateSum(selectedDigits.reduce((sum, d) => sum + d, 0));
	}, [selectedDigits]);

	// Utility methods to add and remove valid digits from the selection
	const isSelected = (d) => selectedDigits.find((x) => x === d);
	const addDigit = (evt) => {
		try {
			const digitValue = Number.parseInt(evt.target.value, 10); // It must be an integer
			if (digitValue && !isSelected(digitValue)) {
				// NaN is excluded here
				setSelectedDigits(
					// Add the new digit and re-sort the array
					[digitValue, ...selectedDigits].sort((a, b) => (a > b ? 1 : -1))
				);
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
			<Select placeholder="Select a digit" onChange={addDigit}>
				{availableDigits.map((d) => (
					<option key={d} value={d} disabled={isSelected(d)}>
						{d}
					</option>
				))}
			</Select>

			<Title as="h3">Sum</Title>
			<CodeBox>{sum}</CodeBox>

			<Title as="h3">Selected digits</Title>
			{sum === 0 ? (
				<CodeBox error={true}>You have not selected any digit</CodeBox>
			) : (
				<TagList selected={selectedDigits} onRemove={removeDigit} />
			)}
		</Box>
	);
};

export default DigitTest;
