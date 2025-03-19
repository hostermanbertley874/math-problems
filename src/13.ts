import { randomInt } from 'crypto';

const problem = {
  number: randomInt(1, 10),
  operator: Math.random() < 0.5 ? '+' : '-',
  solution: null,
};

function solveProblem(problem) {
  const { number, operator } = problem;
  if (operator === '+') {
    return number + randomInt(1, 10);
  } else {
    return number - randomInt(1, 10);
  }
}

function checkSolution(problem, solution) {
  const correct = problem.solution === solution;
  console.log(`${correct ? 'Correct' : 'Incorrect'}, the solution is ${solution}`);
  return correct;
}

// Example usage:
const myProblem = { number: 3, operator: '+', solution: null };
myProblem.solution = solveProblem(myProblem);
checkSolution(myProblem, 10); // Output: Correct, the solution is 10
