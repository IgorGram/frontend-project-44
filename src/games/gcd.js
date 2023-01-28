import { startGame } from '../index.js';

const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

const getQuestionCondition = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);

  return `${randomNumber1} ${randomNumber2}`;
};

const getCorrectAnswerByCondition = (expression) => {
  let firstOperand = Number(expression.split(' ')[0]);
  let secondOperand = Number(expression.split(' ')[1]);
  let gcd;

  while (firstOperand !== secondOperand) {
    if (firstOperand > secondOperand) {
      firstOperand -= secondOperand;
    } else {
      secondOperand -= firstOperand;
    }
  }
  gcd = firstOperand;
  return gcd;
};
const generalQuestion = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => {
  startGame(generalQuestion, getQuestionCondition, getCorrectAnswerByCondition);
};
export default startGcdGame;
