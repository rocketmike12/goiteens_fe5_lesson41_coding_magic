import type { NotificationProps } from "./Notification.types.ts";

import styles from "./Notification.module.scss";

export const Notification = ({ type, status, children }: NotificationProps) => {
	return <p className={`${styles["notification"]} ${styles[`notification--type--${type}`]} ${styles[`notification--status--${status}`]}`}>{children}</p>;
};
