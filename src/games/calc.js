import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '*', '-'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const generalQuestion = 'What is the result of the expression?';

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return Number(firstNumber) + Number(secondNumber);
    case '-':
      return Number(firstNumber) - Number(secondNumber);
    case '*':
      return Number(firstNumber) * Number(secondNumber);
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getGameSources = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const randomOperator = getRandomOperator();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2, randomOperator);

  return [question, correctAnswer.toString()];
};

const startCalcGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startCalcGame;
