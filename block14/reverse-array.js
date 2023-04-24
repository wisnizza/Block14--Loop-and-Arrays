// Input array
const array = [1, 2, 3, 4]

const reversedArray = []
// Using for loop
// loop from the i of the last value to the first
for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i]
// Push  the array to Reversed Array
  reversedArray.push(valueAtIndex)
}

// Print Reversed Array
console.log(reversedArray)
