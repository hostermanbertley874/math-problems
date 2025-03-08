// Generate a random math problem
function getRandomMathProblem(): string {
  const operators = ["+", "-", "*", "/"];
  const numbers = [1, 2, 3, 4, 5];
  let problem = "";

  // Generate the left and right sides of the equation
  const leftSide = Math.floor(Math.random() * 10);
  const rightSide = Math.floor(Math.random() * 10);

  // Choose a random operator and add it to the problem
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];
  problem += `${leftSide} ${operator} ${rightSide}`;

  // Solve the problem and return the result
  const solution = eval(problem);
  console.log(`Solution: ${solution}`);
  return problem;
}
