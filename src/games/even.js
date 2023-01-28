import { startGame, getRandomNumber } from '../index.js';

const getCorrectAnswerByCondition = (number) => (number % 2 === 0 ? 'yes' : 'no');
const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  startGame(generalQuestion, getRandomNumber.bind(null, 1, 30), getCorrectAnswerByCondition);
};
export default startEvenGame;
