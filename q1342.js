// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = function(num) {
  let stepCount = 0
  while (num > 0) {
      if (num % 2 === 0) {
          num = num / 2;
          stepCount++;
      } else {
          num = num - 1;
          stepCount++;       
      }  
  }
  return stepCount;      
};

num = 14;
console.log(numberOfSteps(num));