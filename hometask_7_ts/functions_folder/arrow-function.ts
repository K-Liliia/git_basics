const calculateSumOfElemOrConcatIt = (arrayOfValues: string[] | number[]): (string | number) => {
    if (arrayOfValues.length === 0) {
        return 'Array is empty';
    }

    if (typeof arrayOfValues[0] === 'number') {
        return (arrayOfValues as number[]).reduce((sum, num) => sum + num, 0);
    } else {
        return (arrayOfValues as string[]).reduce((result, str) => result + str, '');
    }
};

console.log('Sum of numbers is: ' + calculateSumOfElemOrConcatIt([1, 2, 3, 4, 5, 6, 7]));
console.log('Sum of strings is: ' + calculateSumOfElemOrConcatIt(['new', 'old', 'up-to-date', 'old-fashioned']));
