// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passKey = "";
  var charPool = [];

  return passKey;
}

//PROMPT 1: User choose password length longer than 8 chars but shorter than 128 chars

//PROMPT 2: Lowercase chars?
//PROMPT 3: Uppercase chars?
//PROMPT 4: Numeric chars?
//PROMPT 5: Special chars?

// Write password to page

