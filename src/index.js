import readlineSync from 'readline-sync';

export const gameInfo = {
  username: '',
  maxRepetitionNumber: 3,
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

export const startGame = (generalQuestion, getGameSources) => {
  greeting();
  printText(generalQuestion);
  while (gameInfo.maxRepetitionNumber > 0) {
    const [questionCondition, correctAnswer] = getGameSources();
    askQuestion(questionCondition);
    console.log(correctAnswer);
    const userAnswer = getUserAnswer();
    if (userAnswer !== correctAnswer) {
      printText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${gameInfo.username}!`);
      return;
    }
    printText('Correct!');
    gameInfo.maxRepetitionNumber -= 1;
  }
  printText(`Congratulations, ${gameInfo.username}!`);
};
