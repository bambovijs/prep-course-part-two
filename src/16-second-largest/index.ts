/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
  const sortedArray = array.slice().sort((a, b) => b - a);
  const secondNumber = sortedArray[1];

  return secondNumber;
}

export { secondLargest };
