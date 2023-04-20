#!/usr/bin/env node

import { showMessage, ROUNDS_COUNT } from '../src/index.js';
import readlineSync from 'readline-sync';

let user = '';
let currentUserAnswer = '';
let correctAnswers = 0;
let correctAnswer = 0;

showMessage('Welcome to the Brain Games!');
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return (user = userName);
};
getUserName();
showMessage('What is the result of the expression?');

const getRandomNumbers = () => {
  const signs = ['+', '-', '*'];
  return (
    Math.round(Math.random() * 100) +
    ` ${signs[Math.floor(Math.random() * 3)]} ` +
    Math.round(Math.random() * 100)
  );
};

const evaluateResult = (expression) => {
  return eval(expression);
};

const summQuestion = (expression) => {
  showMessage(`Question: ${expression}`);
  correctAnswer = Number(evaluateResult(expression));
  const userAnswer = Number(
    readlineSync.question(`Your answer is: `).trim().toLowerCase()
  );
  currentUserAnswer = Number(userAnswer);
  return correctAnswer === userAnswer;
};

while (correctAnswers < ROUNDS_COUNT) {
  if (summQuestion(getRandomNumbers())) {
    showMessage('Correct!');
    correctAnswers++;
  } else {
    console.log(
      `'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
    );
    console.log("Let's try again, " + user + '!');
    break;
  }
}

if (correctAnswers === ROUNDS_COUNT) {
  console.log('Congratulations, ' + user + '!');
}
