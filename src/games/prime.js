import { startGame, getRandomNumber } from '../index.js';

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getCorrectAnswerByCondition = (number) => {
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

const startPrimeGame = () => {
  startGame(generalQuestion, getRandomNumber.bind(null, 1, 100), getCorrectAnswerByCondition);
};
export default startPrimeGame;
