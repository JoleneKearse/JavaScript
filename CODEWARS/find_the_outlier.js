function findOutlier(integers){
    let oddArr = []
    let evenArr = []

    // check if each element is even, then push to appropriate array
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArr.push(integers[i])
        } else {
            oddArr.push(integers[i])
        }
    }

    // if array has only 1 number, return it
    if (evenArr.length == 1) {
        return evenArr[0]
    } else {
        return oddArr[0]
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))