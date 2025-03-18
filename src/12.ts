const problem = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr);
  return `The sum of the numbers is ${sum}`;
};
