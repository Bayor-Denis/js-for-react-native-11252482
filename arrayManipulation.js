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

/**
 * Formats an array of strings based on corresponding number.
 *
 * @param {string[]} strArr - The array of strings to format.
 * @param {number[]} numArr - The array of numbers processed by processArray.
 * @returns {string[]} - The new array with formatted strings.
 */
function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, index) => {
        if (index >= numArr.length) {
            return str;
        }
        
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize the entire string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const processedNumbers = processArray(inputArray);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15, 36, 21, 64]

const stringArray = ["My", "name", "is", "Denis", "I", "am", "learning", "Javascript"];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings); // Output: [ 'my', 'NAME', 'is', 'DENIS', 'i', 'AM', 'learning', 'JAVASCRIPT' ]

