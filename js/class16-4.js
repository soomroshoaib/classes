console.log('class 4 of js');

// if else / nested if else / if else if else

// let num1 = 30,
//   num2 = 20,
//   num3 = 30,
//   num4 = 30;

// console.log(
//   'num1 === num2',
//   num1 === num4,
//   num2 < num3,
//   num1 === num4 && num2 < num3
// );

// if (num1 === num4 && num2 < num3) {
//   console.log('if condition is true 1');
//   console.log('if condition is true 2');
// } else {
//   console.log('else condition is true 1');
//   console.log('else condition is true 2');
// }

const input = 'ali';
// if (input === 'male') {
//   console.log('you are a male');
//   document.querySelector('body').innerHTML = `<b>male</b>`;
//   console.log('if condition is true 2');
// } else {
//   console.log('you are a female');
//   document.querySelector('body').innerHTML = `<b>female</b>`;
//   console.log('else condition is true 1');
//   console.log('else condition is true 2');
// }

// const color = window.prompt('Enter your favorite color: ?');
// const name = 'ali';
// if (color === 'red') {
//   console.log('red is my favorite color');
// } else if (color === 'yellow') {
//   console.log('yellow is my favorite color');
// } else if (color === 'green' && color === 'blue') {
//   console.log('green or blue is my favorite color');
// } else {
//   console.log('no color is my favorite');
// }

// if (color === 'orange') {
//   console.log('orange is my favorite');
// }

// if (name === 'alis') {
//   console.log('name');
// }

// console.log('end of the code');

// not possible
// else if(color === 'orange'){

// }

// else{
//     console.log('no color is my favorite');
// }

// nested if else
// if (num1 === num4) {
//   console.log('if condition is true 1');
//   if (condition) {
//     if (condition) {
//     } else {
//     }
//   } else {
//     if (condition) {
//     } else {
//     }
//   }
// } else if (num1 !== num4) {
//   if (condition) {
//     if (condition) {
//     } else {
//     }
//   } else {
//     if (condition) {
//     } else {
//     }
//   }
// } else {
//   if (condition) {
//     if (condition) {
//     } else if(condition){
//    }else {
//     }
//   } else {
//     if (condition) {
//     } else {
//     }
//   }
//   console.log('else condition is true 1');
// }

// let num1 = 30,
//   num2 = 20,
//   num3 = 30,
//   num4 = 30;

// if (num1 === num4) {
//   console.log('if condition is true 1');
//   if (num2 > num3) {
//     console.log('if condition is true 2');
//   } else {
//     console.log('else condition is true 1');
//   }
// } else {
//   console.log('else condition is true 2');
// }

// switch case

const color = 'yellow';

// switch (color) {
//   case 'blue':
//     console.log('blue is my favorite color');
//     break;
//   case 'red':
//   case 'yellow':
//     console.log('yellow or red is my favorite color');
//     break;
//   // OR
//   //   case 'yellow':
//   //     console.log('yellow or red is my favorite color');
//   //     break;
//   //   case 'red':
//   //     console.log('yellow or red is my favorite color');
//   //     break;
//   case 'green':
//     console.log('green is my favorite color');
//     break;
//   default:
//     console.log('no color is my favorite');
//     break;
// }

// switch (color) {
//   case 'red':
//     console.log('red is my favorite color');
//     break;
//   case 'yellow':
//     console.log('yellow is my favorite color');
//     break;
//   case 'green':
//     console.log('green is my favorite color');
//     break;
//   default:
//     console.log('no color is my favorite');
//     break;
// }

// OR

// if (color === 'red') {
//   console.log('red is my favorite color');
// } else if (color === 'yellow') {
//   console.log('yellow is my favorite color');
// } else if (color === 'green') {
//   console.log('green or blue is my favorite color');
// } else {
//   console.log('no color is my favorite');
// }
// ++variable
// variable++
// loops
// for, while, do while
// foreach, for of, for in, map

// console.log(index, "index",);
// console.log(color, "color",);
const names = ['ali', 'haider', 'haris', 'saif', 'ayesha', 'faizan'];
console.log(names.length, 'length of array');
// 0 <= 6                    // 1 iteration
// 1 <= 6                    // 2 iteration
// 2 <= 6                    // 3 iteration
// 3 <= 6                    // 4 iteration
// 4 <= 6                    // 5 iteration
// 5 <= 6                    // 6 iteration
// 6 <= 6                    // 7 iteration
// for (let index = 0; index <= names.length; index++) {
//   //   const element = names[index];
//   if (index === 1) {
//     console.log('if');
//     break;
//   }
//   console.log('element', names[index], index);
//   // console.log("color: ", color, index);
//   // for (let k = 0; k < names.length; k++) {
//   //     const element = names[k];
//   //     console.log("index", index, color);

//   // }
// }

// for (let index = 0; index < 5; index++) {
//   console.log('index 1', index + 1);
// }
// for (let index = 0; index <= 5; index++) {
//   console.log('index 2', index + 1);
// }

for (let index = 0; index < names.length; index++) {
  console.log('element 1', names[index], index);
}

//  infinite loop
// for (let index = 0; index < names.length; index--) {
//   console.log('element 2', names[index], index);
// }

const i = names.length - 1;
console.log('i', i);
// for (let index = i; index < names.length; index++) {
//   console.log('element 1', names[index], index);
// }

for (let index = i; index > 0; index--) {
  console.log('element 2', names[index], index);
}

for (let index = i; index >= 0; index--) {
  console.log('element 3', names[index], index);
}





// If else in JS.
// Nested if else in JS.
// If - else if - else in JS.
// Switch case in JS.
// For loop in JS.

// JavaScript If Else, JavaScript Nested If Else, JavaScript If Else If Else, JavaScript Switch Case, JavaScript For Loop, JavaScript Control Structures, JavaScript Conditional Statements, JavaScript Looping, JavaScript Programming, Coding Tutorial, JavaScript Tutorial, Web Development, JavaScript Basics, JavaScript Examples, Learn JavaScript