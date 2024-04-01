console.log('class15-3.js');

// // check all possible ways to print and take input
// let name = 'ali';
// let age = 25;
// let bool = true;

// console.log(window);

// // string literal
// console.log(`hello world 2  ${name}  ${age} ${bool}`);
// console.log(`<ul>
// <li>tea</li>
// <li>coffee</li>
// </ul>`);

// console.log(`<ul>
// <li>tea</li>
// <li>coffee</li>
// </ul> ${name}`);

// // document.write
// window.document.write('hello world');
// document.write('<br>');
// document.write('<ul><li>tea</li><li>coffee</li></ul>');
// document.write(`<ul>
// <li>tea</li>
// <li>coffee</li>
// </ul>`);
// document.write('hello world 1', ' ', name);
// document.write(`hello world 2 ${name}`);
// console.log('hello world 1', ' ', name, ' ', age, ' ', bool);

// // document.innerHTML
// // document.querySelector("body").innerHTML = 5 + 6;
// console.log(document.querySelector('body'), 'body');
// document.querySelector('#demo').innerHTML = 5 + 6;
// document.querySelector('.class').innerHTML = `<ul>
// <li>${age}</li>
// <li>${name}</li>
// </ul>`;

// window.alert()

// window.alert(`<ul>
// <li>${age}</li>
// <li>${name}</li>
// </ul>`);

// window.confirm

// const areYouSure = window.confirm(`Are you sure?`);
// console.log(`areYouSure: ${areYouSure}`)
// console.log('areYouSure "hello" 1:' ,  areYouSure)
// console.log("areYouSure 'hello' 2:" ,  areYouSure)

// window.prompt

// const fullName = window.prompt(`Enter your name: `);
// console.log('fullName: ', fullName, typeof fullName);
// const age = window.prompt(`Enter your age: `);

// typeof
// console.log('age 1: ', age, typeof age);

// // type casting (type conversion)
// console.log('age 2: ', age - 20);
// console.log('age 3: ', age + 20);
// console.log('age 4: ',typeof Number(age));
// console.log('age 5: ', typeof +age);
// console.log('age 6: ', Number(age) + 20);
// console.log('age 7: ', +age + 20);

// let number = 30;
// let bool = true;
// console.log('number 1: ', typeof number);
// console.log('number 2: ', typeof String(number));
// console.log('number 2: ', typeof number.toString());
// console.log('number 2: ', typeof bool.toString());
// console.log(
//   'number 2: ',
//   typeof String(5034.878),
//   String(5034.878),
//   typeof String(null),
//   String(null)
// );

// falsy vs truthy values
// 0, undefined, null, '', false, NaN;

// all above values except these will be consider as truthy values

// // falsy values
// console.log('0: ', Boolean(0), Boolean(undefined));
// console.log('1: ', Boolean(undefined));
// console.log('2: ', Boolean(null));
// console.log('3: ', Boolean(''));
// console.log('4: ', Boolean(NaN));

// // truthy values
// console.log('5: ', Boolean('ali'));
// console.log('6: ', Boolean(20));
// console.log('7: ', Boolean(2.8098));
// console.log('8: ', Boolean(['ali']));
// console.log('9: ', Boolean({ name: 'ali' }));

// // NaN

// console.log('10: ', 20 / 0); // Infinity
// console.log('10: ', 20 / 'ali'); // NaN
// console.log('10: ', 20 / '20'); // 1

// operators
// https://www.w3schools.com/js/js_operators.asp
// Arithmetic Operators

// console.log('50' - 20); // subtraction
// console.log(50 - 20);
// console.log('2' * 20); // multiplication
// console.log(2 * 20);
// console.log('20' / 2); // division
// console.log(20 / 2);
// console.log('50' + 20); // addition
// console.log(50 + 20);
// console.log('50' + "ali");
console.log(2 ** 4); // Exponentiation  2*2*2*2
console.log(3 ** 3); // Exponentiation 3*3*3
console.log(30 % 2); // Modulus (Division Remainder)
console.log(32 % 3); // Modulus (Division Remainder)

// let number = 50;
// console.log("num1:",number);
//  ++number; // Increment
// number = number + 1;
// console.log("num2:",number);

// let number = 50;
// console.log("num1:",number);
//  --number; // Decrement
// number = number - 1;
// console.log("num2:",number);

// Assignment Operators
// let number = 50;
// console.log("num1:",number);
// number = number + 2;
// // number += 2
// console.log("num2:",number);

// Comparison Operators
// console.log(20 == 30);
// console.log(20 === 30);
// console.log(20 == 20);
// console.log('ali' == 'ali');
// console.log('ali' == 'ai');
// console.log(false == false);
// console.log(20.78 == 20.78);
// console.log(20.76 == 20.78);
// console.log(20 == '20');
// console.log(20 == '220');
// console.log(220 == '220');
// console.log(220 === '220');
// console.log('220' === '220');
// console.log(220 === '220');
// console.log(220 === Number('220'));
// console.log(220 == '220');
// console.log(220 != '220');
// console.log(23 != '22');
// console.log(22 != '22');
// console.log(22 === '22');
// console.log(22 !== '22');
// console.log(22 > 34);
// console.log(22 < 34);
// console.log(30 > 20);
// console.log(30 > 20);
// console.log(30 > 30);
// console.log(30 >= 30);
// console.log(30 >= 31);
// console.log(31 >= 30);
// console.log(31 <= 30);
// console.log(27 <= 30);
// console.log(30 <= 30);

// Logical Operators
// console.log(20 < 25 && 30 == 30 && 30 >= 40);
// console.log(20 < 25 && 30 == 30 && 30 >= 40);
// console.log(true && true && false);
// console.log(20 < 25 && 30 == 30 && 30 >= 30);
// console.log(20 > 25 && 30 != 30 && 30 > 30);
// console.log(false && false && false);
// console.log(20 < 25 && 30 == 30 && 30 >= 40);
// console.log(20 < 25 || 30 == 30 || 30 >= 40);
// console.log(false || 30 == 30 || 30 >= 40);
// console.log(false || true || false);
// console.log(true || true || true);
// console.log(false || false || false);
// console.log((20 < 10 || 30 == 30) && 30 >= 40);
// console.log((20 < 10 || 30 == 30) && 30 >= 30);
// console.log((20 > 10 || 30 != 30) && 30 >= 30);
// console.log(false && false);
// console.log(!(false && false));
// console.log(!false && true);
// console.log(20 < 30 && 30 === 30);
// console.log(!(20 < 30 && 30 === 30));





// Explore all possible ways to display output.
// document.write()
// document.innerHTML
// window.alert()
// window.confirm()
// window.prompt()
// Type casting or type conversion in JS. 
// String literal in JS.
// Operators in JS (Arithmetic, Assignment, 
//        Comparison, Logical).
// What is NaN, undefined, null, or infinity how are
//        they different from each other?
// What are the truthy and falsy values in JS? 
//         Difference between these two.



