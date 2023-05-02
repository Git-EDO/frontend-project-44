import readlineSync from 'readline-sync';

function runGame(rules, getRound) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(rules);

  for (let roundsCount = 0; roundsCount < 3; roundsCount += 1) {
    const newRound = getRound();
    console.log(`Question: ${newRound[0]}`);
    const userAnswer = readlineSync.question('Your answer is: ').trim().toLowerCase();
    const correctAnswer = newRound[1];

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (roundsCount === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

export default runGame;
