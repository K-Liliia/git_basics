// check if number can be divided by 3

const number = 915;
let result = 0;

console.log("----------------------");
console.log("If construction");
if ((number != undefined) && (number != 0) && (number != null)) {
    console.log("Number is: " + number);
    console.log("Result is: " + number / 3);
}

console.log("----------------------");
console.log("If - Else construction");
if ((number == undefined) || (number == 0) || (number == null)) {
    console.log("Number is: " + number);
    console.log("We can't proceed with division operation");
} else {
    result = number / 3;
    console.log("Result is: " + result);
}

console.log("----------------------");
console.log("If - Else If - Else construction");
if (number == 0) {
    console.log("We can't divide by 0, please change your number");
} else if ((number == undefined) || (number == null)) {
    console.log("We can't proceed with division, please check your number value");
} else {
    result = number / 3;
    console.log("Result is: " + result);
}

console.log("----------------------");
console.log("Boolean construction");
console.log(number > 0 ? "We can divide this number" : "We can't divide this number, please check it");
