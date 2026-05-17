import type { SubmitEventHandler } from "react";

import type { ButtonInputProps } from "./ButtonInput.types";

import SearchIcon from "../../img/search.svg?react";

import styles from "./ButtonInput.module.scss";

export const ButtonInput = ({ type, placeholder, onSubmit }: ButtonInputProps) => {
	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const form = e.currentTarget as typeof e.currentTarget & {
			input: { value: string };
		};

		onSubmit(form.input.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles["button-input"]}>
				<input type={type} name="input" placeholder={placeholder} className={styles["button-input__input"]} />

				<button type="submit" className={styles["button-input__button"]}>
					<SearchIcon className={styles["button-input__button__icon"]} />
				</button>
			</form>
		</>
	);
};
