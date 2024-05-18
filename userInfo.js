// userInfo.js

/**
 * Takes an array of names and an array of modified names,
 * and returns an array of objects with originalName, modifiedName, and id.
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName,
        modifiedName: modifiedNames[index]
    }));
}



const originalNames = ["My", "name", "is", "Denis", "I", "am", "learning", "Javascript"];
const modifiedNames = [ 'my', 'NAME', 'is', 'DENIS', 'i', 'AM', 'learning', 'JAVASCRIPT' ];
console.log(createUserProfiles(originalNames, modifiedNames));

