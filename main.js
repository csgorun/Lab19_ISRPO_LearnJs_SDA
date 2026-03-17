for (let i = 0; i < 5; i++) {
    console.log(i);
}
let count = 0;

let c = 0;
for (let i = 1; i < 10; i++) {
    c+=i
    if (i%2==0){
        console.log(`Четные: ${i}`)
    }
    
}
console.log(`Сумма: ${c}`);

while (count < 3) {
    console.log("Count:", count);
    count++;
}

let number = 5;

while (number > 0) {
    console.log(number)
    number--;
}


let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
}while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}


for (let i = 1; i <= 4; i++) {
    let stars = ""; 
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}



function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));


function multip(a, b) {
    return a * b;
}
console.log(multip(5, 5))


function sayHello(name) {
    console.log(`Hello, ${name}`)
}
sayHello("Тимофей")

function printInfo(name, age) {
    console.log(`Имя: ${name} \nВозраст: ${age} `)
}
printInfo("Дима", 18)


function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Анастасия");


const add = function (a,b) {
    return a + b;
};
console.log(add(2,3));
function makeCounter(){
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(countre());

function sumFunc(a, b) {
    return a + b;
}

const sumFunc2 = (a, b) => a + b;
const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;

const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
};