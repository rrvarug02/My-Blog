const postsJson = localStorage.getItem('posts')   // Retrieve posts from localStorage
const posts = JSON.parse(postsJson)   // Parse the posts
const section = $('.main')   // Get the section to add posts

posts.forEach(post => {    // Iterate over each post and add it to the section
    const divElement = $('<div>').addClass('post');
    const titleElement = $('<h3>').text(post.title);
    const breakElement = $('<hr>');
    const contentElement = $('<p>').addClass('content').text(post.content);
    const usernameElement = $('<p>').addClass('username').text(post.username);

    divElement.append(titleElement, breakElement, contentElement, usernameElement);
    section.append(divElement);
});

const button = document.getElementById('back')
button.addEventListener('click', function () {
    window.location.href = "./index.html"
})