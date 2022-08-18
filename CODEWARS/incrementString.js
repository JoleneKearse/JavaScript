// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    // empty variable to hold incremented string
    let finalStrng;
    // determine if last char is a number
    if (!/\d+$/.test(strng)) {
        // if last char is not a number, add 1 to the end
        finalStrng = strng + "1";
    } else {
        // extract number portion of str, change to integer type
        const numTxt = strng.match(/\d*$/);
        console.log(numTxt);

        // const incremented = numTxt + 1;
        // if (numTxt.length !== incremented.length) {
        //     const numOfPaddingZeros =
        //         strng.length - strng.replace(numTxt, numTxt + 1).length;
        //     console.log(numOfPaddingZeros);
        //     const numStrng = numTxt.pad(numOfPaddingZeros, "0");
        //     finalStrng = strng.replace(numTxt, numStrng);
        // }
        // check for padding zeros
        if (/^0+/.test(numTxt)) {
            const padding = numTxt.match(/^0+/);
            console.log(padding);
        } else {
            // return string incremented by 1
            finalStrng = strng.replace(numTxt, numTxt + 1);
        }
    }
    return finalStrng;
}

console.log(incrementString("foobar0099"));
