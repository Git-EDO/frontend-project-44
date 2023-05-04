import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateNewProgression = (number, increment, maxLength) => {
  const progression = [];
  let num = number;
  for (let i = 0; i < maxLength; i += 1) {
    progression.push(num);
    num += increment;
  }
  return progression;
};

const getRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const randomIncrement = getRandomNumber(1, 10);
  const progressionLength = 9;
  const progression = generateNewProgression(randomNumber, randomIncrement, progressionLength);

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const answer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgressionGame = () => runGame(gameRules, getRound);

export default startProgressionGame;
