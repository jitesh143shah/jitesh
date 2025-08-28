function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function () {
    console.log("Hi, I'm " + this.name);
}
function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.sayHello = function () {
    console.log("My grade is: +" + this.grade);
}
let s1 = new Student("Ram", "A");
s1.sayHi();
s1.sayHello();