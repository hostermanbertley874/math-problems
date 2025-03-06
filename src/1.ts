export const getRandomMathProblem = () => {
  // Generate a random number between 1 and 100
  let number1 = Math.floor(Math.random() * 100) + 1;
  let number2 = Math.floor(Math.random() * 100) + 1;
  let operation = Math.floor(Math.random() * 4);

  // Determine the operation based on the random number
  if (operation === 0) {
    return `What is ${number1} + ${number2}`;
  } else if (operation === 1) {
    return `What is ${number1} - ${number2}`;
  } else if (operation === 2) {
    return `What is ${number1} x ${number2}`;
  } else if (operation === 3) {
    return `What is ${number1} / ${number2}`;
  }
};
