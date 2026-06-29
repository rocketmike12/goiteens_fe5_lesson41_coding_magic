import { useState } from "react";

import { LineSection } from "../LineSection/LineSection.tsx";
import { Container } from "../Container/Container.tsx";
import { Notification } from "../Notification/Notification.tsx";

import type { NotificationStatus } from "../Notification/Notification.types.ts";

import { type Choice, choices, choiceIcons, choiceLabels } from "./RockPaperScissors.types.ts";

import styles from "./RockPaperScissors.module.scss";

export const RockPaperScissors = () => {
	const [userScore, setUserScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	const [message, setMessage] = useState("");
	const [notificationStatus, setNotificationStatus] = useState<NotificationStatus>("right");

	const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

	const getComputerChoice = (): Choice => {
		const randomIndex = Math.floor(Math.random() * choices.length);

		return choices[randomIndex];
	};

	const handleChoice = (userChoice: Choice) => {
		const generatedChoice = getComputerChoice();

		setComputerChoice(generatedChoice);

		if (userChoice === generatedChoice) {
			setNotificationStatus("neutral");
			setMessage("Tie!");

			return;
		}

		const isWin = (userChoice === "rock" && generatedChoice === "scissors") || (userChoice === "scissors" && generatedChoice === "paper") || (userChoice === "paper" && generatedChoice === "rock");

		if (isWin) {
			setUserScore((prev) => prev + 1);

			setNotificationStatus("right");
			setMessage("You win!");

			return;
		}

		setComputerScore((prev) => prev + 1);

		setNotificationStatus("wrong");
		setMessage("Computer wins!");
	};

	return (
		<LineSection>
			<Container>
				<div className={styles["rps__game"]}>
					<div className={styles["rps__content"]}>
						<h1 className={styles["rps__title"]}>Rock - paper - scissors</h1>

						<div className={styles["rps__choices"]}>
							{choices.map((choice) => {
								const Icon = choiceIcons[choice];
								return (
									<>
										<button key={choice} type="button" className={styles["rps__choice__button"]} onClick={() => handleChoice(choice)}>
											<Icon className={styles["rps__choice__icon"]} />
										</button>
									</>
								);
							})}
						</div>

						<div className={styles["rps__results"]}>
							<Notification type="center" status={notificationStatus}>
								{message}
							</Notification>

							<p className={styles["rps__computer-choice"]}>{computerChoice ? `Computer choice: ${choiceLabels[computerChoice]}` : "Computer choice"}</p>
						</div>
					</div>

					<div className={styles["rps__score"]}>
						<p className={styles["rps__score"]}>Computer: {computerScore}</p>

						<p className={styles["rps__score"]}>You: {userScore}</p>
					</div>
				</div>
			</Container>
		</LineSection>
	);
};
