/* 
	? Array methods

	* what on Earth is a method?!
	* function... exists on a specific object prototype
	* tl;dr function specific to your object type (in this case, array)
*/

let arrayFromConstructorObject = new Array
console.log(arrayFromConstructorObject)

/* 
	? Basic array methods
	* .push() - adds item & returns length
	* .pop() - removes last item & returns said item
	* .unshift() - adds to front & returns length
	* .shift() - removes from front & returns said item
*/

let carBrands = ["BMW", "Porsche", "Mercedes", "Audi", "Pagani", "Lamborghini"]
console.log(carBrands)

let returnOfPush = carBrands.push("Mazda")
console.log(carBrands, returnOfPush)

let returnOfPop = carBrands.pop()
console.log(carBrands, returnOfPop)

let returnOfUnshift = carBrands.unshift("Honda", "Saab")
console.log(carBrands, returnOfUnshift)

let returnOfShift = carBrands.shift()
console.log(carBrands, returnOfShift)

// findIndex action

carBrands.findIndex((val, index) => {
	if (val === "Porsche") {
		console.log(index)
	}
})

/* 
	? Advanced Array Methods
	* forEach()
		* fires a callback on all items in array
	* map()
		* same as forEach but returns
	* filter()
		* builds new array based on filter predicate
		* can only take an if expression!! (no else)

	* advanced array methods' most common parameters
		* value - at any given time during the iteration
		* index - at any time during looping
		* array - access to the original array
*/

let planets = ["Earth", "Venus", "Mars", "Jupiter", "Uranus", "Mercury", "Saturn", "Neptune", "Pluto"]

/* 
	? What is a callback?
	* it's a function passed inside of another function
	* it fires whenever preceeding function's predicate is satisfied
*/

function myCallbackFx(v, i, a) {

}

planets.forEach(myCallbackFx)

// Above is the same as below

planets.forEach((value, index, origArr) => {
	console.log(value.toUpperCase())
})

// Useful as a single-liner loop to perform work on your data set


let upperCasedPlanets = planets.map(value => value.toUpperCase())
console.log(upperCasedPlanets)


let longerWordedPlanets = planets.filter((val) => val.length > 5)
console.log(longerWordedPlanets)