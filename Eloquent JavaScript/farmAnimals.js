function formatNumber(number, animal) {
    let numString = String(number);
    while (numString.length < 3) {
        numString = "0" + numString;
    }
    console.log(`${numString} ${animal}`)
}

function farmAnimals(cows, chickens, pigs) {
    formatNumber(cows, "Cows");
    formatNumber(chickens, "Chickens");
    formatNumber(pigs, "Pigs");
}

farmAnimals(7, 11, 3);