// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercaseLettersArray = 'abcdefghijklmnopqrstuvwxyz'
var numbersArray = '0123456789'
var specialCharactersArray = '!@#$%^&*()?{}[]-_+=,./'
var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var specialCharacters;

var characterSplit = numbersArray.split("")
console.log(characterSplit)

var characterSplit = uppercaseLettersArray.split("")
console.log(characterSplit)

var characterSplit = lowercaseLettersArray.split("")
console.log(characterSplit)

var characterSplit = specialCharactersArray.split("")
console.log(characterSplit)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



