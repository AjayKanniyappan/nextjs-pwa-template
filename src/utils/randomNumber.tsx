/**
 * This function takes in two numbers, min and max, and returns a random number between those two
 * numbers.
 * @param {number} min - The minimum number that the random number can be.
 * @param {number} max - The maximum number that can be returned.
 * @returns A random number between the min and max values.
 */
function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default randomNumber;
