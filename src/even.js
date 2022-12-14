import readlineSync from 'readline-sync';

const info = {
  username: '',
  maxRepetitionNumber: 3,
};

const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

const printText = (text) => {
  console.log(text);
};

const greeting = () => {
  info.username = readlineSync.question('May I have your name? ');
  printText(`Hello, ${info.username}`);
  printText('Answer "yes" if number even otherwise answer "no".');
};

const startEvenGame = () => {
  greeting();
  while (info.maxRepetitionNumber > 0) {
    const randomNumber = getRandomNumber(1, 30);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    printText(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      printText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let\'s try again, ${info.username}!`);
      return;
    }
    printText('Correct!');
    info.maxRepetitionNumber -= 1;
  }
  printText(`Congratulations, ${info.username}`);
};
export default startEvenGame;
