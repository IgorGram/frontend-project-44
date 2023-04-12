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

const getCorrectAnswer = (firstNumber, secondNumber) => {
  const gcd = getGCD(firstNumber, secondNumber);
  return gcd.toString();
};
const description = 'Find the greatest common divisor of given numbers.';

const getGameSources = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const questionCondition = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);

  return [questionCondition, correctAnswer];
};

const startGcdGame = () => {
  startGame(description, getGameSources);
};
export default startGcdGame;
