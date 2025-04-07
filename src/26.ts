import { abs } from "mathjs";

function calculateMedian(numbers: number[]): number {
  // Sort the array
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[Math.floor(sortedNumbers.length / 2)] + sortedNumbers[(Math.floor(sortedNumbers.length / 2)) + 1]) / 2;
  } else {
    return sortedNumbers[Math.floor(sortedNumbers.length / 2)];
  }
}

// Example usage
const numbers = [3, 5, 7, 9, 10];
console.log(calculateMedian(numbers));
