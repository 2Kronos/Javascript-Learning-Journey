
// while loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username;
let password;
//  while (username ==="" || username === null){
//   username = window.prompt(`Enter your username`);
// //  }
// console.log(`Hello ${username}`);

// do{
//   username = window.prompt(`Enter your username`); 
// }while (username ==="" || username === null)
//   console.log(`Hello ${username}`);

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}