// console.log("class 15 of js");

// What is Promise.all().
// What is Promise.allSettled().
// What is Promise.race().
// What is Promise.any().
// How and where we use these promise methods?
// Difference between Promise.all() vs Promise.allSettled() vs Promise.race() vs 
//        Promise.any().
// Date Object.


// // const getUser = async () => {
// //     try {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //         const user = await response.json();
// //         console.log({ response, user });
// //     } catch (error) {
// //         console.log({ error });
// //     }
// // };

// // const getPosts = async () => {
// //     try {
// //         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// //         const posts = await response.json();
// //         console.log({ response, posts });
// //     } catch (error) {
// //         console.log({ error });
// //     }
// // };

// // const getComments = async () => {
// //     try {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/comments");
// //         const comments = await response.json();
// //         console.log({ response, comments });
// //     } catch (error) {
// //         console.log({ error });
// //     }
// // };


// // getUser();
// // getPosts();
// // getComments();


// // promises APIS 

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("P1 success")
//     }, 5000);
//     // setTimeout(() => {
//     //     reject("P1 fail")
//     // }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P2 success")
//     // }, 2000);
//     setTimeout(() => {
//         reject("P2 fail")
//     }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P3 success")
//     // }, 3000);
//     setTimeout(() => {
//         reject("P3 fail")
//     }, 3000);
// });


// // p1.then((data) => console.log({ p1S: data })).catch((error) => console.log({ p1F: error }))
// // p2.then((data) => console.log({ p2S: data })).catch((error) => console.log({ p2F: error }))
// // p3.then((data) => console.log({ p3S: data })).catch((error) => console.log({ p3F: error }))


// // Promise.all([p1, p2, p3])
// //     .then((data) => console.log("data: ", data))
// //     .catch((error) => console.log("error: ", error));

// // Promise.allSettled([p1, p2, p3])
// //     .then((data) => console.log("data: ", data))
// //     .catch((error) => console.log("error: ", error));

// // Promise.race([p1, p2, p3])
// //     .then((data) => console.log("data: ", data))
// //     .catch((error) => console.log("error: ", error));

// // Promise.any([p1, p2, p3])
// //     .then((data) => console.log("data: ", data))
// //     .catch((error) => console.log("error: ", error));

// Promise.all([
//     fetch(`https://jsonplaceholder.typicode.com/users`),
//     fetch(`https://jsonplaceholder.typicode.com/posts`),
//     fetch(`https://jsonplaceholder.typicode.com/comments`)
// ])
//     .then((response) => {
//         // console.log("response: ", response);
//         const jsonResponse = response.map((res) => res.json());
//         // console.log(jsonResponse);
//         return Promise.all(jsonResponse)
//     })
//     .then((data) => { console.log({ data }); })
//     .catch((error) => console.log("error: ", error));



// date object

// const date1 = new Date("2023-10-20");
// console.log(date1.getDate())
// console.log(date1.getDay())

// const date = new Date();

// console.log("current date and time: ", date);

// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getMonth())
// console.log(date.getSeconds())
// console.log(date.getTime())


// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toTimeString())

// console.log(date.toISOString())
// console.log(date.toJSON())

// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

// console.log(date.toUTCString())
// console.log(date.setFullYear(2024))
// console.log(date.setHours(10))
// console.log(date.setMinutes(10))
// console.log(date.setSeconds(59))
// console.log(date.setMonth(10))
// console.log(date.setMilliseconds(1000))

// const date1 = new Date();
// date1.setDate(15)

// console.log(date1);
// console.log(date.setTime(1729630681137));


// console.log(date);




