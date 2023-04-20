#!/usr/bin/env node

import { showMessage, ROUNDS_COUNT } from '../src/index.js'
import readlineSync from 'readline-sync'

let user = ''
let currentUserAnswer = ''
let correctAnswers = 0

showMessage('Welcome to the Brain Games!')
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}`)
  return (user = userName)
}
getUserName()
showMessage("Answer 'yes' if number even otherwise answer 'no'.")

const getRandomNumber = () => {
  return Math.round(Math.random() * 100)
}

const isEven = (number) => {
  return number % 2 === 0
}

const evenQuestion = (number) => {
  console.log(`Question: ${number}`)
  const expectedAnswer = isEven(number) ? 'yes' : 'no'
  const userAnswer = readlineSync.question(`Your answer: `).trim().toLowerCase()
  currentUserAnswer = userAnswer
  return expectedAnswer === userAnswer
}

while (correctAnswers < ROUNDS_COUNT) {
  if (evenQuestion(getRandomNumber())) {
    showMessage('Correct!')
    correctAnswers++
  } else {
    console.log(
      `'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${
        currentUserAnswer === 'yes' ? 'no' : 'yes'
      }'`
    )
    console.log("Let's try again, " + user + '!')
    break
  }
}

if (correctAnswers === ROUNDS_COUNT) {
  console.log('Congratulations, ' + user)
}
