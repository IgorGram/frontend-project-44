import { startGame, getRandomNumber } from '../index.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameSources = () => {
  const questionCondition = getRandomNumber(1, 30);
  const correctAnswer = getCorrectAnswer(questionCondition);

  return [questionCondition, correctAnswer];
};

const startEvenGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startEvenGame;
