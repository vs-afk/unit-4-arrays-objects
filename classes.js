/* 
	? Class
	* a template for creating objects
	* it's what we think of as a constructor factory
	* it allows us to use the template to build instances of your Class
	
	? Class Methods
	* allow us to modify the instances of objects they create
*/

class Car {
	constructor(make, model, year, transmission, vin) {
		// allows us to define what our instances will hold
		this.make = make
		this.model = model
		this.year = typeof year === "number" ? year : undefined
		this.transmission = transmission
		this.vin = vin
		this.market = "North America"
	}

	modifyVIN(vin) {
		if (vin.length === 17) {
			this.vin = vin
		} else {
			console.log("VIN must be 17 characters long")
		}
	}
}

// creating an instance of our class
console.log(new Car())

let bmw = new Car("BMW", "M2", 2025, "manual", 9348594857048)
console.log(bmw)

bmw.modifyVIN("WACAW638369891973")
console.log(bmw)

let audi = new Car("Audi", "RS5", 2026, "8AT", "2897349387")
console.log(audi)
audi.modifyVIN("90382409")

/* 
	? Inheritance
	* allows us to share original constructor and methods
	* without affecting the parent class construct
	* we use extends keyword to inherit
*/

class CarEurope extends Car {
	constructor(make, model, year, transmission, vin, isCPO) {
		// allows access to original constructor
		super(make, model, year, transmission, vin)
		this.isCPO = isCPO
		this.market = "Europe"
	}
}

console.log(new CarEurope())

let alpine = new CarEurope("Alpine", "A110", 2025, "manual", "9846507843", false)

alpine.modifyVIN("WACAW638369891973")

/* 
	? APIE
	* abstraction
		* obfuscation of implementation (wrapping inside of a function)
	* polymorphism
		* creating instances from the same constructor
	* inheritance
		* shares methods and properties
	* encapsulation
		* scope related shenanigans {{{{{{{}}}}}}}
*/