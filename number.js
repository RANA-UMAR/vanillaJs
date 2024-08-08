// toString(): Converts a number to a string.


var num = 123;
var str = num.toString(); // str is now "123"
console.log(str);
console.log(typeof (str));

var num = 12.3456;
var fixedNum = num.toFixed(2); // fixedNum is now "12.35"
console.log(fixedNum);
console.log(typeof (fixedNum));

var num = 123.456;
var precisionNum = num.toPrecision(4); // precisionNum is now "123.5"
console.log(precisionNum);
console.log(typeof (precisionNum));


console.log(Math.floor(Math.random()*10 + 1));
console.log(Math.min(3,3,4,5,6,7));
console.log(Math.max(3,3,4,5,6,7));

const myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

const createdDate = new Date(2023,3,21);
console.log(createdDate.toDateString());


