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

generatePassword();

function generatePassword() {
  var passKey = "";
  var charPool = [];

  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '1234567890';
  var special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  var passLength = prompt("Enter a password length (8 chars or more).");
  var includeLowerCase = confirm("Want to include lowercase chars?");
  var includeUpperCase = confirm("Want to include uppercase chars?");
  var includeNumeric = confirm("Want to include numbers?");
  var includeSpecial = confirm("Want to include special characters?");

  if (includeLowerCase == true) {
    charPool.concat(lowerCase);
  }

  if (includeUpperCase == true) {
    charPool.concat(upperCase);
  }

  if (includeNumeric == true) {
    charPool.concat(numeric);
  }

  if (includeSpecial == true) {
    charPool.concat(special);
  }

  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(special);

  return passKey;
}

//PROMPT 1: User choose password length longer than 8 chars but shorter than 128 chars

//PROMPT 2: Lowercase chars?
//PROMPT 3: Uppercase chars?
//PROMPT 4: Numeric chars?
//PROMPT 5: Special chars?

// Write password to page

