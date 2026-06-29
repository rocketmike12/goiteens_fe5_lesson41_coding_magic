import { useState } from "react";

import { LineSection } from "../LineSection/LineSection";
import { Container } from "../Container/Container";
import { ButtonInput } from "../ButtonInput/ButtonInput";
import { Notification } from "../Notification/Notification";

import styles from "./BirthYear.module.scss";

export const BirthYear = () => {
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);

	const isLeap = function (year: string) {
		const parsedYear = Number(year);

		if (Number.isNaN(parsedYear)) {
			return false;
		}

		return parsedYear % 4 === 0;
	};

	const handleSubmit = (value: string) => {
		setIsError(!isLeap(value));
		setMessage(isLeap(value) ? "You were born in a leap year!" : "You were born in a regular year!");
	};

	return (
		<LineSection>
			<Container>
				<h2 className={styles["birth-year-check__title"]}>Check which year you were born in</h2>

				<div className={styles["birth-year-check__wrapper"]}>
					<ButtonInput type="number" placeholder="Enter your birth year" onSubmit={handleSubmit} />
					<Notification type="left" status={isError ? "wrong" : "right"}>
						{message}
					</Notification>
				</div>
			</Container>
		</LineSection>
	);
};
