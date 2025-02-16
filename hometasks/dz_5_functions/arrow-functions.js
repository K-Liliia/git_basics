const calculateSumOfElemOrConcatIt = (arrayOfValues) => {
    let sumNumbers = 0;
    let sumStrings = '';
    for (let i = 0; i < arrayOfValues.length; i++) {
        typeof (arrayOfValues[i]) === 'number' ? sumNumbers += arrayOfValues[i] : sumStrings += arrayOfValues[i];
    }
    if (sumNumbers != 0) {
        return sumNumbers;
    } else {
        return sumStrings;
    }

};

console.log(calculateSumOfElemOrConcatIt([1, 2, 3, 4, 5, 6, 7]));
console.log(calculateSumOfElemOrConcatIt(['new', 'old', 'up-to-date', 'old-fashioned']));
