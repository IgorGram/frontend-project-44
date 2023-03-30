import { startGame, getRandomNumber, isEven } from '../index.js';

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameSources = () => {
  const questionCondition = getRandomNumber(1, 30);
  const correctAnswer = isEven(questionCondition) ? 'yes' : 'no';

  return [questionCondition, correctAnswer];
};

const startEvenGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startEvenGame;
