import type { FC, SVGProps } from "react";

import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

export type Choice = "rock" | "paper" | "scissors";

export const choices: Choice[] = ["rock", "paper", "scissors"];

export const choiceLabels: Record<Choice, string> = {
	rock: "Rock",
	paper: "Paper",
	scissors: "Scissors"
};

export const choiceIcons: Record<Choice, FC<SVGProps<SVGSVGElement>>> = {
	rock: FaRegHandRock,
	paper: FaRegHandPaper,
	scissors: FaRegHandScissors
};
