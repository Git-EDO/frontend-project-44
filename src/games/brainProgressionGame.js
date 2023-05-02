import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

function generateFakeProgression(progression, index) {
  const fakeProgression = [...progression];
  fakeProgression[index] = '..';
  return fakeProgression;
}

function generateNewProgression(number, increment) {
  const progression = [];
  let num = number;
  for (let i = 0; i < 9; i += 1) {
    progression.push(num);
    num += increment;
  }
  return progression;
}

function getRound() {
  const randomNumber = getRandomNumber(1, 100);
  const randomIncrement = getRandomNumber(1, 10);
  const trueProgression = generateNewProgression(randomNumber, randomIncrement);

  const randomProgressionIndexToHide = getRandomNumber(1, 9);
  const fakeProgression = generateFakeProgression(trueProgression, randomProgressionIndexToHide);

  const question = fakeProgression.join(' ');
  const answer = trueProgression[randomProgressionIndexToHide];
  return [question, answer];
}

function startProgressionGame() {
  return runGame(gameRules, getRound);
}

export default startProgressionGame;
