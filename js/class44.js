// hoisting
// scoping 
// closures 



// // Hoisting 
// console.log({ a, });
// // console.log({ b, });
// // console.log({ c });

// var a = 10;

// const b = 20;
// let c = 30;

// // console.log({ b, });
// // console.log({ c });


// console.log(add(10, 20));
// console.log(subtract(30, 20));

// function add(num1, num2) {
//     return num1 + num2;
// }

// // function add(num1, num2, num3) {
// //     return num1 + num2 + num3;
// // }

// const subtract = (num1, num2) => {
//     return num1 + num2;
// }

// // OR 

// // const subtract = (num1, num2) => num1 + num2;



// // Scoping 

// var a = 10;
// let c = 100;
// // let d = 200;


// function print() {

//     a = 20;

//     var b = 30;

//     console.log(a);
//     console.log({ b });
//     console.log({ c });

//     for (let index = 0; index < 10; index++) {
//         const c = 50;
//         console.log(a, b, c, d, index, "for loop");
//         if (index === 5) {
//             console.log(a, b, c, index, "if block");
//         }
//     }
// }


// console.log({ a});

// print();



// // Closures 

// let a = 10;
// let b = 20;

// function outer1() {
//     console.log({ a, b });
//     let c = 80;

//     function inner1() {
//         console.log({ a, b, c });
//         const d = 200;

//         function inner2() {
//             console.log({ a, b, c, d });
//         }
//         inner2();
//     }
//     inner1();
// }


// outer1();


