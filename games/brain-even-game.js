import { isEven, getRandomNumber } from '../src/utils.js';

export const gameRules =
  'Answer "yes" if the number is even, otherwise answer "no".';

export function generateNewQuestion() {
  return getRandomNumber();
}

export function generateCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}
