// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "*", "$", "%", "?", "#"];
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



// Write password to the #password input
function writePassword() {
  //password length (8-128)
  //password uppercase, lowercase, numeric, special characters
  //at least one type chosen
  var password = passy();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// psudocoding
function generatePassword () {
  length = prompt("How many characters? (you may choose 8-24)");
  
//prompt for length of the password
//check if valid length, if wrong promp again

addspecialCharacters = confirm("Special characters?");
 if (addspecialCharacters) {
  availableChars = specialCharacters;
 }
 console.log(availableChars);

addnumericCharacters = confirm("Numbers?");
if (addnumericCharacters) {
  availableChars = numericCharacters.concat(availableChars)
}
console.log(availableChars)
addupperCase = confirm("Upper Case?");
if (addupperCase) {
  availableChars = upperCase.concat(availableChars);
}
console.log(availableChars);
addlowerCase = confirm("Lower Case?");
if (addlowerCase) {
  availableChars = lowerCase.concat(availableChars);
}
console.log(availableChars);
if (!addspecialCharacters) {
  availableChars.pop();
}
return;
}
// if (addspecialCharacters && addnumericCharacters) {
//   availableChars = specialCharacters.concat(numericCharacters)
// }
// console.log(availableChars)

//ask for different types of characters
//confirm x 4 for each type
//add to available chars
//validates they selected at least one

//seperate function
//iterate length number of times
//select random char from available chars
//add to result

// function passwordlength (length) {
//   var charlength = availableChars.length;
//   for ( var i=0; i<length; i++) {
//     result += availableChars[Math.floor(Math.random() * charlength)];
//     console.log(result);
//   }
  
// }
function randomchar () {
  result = availableChars[Math.floor(Math.random()*availableChars.length)];
  console.log(result)
}

function passy() {
  for (i = 0; i<length; i++){
    result += availableChars[Math.floor(Math.random()*availableChars.length)]
  }
  console.log(result)
}

// function passwordlength () {
// result+= availableChars[Math.floor(Math.random() * charlength)];
// }
// Array.prototype.random = function(length) {
//   return this[Math.floor((Math.random()*length))]
// }
// var number = availableChars.random(availableChars.length)

generatePassword();
// passwordlength();
randomchar();
passy(length);
// return result
writePassword();
