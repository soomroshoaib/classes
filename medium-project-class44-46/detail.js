window.onload = function () {
    const postId = document.location.search.split("&")[0].split("=")[1];
    console.log({ postId });
    getAll(`/posts/${postId}`).then(({ data, response }) => { console.log({ data, response }); })
}