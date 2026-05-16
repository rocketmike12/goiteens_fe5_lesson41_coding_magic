import { useState } from "react";

import styles from "./Calculator.module.scss";

export const Calculator = () => {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [operator, setOperator] = useState("");
	const [result, setResult] = useState("");

	const handleCalculate = () => {
		const firstNumber = Number(num1);
		const secondNumber = Number(num2);

		if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
			setResult("Error: two operands required");
			return;
		}

		if (!operator) {
			setResult("Error: operator required");
			return;
		}

		switch (operator) {
			case "+":
				setResult(`${firstNumber + secondNumber}`);
				break;

			case "-":
				setResult(`${firstNumber - secondNumber}`);
				break;

			case "*":
				setResult(`${firstNumber * secondNumber}`);
				break;

			case "/":
				if (secondNumber === 0) {
					setResult("Error: cannot divide by zero");
					return;
				}

				setResult(`${firstNumber / secondNumber}`);
				break;

			default:
				setResult("Error: operator required");
		}
	};

	const handleOperatorClick = (selectedOperator: string) => {
		setOperator(selectedOperator);
		setResult(`${num1 !== "" ? num1 : "x"} ${selectedOperator !== "" ? selectedOperator : "o"} ${num2 !== "" ? num2 : "y"}`);
	};

	return (
		<section className={styles["calculator"]}>
			<div className={styles["calculator__container"]}>
				<h2 className={styles["calculator__title"]}>Калькулятор</h2>

				<div className={styles["calculator__base"]}>
					<input
						type="number"
						placeholder="Enter number"
						value={num1}
						onChange={(e) => {
							setNum1(e.currentTarget.value);
							setResult(`${e.currentTarget.value !== "" ? e.currentTarget.value : "x"} ${operator !== "" ? operator : "o"} ${num2 !== "" ? num2 : "y"}`);
						}}
						className={styles["calculator__input"]}
					/>

					<div className={styles["calculator__operators"]}>
						<button
							type="button"
							onClick={() => {
								handleOperatorClick("+");
							}}
							className={styles["calculator__operator-button"]}
						>
							+
						</button>

						<button
							type="button"
							onClick={() => {
								handleOperatorClick("*");
							}}
							className={styles["calculator__operator-button"]}
						>
							*
						</button>

						<button
							type="button"
							onClick={() => {
								handleOperatorClick("-");
							}}
							className={styles["calculator__operator-button"]}
						>
							-
						</button>

						<button
							type="button"
							onClick={() => {
								handleOperatorClick("/");
							}}
							className={styles["calculator__operator-button"]}
						>
							/
						</button>
					</div>

					<input
						type="number"
						placeholder="Enter number"
						value={num2}
						onChange={(e) => {
							setNum2(e.currentTarget.value);
							setResult(`${num1 !== "" ? num1 : "x"} ${operator !== "" ? operator : "o"} ${e.currentTarget.value !== "" ? e.currentTarget.value : "y"}`);
						}}
						className={styles["calculator__input"]}
					/>

					<button type="button" onClick={handleCalculate} className={styles["calculator__equals-button"]}>
						=
					</button>

					<p className={styles["calculator__result"]}>{result || "x o y"}</p>
				</div>
			</div>
		</section>
	);
};
