import readlineSync from 'readline-sync';

export const ROUNDS_COUNT = 3;
export let USER_NAME;

export function showMessage(message) {
  return console.log(message);
}

export function getUserName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  USER_NAME = userName;
}
