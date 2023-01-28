import { startGame, getRandomNumber } from '../index.js';

const getQuestionCondition = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);

  return `${randomNumber1} ${randomNumber2}`;
};

const getCorrectAnswerByCondition = (expression) => {
  let firstOperand = Number(expression.split(' ')[0]);
  let secondOperand = Number(expression.split(' ')[1]);

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

const startGcdGame = () => {
  startGame(generalQuestion, getQuestionCondition, getCorrectAnswerByCondition);
};
export default startGcdGame;
