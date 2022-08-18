// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    // switch to lowercase to count occurances
    const lowerCaseStr = s.toLowerCase();
    const obj = {};

    // loop through the str, adding chars & occurances to obj
    for (let i of lowerCaseStr) {
        // if i is present in the obj, increment OR initialize to 1
        obj[i] = obj[i] + 1 || 1;
    }

    // loop through object using for in loop to return first occurance of non-repeating char
    for (let i in obj) {
        if (obj[i] === 1) {
            // find index of first repeat
            const index = lowerCaseStr.indexOf(i);
            // return character at that index in original string, so correct case is returned
            return s[index];
        }
    }
    // if no repeating chars, return empty str
    return "";
}

const str = "STress";
console.log(firstNonRepeatingLetter(str));
