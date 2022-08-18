// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    // split at space
    const nameArr = name.split(" ");
    //   take 1st ele of each
    //   uppercase it
    const initials = [nameArr[0][0].toUpperCase(), nameArr[1][0].toUpperCase()];
    //   join with .
    const abbr = initials.join(".");
    return abbr;
}
