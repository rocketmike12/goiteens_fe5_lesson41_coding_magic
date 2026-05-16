import { useState } from "react";

import searchIcon from "../../img/search.svg";

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

	const handleSubmit = () => {
		setIsError(!isLeap());
		setMessage(isLeap() ? "Ви народилися у високосний рік!" : "Ви народилися не у високосний рік!");
	};

	return (
		<section className={styles["birth-year-check"]}>
			<div className={styles["birth-year-check__container"]}>
				<h2 className={styles["birth-year-check__title"]}>Перевір в який рік ти народився</h2>

				<div className={styles["birth-year-check__bottom-wrapper"]}>
					<div className={styles["birth-year-check__input-wrapper"]}>
						<input
							type="number"
							placeholder="Введіть рік народження"
							onChange={(e) => {
								setYear(e.currentTarget.value);
							}}
							className={styles["birth-year-check__input"]}
						/>

						<button type="button" onClick={handleSubmit} className={styles["birth-year-check__button"]} aria-label="Перевірити рік">
							<img src={searchIcon} className={styles["birth-year-check__button-icon"]} />
						</button>
					</div>

					<p
						className={`
                            ${styles["birth-year-check__text"]}
                            ${isError ? styles["birth-year-check__text--error"] : ""}
                        `}
					>
						{message}
					</p>
				</div>
			</div>
		</section>
	);
};
