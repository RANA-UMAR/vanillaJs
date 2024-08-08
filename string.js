// There are two types of data type

// 1)Primitive

// They includes 7 data types

// 1)Number:

// Statement: "Number also their typeof is Number."
// Example: typeof 42 will return "number."

// 2)String:

// Statement: "String also their typeof is String."
// Example: typeof 'hello' will return "string."

// 3)Boolean:

// Statement: "Boolean also their typeof is Boolean."
// Example: typeof true will return "boolean."

// 4)BigInt:

// Statement: "BigInt also their typeof is BigInt."
// Example: typeof 123n will return "bigint."

// 5)null:

// Statement: "null also their typeof is Object."
// Example: typeof null will return "object." (This is considered a bug in the language.)

// 6)undefined:

// Statement: "undefined also their typeof is undefined."
// Example: typeof undefined will return "undefined."

// 7)Symbol:

// Statement: "Symbol also their typeof is Symbol."
// Example: typeof Symbol('example') will return "symbol."


// 2)Non Primitive (Reference)

// there are 3 types of non primitive data types

// 1)Arrays:


// let myArray = [1, 2, 3];
// console.log(Array.isArray(myArray)); // true

// 2)Objects:

// let myObject = { key1: 'value1', key2: 42, key3: true };
// console.log(typeof myObject); // "object"

// 3)Functions:

// const check = function(){
//     console.log("Hello World");
// } 

// console.log(typeof check); // "function"


let gameName = new String("Freefire is new-mobile-game");
console.log(typeof gameName);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("f"));
console.log(gameName.slice(0,8));
console.log(gameName.split("-")); // changes the string into the array

let check ="     react    ";
console.log(check);
console.log(check.trim()); // removes white spaces 

let url = "www.google%20hr.com"
console.log(url.replace("%20","-"));
console.log(url.includes("20")); // it matches with the original string value and console true or false


// find method in array

// const arr = [1,2,3,4,5];
// const result = arr.find((val)=>{
//     return (

//         val>2
//     )
// })
// console.log(result); it gives only first correct value and left the remainder values  


// const arr = [1,2,3,4,5];
// const result = arr.filter((val)=>{
//     return (

//         val>2
//     )
// })
// console.log(result); it gives all correct values

var a =[1,2];
var b =[3,4];
console.log(a.concat(b));
// concat is used to join arrays a.concat(b);
// but + is used to join to strings "hello" + "world"

//forEach

var Language = ['React','Javascript','HTML','CSS'];
Language.forEach(function(language){ console.log(language); 
});


