import { getRandomNumber } from '../src/utils.js';

export const gameRules = 'Find the greatest common divisor of given numbers.';

export function generateNewQuestion() {
  return `${getRandomNumber()} ${getRandomNumber()}`;
}

export function generateCorrectAnswer(numbers) {
  const [num1, num2] = numbers.split(' ');
  let newNumber1 = Number(num1);
  let newNumber2 = Number(num2);
  while (newNumber2 !== 0) {
    const remainder = newNumber1 % newNumber2;
    newNumber1 = newNumber2;
    newNumber2 = remainder;
  }
  return newNumber1;
}
