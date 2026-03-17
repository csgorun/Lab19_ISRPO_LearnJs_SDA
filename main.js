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
console.log(counter());

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


let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);


let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = "black";
console.log(colors)



console.log(numbersArr.length);
numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);


let students = [];
students.push("Dima", "Maks", "Kolya");

console.log(students);

students.pop();
console.log(students);



let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}
for (let value of numbers2) {
    console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);


let city = ["Moskva", "Volgograd", "Sochi"]
console.log(city.includes("Moskva"));
console.log(city.includes("Belgia"));
