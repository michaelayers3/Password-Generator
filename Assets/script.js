// Assignment Code
var generateBtn = document.querySelector("#generate");
var optionsLower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionsUpper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionsNumbers= ["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9"];
var optionsSpecial= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];



function generatePassword(){
  var chosenChars = []
 var pwLength = prompt("How many characters?");
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Please enter a number between 8 and 128");
  return "";
  }
 
  var lowerCase = confirm("Do you want lowercase letters?");
    if(lowerCase === true){
      chosenChars.push(...optionsLower);
    
  }
  

  var upperCase = confirm("Do you want uppercase letters?");
    if(upperCase === true){
     chosenChars.push(...optionsUpper);
    }

  var numbers = confirm("Do you want numbers?");
    if(numbers === true){
     chosenChars.push(...optionsNumbers);
    }

  var special = confirm("Do you want special characters?");
    if(special === true){
      chosenChars.push(...optionsSpecial);
    }
    console.log(chosenChars);
    
  

  if (lowerCase + upperCase + numbers + special < 1) {
    alert("Please select at least one character type");
    return "";
  }

  var newPassword = "";
    for(var i = 0; i < pwLength; i++){
      var index= Math.floor(Math.random() * chosenChars.length);
      var randomChar= chosenChars[index];
      console.log(randomChar);
      newPassword += randomChar;
    }
    console.log(newPassword);
    return newPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
