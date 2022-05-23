// ASSESSMENT 2: Coding Practical Questions with Jest

//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
// a describe method that lists the name of the function OR naming of the particular test.
//Descibe - the function's name is divisibleBy3.
describe("divisibleBy3", (number) => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it(" takes a number and returns if the number is evenly divisible by 3 so that divisibleby3(9) logs 9 is evenly divisible by 3", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect( divisibleBy3(num1)).toEqual("15 is evenly divisible by 3")
      expect( divisibleBy3(num2)).toEqual("0 is evenly divisible by 3")
      expect( divisibleBy3(num3)).toEqual("-7 is not evenly divisible by 3")
      
    })
  })
// FAIL  ./code-challenges.test.js
//● Test suite failed to run - red error
//ReferenceError: divisibleBy3 is not defined
//***Pseudocode */
//create a function that inputs a number 
// Function is going to check if the number is able to be divided by 3 using modulus to check for remainder. No remainder means the number is evenly divisible.
//outputs if the number is evenly divisible by three.
  const divisibleBy3 = (number) => {
   if(number % 3 === 0) {
       return `${number} is evenly divisible by 3`
        } else {
        return `${number} is not evenly divisible by 3`
       }
     }
      


  const num1 = 15
 //Expected output: "15 is divisible by three"
 const num2 = 0
// // Expected output: "0 is divisible by three"
 const num3 = -7


// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// divisibleBy3
//refactor - I am not sure how to refactor this function but you could use a loop to also check for divisibility however I don't think the code would be any shorter or more efficient than the method I used.
//   ✓  takes a number and returns if the number is evenly divisible by 3 so that divisibleby3(9) logs 9 is evenly divisible by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
//--green - test passed function works.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//pseudocode--
// Make a function whose input is (string)array and the output is the same array but with the first letter of the words in the array being capitalized using the method .toUpperCase.


// a) Create a test with expect statements for each of the variables provided.

describe("capitalizedFirstWordArray" , () => {
    let result1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    let result2 = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    it("takes an array with strings and returns array that has first letter in each string capitalized ", () => {
    expect(capitalizedFirstWordArray(randomNouns1)).toEqual(result1)
    expect(capitalizedFirstWordArray(randomNouns2)).toEqual(result2)
    })
})
//ReferenceError: capitalizedFirstWordArray is not defined
 const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.
//**pseudocode**
// Make a function where a lowercase string array is the input, and  the function returns (output) is the same string array with all the first letters of each string capitalized. Use the method toUpperCase. Use .map method to return a new array with all the words capitalized.

const capitalizedFirstWordArray = (array) => {
  let eachItem =array.map(value => {
  return value[0].toUpperCase()+ value.substring(1)
})
return eachItem
}


//ReferenceError: value is not defined - red error is expected
//Test Suites: 1 passed, 1 total
//Tests:       2 passed, 2 total - green both tests passed function works as expected.
//refactor - I think that I could eliminate the return. 
//but since it has multiple returns I'm not sure of the syntax. 

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
describe("vowelIndex",  () => {
  const vowelTester1 = "learn"
  // // Expected output: 1
   const vowelTester2 = "academy"
  // // Expected output: 0
   const vowelTester3 = "challenges"
   // Expected output: 2
   it("takes in a string and returns index of first vowel in the string" ,() => {
     // a) Create a test with expect statements for each of the variables provided.

     expect(vowelIndex(vowelTester1)).toEqual (1)
     expect(vowelIndex(vowelTester2)).toEqual (0)
     expect(vowelIndex(vowelTester3)).toEqual (2)
   })
})
//ReferenceError: vowelIndex is not defined - red error is expected 

// b) Create the function that makes the test pass.
//** pseudocode**
//Make a function with the input of a string which returns (output) of the index of first letter in string that is a vowel. To get the index you have to turn the string into an array. Only arrays have indexes. Use higher order function from()method to create an array from a string then use filter() method to pick out first letter of word  that contains a vowel - condition true and return the index  of that that letter in the array. - I could not get this idea to work so I ended up making a loop and using .length to check each letter in the string then I used CharAt which returns a string located at a specific place in the string. The function returns i and the CharAt checks for each vowel using the || or operator so if the string contains an a,e,i,o,u the loop stops and gives the index number. I found a youtube video with a one line code answer but since I couldn't understand what the code was saying I didn't want to use that. 

const vowelTester1 = "learn"
  // // Expected output: 1
   const vowelTester2 = "academy"
  // // Expected output: 0
   const vowelTester3 = "challenges"
   const vowelIndex = (string) => {
    for(i =0; i < string.length; i++) {
       if(string.charAt(i)=== "a"||string.charAt(i)=== "e" ||string.charAt(i)=== "i" || string.charAt(i)=== "o"||string.charAt(i)=== "u"){
         return (i)
       }
    } 
   
     
   }
   //1 passed, 1 total
//Tests:       3 passed, 3 total
   // I first attempted this using my pseudocode idea but it didn't work. The index of only looked for the first letter so I had to use a loop to and charAt to instead of indexOf. Would be curious to know if indexOf could work somehow. Any insight appreciated.    
     
