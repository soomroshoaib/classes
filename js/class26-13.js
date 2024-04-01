
// Chaining in higher - order methods of arrays. 
// HTTP methods (GET, POST, PUT, PATCH, DELETE).
// CRUD operation using Fetch API. (JSON placeholder fake API)



// const names = ["ali", "haris", "maaz", "sajid", "ayesha", "faizan"];
// const upperCaseNames = names.map(name => name.toUpperCase());
// console.log(names.map(name => name.toUpperCase()), names.map(name => name.toUpperCase()).filter(name => name.length > 4))
// console.log(upperCaseNames.filter(name => name.length > 4))
const promise = new Promise((resolve, reject) => {
    resolve('Here is your requested data');
    reject('Rejected due to network connectivity issue');
});


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log('response', response);
//         return response.json();
//     })
//     .then((posts) => {
//         console.log('posts:', posts);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });

// const getComments = async () => { }
// async function getComments() { }

const getPosts = async () => {
    try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=2", { method: "GET" });
        const posts = await response.json();
        // console.log({ response: response })
        // OR 
        // console.log({ response })

        console.log({ response, posts });
    } catch (error) {
        console.log({ error });
    }
    // } finally {
    //     console.log("finally block calling");
    // }
};

getPosts();

// const createPost = async (body) => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             body: JSON.stringify(body),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         });
//         const post = await response.json();
//         getPosts();

//         console.log({ response, post });
//     } catch (error) {
//         console.log({ error });
//     }
// };



// createPost({
//     title: 'foo1',
//     body: 'bar1',
//     userId: 1,
// });

// createPost({
//     title: 'foo2',
//     body: 'bar2',
//     userId: 1,
// });



// const updatePost = async (url, body) => {
//     try {
//         const response = await fetch(url, {

// OR 

// const updatePost = async (id, body) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {

// OR 

// const updatePost = async (body) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, {
//             method: "PUT",
//             body: JSON.stringify(body),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         });
//         const post = await response.json();
//         getPosts();

//         console.log({ response, post });
//     } catch (error) {
//         console.log({ error });
//     }
// };



// updatePost("https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })
// updatePost("https://jsonplaceholder.typicode.com/posts/2", {
//     id: 2,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })

// OR  

// updatePost(1, {
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })
// updatePost(2, {
//     id: 2,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })

// OR 

// updatePost({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })
// updatePost({
//     id: 2,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// });


const deletePost = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",

        });
        const post = await response.json();
        getPosts();

        console.log({ response, post });
    } catch (error) {
        console.log({ error });
    }
};

deletePost(1)
deletePost(2)