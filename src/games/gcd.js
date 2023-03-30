import { startGame, getRandomNumber } from '../index.js';

const getCorrectAnswer = (firstNumber, secondNumber) => {
  let firstOperand = firstNumber;
  let secondOperand = secondNumber;

  while (firstOperand !== secondOperand) {
    if (firstOperand > secondOperand) {
      firstOperand -= secondOperand;
    } else {
      secondOperand -= firstOperand;
    }
  }
  return firstOperand;
};
const generalQuestion = 'Find the greatest common divisor of given numbers.';

const getGameSources = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const questionCondition = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);

  return [questionCondition, correctAnswer.toString()];
};

const startGcdGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startGcdGame;
