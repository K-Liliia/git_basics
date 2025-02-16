
function calculateSumOrConcat(arrayOfValues) {
    let sumNumbers = 0;
    let sumStrings = '';
    for (let i = 0; i < arrayOfValues.length; i++) {
        if (typeof (arrayOfValues[i]) === 'number') {
            sumNumbers += arrayOfValues[i];
        } else {
            sumStrings += arrayOfValues[i];
        }
    }
    if (sumNumbers != 0) {
        return sumNumbers;
    } else {
        return sumStrings;
    }
}

console.log("Sum of numbers is: " + calculateSumOrConcat([4, 5, 6, 8, 22, 33, 44]));
console.log("Sum of strings is: " + calculateSumOrConcat(["red raspberry", "yellow lemon", "green lime", "purple plum", "black blackberry"]));
