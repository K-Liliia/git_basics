const calculateSumOfElemOrConcatIt = (arrayOfValues: string[] | number[]): (string | number)[] => {
    let sumNumbers = 0;
    let sumStrings = '';
    for (const elem of arrayOfValues) {
        typeof (elem) === 'number' ? sumNumbers += elem : sumStrings += elem;
    }
    return [sumNumbers, sumStrings];

};

console.log(calculateSumOfElemOrConcatIt([1, 2, 3, 4, 5, 6, 7]));
console.log(calculateSumOfElemOrConcatIt(['new', 'old', 'up-to-date', 'old-fashioned']));
