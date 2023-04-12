import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameSources = () => {
  const number = getRandomNumber(1, 30);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

const startEvenGame = () => {
  startGame(description, getGameSources);
};
export default startEvenGame;
