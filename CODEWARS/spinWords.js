// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
    //   empty variable to hold results
    let newStr = "";
    // add words to an array
    const wordsArr = string.split(" ");
    //   loop through wordsArr to find ones with 5 letters or more
    for (let word of wordsArr) {
        if (word.length >= 5) {
            newStr += word.split("").reverse().join("") + " ";
        } else {
            newStr += word + " ";
        }
    }
    return newStr.trim();
}

console.log(spinWords("Seriously this is the last one"));
