let score="123"
console.log(score)
console.log(typeof(score))
// console.log(typeof score)
let valueInNumber=Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
// 33>=number "33ab">=NAN  
//  True>=1 false>=0
// null>=0 undefined>=NaN

let isLoggedIn=undefined
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1>=true 0>=false "">=false 01ab>=true
// String>=true null>=false  undefined>=false

let someNumber=null
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
