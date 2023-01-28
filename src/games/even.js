import { startGame } from '../index.js';

const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  startGame(generalQuestion, getRandomNumber.bind(null, 1, 30), getCorrectAnswer);
};
export default startEvenGame;
