import { startGame, getRandomNumber } from '../index.js';

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
  const questionCondition = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(questionCondition);

  return [questionCondition, correctAnswer];
};

const startPrimeGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startPrimeGame;
