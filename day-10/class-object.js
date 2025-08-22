// let obj = {
//     username: "clouds",
//     email: "cloudnepal@gmail.com",
// printName() {
//     return this.username;
// },
// printEmail() {
//     return this.email;
// },
// }
// console.log(obj.printName());
// console.log(obj.printEmail())

// *****************************************************
// function Pro(a, b) {
//     this.name = a;
//     this.email = b;
//     this.printName = function () {
//         console.log(this.name);
//         // setTimeout(() => {
//         //     console.log(this.name);
//         // }, 3000)
//     };
//     this.printEmail = function () {
//         console.log(this.email);
//         // setTimeout(() => {
//         //     console.log(this.email);
//         // }, 5000)
//     }
// };
// const p1 = new Pro("clouds", "email");
// p1.printName();
// p1.printEmail();
// *****************************************************
//  class simple
// class Pro {
//     name = "clouds";
//     email = "cloudnepal@gmail.com";

// }
// const p1 = new Pro();
// console.log(p1);
// *****************************************************
//  Class constructor
class Pro {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;

    }
}
const p1 = new Pro("Ram", "102");
console.log(p1);


class Pro1 {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
        console.log("constructor");

    }
    destory() {
        this.name = null;
        this.roll = null;
        console.log("destructor");
    }
}
const p2 = new Pro1("Sita", "105");
console.log(p2);