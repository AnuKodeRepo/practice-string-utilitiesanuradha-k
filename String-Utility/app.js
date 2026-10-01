const stringUtils = require('./stringUtilis');

//console.log(stringUtilis.contains("hellow world","hai"));
//console.log(stringUtilis.reverse("hai"));
//console.log(stringUtilis.capitalize("hai"));

console.log('=== Testing capitalize() ===');
console.log(stringUtils.capitalize('hello world')); // "Hello world"
console.log(stringUtils.capitalize('JavaScript'));  // "JavaScript"
console.log(stringUtils.capitalize('a'));           // "A"
console.log(stringUtils.capitalize(''));            // "" (empty string edge case)
console.log(stringUtils.capitalize(null));          // "" (null/invalid input)

console.log('\n=== Testing reverse() ===');
console.log(stringUtils.reverse('hello'));          // "olleh"
console.log(stringUtils.reverse('racecar'));        // "racecar"
console.log(stringUtils.reverse(''));               // "" (empty string edge case)
console.log(stringUtils.reverse(undefined));        // "" (undefined input)

console.log('\n=== Testing contains() ===');
console.log(stringUtils.contains('hello world', 'world')); // true
console.log(stringUtils.contains('hello world', 'node'));  // false
console.log(stringUtils.contains('JavaScript', 'Script')); // true
console.log(stringUtils.contains('hello', ''));            // true (empty substring exists in any string)
console.log(stringUtils.contains(null, 'test'));           // false (invalid main string)