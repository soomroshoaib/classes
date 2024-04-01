// More on the nullish coalescing (?? and ||) operator.
// More on ternary (?:) operator.
// Fetch API.
// Synchronous vs Asynchronous programming.
// Introduction to async programming in JavaScript.
//    (Callback, Promises (async/await, then/catch)
// How to create Promise in JavaScript.
// How to use or consume promise in Javascript.




// const age = 60;
// let isAdult;
// // if (age > 18 ) {
// //   isAdult = true;
// // } else {
// //   isAdult = false;
// // }

// // console.log("isAdult", isAdult);

// // const _isAdult = age > 18 ? true : false;
// // console.log('_isAdult', _isAdult);

// if (age > 18) {
//   if (age <= 50) {
//     isAdult = true;
//   } else {
//     isAdult = null;
//   }
// } else {
//   isAdult = false;
// }
// console.log('isAdult', isAdult);

// const _isAdult = age > 18 ? (age <= 50 ? true : null) : false;
// console.log('_isAdult', _isAdult);

// // nullish coalescing operator
// let age = false;
// // let age;
// console.log(age, 'age');
// // age = age === null || age === undefined ? 18 : age;
// // console.log(age);

// // age = age ?? 18;
// age = age || 18;

// console.log(age);

// fetch api

// synchronous vs asynchronous

console.log('hello before');

setTimeout(() => {
  console.log('world');
}, 5000); // time in milliseconds 1 second = 1000 milliseconds

console.log('hello after');

// asynchronous => callbacks/Promises => async/await, then catch,

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(); // when successful
//       myReject();  // when error
//     });

// function promiseCallbackRegular(resolve, reject) {}
// new Promise(promiseCallbackRegular);

// const promiseCallbackArrow = (resolve, reject) => {};
// new Promise(promiseCallbackArrow);

// new Promise(function (resolve, reject) {});

const promise = new Promise((resolve, reject) => {
  resolve('Here is your requested data');
  reject('Rejected due to network connectivity issue');
});

// const name = 'ali';
// const age= 20
// age.

// promise
//   .then((data) => {
//     console.log('data', data);
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log('response', response);
    return response.json();
  })
  .then((posts) => {
    console.log('posts:', posts);
  })
  .catch((error) => {
    console.log('error', error);
  });


