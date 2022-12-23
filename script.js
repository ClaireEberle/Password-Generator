// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var addspecialCharacters;
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var length = '';
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]
var addupperCase;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var addlowerCase;
var result = '';
var availableChars;


// Writes the password to the password input box
function writePassword() {
  generatePassword();
  passcombine();
  var password = result;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword) 


//collects criteria for the possible characters in pass word
function generatePassword () {
  length = prompt("How many characters? (you may choose 8-128)");
  if ((length < 8)||(length > 128)) {
    prompt("Please enter a valid number");
  if (!length){
      alert("ok :(")
    }
  }
//check if valid length, if wrong promp again

addspecialCharacters = confirm("Special characters?");
 if (addspecialCharacters) {
  availableChars = specialCharacters;
 }
//  console.log(availableChars);

addnumericCharacters = confirm("Numbers?");
if (addnumericCharacters) {
  availableChars = numericCharacters.concat(availableChars)
}
// console.log(availableChars)
addupperCase = confirm("Upper Case?");
if (addupperCase) {
  availableChars = upperCase.concat(availableChars);
}
// console.log(availableChars);
addlowerCase = confirm("Lower Case?");
if (addlowerCase) {
  availableChars = lowerCase.concat(availableChars);
}
// console.log(availableChars);
if (!addspecialCharacters) {
  availableChars.pop();
}
//validates that at lease one is selected
if ((!addspecialCharacters)&&(!addupperCase)&&(addnumericCharacters)&&(addlowerCase)){
  alert("You must choose a type of character")
}
return;
}
  

// function randomchar () {
//   result = availableChars[Math.floor(Math.random()*availableChars.length)];
//   console.log(result)
// }

function passcombine() {
  for (i = 0; i<length; i++){
    result += availableChars[Math.floor(Math.random()*availableChars.length)]
  }
  return;
}

// function passwordlength () {
// result+= availableChars[Math.floor(Math.random() * charlength)];
// }
// Array.prototype.random = function(length) {
//   return this[Math.floor((Math.random()*length))]
// }
// var number = availableChars.random(availableChars.length)

// generatePassword();
// passwordlength();
// randomchar();
// passcombine();
// return result
// writePassword();
