// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    // vars to hold count
    let exes = 0;
    let ohs = 0;
    // convert to 1 case & turn into arr
    str = str.toLowerCase().split("");
    // iterate over each ch
    for (let ch of str) {
        // add to counts if present
        if (ch === "x") {
            exes += 1;
        } else if (ch === "o") {
            ohs += 1;
        }
    }
    // return true or false if counts equal
    return exes === ohs ? true : false;
}
