console.log('class 21 js 9');
// remaining array methods
// window location object
// at(),copyWithin(),entries(),every(),fill(),find(),findIndex(),flatMap(),forEach(),from(),includes(),isArray(),join(),keys(),lastIndexOf(),map(),reduce(),reduceRight(),some(),



// const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes', 'watermelon'];
// const [apple, banana, mango] = fruits;

// console.log(fruits[0], apple);
// console.log(fruits[1], banana);
// console.log(fruits[2], mango);

// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-2));

// for (const f of fruits.entries()) {
//   const [index, value] = f;
//   console.log('f2:', f, index, value, f[0], f[1]);
// }

// for (const f of fruits) {
//   const [index, value, ali] = f;
//   console.log('f1:', f, index, value, ali, f[0], f[1], f[2]);
// }

// const f = fruits.entries();
// console.log(f, 'f');

// for (const x of f) {
//   console.log('x:', x);
// }

// const ages = [32, 33, 20, 40];
// const emails = ['ali@gmail.com', 'hasnain@gmail.com', 'hasnaingmail.com'];
// console.log(
//   'every:',
//   emails.every((email, index, array) => email.includes('@'))
// );

// console.log(
//   'some:',
//   emails.some((email, index, array) => email.includes('@'))
// );

// fruits.fill('Kiwi');

// function checkAge(age, index, arr) {
//   console.log(age, index, arr);
//   return age > 18;
// }
// console.log(ages.every(checkAge));
// const check1 = ages.every(function (age, index, arr) {
//   console.log(age, index, arr);

//   return age > 18;
// });
// console.log('check1:', check1);

// const check2 = ages.every((age, index, arr) => {
//   console.log(age, index, arr);

//   return age > 18;
// });
// console.log('check2:', check2);

// const check3 = ages.every((age, index, arr) => {
//   return age > 18;
// });
// console.log('check3:', check3);

// const check4 = ages.every((age, index, arr) => age > 18);
// console.log('check4:', check4);

// const ages = [10, 15, 20, 40];

// const fi = ages.findIndex(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

// console.log(
//   'fi1: ',
//   ages.findIndex((age) => age > 18)
// );
// function findI(array) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element > 18) {
//       return index;
//     }
//   }
// }

// ages.forEach((age, index, arr) => console.log(age, index, arr));

// console.log('fi2: ', findI(ages));

// console.log(Array.from('ABCDEFG'));

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Banana'];

// console.log(fruits.includes('Mango'));
// console.log(fruits.includes('Banana', 3));

// console.log(fruits.indexOf('Apple'));
// console.log(fruits.indexOf('Apple', 4));

// const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana",];
// console.log(fruits.lastIndexOf("Apple"));

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// let text = 'W3Schools';
// let result1 = Array.isArray(text);
// let result2 = Array.isArray(fruits);

// console.log(result1);
// console.log(result2);

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// console.log(fruits.join('$'));
// console.log(fruits.join(' and '));

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// const keys = fruits.keys();

// console.log(keys);

// for (const iterator of keys) {
//   console.log(iterator, 'iterator1');
// }

// for (const iterator of fruits.keys()) {
//   console.log(iterator, 'iterator2');
// }

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const numbers = [4, 9, 16, 25];
// // console.log(numbers.map((number, index, array) => Math.sqrt(number)));
// // console.log(numbers.map((number) => Math.sqrt(number)));
// console.log(
//   fruits,
//   fruits.map((fruit, index) => {
//     return {
//       name: fruit,
//       index: index,
//       quantity: Number((Math.random() * 10).toFixed(0)),
//     };
//   })
// );

// console.log(numbers.map(Math.sqrt));

const mobiles = [
  { id: 1, brand: 'samsung', price: 1000, name: 'mobile 1' },
  { id: 2, brand: 'iphone', price: 2000, name: 'mobile 2' },
  { id: 3, brand: 'iphone', price: 50000, name: 'mobile 6' },
  { id: 4, brand: 'iphone', price: 5000, name: 'mobile 7' },
  { id: 5, brand: 'nokia', price: 500, name: 'mobile 3' },
  { id: 6, brand: 'oppo', price: 25000, name: 'mobile 4' },
  { id: 7, brand: 'oppo', price: 250, name: 'mobile 5' },
];

// console.log(mobiles.filter((mobile) => mobile.brand === 'iphone'));
// console.log(mobiles.filter((mobile) => mobile.price >= 2000));
// console.log(
//   mobiles.filter((mobile) => mobile.price >= 2000 && mobile.brand === 'iphone')
// );

// console.log(
//   mobiles.filter(
//     (mobile) => mobile.brand === 'iphone' || mobile.brand === 'oppo'
//   )
// );
// console.log(
//   mobiles.filter((mobile) => {
//     console.log(mobile);
//     return mobile.brand === 'iphone';
//   })
// );
// console.log(
//   mobiles.find((mobile) => {
//     console.log('mobile 1', mobile);
//     return mobile.id === 2;
//   })
// );
// console.log(
//   mobiles.filter((mobile) => {
//     console.log('mobile 2', mobile);
//     return mobile.id === 2;
//   })
// );

// const ages = [32, 33, 16, 18, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(result);

const numbers = [175, 50, 25];

function sum(total, num, index, array) {
  console.log(total, num, index, array);
  return total + num;
}

// console.log(numbers.reduce(sum, 0)); // default value is 0
console.log(
  numbers.reduce(function (total, num, index, array) {
    console.log(total, num, index, array);
    return total * num;
  }, 1)
); // default value is 0
console.log(numbers.reduce((total, num) => total + num, 0));
