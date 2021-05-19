// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes.
// Given a list of words, each word can be written as a concatenation of the Morse code of each letter.
// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

const morseCode = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}


const uniqueMorseRepresentations = function(words) {
  let morseArray = [];
  for (let word of words) {
      let morseCodeWord= "";
      for (let letter of word) {
          morseCodeWord += morseCode[letter]
      }
      if (!morseArray.includes(morseCodeWord)) {
          morseArray.push(morseCodeWord);
      }
  }
  return morseArray.length;
};

words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));