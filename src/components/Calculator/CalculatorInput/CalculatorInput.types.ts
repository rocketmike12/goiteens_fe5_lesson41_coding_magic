import type { ChangeEventHandler } from "react"

export type CalculatorInputProps = {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}
