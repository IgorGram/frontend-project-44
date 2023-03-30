import { startGame, getRandomNumber } from '../index.js';

const generateProgression = (step, firstEl) => {
  const progression = [firstEl];
  for (let i = 2; i <= 10; i += 1) {
    progression.push(firstEl + step * (i - 1));
  }

  return progression;
};

const generalQuestion = 'What number is missing in the progression?';

const getGameSources = () => {
  const hidingElementPosition = getRandomNumber(0, 8);
  const step = getRandomNumber(1, 30);
  const firstEl = getRandomNumber(1, 30);
  const progressionArr = generateProgression(step, firstEl);
  const correctAnswer = progressionArr[hidingElementPosition];

  progressionArr[hidingElementPosition] = '..';
  const questionCondition = progressionArr.join(' ');

  return [questionCondition, correctAnswer.toString()];
};

const startProgressionGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startProgressionGame;
