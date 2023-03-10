// Assignment Code
var generateBtn = document.querySelector("#generate");
var optionsLower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionsUpper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionsNumbers= ["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9"];
var optionsSpecial= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];



function generatePassword(){
 var response = prompt("How many characters?");
  if (response < 8 || response > 128) {
    alert("Please enter a number between 8 and 128");
  return;
  }
  else {
    var Length = parseInt(response);
    console.log(Length);
  }
  
  var lowerCase = confirm("Do you want lowercase letters?");
    if(lowerCase === true){
      var index= Math.floor(Math.random(Length) * optionsLower.length);
      var randomLower = optionsLower[index];}
    }
      console.log(randomLower);



  // var upperCase = confirm("Do you want uppercase letters?");
  //   if(upperCase === true){
  //     var index= Math.floor(Math.random() * optionsUpper.length);
  //     var randomUpper= Length * optionsUpper;
  //   } else{
  //     var randomUpper= password += "";
  //   }
  // var numbers = confirm("Do you want numbers?");
  //   if(numbers === true){
  //     var index= Math.floor(Math.random() * optionsNumbers.length);
  //     var randomNumbers= Length * optionsNumbers;
  //   } else{
  //     var randomNumbers= password += "";
  //   }
  // var special = confirm("Do you want special characters?");
  //   if(special === true){
  //     var index= Math.floor(Math.random() * optionsSpecial.length);
  //     var randomSpecial= Length * optionsSpecial;
  //   } else{
  //     var randomSpecial= password += "";
  //   }

  // if (lowerCase === false && upperCase === false && numbers === false && special === false) {
  //   alert("Please select at least one character type");
  //   return;
  // }
    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  