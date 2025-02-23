const number1 = 5;
const number2 = 9;
const stringValue = "8";
const booleanValue = true;
const nullValue = null;

let sum = 0;
let sum1 = 0;
let sum2 = 0;


sum = number1 + stringValue;
sum1 = number1 + booleanValue;
sum2 = number1 + number2;

function subtraction(value1, value2) {
    const subResult = value1 - value2;
    console.log("When we subtract " + value1 + " from " + value2 + " result is: " + subResult);
}

function division(value1, value2) {
    const divResult = value1 / value2;
    console.log("When we divide " + value1 + " by " + value2 + " result is: " + divResult);
}

function multiplication(value1, value2) {
    const mulResult = value1 * value2;
    console.log("When we multiply " + value1 + " by " + value2 + " result is: " + mulResult);
}

function modulus(value1, value2) {
    const modResult = value1 % value2;
    console.log("When we divide " + value1 + " by " + value2 + " remainder of a division is: " + modResult);
}

function exponentiation(value1, value2) {
    const expResult = value1 ** value2;
    console.log("When we raise " + value1 + " in " + value2 + " times, result is: " + expResult);
}

function increment(value1) {
    value1++;
    console.log("Incremented value is: " + value1);
}

function decrement(value1) {
    value1--;
    console.log("Decremented value is: " + value1);
}

//addition
console.log("");
console.log("------------addition---------------");
console.log("When we add " + number1 + "(type: number) + " + stringValue + "(type: string), summary is: " + sum);
console.log("When we add " + number1 + "(type: number) + " + booleanValue + "(type: boolean), summary is: " + sum1);
console.log("When we add " + number1 + "(type: number) + " + number2 + "(type: number), summary is: " + sum2);
console.log("");
//subtraction
console.log("------------subtraction---------------");
subtraction(number1, number2);
subtraction(number2, booleanValue);
subtraction(booleanValue, stringValue);
subtraction(booleanValue, nullValue);
console.log("");
//division
console.log("------------division---------------");
division(number1, number2);
division(number2, booleanValue);
division(booleanValue, stringValue);
division(booleanValue, nullValue);
console.log("");
//multiplication
console.log("------------multiplication---------------");
multiplication(number1, number2);
multiplication(number2, booleanValue);
multiplication(booleanValue, stringValue);
multiplication(booleanValue, nullValue);
console.log("");
//modulus
console.log("------------modulus---------------");
modulus(number1, number2);
modulus(number2, booleanValue);
modulus(booleanValue, stringValue);
modulus(booleanValue, nullValue);
console.log("");
//exponentiation
console.log("------------exponentiation---------------");
exponentiation(number1, number2);
exponentiation(number2, booleanValue);
exponentiation(booleanValue, stringValue);
exponentiation(booleanValue, nullValue);
console.log("");
//increment
console.log("------------increment---------------");
increment(number1);
increment(nullValue);
increment(booleanValue);
increment(stringValue);
console.log("");
//decrement
console.log("------------decrement---------------");
decrement(number1);
decrement(stringValue);
decrement(booleanValue);
decrement(nullValue);
console.log("");
