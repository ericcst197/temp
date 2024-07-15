function firstRepeatingElement(arr) {
  // Write your code here
  let temp = []

  for(let i = 0 ; i< arr.length; i++) {
    if(!temp.includes(arr[i])) {
      temp.push(arr[i])
    } else {
      return arr[i]
    }
  }

  return undefined
}

// Test Cases - Uncomment the next line to run the test cases
/*
console.log(firstRepeatingElement([2, 5, 6, 8, 5, 2, 6])); // Should log 5
console.log(firstRepeatingElement([2, 3, 4, 5])); // Should log undefined
console.log(firstRepeatingElement([2, 5, 5, 2, 3, 5, 1, 2, 4])); // Should log 5
*/

// console.log(firstRepeatingElement([2, 5, 6, 8, 5, 2, 6])); // Should log 5
// console.log(firstRepeatingElement([2, 3, 4, 5])); // Should log undefined
console.log(firstRepeatingElement([2, 5, 5, 2, 3, 5, 1, 2, 4])); // Should log 5