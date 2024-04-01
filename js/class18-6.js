console.log('class18-6.js', window);

// IIFE in javascript // Immediately Invoked Function Expressions

// function add(num1, num2) {}
// add(10, 20);

// var name = 'ali';
// var age = 50;
// (function (num1, num2) {
//   var age = 30;
//   console.log('IIFE', num1 + num2);
// })(40, 60);

// intervals in javascript
// setTimeout(() => {

// }, timeout);

// console.log('before setTimeout');

// showing modals after some interval of time we can use setTimeout
// setTimeout(() => {
//   console.log('setTimeout');
// }, 5000); // timeout in milliseconds
// // OR

// const setTimeOutHandler = () => {
//   console.log('setTimeout');
// };
// // showing modals after some interval of time we can use setTimeout
// const timeout = setTimeout(setTimeOutHandler, 5000); // timeout in milliseconds

// function timeoutClear() {
//   console.log('timeoutClear');
//   clearTimeout(timeout);
// }

// document.querySelector('button').addEventListener('click', timeoutClear);
// console.log('after setTimeout');

// let i = 1;
// const interval = setInterval(() => {
//   console.log('setInterval', i);
//   i++;
// }, 1000); // timeout in milliseconds

// document.querySelector('button').addEventListener('click', () => {
//   clearInterval(interval);
// });

// OR
// const intervalClear = () => {
//   console.log('intervalClear');
//   clearInterval(interval);
// };

// document.querySelector('button').addEventListener('click', intervalClear);

// callback function (intervalClear)  => when we pass a function as an argument to another function then the passed function is called callback function
// higher order function (addEventListener)=> when a function accepts another function as an argument then the function is called higher order function

// const hof = () => {
//   return () => {};
// };

// or when a function return a function then this function is also called HOF( higher order function)

// events
// we can use or trigger multiple js events on single element

// function showDate() {
//   document.getElementById('demo').innerHTML = Date();
// }
// function hideDate() {
//   document.getElementById('demo').innerHTML = '';
// }

// // OR

// document.querySelector('button').addEventListener('onmouseover', () => {
//   document.getElementById('demo').innerHTML = Date();
// });
// document.querySelector('button').addEventListener('onmouseout', () => {
//   document.getElementById('demo').innerHTML = '';
// });

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// methods in objects in javascript

const obj = {
  name: 'ali',
  age: 20,
  greeting: function () {
    console.log('hello');
  },

  address: {
    city: 'karachi',
    country: 'Pakistan',
    state: {
      abc: 'xyz',
    },
  },
};

// obj
// {name: 'ali', age: 20, address: {…}, greeting: ƒ}address: {city: 'karachi', country: 'Pakistan', state: {…}}city: "karachi"country: "Pakistan"state: abc: "xyz"[[Prototype]]: Object[[Prototype]]: Objectage: 20greeting: ƒ ()name: "ali"[[Prototype]]: Object
// obj.address
// {city: 'karachi', country: 'Pakistan', state: {…}}
// obj.address.city
// 'karachi'
// obj.address.country
// 'Pakistan'
// obj.address.state
// {abc: 'xyz'}
// obj.address.state.abc
// 'xyz'

// Math Object
// console.log(Math.PI);
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.9));
// console.log(Math.trunc(3.9987909));
// console.log(Math.pow(2, 3), 2 ** 3); // 2 * 2 * 2
// console.log(Math.random());
// console.log(Math.sqrt(36));
// console.log(Math.abs(-4.755));
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Number Object

const number = 243.234;
console.log(typeof number.toString(), typeof number, number.toString());

// Json in javascript

// const json ='[{ "firstName": "John", "lastName": "Doe" }]';

// const array = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Anna', lastName: 'Smith' },
//   { firstName: 'Peter', lastName: 'Jones' },
// ];
// console.log(typeof array, array);

const json = `[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]`;

console.log(typeof json, json, json.length);
for (const item of json) {
  console.log('item json: ', item);
}

const array = JSON.parse(json);
console.log(typeof array, array, array.length);

for (const item of array) {
  console.log('item array: ', item);
}

const arrayConvertedToJson = JSON.stringify(array, undefined, 4);
console.log(
  typeof arrayConvertedToJson,
  arrayConvertedToJson,
  arrayConvertedToJson.length
);

for (const item of arrayConvertedToJson) {
  console.log('item arrayConvertedToJson: ', item);
}

// Higher order function.
// Callback function.
// IIFE (Immediately Invoked Function Expressions).
// Math Object (abs(),ceil(),cos(),cosh(),exp(),floor(),
//        log(),max(),min(),pow(),random(),round(),sqrt(),
//        trunc() etc).
// JSON in JavaScript (JSON.parse(), 
//        JSON.stringify()).
// setTimeOut, setTimeInterval, clearInterval, 
//        clearTimeout.


// ,abs(),ceil(),cos(),cosh(),exp(),floor(),log(),max(),min(),pow(),random(),round(),sqrt(),trunc()