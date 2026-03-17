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
