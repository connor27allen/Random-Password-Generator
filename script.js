// Assignment code here
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?'];
var studentNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
var characterSet = [];



var password = '';
var passwordLength = 15;

var wantsLowercase = true;
var wantsUppercase = true;      
var wantsNumbers = true
var wantsSpecialCharacters = true;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  if (wantsLowercase) {
    characterSet = characterSet.concat(lowercaseLetters) //changes value of characterSet
}

if (wantsUppercase) {
    characterSet = characterSet.concat(uppercaseLetters) 
}

if (wantsNumbers) {
    characterSet = characterSet.concat(numbers) 
}

if (wantsSpecialCharacters) {
    characterSet = characterSet.concat(specialCharacters) 
}

for (var count = 0; count < passwordLength; count++) {
  var ranIndex = Math.floor(Math.random() * characterSet.length)
  password += characterSet[ranIndex];
}

return password;
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  password = '';
  generatePassword();
  passwordText.value = password;
});
