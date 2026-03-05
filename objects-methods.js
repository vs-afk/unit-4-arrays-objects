/* 
	? Objects Methods
	* different fromt array methods
	* because we're the ones who will build majority of them
	* they require 'this' to access data, or else, they grab global scope
	* 'this' is a magical keyword which defines scope
		* means - here, right now
*/

let f1teams = {
	name: "Petronas",
	principal: "Toto Wolff",
	location: "England",
	drivers: ["Kimi Antonelli", "George Russell"],

	listDrivers() {
		return this.drivers
	},

	definitionOfThis() {
		return this
	},

	// remember when I said this does not bind on arrow fx expressions?

	thisArrowFx: () => {
		return this
		// ! DO NOT USE: this is not bound to the object
	},

	addDrivers: function(driver) {
		this.drivers.push(driver)
	}
}

console.log(f1teams.listDrivers())
console.log(f1teams.definitionOfThis())
console.log(f1teams.thisArrowFx())
f1teams.addDrivers("Frederik Vesti")
console.log(f1teams)


let toDO = {
    today: [],
    tomorrow: [],
    urgent: [],

    addToday(day) {
        return this.today.push(day)
    },

    addTomorrow(tday) {
        return this.tomorrow.push(tday)
    },

    clearAll() {
        this.today.pop()
        this.tomorrow.pop()
        this.urgent.pop()
    },

    removeFrom() {

    }
}


toDO.addTomorrow('Thursday')
toDO.addToday('Wednesday')
// toDO.clearAll()
console.log(toDO)