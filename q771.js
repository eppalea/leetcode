// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
      let jChar = jewels[i];
      for (let j = 0; j < stones.length; j++) {
          let sChar = stones[j];
          if (jChar === sChar) {
              count++;
          }
      }
  }
  return count;
};

jewels = "aA";
stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));  