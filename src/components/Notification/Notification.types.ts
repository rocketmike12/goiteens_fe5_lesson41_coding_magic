import type { ReactNode } from "react";

export type NotificationStatus = "right" | "wrong" | "neutral";
export type NotificationType = "left" | "center" | "right";

export type NotificationProps = {
	type: NotificationType;
	status: NotificationStatus;
	children: ReactNode;
};
