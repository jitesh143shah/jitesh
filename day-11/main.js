//prototype
const person = {
    greet: function () {
        return "hello " + this.name;
    },
};
const student = {
    name: "clouds",
};
student.__proto__ = person;
console.log(student.greet());