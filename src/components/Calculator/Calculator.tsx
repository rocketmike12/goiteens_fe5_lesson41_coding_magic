import { useState, type ChangeEvent } from "react";

import { LineSection } from "../LineSection/LineSection.tsx";
import { Container } from "../Container/Container.tsx";
import { CalculatorInput } from "./CalculatorInput/CalculatorInput.tsx";

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
        <>
            <LineSection>
                <Container>
                    <h2 className={styles["calculator__title"]}>Calculator</h2>

                    <div className={styles["calculator__base"]}>
                        <CalculatorInput
                            value={num1}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setNum1(e.currentTarget.value);
                                setResult(`${e.currentTarget.value !== "" ? e.currentTarget.value : "x"} ${operator !== "" ? operator : "o"} ${num2 !== "" ? num2 : "y"}`);
                            }}
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

                        <CalculatorInput
                            value={num2}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setNum2(e.currentTarget.value);
                                setResult(`${num1 !== "" ? num1 : "x"} ${operator !== "" ? operator : "o"} ${e.currentTarget.value !== "" ? e.currentTarget.value : "y"}`);
                            }}
                        />

                        <button type="button" onClick={handleCalculate} className={styles["calculator__equals-button"]}>
                            =
                        </button>

                        <p className={styles["calculator__result"]}>{result || "x o y"}</p>
                    </div>
                </Container>
            </LineSection>
        </>
    );
};
