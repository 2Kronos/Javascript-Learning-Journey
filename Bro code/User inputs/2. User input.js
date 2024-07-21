 let username;

username = window.prompt("whats your username");
console.log(username);

document.getElementById("mySubmit").onclick = function(){

  username = document.getElementById("myText").value; 
  console.log(username);

  document.getElementById("myH1").textContent = `Hello ${ username}`;
  
}