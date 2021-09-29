// Variables
var generateBtn = document.querySelector("#generate");
var uppercaseLettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseLettersArray = 'abcdefghijklmnopqrstuvwxyz';
var numbersArray = '0123456789';
var specialCharactersArray = '!@#$%^&*()?{}[]-_+=,./';

var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var specialCharacters;
var passwordCharacters = [];

var numbersSplit = numbersArray.split("")
var uppercaseSplit = uppercaseLettersArray.split("")
var lowercaseSplit = lowercaseLettersArray.split("")
var specialSplit = specialCharactersArray.split("")

// Prompts to ask the user
function passwordComponents() {
  resetApp();
  
  passwordLength = prompt('How long would you like your password to be? Choose a number between 8 - 80.');
  uppercaseLetters = confirm('Would you like uppercase letters?');
  lowercaseLetters = confirm('Would you like lowercase letters?');
  numbers = confirm('Would you like numbers?');
  specialCharacters = confirm('Would you like special characters?');
  
  if (passwordLength < 8 || passwordLength > 80 || passwordLength === null) {
    alert('Error: Your selected password length must be between 8 and 80.');
    passwordComponents();
  }

  if (!uppercaseLetters && !lowercaseLetters && !numbers && !specialCharacters) {
      alert('Error: Please select at least one character type to include in your password.');
      passwordComponents();
  }

  var userCriteria = {
    passwordLength,
    uppercaseLetters,
    lowercaseLetters,
    numbers,
    specialCharacters
  }
  return userCriteria;
}


// if statements to add chosen arrays to passwordCharacters array + loop to choose random letter for user preferences length
function generatePassword() {
  var userCriteria = passwordComponents();

  if (userCriteria.uppercaseLetters) {
    passwordCharacters = passwordCharacters.concat(uppercaseSplit);
  }
  if (userCriteria.lowercaseLetters) {
    passwordCharacters = passwordCharacters.concat(lowercaseSplit);
  }
  if (userCriteria.numbers) {
    passwordCharacters = passwordCharacters.concat(numbersSplit);
  }
  if (userCriteria.specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialSplit);
  }
  var password = "";

  for (var i = 0; i < userCriteria.passwordLength; i++) {
      var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      
      password = password + randomCharacter;
  }
  
  return password;
}

// The generated password being inputted in the text box. 
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Function to reset passwordCharacters array
function resetApp() {
    passwordCharacters = [];
    passwordLength;
    uppercaseLetters;
    lowercaseLetters;
    numbers;
    specialCharacters;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


