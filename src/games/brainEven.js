import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  return runGame(gameRules, getRound);
};

export default startEvenGame;
