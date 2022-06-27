// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(String(array1).replace(/,/g, ''));
  const num2 = Number(String(array2).replace(/,/g, ''));
  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let numStr = String(value);
  for(let i=0; i<numStr.length; i++){
    if(numStr[i] != numStr[numStr.length-1-i]) return false;
  }
  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === "" || input === null || input === undefined) return 'Required field';
  if(Number.isNaN(Number(input)) || Number(input) === 0) return 'Must be a number besides 0'
  // CANNOT JUST DO Number(input) === NaN - Must use Number.isNaN plus convert to number first for it to work
  return ''
}
