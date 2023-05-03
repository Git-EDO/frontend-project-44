import readlineSync from 'readline-sync';

const runGame = (description, getRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  const MAX_ROUNDS_COUNT = 3;

  for (let currentRound = 0; currentRound < MAX_ROUNDS_COUNT; currentRound += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer is: ').trim().toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
