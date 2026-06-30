import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import Logo from "../../img/logo.svg?react";

import styles from "./Footer.module.scss";

export const Footer = function () {
	return (
		<footer className={styles["footer"]}>
			<Container>
				<a href="" className={styles["logo"]}>
					<Logo />
				</a>
				<ul className={styles["footer__social-list"]}>
					<li className={styles["footer__social-list__item"]}>
						<a href="" className={styles["footer__social-list__link"]}>
							Тел: +38 (123) 456 78 90
						</a>
					</li>
					<li className={styles["footer__social-list-item"]}>
						<a href="" className={styles["footer__social-list__link"]}>
							E-Mail: codingmagic@gmail.com
						</a>
					</li>
					<li className={styles["footer__social-list__item"]}>
						<a href="" className={styles["footer__social-list__link"]}>
							Facebook: CodingMagic
						</a>
					</li>
					<li className={styles["footer__social-list__item"]}>
						<a href="" className={styles["footer__social-list__link"]}>
							Twitter: CodingMagic
						</a>
					</li>
					<li className={styles["footer__social-list__item"]}>
						<a href="" className={styles["footer__social-list__link"]}>
							Instagram: CodingMagic
						</a>
					</li>
				</ul>
				<div className={styles["footer__subscription"]}>
					<div className={styles["footer__subscription__container"]}>
						<Input type="text" placeholder="Your email" />
						<button className={styles["footer__subscription__button"]}>Subscribe</button>
					</div>
					<p className={styles["footer__subscription__text"]}>*By subscribing, you will receive info about website updates</p>
				</div>
			</Container>
		</footer>
	);
};
