function generatePassword(){
const upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split('');
const numericArr = "0123456789".split('');
const specialCharacterArr = "@#$%^&*()_+{}[]<>|/-=".split('');

let allCharacters = []

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
    allCharacters = allCharacters.concat(lowerCaseArr)
  }


  if (upperCase == true) {
    console.log("needs uppercase letter")
    allCharacters = allCharacters.concat(upperCaseArr)
  }

  if (numeric == true) {
    console.log("needs a numeric character")
    allCharacters = allCharacters.concat(numericArr)
  }
  
  if (specialCharacter == true) {
    console.log("needs a special character")
    allCharacters = allCharacters.concat(specialCharacterArr)
  }

  console.log(allCharacters)

  var passwordStringArr = [];

  for (let i = 0; i < passwordLength; i++) {
   var randomCharacter = (allCharacters[Math.floor(Math.random() * allCharacters.length)])
   console.log(randomCharacter);
   passwordStringArr.push(randomCharacter);
  }

let passwordString = passwordStringArr.join("");

console.log(passwordString);

return passwordString; 


}

      var generateBtn = document.querySelector("#generate");

      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

      }

      generateBtn.addEventListener("click", writePassword); 