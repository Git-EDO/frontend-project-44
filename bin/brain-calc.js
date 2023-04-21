#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  showMessage,
  ROUNDS_COUNT,
  getUserName,
  getName,
} from '../src/index.js';

let currentUserAnswer = '';
let correctAnswers = 0;
let correctAnswer = 0;

showMessage('Welcome to the Brain Games!');
getUserName();
showMessage('What is the result of the expression?');

const getNewExpression = () => {
  const signs = ['+', '-', '*'];
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const sign = signs[Math.floor(Math.random() * 3)];
  const newExpression = `${num1} ${sign} ${num2}`;
  return newExpression;
};

const evaluateResult = (expression) => {
  const [operand1, operator, operand2] = expression.split(' ');
  let result;
  const num1 = +operand1;
  const num2 = +operand2;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error('Unsupported operator');
  }
  return result;
};

const summQuestion = (expression) => {
  showMessage(`Question: ${expression}`);
  correctAnswer = Number(evaluateResult(expression));
  const userAnswer = Number(
    readlineSync.question('Your answer is: ').trim().toLowerCase(),
  );
  currentUserAnswer = Number(userAnswer);
  return correctAnswer === userAnswer;
};

while (correctAnswers < ROUNDS_COUNT) {
  if (summQuestion(getNewExpression())) {
    showMessage('Correct!');
    correctAnswers += 1;
  } else {
    console.log(
      `'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    );
    console.log(`Let's try again, ${getName()}!`);
    break;
  }
}

if (correctAnswers === ROUNDS_COUNT) {
  console.log(`Congratulations, ${getName()}!`);
}
