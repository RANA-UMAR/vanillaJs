// class Mycar {
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandName=brand;  // this.brandName means it is the property of the of object. and right brand carries object value passed to the parameter

//     }
// }

// let fortuner = new Mycar();  // when object is created means to say fortuner constructor is automatically invoked
// fortuner.setBrand("fortuner")  // this is sent in the parameter of setBrand 

// let BMW = new Mycar();
// BMW.setBrand("BMW")




class Mycar {


    constructor(brand,model,mileage){   // constructor is same as function.
        console.log("creating new object");
        this.brand=brand;
        this.model=model;
        this.mileage=mileage;

    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

}

let fortuner = new Mycar( "fortuner",2019,12);  // when object is created means to say fortuner constructor is automatically invoked
console.log(fortuner);

let BMW = new Mycar("BMW",2022,10);
console.log(BMW);

