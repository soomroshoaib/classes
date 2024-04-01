const baseServerUrl = "http://localhost:3000";
window.onload = function () {
    // addPost({ title: 'My first post', description: 'Hello world!' });
    // editPost(1002, { title: 'My second post', description: 'Second post description!' });
    deletePost(1003);
    getPosts();
}

async function addPost(post) {
    try {
        const response = await fetch(`${baseServerUrl}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        console.log({ response });
        const createdPost = await response.json();
        console.log({ createdPost });
    } catch (error) {
        console.log(`Error while creating post: ${error}`);
    }
}



async function getPosts() {
    try {
        const response = await fetch(`${baseServerUrl}/posts`);
        console.log({ response });
        const posts = await response.json();
        console.log({ posts });
    } catch (error) {
        console.log(`Error while fetching posts: ${error}`);
    }
}


async function editPost(id, updatedData) {
    fetch(`${baseServerUrl}/posts/${id}`, {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .then(response => response.json())
        .then(updatedPost => console.log({ updatedPost }))
        .catch(error => console.error('Error while updating post:', error));
}

async function deletePost(id) {
    fetch(`${baseServerUrl}/posts/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(deletedPost => console.log({ deletedPost }))
        .catch(error => console.error('Error while deleting post:', error));
}

