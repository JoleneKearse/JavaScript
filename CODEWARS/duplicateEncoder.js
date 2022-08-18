// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
    // convert to lowercase
    word = word.toLowerCase();
    //   empty str
    let encodedWord = "";
    // create map of characters
    let obj = {};
    let letter;
    //   iterate through word
    for (letter of word) {
        //     if not in obj, add it
        if (!obj[letter]) {
            obj[letter] = 1;
        } else {
            //       if already present, add to value
            obj[letter]++;
        }
    }
    //     iterate back through the word, checking the obj, replace with ( for 1, ) for over 1
    for (letter of word) {
        if (obj[letter] < 2) {
            encodedWord += "(";
        } else {
            encodedWord += ")";
        }
    }
    return encodedWord;
}
