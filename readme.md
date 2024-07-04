# 11252482

# This project contains two JavaScript files:

# arrayManipulation.js:
 This file contains functions for manipulating arrays.
userInfo.js: This file contains a function for creating user profiles.
arrayManipulation.js

## This file defines two functions:
**processArray(array)**: This function takes an array of numbers as input. It returns a new array where each even number is squared and each odd number is tripled.

**formatArrayStrings(stringArray, processedArray)**: This function takes two arrays as arguments. The first array contains strings, and the second array contains the processed numbers from the processArray function. It modifies each string in the stringArray based on the corresponding number in the processedArray:

If the number is even, the entire string is capitalized.
If the number is odd, the entire string is converted to lowercase.
Note: This function modifies the original stringArray in place.

# userInfo.js
## This file defines a function:
**createUserProfiles(namesArray, modifiedNamesArray)**: This function takes two arrays as arguments:
**namesArray**: An array containing original names.
**modifiedNamesArray**: The array of modified names returned from the formatArrayStrings function in arrayManipulation.js.
It returns an array of objects. Each object represents a user profile and contains the following properties: 
- `originalName`: The original name from the `namesArray`.
- `modifiedName`: The modified name from the `modifiedNamesArray`.
- `id`: An auto-incremented ID starting from 1.
This function creates a user profile for each name, associating the original name with the corresponding modified name based on their position in the respective arrays.