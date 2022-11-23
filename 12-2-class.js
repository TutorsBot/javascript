// class Car{
//     driving(){
//         console.log("Driving.......");
//     }
// }

// Method Overriding
// class Honda extends Car{
//     driving(){
//         super.driving();
//         console.log("Honda...........")
//     }
//     brand = "Honda";
// }

// var AmCar = new Honda();
// AmCar.driving();

// let car = {
//     wheel : "Four Wheel",
//     drive(){
//         console.log("driving.......")
//     }
// }

// let honda = {
//     __proto__: car,
//     brand : "Honda",
//     driving(){
//         this.__proto__.drive()
//         console.log("Honda......");
//     }
// }

// honda.driving();


// class Car{
//     // Static Property
//     static wheel = "Four Wheel"
//     // Static Method
//     static driving(){
//         console.log("Driving.......");
//     }
// }

// Private Property
// class Honda extends Car{
//     static driving(){
//         super.driving();
//         console.log("Honda...........")
//     }
//     brand = "Honda";
//     _chasis_number = "222-4444-555-9999"
// }

// const Amaze = new Honda();
// console.log(Amaze.chasis_number);

// Get and Set 


// class Honda extends Car{
//     static driving(){
//         super.driving();
//         console.log("Honda...........")
//     }
//     brand = "Honda";
//     _chasis_number = "222444555999"
//     get chasis(){
//         var end = this._chasis_number.slice(8,12);
//         var chasis = `XXXX-XXXX-XXXX-${end}`
//         return chasis
//     }
//     set chasis(value){
//         this._chasis_number = `${this._chasis_number.slice(0,8)}${value}`;
//         // console.log(this._chasis_number);
//     }
// }

// const Amaze = new Honda();
// // console.log(Amaze.chasis);
// Amaze.chasis = 5444;
// console.log(Amaze.chasis)

