// localStorage.
// sessionStorage.
// cookies.
//  String methods (charAt(),charCodeAt(),concat(),
//         endsWith(),fromCharCode(),includes(),indexOf(),
//         lastIndexOf(),match(),repeat(),replace(),
//         replaceAll(),search(),slice(),split(),startsWith(),
//         substr(),substring(),toLowerCase(),toString(),
//         toUpperCase(),trim(),trimEnd(),trimStart(),
//         valueOf()).

// console.log(window.innerWidth, window.innerHeight);

console.log(window);

// const address = JSON.stringify({
//     city: 'karachi',
//     country: 'Pakistan',
//   });

const address = JSON.stringify({
  city: 'karachi',
  country: 'Pakistan',
});

// address = JSON.stringify(address);

// window.localStorage.setItem('name', 'ali haider');
// localStorage.setItem('age', 25);
// localStorage.setItem('isAdult', true);
// localStorage.setItem('address', address);
// localStorage.removeItem('male');

// console.log({
//   name: localStorage.getItem('name'),
//   age: localStorage.getItem('age'),
//   isAdultString: localStorage.getItem('isAdult'),
//   isAdultBoolean: Boolean(localStorage.getItem('isAdult')),
//   cityS: localStorage.getItem('city'),
//   cityB: Boolean(localStorage.getItem('city')),
//   addressStr: localStorage.getItem('address'),
//   addressObj: JSON.parse(localStorage.getItem('address')),
//   key0: localStorage.key(0),
//   key2: localStorage.key(2),
//   key10: localStorage.key(10),
//   length: localStorage.length,
// });

// console.log('before', localStorage);
// localStorage.clear();
// console.log('after', localStorage);

//  sessionStorage
// sessionStorage.setItem('name', 'ali haider');
// sessionStorage.setItem('address', address);
// sessionStorage.setItem('age', 25);

// cookies

document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC';
('username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC');
document.cookie;
('username=John Doe');
document.cookie = 'age=25; gender=male';
('age=25; gender=male');
document.cookie =
  'username=John Smith; expires=Thu, 30 Dec 2023 12:00:00 UTC; path=/; city=karachi';
('username=John Smith; expires=Thu, 30 Dec 2023 12:00:00 UTC; path=/; city=karachi');
document.cookie =
  'username=ali haider;city=karachi expires=Thu, 30 Dec 2023 12:00:00 UTC; path=/; city=karachi';
('username=ali haider;city=karachi expires=Thu, 30 Dec 2023 12:00:00 UTC; path=/; city=karachi');
document.cookie = 'username=ali haider;city=karachi';
('username=ali haider;city=karachi');
document.cookie = 'username=ali haider; city=karachi';
('username=ali haider; city=karachi');
document.cookie = 'name=ali haider; city=karachi';
('name=ali haider; city=karachi');
document.cookie = 'city=karachi;';
('city=karachi;');
document.cookie = 'key1=20; key2=30; key3=30';
('key1=20; key2=30; key3=30');
document.cookie = 'myCookie=' + JSON.stringify({ foo: 'bar', baz: 'poo' });
('myCookie={"foo":"bar","baz":"poo"}');
document.cookie =
  'myCookie=' +
  JSON.stringify({ foo: 'bar', baz: 'poo' }) +
  'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
('myCookie={"foo":"bar","baz":"poo"}expires=Thu, 01 Jan 1970 00:00:00 UTC;');
document.cookie = 'city=karachi; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
('city=karachi; expires=Thu, 01 Jan 1970 00:00:00 UTC;');
document.cookie;
('age=25; username=ali haider; name=ali haider; key1=20; myCookie={"foo":"bar","baz":"poo"}expires=Thu, 01 Jan 1970 00:00:00 UTC');
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// text.length
// 26
// text.toLowerCase()
// 'abcdefghijklmnopqrstuvwxyz'
// text
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerAbc = text.toLowerCase()
// undefined
// lowerAbc
// 'abcdefghijklmnopqrstuvwxyz'
// lowerAbc.toUpperCase()
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let text = "What is your name?";
// text.length
// 18
// text.toLowerCase()
// 'what is your name?'
// text.toLowerCase().toUpperCase()
// 'WHAT IS YOUR NAME?'
// text.toUpperCase();
// 'WHAT IS YOUR NAME?'
// const firstName = "ali"
// undefined
// const lastName = "haider"
// undefined
// firstName.concat(lastName)
// 'alihaider'
// const fullName = "hasnain anwar"
// undefined
// firstName.concat(lastName, fullName)
// 'alihaiderhasnain anwar'
// firstName + lastName
// 'alihaider'
// `${firstName} ${lastName} ${fullName}`
// 'ali haider hasnain anwar'
// firstName + " " + lastName + " " + fullName
// 'ali haider hasnain anwar'
// const name = "ali haider              "
// undefined
// name
// 'ali haider              '
// const name = "       ali haider              "
// undefined
// name
// '       ali haider              '
// const name = "       ali         haider              "
// undefined
// name
// '       ali         haider              '
// const name = "       ali         haider              "
// undefined
// name.trim()
// 'ali         haider'
// const name = "ali         haider              "
// undefined
// name.trim()
// 'ali         haider'
// name
// 'ali         haider              '
// const name = "       ali         haider              "
// undefined
// name.trimStart()
// 'ali         haider              '
// name.trimEnd()
// '       ali         haider'
// name.charAt(13)
// ' '
// name[13]
// ' '
// name.length
// 39
// const name = "ali haider";
// undefined
// name.charAt(2)
// 'i'
// document.cookie
// 'age=25; username=ali haider; name=ali haider; key1=20; myCookie={"foo":"bar","baz":"poo"}expires=Thu, 01 Jan 1970 00:00:00 UTC'
// document.cookie
// 'age=25; username=ali haider'
// const name = "ali haider";
// undefined
// name.split("")
// (10) ['a', 'l', 'i', ' ', 'h', 'a', 'i', 'd', 'e', 'r']0: "a"1: "l"2: "i"3: " "4: "h"5: "a"6: "i"7: "d"8: "e"9: "r"length: 10[[Prototype]]: Array(0)
// name.split(" ")
// (2) ['ali', 'haider']
// function getCookieValueByKey(key) {
//    document.cookie.split("; ")
// }
// undefined
// getCookieValueByKey()
// undefined
// function getCookieValueByKey(key) {
//    const x = document.cookie.split("; ");
//     console.log("x: ", x)
// }
// undefined
// getCookieValueByKey()
// x:  (2) ['age=25', 'username=ali haider']0: "age=25"1: "username=ali haider"length: 2[[Prototype]]: Array(0)
// undefined
// function getCookieValueByKey(key) {
//    const cookiesArray = document.cookie.split("; ");
//     for (const cookie of cookiesArray){

//         console.log(cookie)
//     }

// }
// undefined
// getCookieValueByKey()
// age=25
// username=ali haider
// undefined
// function getCookieValueByKey(key) {
//    const cookiesArray = document.cookie.split("; ");
//     for (const cookie of cookiesArray){

//         console.log(cookie,  cookie.split("="))

//     }

// }
// undefined
// getCookieValueByKey()
// age=25 (2) ['age', '25']0: "age"1: "25"length: 2[[Prototype]]: Array(0)
// username=ali haider (2) ['username', 'ali haider']0: "username"1: "ali haider"length: 2[[Prototype]]: Array(0)
// undefined
// function getCookieValueByKey(key) {
//    const cookiesArray = document.cookie.split("; ");
//     const obj = {};
//     for (const cookie of cookiesArray){
// const cookieWithKeyAndValue = cookie.split("=");
//      obj[cookieWithKeyAndValue[0]] = cookieWithKeyAndValue[1]

//     }

// }
// undefined
// getCookieValueByKey()
// undefined
// function getCookieValueByKey(key) {
//    const cookiesArray = document.cookie.split("; ");
//     const obj = {};
//     for (const cookie of cookiesArray){
// const cookieWithKeyAndValue = cookie.split("=");
//      obj[cookieWithKeyAndValue[0]] = cookieWithKeyAndValue[1];
//         console.log(obj, "obj")
//     }
//      console.log(obj, "obj....")

// }
// undefined
// getCookieValueByKey()
// {age: '25'}

// Apple, Banana, Kiwi
// Banana, Kiwi
// undefined
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi
// Banana
// undefined
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -5);
// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi
// Banana,
// undefined
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-13, -5);
// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi
//  Banana,
// undefined
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi
// Banana
// undefined
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(-13, -5);
// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi

// undefined
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(-13, -5);
// console.log(text)
// console.log(part)

// Apple, Banana, Kiwi

// undefined
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);

// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi
// Banana
// undefined
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 9);

// console.log(text)
// console.log(part)
// Apple, Banana, Kiwi
// Banana, K
// undefined
// let text = "Please visit Microsoft!";

// let newText = text.replace("Microsoft", "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit Microsoft!
// Please visit W3Schools!
// undefined
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit Microsoft and Microsoft!
// Please visit W3Schools and Microsoft!
// undefined
// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit Microsoft!
// Please visit Microsoft!
// undefined
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSoFT/i, "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit Microsoft!
// Please visit W3Schools!
// undefined
// let text = "Please visit MicrOSoft!";
// let newText = text.replace(/MICROSoFT/i, "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit MicrOSoft!
// Please visit W3Schools!
// undefined
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit Microsoft and Microsoft!
// Please visit W3Schools and W3Schools!
// undefined
// let text = "Please visit MicrOsoft and Microsoft!";
// let newText = text.replace(/MicRosoft/ig, "W3Schools");

// console.log(text)
// console.log(newText)
// Please visit MicrOsoft and Microsoft!
// Please visit W3Schools and W3Schools!
// undefined
// let text = "Please visit MicrOsoft and Microsoft!";
// let newText = text.replaceAll("cats","dogs")

// console.log(text)
// console.log(newText)
// Please visit MicrOsoft and Microsoft!
// Please visit MicrOsoft and Microsoft!
// undefined
// let text =  "I love cats. Cats are very easy to love. Cats are very popular.";
// let newText = text.replaceAll("cats","dogs")

// console.log(text)
// console.log(newText)
// I love cats. Cats are very easy to love. Cats are very popular.
// I love dogs. Cats are very easy to love. Cats are very popular.
// undefined
// let text =  "I love cats. cats are very easy to love. cats are very popular.";
// let newText = text.replaceAll("cats","dogs")

// console.log(text)
// console.log(newText)
// I love cats. cats are very easy to love. cats are very popular.
// I love dogs. dogs are very easy to love. dogs are very popular.
// undefined
// let text =  "I love cats. Cats are very easy to love. Cats are very popular.";
// let newText = text.replaceAll(/cats/i,"dogs")

// console.log(text)
// console.log(newText)

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(text)
// console.log(padded)
// 5
// 0005
// undefined
// let text = "5";
// let padded = text.padStart(10,"0");
// console.log(text)
// console.log(padded)
// 5
// 0000000005
// undefined
// let text = "5";
// let padded = text.padEnd(4,"0");
// console.log(text)
// console.log(padded)
// 5
// 5000
// undefined
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// 7
// undefined
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// 21
// undefined
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locaaate");
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// -1
// undefined
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("lytocate");
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// -1
// undefined
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 15);
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// 21
// undefined
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate", 15);
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// 7
// undefined
// let text = "Please locate where 'locate' occurs!";
// const index = text.search("locate");
// console.log(text)
// console.log(index)
// Uncaught SyntaxError: Identifier 'index' has already been declared
// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// console.log(text)
// console.log(index)
// Please locate where 'locate' occurs!
// 7
// undefined
// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match("ain");
// console.log(text)
// console.log(index)
// The rain in SPAIN stays mainly in the plain
// ['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]0: "ain"groups: undefinedindex: 5input: "The rain in SPAIN stays mainly in the plain"length: 1[[Prototype]]: Array(0)
// undefined
// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match(/ain/g);
// console.log(text)
// console.log(index)
// The rain in SPAIN stays mainly in the plain
// (3) ['ain', 'ain', 'ain']0: "ain"1: "ain"2: "ain"length: 3[[Prototype]]: Array(0)
// undefined
// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match(/ain/g);
// console.log(text)
// console.log(index)
// The rain in SPAIN stays mainly in the plain
// (3) ['ain', 'ain', 'ain']
// undefined
// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match(/ain/gi);
// console.log(text)
// console.log(index)
// The rain in SPAIN stays mainly in the plain
// (4) ['ain', 'AIN', 'ain', 'ain']
// undefined
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(text)
// console.log(iterator\)
// Uncaught SyntaxError: Invalid or unexpected token
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(text)
// console.log(iterator)
// I love cats. Cats are very easy to love. Cats are very popular.
// RegExpStringIterator {}[[Prototype]]: RegExp String Iterator
// undefined
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(text)
// console.log(Array.from(iterator))
// I love cats. Cats are very easy to love. Cats are very popular.
// (2) [Array(1), Array(1)]0: ['Cats', index: 13, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]1: ['Cats', index: 41, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]0: "Cats"groups: undefinedindex: 41input: "I love cats. Cats are very easy to love. Cats are very popular."length: 1[[Prototype]]: Array(0)length: 2[[Prototype]]: Array(0)
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.includes("world");
// undefined
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// true
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.includes("ieuew");
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.includes("worddfld");
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// false
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.startsWith("Hello");
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// true
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.startsWith("H");
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// true
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.startsWith("k");
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// false
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.endsWith("universe.");
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// true
// undefined
// let text = "Hello world, welcome to the universe.";
// let exist = text.endsWith("universe");
// console.log(text)
// console.log(exist)
// Hello world, welcome to the universe.
// false





