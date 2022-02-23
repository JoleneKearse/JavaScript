const strippedHex = "8c6";

const convertToRGB = (strippedHex) => {
    // convert user input of 3 digits to 6
    if (strippedHex.length === 3) {
        const hexArr = 
    }
    // access in three groups to return rgb values
    const red = parseInt(strippedHex[0] + strippedHex[1], 16);
    const green = parseInt(strippedHex[2] + strippedHex[3], 16);
    const blue = parseInt(strippedHex[4] + strippedHex[5], 16);
    console.log(red, green, blue);
    // return as an object
    return {red: red, green: green, blue: blue};
}

console.log(convertToRGB(strippedHex));