#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
let user = ''
let currentUserAnswer = ''
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}`)
  return (user = userName)
}
getUserName()
console.log("Answer 'yes' if number even otherwise answer 'no'.")

const getRandomNumber = () => {
  return Math.round(Math.random() * 100)
}

const isEven = (number) => {
  return number % 2 === 0 ? true : false
}

const evenQuestion = (number) => {
  console.log(`Is ${number} even?`)
  const expectedAnswer = isEven(number) ? 'yes' : 'no'
  const userAnswer = readlineSync
    .question(`Your answer is: `)
    .trim()
    .toLowerCase()
  currentUserAnswer = userAnswer
  return expectedAnswer === userAnswer
}

let correctAnswers = 0
while (correctAnswers < 3) {
  if (evenQuestion(getRandomNumber())) {
    console.log('Correct!')
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

if (correctAnswers === 3) {
  console.log('Congratulations, ' + user)
}
