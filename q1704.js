// You are given a string s of even length. Split this string into two halves of equal lengths, 
// and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

const halvesAreAlike = function(s) {
  s = s.toLowerCase()
  let vowels = ['a', 'e', 'i', 'o', 'u'];    
  const string1 = s.slice(0, s.length / 2);
  const string2 = s.slice(s.length / 2);
  
  // The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, 
  // starting the search at fromIndex. Returns -1 if the value is not found.
  let s1Count = 0;
  let s2Count = 0;
  for (let letter of string1) {
      if (vowels.indexOf(letter) !== -1 ) {
          s1Count++;
      }
  }
  for (let letter of string2) {
      if (vowels.indexOf(letter) !== -1 ) {
          s2Count++;
      }
  }
  return s1Count === s2Count;
};

console.log(halvesAreAlike("book"));
