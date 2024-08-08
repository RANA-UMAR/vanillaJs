// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{  // basic flow of inheritance

// }

// let newObj = new child()

class person{
    constructor(branch){
        console.log("enter parent constructor second");

        this.species="homo sapiens"
        this.branch=branch;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");

    }
    work(){
        console.log("person work");
    }
}

class engineer extends person{
    constructor(branch){
        console.log("enter child constructor first");
        super(branch)
        // this.branch=branch
        console.log("exit child constructor third");

    }
    work(){
        console.log("engineer work");
    }
}

class doctor extends person{
    work(){
        console.log("doctor work");
    }
}

let newEng = new engineer("Software engineer")
let newDoc = new doctor()    // because of the newDoc object is created thats why enter in the main parent constructor due to having not declare any constructor in doctor class