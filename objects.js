/* 
	? Objects
	* structured container for data
	* in a JavaScript Object Notation (JSON)
		* a way to keep structured data, parse it, and send it efficiently (as string)
	* JSON is actually a string that gets parsed and built up
	* no index ability but it does give us structure
	* the structure comes in the form of .properties
	* it also has .methods() -- some built in, some we can create
	* utilizes this keyword
*/

// ? How to create an object

let sampleObject = {}
console.log(sampleObject)

let student = {
	// property: value,
	// key: value pair
	name: "Scott",
	age: 30,
	cohort: "fullstack-10",
	grades: [90, 25, 30, 17, 100],
	isEnrolled: true
}
console.log(student)

// ? Let's talk real JSON real quick

// ? turn an object into a JSON string

let jsonString = JSON.stringify(student) // efficient for web transport
console.log(typeof jsonString, jsonString)

// ? how to turn JSON string into an object to parse

let sampleJSONString = '{ "name": "Paul", "age": 30 }'

let jsonObject = JSON.parse(sampleJSONString)
console.log(jsonObject)

// ? HINT: JSON parse is VERY sensitive to proper syntax

// TODO: provide students with syntax for JSON

// ? Access any property or value using property and key

console.log(student.cohort) // returns the value of cohort property

console.log(student["name"]) // NOT an array, but syntax is the same

console.log(student[2]) // undefined -- NOT indexable & NOT an array

// ? How to modify properties and values

student.isEnrolled = false
console.log(student)

// ? How to add property and a value

student.mainLanguage = "JavaScript"

console.log(student)

// ? Simple built-in methods on Objects

// Object - interface creating object instances; .keys - method on that object
let studentProperties = Object.keys(student) // get all object keys in an array format
console.log(studentProperties)

let studentValues = Object.values(student)
console.log(studentValues)

/* 
	? JS Fundamentals Crash Course
	* JS is a prototype-based object oriented language
	* meaning every data type (string, array, null, etc.) is an object
	* so how do they get created?? Using a constructor
	* constructor will instantiate a new object using new keyword
	* this new object is a direct descendant of that constructor (factory)	
*/

let newStr = new String("this is my string off String constructor")
console.log(newStr)
let newArray = new Array(5)
console.log(newArray)

// examples of methods used on instances of constructor created objects
console.log(newStr.toLowerCase())
console.log(newArray.filter(i => i))

/* 
	? Challenge
	* access Scott's grades and return a GPA into a variable
	* do it using array methods
	* GPA sum/number of grades

	! HARD MODE - add the result to the property called gpa
*/

// Using Reduce
student.gpa = student.grades.reduce((sum, num) => sum + num, 0) / student.grades.length
console.log(student.gpa)

/* 
	? What is reduce?
	* it takes an accumulator (sum)
	* it also takes an initial value (0)
	* as it loops, it keeps track of the total for us in the accumulator
*/

// Using forEach
let total = 0
student.grades.forEach(grade => total += grade)

student.gpaForEach = total / student.grades.length

console.log(student.gpaForEach)

/* 
	? Learn Objects by creating authentication service
*/

let payload = {
	email: "paul@codecademy.com",
	password: "dbLocal"
}

let db = [
	{ email: "paul@codecademy.com", password: "dbLocal"},
	{ email: "scott@gmail.com", password: "Scotti3"},
	{ email: "arush@google.com", password: "password"},
	{ email: "rus@cyberexpert.com", password: "lakdh&)ldkx-dakhjlf"}
]

// Function is used to encapsulate reusable code
function authenticate(database, request) {

	// let foundUser = []
	// database.forEach(usr => {
	// 	if (usr.email === request.email) {
	// 		foundUser.push(usr)
	// 	}
	// })

	let foundUser = database.filter(usr => usr.email === request.email)
	console.log(foundUser)
	if (foundUser.length) {
		if (foundUser[0].password === request.password) {
			console.log("Logged in")
		} else {
			console.log("Invalid password")
		}
	} else {
		console.log("No user, go away")
	}
}

authenticate(db, payload)

/* 
	? Array Copy Shenanigans
*/

let arr1 = ["Gary", "Paul", "Jake"]
let arr2 = arr1
console.log(arr1, arr2)

let var1 = "Paul"
let var2 = var1
console.log(var1, var2)
var2 = "Kiara"
console.log(var1, var2)

arr2[0] = "Arthur"
console.log(arr1, arr2)
// This modifies both arrays because reference values are by pointer
// shallow copy
let arr3 = arr1.map(i => i) // deep copy
arr3[0] = "Potato"
console.log(arr1, arr3)

// ? Take Home Challenge

let album = {
  id: 55,
  artist: "The Midnight",
  likes: 4200,
  albumInfo: {
    album1: {
      numberOfSongs: 3,
      songInfo: [
        { track: 1, songName: "Days of Thunder" },
        { track: 2, songName: "Los Angeles" },
        { track: 3, songName: "Sunset" }
      ]
    },
    album2: {
      numberOfSongs: 2,
      songInfo: [
        { track: 1, songName: "Neon Lights" },
        { track: 2, songName: "City Dreams" }
      ]
    }
  },
  isAvailable: true
}

/* 
	* print the second song name from album1
	* add album3 inside albumInfo
	* album3 should contain:
		* numberOfSongs
		* songInfo (array of 2 song objects with track and songName properties)
		* fabricate their values to whatever you wish

	! HARD MODE: add a property called totalAlbums which should be total number of albums.
	* hint: use Object.keys() and something else
		
*/