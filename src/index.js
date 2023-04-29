import readlineSync from 'readline-sync';
import { showMessage, ROUNDS_COUNT } from './utils.js';

function runGame(rules, newQuestion, newCorrectAnswer) {
  showMessage('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  showMessage(rules);

  let currentUserAnswer = '';
  let correctAnswersCount = 0;
  let correctAnswer = 0;

  function askQuestion(question) {
    showMessage(`Question: ${question}`);
    correctAnswer = String(newCorrectAnswer(question));
    const userAnswer = readlineSync
      .question('Your answer is: ')
      .trim()
      .toLowerCase();
    currentUserAnswer = userAnswer;
    return correctAnswer === userAnswer;
  }

  while (correctAnswersCount < ROUNDS_COUNT) {
    if (askQuestion(newQuestion())) {
      showMessage('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export default runGame;
