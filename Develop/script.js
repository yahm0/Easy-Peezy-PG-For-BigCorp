// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define character sets for password generator
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()-_=+';

// Variables to store user choices
let allChars = '';
let passwordLength;

// Prompt user for password length
do {
  passwordLength = parseInt(prompt('Enter password length (between 8 and 128):'));
} while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
