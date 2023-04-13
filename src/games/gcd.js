import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (firstNumber, secondNumber) => {
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

const description = 'Find the greatest common divisor of given numbers.';

const getGameSources = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGCD(randomNumber1, randomNumber2).toString();

  return [question, correctAnswer];
};

const startGcdGame = () => {
  startGame(description, getGameSources);
};
export default startGcdGame;
