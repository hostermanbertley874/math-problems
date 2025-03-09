export class MathProblems {
  // Generate a random math problem
  static generateRandomMathProblem(): string {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const operation = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
    return `${number1} ${operation} ${number2}`;
  }
}
