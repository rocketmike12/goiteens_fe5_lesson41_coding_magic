import type { ReactNode } from "react";

export type NotificationProps = {
	status: "right" | "wrong" | "neutral";
	children: ReactNode;
};
