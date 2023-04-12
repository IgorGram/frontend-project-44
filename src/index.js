import readlineSync from 'readline-sync';

export default (generalQuestion, getGameSources) => {
  let repetitionsCount = 3;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(generalQuestion);
  while (repetitionsCount > 0) {
    const [questionCondition, correctAnswer] = getGameSources();
    console.log(`Question: ${questionCondition}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
    repetitionsCount -= 1;
  }
  console.log(`Congratulations, ${username}!`);
};
