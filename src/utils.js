export const ROUNDS_COUNT = 3;

export function showMessage(message) {
  return console.log(message);
}

export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const isEven = (number) => number % 2 === 0;

export function findGCD(num1, num2) {
  let newNumber1 = num1;
  let newNumber2 = num2;
  while (newNumber2 !== 0) {
    const remainder = newNumber1 % newNumber2;
    newNumber1 = newNumber2;
    newNumber2 = remainder;
  }
  return newNumber1;
}

export function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
