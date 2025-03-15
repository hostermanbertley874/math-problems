
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const op = ['+', '-', 'x', '/'][Math.floor(Math.random() * 3)];

return `${num1} ${op} ${num2}`;