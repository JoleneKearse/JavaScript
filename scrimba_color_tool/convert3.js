const strippedHex = "8c6";

if (strippedHex.length === 3) {
    // split to array
    const hexArr = strippedHex.split("");
    // loop through and double
    const newArr = []
    for (let value of hexArr) {
        for (let i = 0; i < hexArr.length; i += 2) {
            newArr.push(value);
        }
    }
    // convert back to string
    let hex = newArr.join("");
    return hex;   
}