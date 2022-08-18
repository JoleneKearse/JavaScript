// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a *****single element***** at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    // check if array has items
    if (array) {
        // check array length
        if (array.length > 1) {
            // sort numbers ascending
            const sortedArr = array.sort((a, b) => a - b);
            // remove lowest number from array
            const lowest = sortedArr.splice(0, 1);
            // remove highest
            const highest = sortedArr.splice(-1, 1);
            // sum up & return
            return sortedArr.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
            );
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}
