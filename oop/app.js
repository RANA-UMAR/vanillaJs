const student = {
    name:"umar",
    age:22,
    marks:90,
    subject:function(){
        console.log("Marks in Maths "+this.marks);
    },
    subject2(){
        console.log("Second way writing of function inside the object "+this.marks);

    }
}

// JS objects have special properties called prototype.
// Inside the object we have prototype and in prototype we have properties and methods but we can also declare our own prototype inside the object to avoid the repitetion of the code  

const employee = {
    calcTax(){
        console.log("tax is 10%");
    }
}

const salesPerson = {
    salary:50000
}

const salesPerson2 = {
    salary:50000,
    calcTax(){
        console.log("tax is 20%"); // this has higher priorty because if object & prototype having same methods    then object method will be called
    }

}

const salesPerson3 = {
    salary:50000
}

const salesPerson4 = {
    salary:50000
}



salesPerson.__proto__ = employee;
salesPerson2.__proto__ = employee;
salesPerson3.__proto__ = employee;
salesPerson4.__proto__ = employee;