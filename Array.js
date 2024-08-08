var fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
var fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2

var fruits = ["Apple", "Banana"];
var fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"


var fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1

var fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false


var fruits = ["Apple", "Banana"];
var newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3


var fruits = ["Apple", "Banana", "Orange"];
var removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange


var fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
var start = -3;
var removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]

var fruits = ["Apple", "Banana"];
var removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple

var fruits = ["Banana", "Mango"];
var newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3