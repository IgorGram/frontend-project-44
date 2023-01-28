import { startGame, getRandomNumber } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '*', '-'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getCorrectAnswerByCondition = (expression) => {
  const [firstOperand, operator, secondOperand] = expression.split(' ');

  if (operator === '+') {
    return Number(firstOperand) + Number(secondOperand);
  }
  if (operator === '-') {
    return Number(firstOperand) - Number(secondOperand);
  }
  return Number(firstOperand) * Number(secondOperand);
};

const generalQuestion = 'What is the result of the expression?';
const getQuestionCondition = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const randomOperator = getRandomOperator();

  return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
};

const startCalcGame = () => {
  startGame(generalQuestion, getQuestionCondition, getCorrectAnswerByCondition);
};
export default startCalcGame;
