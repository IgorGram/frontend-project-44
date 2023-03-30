import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

export const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
};

export const startGame = (generalQuestion, getGameSources) => {
  let username = '';
  let maxRepetitionNumber = 3;

  console.log('Welcome to the Brain Games!');
  username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(generalQuestion);
  while (maxRepetitionNumber > 0) {
    const [questionCondition, correctAnswer] = getGameSources();
    askQuestion(questionCondition);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
    maxRepetitionNumber -= 1;
  }
  console.log(`Congratulations, ${username}!`);
};

export const isEven = (number) => number % 2 === 0;

export const getGCD = (firstNumber, secondNumber) => {
  let firstOperand = firstNumber;
  let secondOperand = secondNumber;

  while (firstOperand !== secondOperand) {
    if (firstOperand > secondOperand) {
      firstOperand -= secondOperand;
    } else {
      secondOperand -= firstOperand;
    }
  }
  return firstOperand;
};
