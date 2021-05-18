// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Notes for solution:
// The ascii value from 65 to 90 represent the uppercase alphabet A to Z.
// While, the ascii value from 97 to 122 represent the lowercase alphabet a to z.
// By adding 32 to the ascii value, we are converting it to lowercase.

const toLowerCase = function(str) {
  let result = '';
  for (let letter of str) {
      const index = letter.charCodeAt(0);
      if (index >= 65 && index <= 90) {
          letter = String.fromCharCode(index + 32);
      }
      result += letter
  }
  return result;
};

str = "Hello";
console.log(result);