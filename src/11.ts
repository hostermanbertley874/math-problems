function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const num1 = getRandomInt(10);
const num2 = getRandomInt(10);

console.log(`What is ${num1} + ${num2}?`);
