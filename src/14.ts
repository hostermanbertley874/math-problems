function getRandomMathProblem() {
  const numbers = [2, 5, 8, 10, 12];
  const operators = ['+', '-', '*', '/'];
  const problem = `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${numbers[Math.floor(Math.random() * numbers.length)]}`;
  return problem;
}
