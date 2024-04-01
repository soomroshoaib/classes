// import message from "./message.js";
// // import externalMessage from "./external-package.js";
// import msg from "./message.js";
// import { name as n, age, userInfo, users } from "./person.js";
// import { add, subtract, multiply, divide } from "./arithmetic-operators.js";

// // const name = "Jesse";
// // const age = 40;
// // const userInfo = { name: "ali", age: 30, gender: "male" };
// // const users = [{ name: "ali", age: 30, gender: "male" }, { name: "ali", age: 30, gender: "male" }, { name: "ali", age: 30, gender: "male" }];


// // const message = () => {
// //     const name = "Jesse";
// //     const age = 40;
// //     return name + ' is ' + age + 'years old.';
// // };

// // function add(num1, num2) {
// //     return num1 + num2;
// // }

// // function subtract(num1, num2) {
// //     return num1 - num2;
// // }

// // function multiply(num1, num2) {
// //     return num1 * num2;
// // }

// // function divide(num1, num2) {
// //     return num1 / num2;
// // }

// let x = 10;
// function log(message) {
//     console.log(message);
// }

// log("add: " + add(10, 2));
// console.log("subtract: ", subtract(10, 2));
// console.log("multiply: ", multiply(10, 2));
// console.log("divide: ", divide(10, 2));
// // console.log("name: ", name);
// console.log("n: ", n);
// console.log("age: ", age);
// console.log("userInfo: ", userInfo);
// console.log("users: ", users);
// console.log("message: ", message());
// console.log("msg: ", msg());
// // externalMessage();


// OOP - Object Oriented Programming 
const userInfo = { name: "ali" };
userInfo.age = 30
// Defining a class
// export class Person {
class Person {
    constructor(name, age) {
        console.log(name, age, "constructor method calling", this);
        this._name = name;
        this._age = age;
    }
    ageGreaterThan50 = false;

    // Method to display information about the person
    displayInfo() {
        console.log(this, `Name: ${this._name}, Age: ${this._age}`);
    }

    // displayInfo = () => {
    //     console.log(`Name: ${this.name}, Age: ${this.age}`);
    // }

}

// Creating objects (instances) of the Person class
const person1 = new Person('Ali', 30);
const person2 = new Person('Haider', 25);

// Using the displayInfo method to show information about each person
person1.displayInfo(); // Output: Name: Ali, Age: 30
// person2.displayInfo(); // Output: Name: Haider, Age: 25
console.log("person1 name: ", person1._name);
console.log("person1 age: ", person1._age);
// console.log("person1 gender: ", person1.gender);
// console.log("person1 isAdult: ", person1.isAdult);

// function sum(n1, n2) {
//     console.log(n1 + n2);
// }

// sum(10, 2);