import { startGame, getRandomNumber } from '../index.js';

const generateProgression = () => {
  const step = getRandomNumber(1, 30);
  const firstEl = getRandomNumber(1, 30);
  const progression = [firstEl];
  for (let i = 2; i <= 10; i += 1) {
    progression.push(firstEl + step * (i - 1));
  }

  return progression.join(' ');
};

const getQuestionCondition = () => {
  const hidingElementPosition = getRandomNumber(0, 8);
  const progressionArr = generateProgression().split(' ');
  progressionArr[hidingElementPosition] = '..';

  return progressionArr.join(' ');
};

const getCorrectAnswerByCondition = (expression) => {
  const progressionArr = expression.split(' ');
  const hidingElementPosition = expression.split(' ').indexOf('..');
  let delta;
  if (hidingElementPosition === 0) {
    delta = progressionArr[hidingElementPosition + 2] - progressionArr[hidingElementPosition + 1];
    return progressionArr[hidingElementPosition + 1] - delta;
  }

  if (hidingElementPosition === 9) {
    delta = progressionArr[hidingElementPosition - 1]
        - progressionArr[hidingElementPosition - 2];
    return Number(progressionArr[hidingElementPosition - 1]) + delta;
  }

  return (Number(progressionArr[hidingElementPosition + 1])
      + Number(progressionArr[hidingElementPosition - 1])) / 2;
};
const generalQuestion = 'What number is missing in the progression?';

const startProgressionGame = () => {
  startGame(generalQuestion, getQuestionCondition, getCorrectAnswerByCondition);
};
export default startProgressionGame;
