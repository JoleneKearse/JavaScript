function encode(str, key) {
    let encoded = ''
    
    for (let i=0; i < str.length; i++) {
        // only work on upper or lowercase letters
        if (str[i].match(/[\w]/i)) {
             // if uppercase, return uppercase
            if (isUpperCase(str[i])) {
                encoded += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65)
                console.log(encoded)
            } else {
                // return lowercase letters
                encoded += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97)
                console.log(encoded)
            }
        } else {
            encoded += str[i]
        }
    }
    return encoded
}

const decode = (str, key) => {
    const shift = (26 - key) % 26
    const decoded = encode(str, shift)
    return decoded
}

function isUpperCase(str) {
    return str === str.toUpperCase()
}

console.log(encode('test', 5))
// console.log(decode('grfg', 13))
