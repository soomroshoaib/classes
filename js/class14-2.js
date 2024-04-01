console.log('age 1: ', age);
// hoisted
var age = 25; // global scope
age = 30; // global scop
var age = 60; // global scope
console.log('age 1: ', age);

// tightly typed languages Java, C++

// JS is loosely typed language
let name = 'ali'; // block level scope
// let name = 'ali'; // block level scope
console.log('name 1: ', name);

name = 'haider';
console.log('name 2: ', name);

// console.log('pi 1: ' + pi);
// console.log('pi 1: ' , pi);
const pi = 3.142857142857143; // block level scope
// const pi = 3.142857142857143; // block level scope
console.log('pi 1: ', pi);
// pi = 3;
window.console.log('pi 2: ', pi);
// console.log(22/7)

// console.log(age, name, pi);
let std1 = 'ali',
  std2 = 'haider',
  std3 = 'maaz',
  std4 = 'saif',
  std5 = 'haris';
//   prototypal inheritence

console.log('std1: ', std1);

// data types
// primitive vs non primitive

// primitive = string, number, boolean, undefined, null, Symbol
// non-primitive = object
// array = object
// object = object
// function = object
let studentNames;
studentNames = [
  'ali',
  'haider',
  'haris',
  'saif',
  'faizan',
  'ayesha',
  'sajid',
  'usman',
];
studentNames[8] = 'hasnain';
studentNames[9] = 'adil';
let studentIds = [10, 20, 40, 50, 60];
let isAdult = [true, false, true, false, false];
let mathsNumbers = [10.45, 20.780934834, 40.34, 50.23, 60.9];
// let _null = [null, null];
// let _undefined = [undefined, undefined, undefined];
let mixed = ['ali', 40, 30.808909, true];

console.log('studentNames:', studentNames);
console.log('studentName:', studentNames[6], studentNames.length);
const index = studentNames.length - 1;
// console.log('studentName:', studentNames[index]);
// const i = index; // 7
// console.log('index: ', studentNames.length, index);
// console.log('studentName:', studentNames[i]);
console.log('studentName:', studentNames[studentNames.length - 1]);
console.log('studentName:', studentNames.at(-1));
console.log('studentIds: ', studentIds);
console.log('mixed: ', mixed);
console.log('mixed length: ', mixed.length);

var student1Name = 'ali';
var student1Age = 15;
var student1Id = 'B101';
var student1IsAdult = false;
// var student1Id = 101;
var student1Email = 'alihaiderdev2646@gmail.com';
var student1Gender = 'male';
var student1Address = 'house no xyz';

let student1 = {
  age: 15,
  name: 'ali',
  id: 'B101',
  email: 'alihaiderdev2646@gmail.com',
  gender: 'male',
  address: 'house no xyz',
  isAdult: false,
};

var student2Name = 'haider';
var student2Age = 25;
var student2Id = 'B102';
var student2IsAdult = true;
// var student2Id = 101;
var student2Email = 'alihaiderdev@gmail.com';
var student2Gender = 'male';
var student2Address = 'house no abc';

let student2 = {
  age: 25,
  name: 'haider',
  id: 'B102',
  isAdult: false,
  email: 'alihaiderdev@gmail.com',
  gender: 'male',
  address: 'house no abc',
  isAdult: true,
  'full name': 'Ali Haider',
};

console.log('student2: ', student2);

student2.country = 'Pakistan';
student2.city = 'Karachi';
student2.salary = 200;
student2.salary = 400;

const fullName = 'full name';
console.log('student1: ', student1);
console.log('gender: ', student2.gender);
console.log('email: ', student2.email);
console.log('fullName: ', student2.fullName);
console.log('full name: ', student2['full name']);
console.log('full name: ', student2[fullName]);
console.log('address: ', student2['address']);

let key = 'last name';
student2[key] = 'haider';

console.log(student2);




// What are array and object data types?
// What are primitive or value types?
// What are non-primitive or reference types?
// Difference between value vs. reference data types.
// Declare variables with var, let, const.
// Difference between var vs. let vs. const.
// How to access specific array items and object keys.


