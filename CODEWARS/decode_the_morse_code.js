const MORSE_CODE = {
    ".-": "a", 
    "-...":"b", 
    "-.-.": "c", 
    "-..": "d", 
    ".":"e", 
    "..-.":"f", 
    "--.":"g", 
    "....":"h", 
    "..":"i", 
    ".---":"j", 
    "-.-":"k", 
    ".-..":"l", 
    "--":"m", 
    "-.":"n", 
    "---":"o", 
    ".--.":"p", 
    "--.-":"q", 
    ".-.":"r", 
    "...":"s", 
    "-":"t", 
    "..-":"u", 
    "...-":"v", 
    ".--":"w",
    "-..-":"x", 
    "-.--":"y", 
    "--..":"z", 
    ".----":"1", 
    "..---":"2", 
    "...--":"3", 
    "....-":"4", 
    ".....":"5", 
    "-....":"6", 
    "--...":"7", 
    "---..":"8", 
    "----.":"9", 
    "-----":"0", 
    "|":" "
};

decodeMorse = function(morseCode){
    // split the words at 3 spaces
    const words = morseCode.split('   ')
    // split the characters at 1 space
    let letters = words.map( (w) => w.split(' '))
    // empty array to hold the decoded parts
    const decoded = []

    // loop over letters in each word
    for (let i = 0; i < letters.length; i++) {
        decoded[i] = []
        // translate each letter
        for (let j = 0; j < letters[i].length; j++) {
            if (MORSE_CODE[letters[i][j]]) {
                // push to 1st decoded array
                decoded[i].push(MORSE_CODE[letters[i][j]])
            }
        }
    }
    // create each letter array into string, then words, then to uppercase
    return decoded.map(arr => arr.join('')).join(' ').toUpperCase().trim()
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))