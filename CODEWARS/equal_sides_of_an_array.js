// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

function findEvenIndex(arr) {
    //   variables to hold left & right sums
    let left = 0;
    let right = 0;
    //   set up function to sum up values
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // if arr is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    //   iterate through array
    for (let i = 0; i < arr.length; i++) {
        //     start at index 0
        if (i == 0) {
            //       take all nums to right & sum up
            right = arr.slice(1).reduce(reducer, 0);
            if (right === i) {
                return i;
            }
        } else {
            //       take nums to left of current index
            left = arr.slice(0, i).reduce(reducer, 0);
            right = arr.slice(i + 1).reduce(reducer, 0);
            //       if they equate, return the index
            if (left === right) {
                return i;
            }
        }
    }
    //   otherwise return -1
    return -1;
}
