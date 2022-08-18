// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
    // find unicode value, then subtract 96 as lowercase begins at 97
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

console.log(position("a"));
