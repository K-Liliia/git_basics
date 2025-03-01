function calculateSumOrConcat(arrayOfValues: string[] | number[]): (string | number)[] {
    let sumNumbers = 0;
    let sumStrings = '';

    for (const elem of arrayOfValues) {
        if (typeof (elem) === 'number') {
            sumNumbers += elem;
        } else {
            sumStrings += elem;
        }
    }
    return [sumNumbers, sumStrings];
}

console.log('Sum of numbers is: ' + calculateSumOrConcat([4, 5, 6, 8, 22, 33, 44]));
console.log('Sum of strings is: ' + calculateSumOrConcat(['red raspberry', 'yellow lemon', 'green lime', 'purple plum', 'black blackberry']));


