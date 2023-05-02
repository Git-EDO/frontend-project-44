function getRandomNumber(min, max) {
  minimum = Math.ceil(min);
  maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

export default getRandomNumber;
