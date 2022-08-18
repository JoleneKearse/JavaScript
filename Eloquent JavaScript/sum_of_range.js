function range(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
  	return arr;
}

function sum(numbers) {
	let sum = 0;
  	for (num of numbers) {
    	sum += num;
    }
  	return sum;
}

console.log(sum(range(1, 10)))