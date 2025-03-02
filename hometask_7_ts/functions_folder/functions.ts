function calculateSumOrConcat(arrayOfValues: string[] | number[]): string | number {
    if (arrayOfValues.length === 0) {
        return 'Array is empty';
    }

    if (typeof arrayOfValues[0] === 'number') {
        return (arrayOfValues as number[]).reduce((sum, num) => sum + num, 0);
    } else {
        return (arrayOfValues as string[]).reduce((result, str) => result + str, '');
    }
}

console.log('Sum of numbers is: ' + calculateSumOrConcat([4, 5, 6, 8, 22, 33, 44]));
console.log('Sum of strings is: ' + calculateSumOrConcat(['red raspberry', 'yellow lemon', 'green lime', 'purple plum', 'black blackberry']));
