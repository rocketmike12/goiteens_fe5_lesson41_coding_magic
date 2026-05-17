import { LineSection } from "../LineSection/LineSection";
import { Container } from "../Container/Container";

import styles from "./Hero.module.scss";

export const Hero = function () {
	return (
		<>
			<LineSection>
				<Container>
					<h1 className={styles["hero-title"]}>Популярні інтерактивні ігри</h1>
				</Container>
			</LineSection>
		</>
	);
};
