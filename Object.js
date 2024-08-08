
// using this type of object we called as a Object literals

const teacher = {
    name:"ali",
    id:1,
    age:22,
    course:"math"
}

console.log(teacher.course);  // first way to call object
console.log(teacher["course"]);  // second way to call object

teacher.course="phy";
// Object.freeze(teacher);
teacher.course="chem";

console.log(teacher.course);

teacher.greeting = function(){
    console.log("object with function");
}

teacher.greetingTwo = function(){
    console.log(`Name of a teacher is ${this.name}`);
}
console.log(teacher.greeting());
console.log(teacher.greetingTwo());