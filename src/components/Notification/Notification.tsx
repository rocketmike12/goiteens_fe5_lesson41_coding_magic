import type { NotificationProps } from "./Notification.types.ts";

import styles from "./Notification.module.scss";

export const Notification = ({ status, children }: NotificationProps) => {
	return <p className={`${styles["notification"]} ${styles[`notification--${status}`]}`}>{children}</p>;
};
