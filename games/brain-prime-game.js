import { isPrime, getRandomNumber } from '../src/utils.js';

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function generateNewQuestion() {
  return getRandomNumber();
}

export function generateCorrectAnswer(number) {
  return isPrime(number) ? 'yes' : 'no';
}
