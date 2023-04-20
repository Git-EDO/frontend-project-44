#!/usr/bin/env node

import readlineSync from "readline-sync";
import { showMessage, ROUNDS_COUNT } from "../src/index.js";

let user = "";
let currentUserAnswer = "";
let correctAnswers = 0;
let correctAnswer = 0;

showMessage("Welcome to the Brain Games!");
const getUserName = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}`);
  user = userName;
};
getUserName();
showMessage("Find the greatest common divisor of given numbers.");

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function findGCD(num1, num2) {
  let newNumber1 = num1;
  let newNumber2 = num2;
  while (newNumber2 !== 0) {
    const remainder = newNumber1 % newNumber2;
    newNumber1 = newNumber2;
    newNumber2 = remainder;
  }
  return newNumber1;
}

const gcdQuestion = (num1, num2) => {
  showMessage(`Question: ${num1} ${num2}`);
  correctAnswer = Number(findGCD(num1, num2));
  const userAnswer = Number(
    readlineSync.question(`Your answer is: `).trim().toLowerCase()
  );
  currentUserAnswer = Number(userAnswer);
  return correctAnswer === userAnswer;
};

while (correctAnswers < ROUNDS_COUNT) {
  if (gcdQuestion(getRandomNumber(), getRandomNumber())) {
    showMessage("Correct!");
    correctAnswers += 1;
  } else {
    console.log(
      `'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
    );
    console.log(`Let's try again, ${user}!`);
    break;
  }
}

if (correctAnswers === ROUNDS_COUNT) {
  console.log(`Congratulations, ${user}!`);
}
