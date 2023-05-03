import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startPrimeGame = () => {
  return runGame(gameRules, getRound);
};

export default startPrimeGame;
