function rot13(msg) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const shiftedAlphabet = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
    return msg.replace(/[a-z]/gi, letter => shiftedAlphabet[alphabet.indexOf(letter)])
}

console.log(rot13('test'))