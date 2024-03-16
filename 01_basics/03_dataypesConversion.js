let score="123"
console.log(score)
console.log(typeof(score))
// console.log(typeof score)
console.log("********Number conversion*******");
let valueInNumber=Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
// 33>=number "33ab">=NAN  
//  True>=1 false>=0
// null>=0 undefined>=NaN
console.log("*********Boolean Conversion********")
let isLoggedIn=undefined
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1>=true 0>=false "">=false 01ab>=true
// String>=true null>=false  undefined>=false
console.log("****String conversion********")
let someNumber=null
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
console.log(1+"2")
console.log("1"+2)
console.log("1"+"2")
console.log(1+2+"3");
console.log("1"+2+3)

console.log("*****Postfix and infix operators********");
let a=1
let b=10
let x=++a
let y=b++
console.log("value of a and b are "+a+ " "+b)
console.log("value of x and y are "+x+" "+y )
