import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

function generateNewProgression(number, increment, maxLength) {
  const progression = [];
  let num = number;
  for (let i = 0; i < maxLength; i += 1) {
    progression.push(num);
    num += increment;
  }
  return progression;
}

function getRound() {
  const randomNumber = getRandomNumber(1, 100);
  const randomIncrement = getRandomNumber(1, 10);
  const progressionLength = 9;
  const trueProgression = generateNewProgression(randomNumber, randomIncrement, progressionLength);

  const randomProgressionIndexToHide = getRandomNumber(1, progressionLength);
  const fakeProgression = [...trueProgression];
  fakeProgression[randomProgressionIndexToHide] = '..';

  const question = fakeProgression.join(' ');
  const answer = String(trueProgression[randomProgressionIndexToHide]);
  return [question, answer];
}

function startProgressionGame() {
  return runGame(gameRules, getRound);
}

export default startProgressionGame;
