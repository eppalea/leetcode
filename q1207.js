//Given an array of integers arr, write a function that returns true 
//if and only if the number of occurrences of each value in the array is unique.

const uniqueOccurrences = function(arr) {
  const numCount = {};
  for (let i = 0; i < arr.length; i++) {
    numCount[arr[i]] = numCount[arr[i]] ? numCount[arr[i]] + 1 : 1
  }    
  
  // The Object.values() method returns an array of a given object's own enumerable property values
  let values = Object.values(numCount)

  // The size accessor property returns the number of (unique) elements in a Set object.
  return values.length === new Set(values).size
};

arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr));