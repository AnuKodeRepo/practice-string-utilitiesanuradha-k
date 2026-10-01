function  capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
     return "Please enter valid String";
    }
   else{
    return str.charAt(0).toUpperCase() + str.slice(1)
   }
}

function reverse(str) {
   if (typeof str !== 'string') {
    return '';
  }
        return str.split("").reverse().join("");
    
}

function contains(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false;
  }
  return str.includes(substr);
} 

 


/*function isOnlyLetters(str) {
  // Return false if input is empty, null, or undefined
  if (!str) return false;
  
  // \s* matches zero or more leading spaces
  // [A-Z] checks if the first non-space character is an uppercase letter
  return /^\s*[a-zA-Z]/.test(str.trim());
}
 console.log(isOnlyLetters(" asa2 "));*/

module.exports = {capitalize, reverse, contains};


