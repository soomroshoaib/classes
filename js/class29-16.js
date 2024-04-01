console.log("class 16 of js");

// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// DRY - Don't Repeat Yourself

// add(10, 2);
// subtract(10, 2);
// multiply(10, 2);
// divide(10, 2);

// 1. How to create an HTML element using the createElement method (document.createElement(element))?
// 2. How to set attributes to newly created and existing HTML elements using the setAttribute method(element.setAttribute(attribute, value)) and attribute property (element.attribute = new value)?
// 3. See detailed differences between element.attribute property and element.setAttribute method.
// 4. How to style newly created and existing HTML elements in JavaScript using (element.style.property = new style)?
// 5. How to remove the child of an HTML element using the removeChild method (document.removeChild(element))?
// 6. How to append a child in an HTML element using the appendChild method (element.appendChild(element))?  How to use it? How is it different from the innerHTML property and textContent property?
// 7. What is textContent? How to use it? How is it different from the appendChild method and innerHTML property?
// 8. What is innerHTML? How to use it? How is it different from the appendChild method and textContent property?
// 9. How to create a dynamic product card list using the above concepts and this fake API (https://fakestoreapi.com/products)?




// 1. Creating HTML Elements with `createElement` Method:
//         `document.createElement(element)` is used to create new HTML elements in JavaScript. You can specify the type of element you want to create (e.g., 'div', 'p', 'span').

// 2. Setting Attributes with `setAttribute` and Element Property:
//         `setAttribute` and element properties (e.g., `element.attribute = new value`) are used to set attributes for HTML elements, either for newly created or existing ones.

// 3. Differences Between Element Property and `setAttribute` Method:
//         This topic can explain the distinctions between using element properties (e.g., `element.id`) and the `setAttribute` method (e.g., `element.setAttribute('id', 'newId')`) to set attributes.

// 4. Styling Elements in JavaScript with `element.style`:
//         You can use `element.style.property = new style` to apply CSS styles to HTML elements dynamically using JavaScript.

// 5. Removing Child Elements with `removeChild` Method:
//         `document.removeChild(element)` is used to remove a child element from the DOM. The method removes the specified child node from the parent.

// 6. Appending Child Elements with `appendChild` Method:
//         `element.appendChild(childElement)` is used to add a child element to a parent element. It is different from `innerHTML` and `textContent` as it adds an element as a child rather than as raw HTML or text.

// 7. Understanding `textContent`:
//         `textContent` is a property that allows you to get or set the text content of an HTML element. It represents the text content without HTML tags.

// 8. Exploring `innerHTML`:
//         `innerHTML` is a property that allows you to get or set the HTML content within an element. It includes HTML tags and their content.

// 9. Creating a Dynamic Product Card List:
//         This topic can demonstrate how to create a list of product cards dynamically using the concepts discussed above, such as creating elements, setting attributes, styling, and appending them. You can use the provided fake API (https://fakestoreapi.com/products) to fetch and display product data.


const section = document.querySelector("section");
console.log("section:", section);
console.log({ section });
// NodeList

const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        for (let index = 0; index < products.length; index++) {
            const product = products[index];


            const card = createProductCard(product);
            console.log("card: ", card);


            section.appendChild(card);

        }
        console.log({ response, products })
    } catch (error) {
        console.log("error:", error);
    }
}

fetchProducts();


const createProductCard = (product) => {
    console.log(`Product ${product.id}`, product);
    const div = document.createElement("div");
    // div.id = `card-${product.id}`;
    // OR 

    div.setAttribute("id", `card-${product.id}`)

    // div.setAttribute("href", `https://fakestoreapi.com/products`)
    // div.setAttribute("type", `text`)

    div.style.border = "1px solid black";
    div.style.borderRadius = "1rem";
    div.style.padding = "1rem";
    // div.style.backgroundColor = "lightgray";
    // div.style.borderBottomLeftRadius = "5rem";



    const heading = document.createElement("h1");
    heading.textContent = product.title;

    const description = document.createElement("p");
    description.textContent = product.description;

    // OR 
    // const description = document.createTextNode(product.description);
    // p.appendChild(description);

    const img = document.createElement("img");
    // element.attribute = new value
    img.src = product.image;
    img.alt = product.title;
    img.style.width = "100px";
    img.style.height = "100px";

    const price = document.createElement("strong");
    price.textContent = product.price;

    div.appendChild(price)
    div.appendChild(heading)
    div.appendChild(description)
    div.appendChild(img)
















    // const input = document.createElement("input");
    // const a = document.createElement("a");
    // div.type = 'text';
    // div.href = 'https://fakestoreapi.com/products';
    // a.href = 'https://fakestoreapi.com/products';
    // input.type = 'text';
    // div.placeholder = 'Enter your name';
    // input.placeholder = 'Enter your name';

    // div.classList.add('card');
    // div.textContent = 'This is a dynamically created div';


    // console.log(div);
    // console.log(h1);
    // console.log(p);
    // console.log(input);
    // console.log(a);

    return div
}

const input1 = document.getElementById("input1");
// input1.style.border = "1px solid black";
// input1.style.borderRadius = "3rem";
// input1.style.backgroundColor = "lightgray";
// input1.style.borderBottomLeftRadius = "5rem";
// const input2 = document.getElementById("input2");

// console.log({input1, input2});

// input1.placeholder = "Enter your name";
// input2.placeholder = "Enter your name";


const header = document.querySelector("header");

// header.innerHTML = "<p>This is my description</p>";
// header.innerHTML = `<h1>This is my description   <nav>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav> </h1>`;

// header.textContent = "<h1>This is my description</h1>";
// header.textContent = "<p>This is my description</p>";
// header.textContent = `<h1>This is my description   <nav>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav> </h1>`;

// const nav = document.querySelector("header nav");
// OR
// const nav = document.querySelector("nav");
// const h1 = document.querySelector("h1");
// document.querySelector("h2").textContent = "Heading 2";

// const div = document.querySelector("header div");

// setTimeout(() => {
//     // header.removeChild(nav)
//     // header.removeChild(h1)
//     header.removeChild(div)
// }, 2000);

// console.log(header);

// console.log(h1.textContent);
// console.log(h1.textContent = "Hello World");

