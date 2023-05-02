import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

function calculateExpression(number1, sign, number2) {
  const num1 = number1;
  const num2 = number2;
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unsupported operator');
  }
}

function getRound() {
  const signs = ['+', '-', '*'];
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const sign = signs[getRandomNumber(1, 3)];

  const question = [num1, sign, num2].join(' ');
  const answer = calculateExpression(num1, sign, num2);
  return [question, answer];
}

function startCalcGame() {
  return runGame(gameRules, getRound);
}

export default startCalcGame;
