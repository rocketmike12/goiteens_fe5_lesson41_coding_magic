import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { BirthYear } from "./components/BirthYear/BirthYear";
import { GuessNumber } from "./components/GuessNumber/GuessNumber";
import { RockPaperScissors } from "./components/RockPaperScissors/RockPaperScissors";
import { Calculator } from "./components/Calculator/Calculator";

export const App = function () {
	return (
		<>
			<Header />
			<Hero />
			<BirthYear />
			<GuessNumber />
			<RockPaperScissors />
			<Calculator />
		</>
	);
};
