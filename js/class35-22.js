console.log("class 22 of JS");

// 4 pillars of OOP 

// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

class Player {
    constructor(color, name, age, height, weight, position, number) {
        this.color = color,
            this.name = name,
            this.age = age,
            this.height = height,
            this.weight = weight,
            this.position = position,
            this.number = number
    }

    jump() {
        console.log(`jump`);
    }

    stop() {
        console.log(`stop`);
    }

    run() {
        console.log(`run`);
    }

    walk() {
        console.log(`walk`);
    }

    whistle() {
        console.log(`whistle`);
    }
}

class Car {
    // constructor(make, model, year, color, value) {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0; // Adding a default speed property
        // this.value = value
        // this.get = function () {
        //     console.log(`The value is: ${this.value}`);
        // };
    }

    accelerate() {
        // this.speed = this.speed + 10;
        // OR 
        this.speed += 10;
        // this.honk(); // Calling the honk method
        // console.log(`The ${this.year} ${this.make} ${this.model.toUpperCase()} is accelerating. Current speed: ${this.speed} mph`);
        console.log(`The ${this.year} ${this.make} ${this.model} is accelerating. Current speed: ${this.speed} mph`);
    }

    brake() {
        this.speed -= 5;
        console.log(`The ${this.year} ${this.make} ${this.model} is braking. Current speed: ${this.speed} mph`);
    }

    brake() {
        this.speed -= 10;
        console.log(`The ${this.year} ${this.make} ${this.model} is braking. Current speed: ${this.speed} kmph`);
    }

    // horn
    honk() {
        console.log(`Beep beep! The ${this.year} ${this.make} ${this.model} is honking 1.`);
    }

    honk() {
        console.log(`Beep beep! The ${this.year} ${this.make} ${this.model} is honking 2.`);
    }
}


// here Car is base or parent class and ElectricCar is derived or child class. The ElectricCar class inherits the properties and methods from the Car class. The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

// Inheritance
class ElectricCar extends Car {
    constructor(make, model, year, color, batteryCapacity) {
        super(make, model, year, color);
        this.batteryCapacity = batteryCapacity;
    }


    charge() {
        console.log(`Charging the ${this.year} ${this.make} ${this.model}. Battery capacity: ${this.batteryCapacity} kWh`);
    }

    // Overriding the accelerate method for ElectricCar
    // accelerate() {
    //     this.speed += 15; // Electric cars may accelerate differently
    //     console.log(`The ${this.year} ${this.make} ${this.model} (electric) is accelerating. Current speed: ${this.speed} mph`);
    // }
}



// Creating an instance of the Car class

const corolla = new Car('Toyota', 'Corolla', 2021, 'Silver');
const prius = new Car('Toyota', 'Prius', 2023, 'Grey');
// const accord = new Car('Honda', 'Accord', 2000, 'White');
// const civic = new Car('Honda', 'Civic', 2015, 'Blue');
const civic = new ElectricCar('Honda', 'Civic', 2015, 'Blue');
civic.accelerate()
// console.log({ camry });
// console.log({ corolla });
// console.log("prius: ", prius);
// camry.accelerate();
// console.log("camry: ", camry);

// camry.accelerate();
// console.log("camry: ", camry);

// camry.accelerate();
// console.log("camry: ", camry);

// camry.brake();
// console.log("camry: ", camry);

// camry.brake();
// console.log("camry: ", camry);


// prius.accelerate();
// console.log("prius: ", prius);

// prius.accelerate();
// console.log("prius: ", prius);

// prius.brake();
// console.log("prius: ", prius);

// corolla.accelerate();

// console.log({ camry });
// console.log({ corolla });
// console.log("prius: ", prius);
// console.log("civic: ", civic);

function func(params) {
    console.log("params: ", params);
}

// document.getElementById("car-speed").addEventListener("change", func, { once: false });
// document.getElementById("car-speed").removeEventListener("change", func)


// function speedChange(speedInput) {
//     const camry = new Car('Toyota', 'Camry', 2022, 'Blue', Number(speedInput.value));


//     console.log("speedInput: ", Number(speedInput.value), speedInput.value, camry);
// }

