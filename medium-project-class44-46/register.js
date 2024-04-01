window.onload = function () {
    // localStorage.getItem('user') ? window.location.href = 'index.html' : null;
    // OR 

    if (localStorage.getItem('user')) {
        window.location.href = 'index.html';
    }
}

async function register(event) {
    event.preventDefault();

    const user = {};
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => {
        // console.log({ value: input.value, input });
        user[input.id] = input.value;
    });

    // make post request to server to create user with user info from register form
    const createdUser = await create(user, "/users");

    // if user created successfully redirect to home page
    if (createdUser.response.status === 201) {
        localStorage.setItem("user", JSON.stringify(createdUser.data));
        window.location.href = "index.html";
        // OR 
        // window.location.replace("index.html");

    } else {
        const form = document.querySelector("form");
        console.log(form, form.innerHTML);
        form.innerHTML = form.innerHTML + `<h3 class="text-danger text-bold text-center">Error occurs while creating user</h3>`
    }

    // console.log({ inputs, user, createdUser });
}



