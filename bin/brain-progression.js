#!/usr/bin/env node

import { showMessage, ROUNDS_COUNT } from '../src/index.js'
import readlineSync from 'readline-sync'

let user = ''
let currentUserAnswer = ''
let correctAnswers = 0
let correctAnswer = 0
let progression = []
let fakeProgression = []
let progressionElementIndex = 0

showMessage('Welcome to the Brain Games!')
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}`)
  return (user = userName)
}
getUserName()
showMessage('What number is missing in the progression?')

function generateNewProgresstion() {
  progression = []
  let randomNumber = Math.floor(Math.random() * 100) + 1
  const randomIncrement = Math.floor(Math.random() * 10) + 1
  for (let i = 0; i < 9; i++) {
    progression.push(randomNumber)
    randomNumber += randomIncrement
  }
  generateFakeProgression()
  return progression
}

function generateFakeProgression() {
  fakeProgression = [...progression]
  progressionElementIndex = Math.floor(Math.random() * 10)
  fakeProgression[progressionElementIndex] = '..'
  return fakeProgression.join(' ')
}

const progressionQuestion = (numbers) => {
  showMessage(`Question: ${fakeProgression}`)
  correctAnswer = Number(numbers[progressionElementIndex])
  const userAnswer = Number(
    readlineSync.question(`Your answer is: `).trim().toLowerCase()
  )
  currentUserAnswer = Number(userAnswer)
  return correctAnswer === userAnswer
}

while (correctAnswers < ROUNDS_COUNT) {
  if (progressionQuestion(generateNewProgresstion())) {
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
