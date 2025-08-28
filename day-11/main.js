//prototype
// const person = {
//     greet: function () {
//         return "hello " + this.name;
//     },
// };
// const student = {
//     name: "clouds",
// };
// student.__proto__ = person;
// console.log(student.greet());
// *****************************************************************************
//call

// function Category(category) {
//     this.category = category;
//     console.log(category);
//     console.log(this);

// }
// function Food(name, price, category) {
//     this.name = name;
//     this.price = price;
//     // console.log(name);
//     Category.call(this, category);

// }
// new Food("Pizza", "12145", "fast Food");
// ***********************************************************************************

//Object create first
// let obj1 = { a: 5 };
// let obj2 = Object.create(obj1)

// // console.log(obj1);
// // console.log(obj2); this return blank
// console.log(obj2.a);

// ***********************************************************************************
// Inheritance

// function Category(category) {
//     this.category = category;
//     return category;
// };
// Category.prototype.printHello = function () {
//     console.log("hello1", this.category);
// }
// function Food(name, price, category) {
//     this.name = name;
//     this.price = price;
//     Category.call(this, category);

// }
// Food.prototype = Object.create(Category.prototype);
// let newFood = new Food("Pizza", 234, "fast food");

// newFood.printHello();
// **************************************************************************
//parent
function Person(name) {
    this.name = name;
    return name;

}
Person.prototype.sayHello = function () {
    console.log(this.name);
}

// child
function Student(name, roll) {
    Person.call(this, name);
    this.roll = roll;
}
Student.prototype = Object.create(Person.prototype);

//child member
Student.prototype.showRoll = function () {
    console.log(this.roll)

}

let s1 = new Student("Ram", 5);
s1.sayHello();
s1.showRoll();



