function highAndLow(numbers){
    // split into array at space
    const newArr = numbers.split(' ')
    // map over each element & convert to integer
    const numArr = newArr.map(str => {
        return Number(str)
    })
    // add to array & convert back to string
    return [Math.max(...numArr), Math.min(...numArr)].join(' ')
}

console.log(highAndLow("1 2 3 4 5"))