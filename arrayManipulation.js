// arrayManipulation.js

/**
 * Processes an array of numbers, squaring even numbers and tripling odd numbers.
 *
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The new array with processed numbers.
 */
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const resultArray = processArray(inputArray);
console.log(resultArray); 
