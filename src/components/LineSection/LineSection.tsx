import type { LineSectionProps } from "./LineSection.types";

import styles from "./LineSection.module.scss";

export const LineSection = ({ children }: LineSectionProps) => {
	return <section className={styles["line-section"]}>{children}</section>;
};
