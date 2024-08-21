// function happy(username, age){

//   console.log(`Happy b day dear ${username}`);
//   console.log(`You are ${age} `);
// }

// happy("Jane",25 )
// happy("Pragya",2 )

function add(x, y){
  let result = x +y;
  return result;
}

function subtract(x, y){
  return x-y;
}

function multiply(x, y){
  return x*y;
}

function divide(x, y){
 return x/y;
}

function isEven(number){
  // if (number%2 ===0){
  //   return true;
  // }
  // else{
  //   false;
  // }
  return number %2 ===0 ? true : false;
}
// let answer = 5;

function isValidEmail(email){
//  if(email.includes("@")){
//   return console.log("Is valide email");;
//  }
// else{
//   return console.log("Is invalid email");
// }

 let verify =email.includes("@") ? "Is valide email" : "Is invalid email";
  return console.log(verify);
}
console.log(add(5, 2));
console.log(isEven(9));
console.log(isValidEmail("Yutagmail,co"));