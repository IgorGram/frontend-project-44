import { startGame, getRandomNumber, getGCD } from '../index.js';

const getCorrectAnswer = (firstNumber, secondNumber) => {
  const gcd = getGCD(firstNumber, secondNumber);
  return gcd.toString();
};
const generalQuestion = 'Find the greatest common divisor of given numbers.';

const getGameSources = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const questionCondition = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);

  return [questionCondition, correctAnswer];
};

const startGcdGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startGcdGame;
