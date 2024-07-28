let age = 21;
let message = age >= 18 ? "Your and adult" : "Your a minor";
console.log(message);

let time =  16;

let greeting = time < 12 ? "Good morning" : "Good night";
console.log(greeting);

let isStudent = false;
let message2 = isStudent ? "Your are a student " : "Your not a student";console.log(message2);

let purchaseAmount = 150;
let disccount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount- (purchaseAmount * (disccount/100))}`);