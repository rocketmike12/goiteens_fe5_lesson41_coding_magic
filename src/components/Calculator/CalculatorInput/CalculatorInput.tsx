import type { CalculatorInputProps } from "./CalculatorInput.types.ts";

import { Input } from "../../Input/Input.tsx";

export const CalculatorInput = ({ value, onChange }: CalculatorInputProps) => {
	return (
		<>
			<Input type="number" placeholder="Enter number" value={value} onChange={onChange} />
		</>
	);
};
