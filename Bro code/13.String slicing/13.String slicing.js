const fullName = "Kronos odinsin";
//let firstName = fullName.slice(0, 3);

//let lastName = fullName.slice(4,8)

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-5)

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice( fullName.indexOf(" "));
// console.log(firstName);
//  console.log(lastName);
// console.log(lastChar);
// console.log(firstChar);

const email = "2Kronos@gmail.com";

let username = email.slice(0,  email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);