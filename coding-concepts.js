// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
 console.log(cohort.split(""))

// a) Your answer: "B","r","a","v","o","2","",0","2","2" 
// b) Verify and explain: I was correct, split takes a string and splits it up into an array of substrings. The space in the string still has to exist in the new array because split doesn't change the length of the string.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN student
// b) Verify and explain: My answer was incorrect I didn't realize it wouldn't  log anything if the name was not defined. In Javascript when you declare a variable you also need to assign a value if not the variable will be undefined and any string involving that variable won't output anything to the console.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer: [8, 10, 12,14, 16]
// b) Verify and explain: I got this correct. the map value assigns new values to each item in an array. In this function each number in the array is mutiplied by two and this returns a new array of those numbers.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer:[11,13,15]
// b) Verify and explain: This function takes an array and returns an new array using the filter method that doesn't contain any numbers divisible by two which is another way to say the numbers are odd.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: This code declares a variable myCodingSkills which contains the arrays of languages, frameworks, databases (string) and versionControl (string). The output will be from the array languages and its the index of zero within the language array which is the string "Javascript" and will print out in the terminal as Javascript. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: I think this will result in an error because the computer doesn't know where "George" is part of the object so it will be undefined.
// b) Verify and explain: I was wrong. I forgot that the computer reads stuff from top to bottom so it knows that "George" is part of the oject Learn and since it is in the first value position it also knows that George is a name. So it will output all of the key value pairs stored in the object when that object is logged in the console. The new keyword adds a value to a key in an object. In this case it added "George" and no other strings were included so the computer added the value "George" to the name key and outputed all the key value pairs of Learn since the variable learnStudent contains the object Learn.
