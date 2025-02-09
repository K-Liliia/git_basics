const user1 = {
    name: "Peter",
    surname: "Parker",
    age: "22",
    gender: "male"
};

const user2 = {
    name: "Elizabeth",
    surname: "Swan",
    age: "19",
    gender: "female"
};

const user3 = {
    name: "Emily",
    surname: "Blunt",
    age: "41",
    gender: "female"
};

const arrayStrings = ["stone", "water", "fire", "soil", "air"];
const arrayNumbers = [3, 36, 45, 2345, 1];
const arrayBooleans = [true, false, true, true, false];
const arrayObjUsers = [user1, user2, user3];

const filteredStrings = arrayStrings.filter((el) => el.startsWith('s'));
const filteredNumbers = arrayNumbers.filter((num) => num % 2 == 1);
const filteredBooleans = arrayBooleans.filter((val) => val == 0);
const filteredUsers = arrayObjUsers.filter((users) => users.age > 20);
const findString = arrayStrings.find((ele) => ele.includes('a'));
const findFemaleUser = arrayObjUsers.find((user) => user.gender == 'female');
const sortNumbers = arrayNumbers.sort((number1, number2) => number1 - number2);
const concatArr = arrayStrings.concat(arrayNumbers);
const includeWord = arrayStrings.includes("water");
const usersSurname = arrayObjUsers.map((el) => el.surname);
const userSurnameCheck = usersSurname.includes("Swan");
const joinedArr = arrayBooleans.join(":");
const newCombinedArray = [...filteredNumbers, ...arrayBooleans];


console.log("-- Words that starts from letter s");
console.log(filteredStrings);
console.log("-- Numbers that have a remainder after division operation");
console.log(filteredNumbers);
console.log("-- False values in array");
console.log(filteredBooleans);
console.log("-- Users with age higher than 20 ");
console.log(filteredUsers);
console.log("-- First word in array that includes letter a");
console.log(findString);
console.log("-- First female user in array");
console.log(findFemaleUser);
console.log("-- Sorted array in ascending order");
console.log(sortNumbers);
console.log("-- New array that includes values from arrayStrings and arrayNumbers");
console.log(concatArr);
console.log("-- Check whether array has word -> water");
console.log(includeWord);
console.log("-- User that has surname Swan");
console.log(userSurnameCheck);
console.log("-- Array with users surname only");
console.log(usersSurname);
console.log("-- Joined array with boolean values and strings");
console.log(joinedArr);
console.log("-- All words in array Strings");
arrayStrings.forEach(function (strings) {
    console.log(strings);
});
console.log("-- New array of values from 2 other arrays");
console.log(newCombinedArray);
