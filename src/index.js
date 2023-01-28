import readlineSync from 'readline-sync';

export const gameInfo = {
  username: '',
  maxRepetitionNumber: 3,
};

const answersMap = {
  yes: 1,
  no: 0,
};

const printText = (text) => {
  console.log(text);
};

export const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

export const greeting = () => {
  printText('Welcome to the Brain Games!');
  gameInfo.username = readlineSync.question('May I have your name? ');
  printText(`Hello, ${gameInfo.username}`);
};

export const askQuestion = (expression) => {
  printText(`Question: ${expression}`);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');
const userAnswerToNum = (answer) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(Number(answer))) {
    return answersMap[answer];
  }
  return Number(answer);
};

export const startGame = (generalQuestion, getQuestionCondition, getCorrectAnswer) => {
  greeting();
  printText(generalQuestion);
  while (gameInfo.maxRepetitionNumber > 0) {
    const questionCondition = getQuestionCondition();
    askQuestion(questionCondition);
    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(questionCondition);
    if (userAnswerToNum(userAnswer) !== userAnswerToNum(correctAnswer)) {
      printText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${gameInfo.username}!`);
      return;
    }
    printText('Correct!');
    gameInfo.maxRepetitionNumber -= 1;
  }
  printText(`Congratulations, ${gameInfo.username}!`);
};
