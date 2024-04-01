// ES6 and other new features of latest ES versions

// Array and Object destructuring.
// What are the shallow copy and deep copy in Arrays and Objects?
// Difference between shallow copy and deep copy?
// Spread and rest (...) operators.
// Optional chaining (?.) operator.
// Nullish coalescing (?? and ||) operators.
// Ternary (?:) operator 


// // const information = {
// //   name: 'ali',
// //   age: 25,
// //   gender: 'male',
// //   address: {
// //     city: 'lahore',
// //     country: 'pakistan',
// //     location: {
// //       street: 'xyz',
// //       house: `house no 123`,
// //       zip: 54000,
// //     },
// //   },
// // };

// // Destructuring
// // const info = {
// //   name: 'haider',
// //   age: 30,
// //   gender: 'male',
// //   address: {
// //     city: 'lahore',
// //     country: 'pakistan',
// //     location: {
// //       street: 'xyz',
// //       house: `house no 123`,
// //       zip: 54000,
// //     },
// //   },
// // };

// // console.log(info.name);
// // console.log(info.age);
// // console.log(info.gender);
// // console.log(info.address.city);
// // console.log(info.address.country);
// // console.log(info.address.location.zip);
// // console.log(info.address.location.house);
// // console.log(info.address.location.street.abc.xyz);

// const { name: iName, age: iAge, gender: iGender } = info;
// // const {
// //   name,
// //   age,
// //   gender,
// //   address: {
// //     city,
// //     country,
// //     location: { street, house, zip },
// //   },
// // } = information;

// // const { city, country, location } = information.address;
// // const { street, house, zip } = information.address.location;

// // console.log(iName);
// // console.log(iAge);
// // console.log(iGender);

// // console.log(name);
// // console.log(age);
// // console.log(gender);
// // console.log(city);
// // console.log(country);
// // console.log(street);
// // console.log(house);
// // console.log(zip);

// // // console.log( location, city, country);

// // const information2 = {
// //   name: 'ali',
// //   age: 25,
// //   gender: 'male',
// //   address: {
// //     city: 'lahore',
// //     country: 'pakistan',
// //     location: {
// //       abc: {
// //         def: {
// //           ghi: {
// //             jkl: { street: 'xyz' },
// //           },
// //         },
// //       },
// //       house: `house no 123`,
// //       zip: 54000,
// //     },
// //   },
// // };

// // console.log(information2.address.location.abc.def.ghi.jkl.street);

// // const {
// //   name,
// //   age,
// //   gender,
// //   address: {
// //     city,
// //     country,
// //     location: {
// //       house,
// //       zip,
// //       abc: {
// //         def: {
// //           ghi: {
// //             jkl: { street },
// //           },
// //         },
// //       },
// //     },
// //   },
// // } = information2;

// const names = [
//   'ali haider',
//   'haris',
//   'saif',
//   'sajid',
//   'faizan',
//   ['ayesha', 'bareerah'],
// ];

// // console.log(names);

// const students = [
//   { name: 'ali', age: 20, gender: 'male' },
//   { name: 'ayesha', age: 21, gender: 'female' },
//   { name: 'haris', age: 22, gender: 'male' },
//   { name: 'bareerah', age: 23, gender: 'female' },
//   { name: 'saif', age: 24, gender: 'male' },
//   { name: 'faizan', age: 24, gender: 'male' },
//   { name: 'sajid', age: 24, gender: 'male' },
// ];
// // const [ah, h, s, sa, f, [a]] = names;
// const [ah, h, s, sa, f, [a, b]] = names;
// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);
// // console.log(names[3]);
// // console.log(names[4]);
// // console.log(names[5]);
// // console.log(ah);
// // console.log(h);
// // console.log(s);
// // console.log(sa);
// // console.log(f);
// // console.log(a);
// // console.log(b);

// const [{ name: n1, age: a1, gender: g1 }, { name: n2, age: a2, gender: g2 }] =
//   students;

// //   console.log(n1, a1, g1);
// //   console.log(n2, a2, g2);

// //  spread and rest operator (...)

// // rest operator
// // const copiedNames = names;
// // const copiedNames = [...names];

// // copiedNames[0] = 'ali';
// // copiedNames[5] = 'ali haider';
// // copiedNames[5][1] = 'bareerah ali';
// // console.log(copiedNames);

// // console.log(info);
// // const copiedInfo = info; // normal copy
// // const copiedInfo = { ...info }; // shallow copy
// // const copiedInfo = {
// //   ...info,
// //   address: { ...info.address, location: { ...info.address.location } },
// // }; // make deep copy by making multiple shallow copies

// const copiedInfo = JSON.parse(JSON.stringify(info)); // deep copy

// copiedInfo.name = 'ali';
// copiedInfo.address.city = 'karachi';
// copiedInfo.address.location.street = 'abc';

// // console.log(copiedInfo);

// // rest operator
// // const [first, second, ...rest] = names;
// const [first, second, ...remainingElements] = names;

// // console.log(first);
// // console.log(second);
// // console.log(...remainingElements);

// const { name, age, ...rest } = info;

// console.log(name);
// console.log(age);
// console.log(rest);

// const add = (n1, n2, n3, ...rest) => {
//   console.log(n1, n2, n3, rest);
//   const numbers = [n1, n2, n3, ...rest];
//   const sum = numbers.reduce((total, number) => total + number, 0);
//   console.log(numbers, sum);
//   return sum;
// };

// console.log(add(10, 20, 30, 40, 50, 60));

// optional chaining

// const info = {
//   name: 'haider',
//   age: 30,
//   gender: 'male',
//     address: {
//       city: 'lahore',
//       country: 'pakistan',
//       location: {
//         street: 'xyz',
//         house: `house no 123`,
//         zip: 54000,
//       },
//     },
// };

// console.log( info.address.location.street);
// const info = {
//   name: 'haider',
//   age: 30,
//   gender: 'male',
//   address: {
//     city: 'lahore',
//     country: 'pakistan',
//     location: {
//       street: 'xyz',
//       house: `house no 123`,
//       zip: 54000,
//     },
//   },
// };

// console.log(
//   info && info.address && info.address.location && info.address.location.street
// );

// console.log(info.address?.location?.street);

// ternary operator

const age = 15;
let isAdult;
if (age > 18) {
  isAdult = true;
} else {
  isAdult = false;
}

const _isAdult = age > 18 ? true : false
console.log(_isAdult);
