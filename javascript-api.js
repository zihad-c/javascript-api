/* 1. Loading data from server with function */

function loadPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

/* 2. Loading data from server when page loads */
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> Title: ${post.title} </h3>
        <p> ${post.body} </p>

        `;
        postContainer.appendChild(div);
        console.log(post);
    }

}