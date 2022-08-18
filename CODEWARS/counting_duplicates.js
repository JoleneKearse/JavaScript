// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    // set counter to return
    let count = 0;
    // create map
    let obj = {};

    // iterate through each character
    for (let i of text) {
        // make case insensitive
        i = i.toLowerCase();
        // if not in object/map...
        if (!obj[i]) {
            // ... add to object/map & set to 1
            obj[i] = 1;
        } else {
            // otherwise increase the count
            obj[i]++;
        }
    }

    // iterate through the obj/map & make count of all chars with more than 1
    for (let i in obj) {
        if (obj[i] > 1) {
            count++;
        }
    }
    // return counter
    return count;
}
