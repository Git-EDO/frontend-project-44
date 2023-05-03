import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`'${operator}' is unsupported operator`);
  }
};

const getRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(1, operators.length)];

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, operator, number2));
  return [question, answer];
};

const startCalcGame = () => {
  return runGame(gameRules, getRound);
};

export default startCalcGame;
