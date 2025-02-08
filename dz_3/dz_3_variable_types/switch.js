//division by 3

const number = 915;
const isDividedByValue = 5;
let result = 0;

switch (number) {
    case null:
        console.log("We can't proceed with division, please check your number value it shouldn't be null");
        break;
    case undefined:
        console.log("We can't proceed with division, please check your number value it shouldn't be undefined");
        break;
    case 0:
        console.log("We can't proceed with division, please check your number value it shouldn't be 0");
        break;
    default:
        console.log("Division is done");
        result = number / isDividedByValue;
        console.log(result);
        break;
}
