const numbers = [4, 7, 10, 13, 18, 21, 24, 29];

// numbers.forEach((value, index, origArr) => {
//     console.log(value, index, origArr)
// })

const evenNumbers = numbers.filter(arg => arg % 2 === 0);
console.log('Even Numbers: ' + '[' + evenNumbers + ']')

const doubleNumbers = numbers.map(arg => arg * 2);
console.log('Double Numbers:' + '[' + doubleNumbers + ']')

const squaredOdds = numbers.filter(arg => arg % 2 === 1)
console.log('Squared Odds: ' + '[' + squaredOdds + ']')

const adjustedNumbers = numbers.filter(arg => arg > 15)
console.log('Adjusted Numbers: ' + '[' + adjustedNumbers + ']')