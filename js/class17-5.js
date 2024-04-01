console.log('class 5 of js');

const names = ['ali', 'haider', 'haris', 'saif', 'ayesha', 'faizan'];
// for loop
// for (let index = 0; index < names.length; index++) {
//   const element = names[index];
//   console.log('element for', element, index);
// }

// let language = "JavaScript";
// for (let index = 0; index < language.length; index++) {
//   const element = language[index];
//   console.log('element for lan', element, index);
// }

// const videos = [
//   {
//     thumbnail:
//       'https://i9.ytimg.com/vi/mfTSdF-3M04/mqdefault.jpg?sqp=CJjVlKgG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEQgWihlMA8=&rs=AOn4CLD-jVK78EZctoAOWY0OFqw7gz36Pg',
//     title: 'Class 8 of CSS3',
//     description:
//       'Bootstrap columns, Bootstrap grid, attribute selectors, shape-outside, shape-margin, nth-child pseudo-class in CSS. Creating layout using CSS and Bootstrap.',
//     views: 10,
//     likes: 2,
//   },
//   {
//     thumbnail:
//       'https://i9.ytimg.com/vi/oDllNkcm_50/mqdefault.jpg?sqp=CJjVlKgG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCY7CxmXB1Fe496WY5JRNhLgtPmBQ',
//     title: 'title2',
//     description: 'description2',
//     views: 50,
//     likes: 20,
//   },
// ];

// for (let index = 0; index < videos.length; index++) {
//   console.log(videos[index].thumbnail, 'thumbnail');
//   console.log(videos[index].title, 'title');
//   console.log(videos[index].description, 'description');
//   document.write(`<h1>title: ${videos[index].title}</h1> <br>`);
//   document.write(`<p>description: ${videos[index].description}</p> <br>`);
//   document.write(`<img src="${videos[index].thumbnail}"> <br>`);
// }

// while loop
// let index = 0;
// while (index < names.length) {
//   const element = names[index];
//   console.log('element while', element, index);
//   index++;
// }

//  do while loop
// let i = 0;
// do {
//   const element = names[i];
//   console.log('element do while', element, i);
//   i++;
// } while (i < names.length);

// let i = 0;
// do {
//   const element = names[i];
//   console.log('element do while', element, i);
//   i++;
// } while (i > names.length);

//  for of loop
// for (const name of names) {
//   console.log('element for of', name);
// }

// for in loop
// for (const name in names) {
//   console.log('element for in', name);
// }

// const video = {
//   thumbnail:
//     'https://i9.ytimg.com/vi/mfTSdF-3M04/mqdefault.jpg?sqp=CJjVlKgG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEQgWihlMA8=&rs=AOn4CLD-jVK78EZctoAOWY0OFqw7gz36Pg',
//   title: 'Class 8 of CSS3',
//   description:
//     'Bootstrap columns, Bootstrap grid, attribute selectors, shape-outside, shape-margin, nth-child pseudo-class in CSS. Creating layout using CSS and Bootstrap.',
//   views: 10,
//   likes: 2,
// };

// console.log('names: ', names);
// console.log('video: ', video);
// for (const key in video) {
//   console.log('element for in', key);
// }

// functions

//  function calling
_log(); // just because of hoisted

// function declaration / function definition
function _log() {
  console.log('function declaration');
}

// console.log('function declaration 1');
// //   video save logic
// function saveVideo() {
//   //   video save logic
//   console.log('video save logic');
// }

// document.querySelector("button").addEventListener("click", saveVideo);

// OR

// anonyms function
// document.querySelector('button').addEventListener('click', function () {
//   //   video save logic
//   console.log('video save logic');
// });

document.querySelector('button').addEventListener('click', () => {
  //   video save logic
  console.log('video save logic');
});

function add(num1, num2, operator) {
  // num1, num2, operator these are parameters
  console.log(num1 + num2, num1, num2, operator);
  const add = num1 + num2;
  return add;
  //   console.log('hello'); // after return statement in any function the remaining code will not execute
}

function sub(num1, num2, operator) {
  // num1, num2, operator these are parameters
  //   console.log(num1 - num2, num1, num2, operator);
  return num1 - num2;
}

// let num1 = 2,
//   num2 = 4;
// add(2, 4, '+'); // here 2, 4, '*' these are arguments
// add(10, 20, '+');
// sub(40, 20, '-');

function add(num1, num2) {
  const add = num1 + num2;
  //   console.log("add")
  return add;
}

console.log(add(2, 4, '+'));
document.write(`<h1>${add(2, 4, '+')}</h1>`);

function sum(num1 = 200, num2 = 200) {
  return num1 + num2;
}

console.log(sum(500, 5000));

// if (true) {
//     console.log("true");
// }
// OR
// if (true) console.log("true");

// arrow function or fat arrow function

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log('multiply: ', multiply(2, 10));

const mul = (num1, num2) => num1 * num2;

console.log('multiply: ', mul(10, 10));


// for loop 
// while loop 
// do while loop 
// functions 
// function declaration / function expression function definition
// function calling
// function parameters and arguments
// default parameters in function 