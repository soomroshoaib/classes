console.log("class 23 of JS");

// access modifiers: public, private, protected


// 4 pillars of OOP 

// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism => poly: many, morph: form

// Encapsulation

// class Car {
//     // constructor(make, model, year, color, value) {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.speed = 0; // Adding a default speed property
//         // this.value = value
//         // this.get = function () {
//         //     console.log(`The value is: ${this.value}`);
//         // };
//         // this.property = "value";

//         // // Private property
//         // let _privateProperty = "I am private";

//         // // Private method
//         // let _privateMethod = function () {
//         //     console.log("This is a private method");
//         // };
//     }

//     static property = "value";


//     // Getter 
//     get _speed() {
//         // Encapsulating the speed to control access
//         // if (this.speed < 10) {
//         //     return 0;
//         // } else {
//         //     return this.speed;
//         // }

//         // OR 

//         if (this.speed <= 10) {
//             // console.log("entering if");
//             return 0;
//         }
//         return this.speed;

//     }
//     // Setter
//     set _speed(speed) {
//         console.log("entering set _speed", speed);
//         if (speed >= 0) {
//             this.speed = speed;
//         } else {
//             console.log("Invalid speed for _speed");
//         }
//     }

//     accelerate() {
//         // this.speed = this.speed + 10;
//         // OR 
//         this.speed += 10;
//         // this.honk(); // Calling the honk method
//         // console.log(`The ${this.year} ${this.make} ${this.model.toUpperCase()} is accelerating. Current speed: ${this.speed} mph`);
//         console.log(`The ${this.year} ${this.make} ${this.model} is accelerating. Current speed: ${this.speed} mph`);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`The ${this.year} ${this.make} ${this.model} is braking. Current speed: ${this.speed} mph`);
//     }

//     brake() {
//         this.speed -= 10;
//         console.log(`The ${this.year} ${this.make} ${this.model} is braking. Current speed: ${this.speed} kmph`);
//     }

//     // horn
//     honk() {
//         console.log(`Beep beep! The ${this.year} ${this.make} ${this.model} is honking 1.`);
//     }

//     honk() {
//         console.log(`Beep beep! The ${this.year} ${this.make} ${this.model} is honking 2.`);
//     }

//     static log() {
//         console.log("static log");
//     }
// }

// const corolla = new Car('Toyota', 'Corolla', 2021, 'Silver');
// corolla.speed = "speed";
// corolla.color = 30;
// // console.log(corolla._speed, "corolla: ", corolla);
// corolla._speed = 100;
// corolla.accelerate();
// // console.log(corolla._speed, "corolla: ", corolla);
// corolla.accelerate();
// // console.log(corolla._speed, "corolla: ", corolla);
// Car.log();

// console.log(Car.property);


// class BankAccount {
//     constructor(balance) {
//         this._balance = balance;
//     }

//     get balance() {
//         // Encapsulating the balance to control access
//         return this._balance;
//     }

//     deposit(amount) {
//         // Encapsulating the logic for updating the balance
//         this._balance += amount;
//     }

//     withdraw(amount) {
//         // Encapsulating the logic for updating the balance
//         if (amount <= this._balance) {
//             this._balance -= amount;
//         } else {
//             console.log("Insufficient funds");
//         }
//     }
// }

// // Usage
// const account = new BankAccount(1000);
// console.log(account.balance); // Accessing balance using getter
// account.deposit(500);
// console.log(account.balance); // Updated balance
// account.withdraw(200);
// console.log(account.balance); // Updated balance after withdrawal

// // procedural programming vs OOP

// // const num1 = 10;
// // const num2 = 20;
// // const radius = 5;

// // function sum(num1, num2) {
// //     return num1 + num2;
// // }


// // function calculateAreaOfCircle(radius) {
// //     return Math.PI * radius * radius;
// // }


// // sum(num1, num2);

// // calculateAreaOfCircle(radius);


// // const area = {
// //     radius: 5,
// //     calculateAreaOfCircle() {
// //         return Math.PI * this.radius * this.radius;
// //     }
// // }

// // Polymorphism 

// class Shape {
//     calculateArea() {
//         // Polymorphic method
//         throw new Error("Method not implemented");
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     calculateArea() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Square extends Shape {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     calculateArea() {
//         return this.side * this.side;
//     }
// }

// class Triangle extends Shape {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     // calculateArea() {
//     //     return 0.5 * this.base * this.height;
//     // }
// }

// // Usage
// const circle = new Circle(5);
// const square = new Square(4);
// const triangle = new Triangle(3, 6);

// console.log(circle.calculateArea());
// console.log(square.calculateArea());
// console.log(triangle.calculateArea());



// Abstraction

class Car {
    start() {
        // Abstracting the logic for starting the car
        throw new Error("Method not implemented");
    }

    stop() {
        // Abstracting the logic for stopping the car
        throw new Error("Method not implemented");
    }
}

class Sedan extends Car {
    start() {
        console.log("Sedan car started");
    }

    // stop() {
    //     console.log("Sedan car stopped");
    // }
}

class SUV extends Car {
    start() {
        console.log("SUV started");
    }

    stop() {
        console.log("SUV stopped");
    }
}

// Usage
const sedanCar = new Sedan();
const suvCar = new SUV();

sedanCar.start();
sedanCar.stop();

suvCar.start();
suvCar.stop();





