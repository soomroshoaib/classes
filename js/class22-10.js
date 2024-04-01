console.log('class 22 js 10');

const numbers = [175, 50, 25];

function sum(total, element, index, array) {
  console.log(total, element, index, array);
  return total + element;
}

// console.log(numbers.reduce(sum, 0));

// const mobiles = [
//   { id: 1, brand: 'samsung', price: 1000, name: 'mobile 1', color: 'black' },
//   { id: 2, brand: 'iphone', price: 2000, name: 'mobile 2', color: 'blue' },
//   { id: 3, brand: 'iphone', price: 50000, name: 'mobile 6', color: 'blue' },
//   { id: 4, brand: 'iphone', price: 50000, name: 'mobile 7', color: 'blue' },
//   { id: 5, brand: 'nokia', price: 25000, name: 'mobile 3', color: 'gray' },
//   { id: 6, brand: 'oppo', price: 25000, name: 'mobile 4', color: 'gray' },
//   { id: 7, brand: 'oppo', price: 1000, name: 'mobile 5', color: 'black' },
// ];

// const groupedByBrand = mobiles.reduce((acc, mobile) => {
//   const brand = mobile.brand;
//   if (!acc[brand]) {
//     acc[brand] = [];
//   }
//   acc[brand].push(mobile);
//   return acc;
// }, {});
// const groupedByPrice = mobiles.reduce((acc, mobile) => {
//   const price = mobile.price;
//   if (!acc[price]) {
//     acc[price] = [];
//   }
//   acc[price].push(mobile);
//   return acc;
// }, {});
// const grouperByColor = mobiles.reduce((acc, mobile) => {
//   const color = mobile.color;
//   if (!acc[color]) {
//     acc[color] = [];
//   }
//   acc[color].push(mobile);
//   return acc;
// }, {});

// console.log(groupedByBrand);

// object methods and properties

let name;

const info = { name: 'ali', age: 25 };

const infoCopy = info;

info.city = 'karachi';
info.name = 'usman';
console.log(info, 'info');
console.log(infoCopy, 'infoCopy');

// const person = {
//   isHuman: false,
// //   printIntroduction: function () {
// //     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// //   },
// };

// const me = Object.create(person);

// // me.isHuman = true; // Inherited properties can be overwritten

// console.log(person, me)

const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { z: 4, d: 5 };

const returnedTarget = Object.assign(target, source1, source2);

console.log(returnedTarget);

const object1 = {
  a: 'somestring',
  b: 42,
  name: 'ali',
};

const array = [
  ['a', 'somestring'],
  ['b', 42],
  ['name', 'ali'],
];

console.log(Object.entries(object1));
for (const item of Object.entries(object1)) {
  const [key, value] = item;
  console.log(`${key}: ${value}`, item[0], item[1]);
}

console.log(Object.keys(object1));
console.log(Object.values(object1));

console.log(object1.hasOwnProperty('name'));
console.log(object1.hasOwnProperty('age'));

console.log(Object.fromEntries(array));

const inventories = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const result = Object.groupBy(inventories, (inventory) => {
    console.log(inventory);
    return inventory.type
});

console.log(result)



// const obj = {
//     prop1: 42,
//     prop2: "Hello"
//   };
  
//   Object.seal(obj);
  
//   // Now, you can modify existing properties
//   obj.prop1 = 200;
//   console.log(obj.prop1); // 100
  
//   // You can't add new properties
//   obj.prop3 = true; // This will not add a new property
//   console.log(obj.prop3); // undefined
  
//   // You can't delete properties
//   delete obj.prop2; // This will not delete the property
//   console.log(obj.prop2); // "Hello"
//   console.log(obj, Object.seal(obj), "obj");
//   // You can check if an object is sealed
//   console.log(Object.isSealed(obj)); // true
  

  const obj = {
    prop1: 42,
    prop2: "Hello"
  };
  
  Object.freeze(obj);
  
  // You can't modify existing properties
  obj.prop1 = 100; // This will not change the property
  console.log(obj.prop1); // 42
  
  // You can't add new properties
  obj.prop3 = true; // This will not add a new property
  console.log(obj.prop3); // undefined
  
  // You can't delete properties
  delete obj.prop2; // This will not delete the property
  console.log(obj.prop2); // "Hello"
  console.log(obj, Object.freeze(obj), "obj");
  
  // You can check if an object is frozen
  console.log(Object.isFrozen(obj)); // true
  

//   1. Array reduce method.
// 2. Object methods.
//     assign()
//     entries()
//     fromEntries()
//     keys()
//     values()
//     groupBy()
//     hasOwnProperty()
//     seal()
//     isSealed()
//     freeze()
//     isFrozen()
