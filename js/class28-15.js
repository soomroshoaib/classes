// console.log("class 15 of js");

// 1. Introduction of DOM.
// 2. What is DOM?
// 3. Why DOM is so important in JavaScript?
// 4. A deep dive introduction about every HTML is a JavaScript Object.
// 5. A little bit of intro about how to style HTML elements using JavaScript.
// 6. How to access HTML elements using different DOM methods.
    // getElementById, getElementsByTagName, getElementsByClassName,          querySelector, querySelectorAll, getElementsByName.
// 7. What is HTMLCollection?
// 8. How to convert HTMLCollection to a Native JavaScript Array?
// 9. Use querySelector and querySelectorAll with different examples.


// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const footer = document.querySelector("footer");
// h1.style.backgroundColor = "red";
// h1.style.color = "white";
// console.log(h1);
// console.log(p);
// console.log(footer);

// console.log("class \"15\"")

// const p = document.getElementById("paragraph");
// const h1s = document.getElementsByTagName("h1");
// const collection = document.getElementsByClassName("heading");

// const jsH1s = Array.from(h1s);

// const copiedJsH1s = [...jsH1s];

// console.log("h1s: ", h1s);
// console.log("jsH1s: ", jsH1s);

// // copiedJsH1s.shift();
// const filterCollection = copiedJsH1s.filter((h1, index) => {
//     // if (index === 1 || index === 2) {
//     //     return false
//     // }
//     // if (index === 1) {
//     //     return false
//     // }
//     if (index % 2 !== 0) {
//         return false
//     }
//     console.log({ h1, index })
//     return true
// })
// // copiedJsH1s.pop();
// console.log("filterCollection: ", filterCollection)
// console.log("copiedJsH1s: ", copiedJsH1s)

// console.log(collection, "collection");

// const h1 = document.querySelector("h1");
// const h1 = document.querySelector(".heading");
// const h1 = document.querySelector("#Heading");
// console.log("h1: ", h1)

// const element = document.querySelector('[type="text"]');
// const element = document.querySelector('[data-custom-attribute="example"]');
// const element = document.querySelector('input');
// const element = document.querySelector('section div input');

// console.log("element: ", element)
// const elements = document.querySelectorAll('h1');
// const elements = document.querySelectorAll(".heading");
// const elements = document.querySelectorAll("#Heading");
// const elements = document.querySelectorAll('input');
// const elements = document.querySelectorAll('section div input');
// console.log("element: ", elements)


const elements = document.getElementsByName("username");
console.log("element: ", elements)