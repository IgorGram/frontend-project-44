import { startGame } from '../index.js';

const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

const getRandomOperator = () => {
  const operators = ['+', '*', '-'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getCorrectAnswer = (expression) => {
  const [firstOperand, operator, secondOperand] = expression.split(' ');

  if (operator === '+') {
    return Number(firstOperand) + Number(secondOperand);
  }
  if (operator === '-') {
    return Number(firstOperand) - Number(secondOperand);
  }
  if (operator === '*') {
    return Number(firstOperand) * Number(secondOperand);
  }
};

const generalQuestion = 'What is the result of the expression?';
const getQuestionCondition = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const randomOperator = getRandomOperator();

  return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
};

const startCalcGame = () => {
  startGame(generalQuestion, getQuestionCondition, getCorrectAnswer);
};
export default startCalcGame;
