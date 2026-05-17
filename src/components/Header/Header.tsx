import { useState, type ChangeEvent } from "react";

import { Container } from "../Container/Container";

import Logo from "/src/img/logo.svg?react";

import styles from "./Header.module.scss";

export const Header = function () {
	const handleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		if (e.currentTarget.checked) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<>
			<header className={styles["header"]}>
				<Container>
					<Logo className={styles["logo"]} />
					<nav className={styles["header-nav"]}>
						<a className={styles["header-nav-link"]} href="">
							Інтерактив
						</a>
						<a className={styles["header-nav-link"]} href="">
							Наша команда
						</a>
						<a className={styles["header-nav-link"]} href="">
							Контакти
						</a>
					</nav>
					<ul className={styles["header-settings-list"]}>
						<li className={styles["header-settings-list-item"]}>
							<label className={styles["header-settings-list-switch"]}>
								<input type="checkbox" className={styles["header-settings-list-switch-checkbox"]} onChange={handleDarkMode} />
								<span className={styles["header-settings-list-switch-slider"]}></span>
							</label>
						</li>
						<li className={styles["header-settings-list-item"]}>
							<p className={styles["header-settings-list-text"]}>Вітаємо, User!</p>
						</li>
					</ul>
				</Container>
			</header>
		</>
	);
};
