// Generate a random math problem
function generateMathProblem(operator: string): string {
  // Get two random numbers between 1 and 10
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  
  // Generate a math problem using the operator
  switch (operator) {
    case '+': return `${num1} + ${num2}`;
    case '-': return `${num1} - ${num2}`;
    case '*': return `${num1} * ${num2}`;
    case '/': return `${num1} / ${num2}`;
  }
  
  // Return a random math problem
  return Math.floor(Math.random() * 4) + 1;
}
