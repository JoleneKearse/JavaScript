function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(reverseArray(["A", "B", "C"]))

function reverseArrayInPlace(arr) {
    // loop thru 1/2 the arr, also leave any odd number one in the middle
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // swap the front and back ends
        [ arr[i], arr[arr.length - 1 - i] ] = [ arr[arr.length - 1 - i], arr[i] ];
    }
    return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));