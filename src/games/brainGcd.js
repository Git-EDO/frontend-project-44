import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

function calculateGCD(num1, num2) {
  let newNumber1 = num1;
  let newNumber2 = num2;
  while (newNumber2 !== 0) {
    const remainder = newNumber1 % newNumber2;
    newNumber1 = newNumber2;
    newNumber2 = remainder;
  }
  return newNumber1;
}

function getRound() {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = [number1, number2].join(' ');
  const answer = String(calculateGCD(number1, number2));

  return [question, answer];
}

function startGCDGame() {
  return runGame(gameRules, getRound);
}

export default startGCDGame;
