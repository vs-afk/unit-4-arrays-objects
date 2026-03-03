/* 
	? Arrays
	* collection of multiple items
	* like a list, or a collection
	* we use [ ] to define it
	* data type agnostic
	* indexable
*/

let myFirstArray = [] // creates an empty array

console.log(myFirstArray)
console.log(myFirstArray.length) // checks the length of your array

let vistedCountries = ["England", "France", "Germany", "Poland", "Canada"]
console.log(vistedCountries)

// Array can be accessed using index, just like strings

console.log(vistedCountries[2])

// What would happen if I accessed something out of bounds?

console.log(vistedCountries[9])

// ? How do we add more data into an array?

vistedCountries[vistedCountries.length] = "Switzerland"
console.log(vistedCountries)

// ? How do we reassign values?

vistedCountries[1] = "Mexico"

console.log(vistedCountries)

/* 
	? Challenge
	* create a function, called findItem
	* it will take two parameters, arr and search
	* itereate thru the array
	* check if the item from the search param is found in the array
	* return true if found false if not
*/

function findValue(arr, search) {
	let result = false
	for (i of arr) {
		if (i === search) {
			result = true
			break // stops execution once satisfied
		}
	}
	return result
}

console.log(findValue(vistedCountries, "Japan"))

// ? Arrays with many different data types

let junkDrawerArray = [
	"whats up",
	67,
	["dog", "cat", "giraffe"],
	null,
	false,
	"potato"
]

console.log(junkDrawerArray[1])

// ? Nested array

console.log(junkDrawerArray)

// ? How to get the cat out of the bag... erm.... array

console.log(junkDrawerArray[2][1])

/* 
	? Challenge
	* create a function called findIndex
	* it will take an array and search param
	* iterate over an array
	* if found, return the index where found item is
	
	! HARD MODE - return the index AND the item
*/

function findIndex(arr, search) {
	let result = []
	for (i in arr) {
		if (arr[i] === search) {
			result[0] = i
			result[1] = arr[i]
		}
	}
	return result
}

console.log(findIndex(vistedCountries, "Poland"))