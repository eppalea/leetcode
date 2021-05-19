// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSum = function(nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
      result.push(sum);
  }
  return result; 
};

nums = [1,2,3,4];
console.log(runningSum(nums));
