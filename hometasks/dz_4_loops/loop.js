
for (let i = 0; i < 10; i++) {
    console.log("i value is: " + i);
}

console.log("---------------------------");

let iterator = 0;
while (iterator < 10) {
    console.log("iterator value is: " + iterator);
    iterator++;
}

console.log("---------------------------");

for (let j = 100; j >= 0; j = j - 10) {
    console.log("j value is: " + j);
}

console.log("---------------------------");

let iterator1 = 100;
do {
    console.log("iterator1 value is: " + iterator1);
    iterator1 = iterator1 - 10;
} while (iterator1 >= 0);
