function getRandomMathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const op = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let problem;

  switch (op) {
    case '+':
      problem = `${num1} + ${num2}`;
      break;
    case '-':
      problem = `${num1} - ${num2}`;
      break;
    case '*':
      problem = `${num1} * ${num2}`;
      break;
    case '/':
      problem = `${num1} / ${num2}`;
      break;
  }

  return {
    num1,
    num2,
    op,
    problem,
    answer: Math.floor(Math.random() * 2) ? num1 + num2 : num1 - num2,
  };
}
