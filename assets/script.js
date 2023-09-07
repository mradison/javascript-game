var passwordText = document.querySelector("#password");

function promptMe(){
  let passwordLength = prompt("How long does your password need to be? (must be between 8 and 128 characters)");

  let lowerCase = confirm("Does it need to include lowercase letters? (select Ok for yes or Cancel for no")

  let upperCase = confirm("Does it need to include uppercase letters? (select Ok for yes or Cancel for no")

  let numeric = confirm("Does it need to include a number? (select Ok for yes or Cancel for no")

  let specialCharacter = confirm("Does it need to include special characters? (select Ok for yes or Cancel for no")

  console.log(passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialCharacter);

  if (lowerCase == true) {
    console.log("needs lowercase letter")
  }
  else {
    console.log("does not need lowercase letter")
  }

  if (upperCase == true) {
    console.log("needs uppercase letter")
  }
  else {
    console.log("does not need uppercase letter")
  }

  if (numeric == true) {
    console.log("needs a numeric character")
  }
  else {
    console.log("does not need numeric character")
  }
  
  if (specialCharacter == true) {
    console.log("needs a special character")
  }
  else {
    console.log("does not need special character")
  }

  const upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseArr = "abcdefghijklmnopqrstuvwxyz";
  const numericArr = "0123456789";
  const specialCharacterOptions = "@#$%^&*()_+{}[]<>|/-=";

  const allCharacters = upperCase + lowerCase + numeric + specialCharacter;

  function createPassword() {
    let newPassword = "";
    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword += numeric[Math.floor(Math.random() * numeric.length)];
    newPassword += specialCharacterOptions[Math.floor(Math.random() * specialCharacterOptions.length)];

    passwordText.value = newPassword;

  }


  while(length > passwordLength.length){
    newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

}





// Assignment Code
/*    
      var generateBtn = document.querySelector("#generate");

      // Write password to the #password input
      /function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

      }

      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
*/


/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/