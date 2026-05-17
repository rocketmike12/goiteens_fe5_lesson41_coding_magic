import type { NotificationProps } from "./Notification.types.ts";

import styles from "./Notification.module.scss";

export const Notification = ({ error, children }: NotificationProps) => {
	return <p className={`${styles["notification"]} ${error ? styles["notification--error"] : ""}`}>{children}</p>;
};
