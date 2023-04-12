import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getCorrectAnswer = (number) => {
  if (number === 1) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameSources = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(number);

  return [number, correctAnswer];
};

const startPrimeGame = () => {
  startGame(description, getGameSources);
};
export default startPrimeGame;
