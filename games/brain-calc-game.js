import { getRandomNumber } from '../src/utils.js';

export const gameRules = 'What is the result of the expression?';

export function generateNewQuestion() {
  const signs = ['+', '-', '*'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = signs[Math.floor(Math.random() * 3)];
  return `${num1} ${sign} ${num2}`;
}

export function generateCorrectAnswer(expression) {
  const [operand1, operator, operand2] = expression.split(' ');
  const num1 = Number(operand1);
  const num2 = Number(operand2);
  switch (operator) {
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
