let progression = [];
let fakeProgression = [];
let progressionElementIndex = 0;

export const gameRules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export function generateFakeProgression() {
  fakeProgression = [...progression];
  progressionElementIndex = Math.floor(Math.random() * 9);
  fakeProgression[progressionElementIndex] = '..';
  return fakeProgression.join(' ');
}

export function generateNewQuestion() {
  progression = [];
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const randomIncrement = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < 9; i += 1) {
    progression.push(randomNumber);
    randomNumber += randomIncrement;
  }
  generateFakeProgression();
  return fakeProgression.join(' ');
}

export function generateCorrectAnswer() {
  return progression[progressionElementIndex];
}
