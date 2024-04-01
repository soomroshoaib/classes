let isLoading = false, _page = 1, _per_page = 10;
const postsContainer = document.querySelector('#posts-container');

window.onload = function () {
    // console.log({ pagination });
    // pagination.style.display = 'none';
    localStorage.getItem('user') ? null : window.location.href = 'register.html';
    getAllPostsAndReCreateUi();
}

// console.log({ isLoading });

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'register.html';
}

async function createPost(event) {
    try {
        // const createButton = document.getElementById("createButton");
        // createButton.textContent = "Creating...";
        createButton.innerHTML = `<div class="spinner-border spinner-border-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> Create`;
        createButton.disabled = true;

        event.preventDefault();

        const post = {};
        const inputs = document.querySelectorAll("#postForm .form-control");
        console.log({ inputs });
        inputs.forEach((input) => {

            post[input.id] = input.value;
        });
        const localStorageUser = localStorage.getItem('user');
        const user = localStorageUser && JSON.parse(localStorageUser);

        post.userId = user?.id;
        post.authorFullName = user?.fullName;
        post.authorProfilePic = user?.profilePic;

        console.log({ post });

        const { data, response } = await create(post, '/posts');

        createButton.textContent = "Create";
        createButton.disabled = false;

        if (response.status === 201) {
            postForm.reset();
            appendAlert('Post Created Successfully', 'success');
            getAllPostsAndReCreateUi();
        } else {
            appendAlert('Some error occur while creating post', 'danger');
        }

        console.log({ data, response });
    } catch (error) {
        console.log({ error });
    }

}


function createPostCardsUI(posts) {
    // console.log({ postsContainer, isLoading });
    postsContainer.innerHTML = "";
    const totalPosts = posts.length;
    if (totalPosts > 0) {
        const postsCardUi = posts.map(post => {
            return createPostCard(post);
        });
        // console.log({ postsCardUi });
        postsContainer.innerHTML += `<h1 class="mb-3 text-bold">All Posts (${totalPosts})</h1>`;
        postsContainer.innerHTML += postsCardUi.join("");
        postsContainer.innerHTML += `  <div class="d-flex justify-content-end align-items-center mb-3" id="pagination">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" id="previousBtn" class="btn btn-outline-primary" onclick="previousPage()">Previous</button>
            <!-- <button type="button" class="btn btn-outline-primary"></button> -->
            <button type="button" class="btn btn-outline-primary" onclick="nextPage()">Next</button>
        </div>
    </div>`;

    } else {
        postsContainer.innerHTML += `<h3 class="text-center">No Posts Found</h3>`;
    }
}

function createPostCard(post) {
    return `<div class="col-4">
        <div class="card my-3" >
        <img src=${post.image} class="card-img-top" alt=${post.title}>
        <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        ${post.content
            ? `<p class="card-text">${post.content
            }</p>` : ''}
    
      <div class="d-flex justify-content-between align-items-center">  <a href=${`detail.html?postId=${post.id}`} class="btn btn-primary">View Details</a>

      <div><button type="button" class="btn btn-outline-warning" onclick="editPost(${post})">Edit</button>
      <button type="button" class="btn btn-outline-danger" onclick="deletePost(${post.id})">Delete</button></div></div>
        </div>
        </div>
        </div>`
}

function editPost(post) {
    console.log({ post });
}

function deletePost(id) {
    console.log({ id });
}

async function getAllPostsAndReCreateUi() {
    try {
        isLoading = true;
        const loader = `<div class="text-center loader">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
        postsContainer.innerHTML += loader;
        const posts = await getAll(`/posts?_page=${_page}&_per_page=${_per_page}`);
        isLoading = false;
        console.log({ posts });

        if (!isLoading) {
            document.querySelector('.loader').remove();
        }

        if (posts.response.status === 200) {
            createPostCardsUI(posts.data);
        } else {

        }
    } catch (error) {
        console.log({ error });
    }
}

// const liveAlertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    // wrapper.style.margin= '1rem 0';
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible my-3" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    liveAlertPlaceholder.append(wrapper)
}

function previousPage() {

    if (_page <= 1) {
        // previousBtn.disabled = true;    
        return;
    }
    _page = _page - 1;
    getAllPostsAndReCreateUi();
    console.log({ _page });

}

function nextPage() {
    // _page = _page + 1;
    // OR 
    _page += 1;
    getAllPostsAndReCreateUi();
    console.log({ _page });


}
