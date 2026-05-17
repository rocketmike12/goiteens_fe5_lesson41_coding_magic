import { useState } from "react";

import { LineSection } from "../LineSection/LineSection";
import { Container } from "../Container/Container";
import { ButtonInput } from "../ButtonInput/ButtonInput";
import { Notification } from "../Notification/Notification";

import styles from "./BirthYear.module.scss";

export const BirthYear = () => {
	const [year, setYear] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);

	const isLeap = () => {
		const parsedYear = Number(year);

		if (Number.isNaN(parsedYear)) {
			return false;
		}

		return parsedYear % 4 === 0;
	};

	const handleSubmit = (value: string) => {
		setYear(value);
		setIsError(!isLeap());
		setMessage(isLeap() ? "Ви народилися у високосний рік!" : "Ви народилися не у високосний рік!");
	};

	return (
		<LineSection>
			<Container>
				<h2 className={styles["birth-year-check__title"]}>Перевір в який рік ти народився</h2>

				<div className={styles["birth-year-check__wrapper"]}>
					<ButtonInput type="number" placeholder="Enter your birth year" onSubmit={handleSubmit} />
					<Notification error={isError}>{message}</Notification>
				</div>
			</Container>
		</LineSection>
	);
};
