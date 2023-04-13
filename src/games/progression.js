import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (step, firstEl, numberOfItems) => {
  const progression = [firstEl];
  for (let i = 2; i <= numberOfItems; i += 1) {
    progression.push(firstEl + step * (i - 1));
  }

  return progression;
};

const generalQuestion = 'What number is missing in the progression?';

const getGameSources = () => {
  const hidingElementPosition = getRandomNumber(0, 8);
  const step = getRandomNumber(1, 30);
  const firstEl = getRandomNumber(1, 30);
  const numberOfItems = 10;
  const progressionArr = generateProgression(step, firstEl, numberOfItems);
  const correctAnswer = progressionArr[hidingElementPosition];

  progressionArr[hidingElementPosition] = '..';
  const question = progressionArr.join(' ');

  return [question, correctAnswer.toString()];
};

const startProgressionGame = () => {
  startGame(generalQuestion, getGameSources);
};
export default startProgressionGame;
