let accumulator = "";
let size = 8;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            accumulator += " ";
        } else {
            accumulator += "#";
        }
    }
    accumulator += "\n";
}

console.log(accumulator);
