#!/usr/bin/env node

import { showMessage, ROUNDS_COUNT } from '../src/index.js'
import readlineSync from 'readline-sync'

let user = ''
let currentUserAnswer = ''
let correctAnswers = 0
let correctAnswer = 0

showMessage('Welcome to the Brain Games!')
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}`)
  return (user = userName)
}
getUserName()
showMessage('Answer "yes" if given number is prime. Otherwise answer "no".')

const getRandomNumber = () => {
  return Math.round(Math.random() * 100)
}

function isPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const primeQuestion = (number) => {
  showMessage(`Question: ${number}`)
  correctAnswer = isPrime(number) ? 'yes' : 'no'
  const userAnswer = readlineSync
    .question(`Your answer is: `)
    .trim()
    .toLowerCase()
  currentUserAnswer = userAnswer
  return correctAnswer === userAnswer
}

while (correctAnswers < ROUNDS_COUNT) {
  if (primeQuestion(getRandomNumber())) {
    showMessage('Correct!')
    correctAnswers++
  } else {
    console.log(
      `'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
    )
    console.log("Let's try again, " + user + '!')
    break
  }
}

if (correctAnswers === ROUNDS_COUNT) {
  console.log('Congratulations, ' + user + '!')
}
