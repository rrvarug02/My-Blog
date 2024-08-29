const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');
let posts = [];

// Load posts from the localStorage
let postsFromLocal = JSON.parse(localStorage.getItem('posts'));
if (postsFromLocal !== null) {
    posts = postsFromLocal;
}

// Function to handle form submission
function storeResponse(event) {
    event.preventDefault();

    // Validate form fields
    if (username.value === '' ||
        title.value === '' ||
        content.value === '') {
        alert('Please fill out this field.');
        return; 
    }

    // Create post object and store in localStorage
    const post = {
        username: username.value,
        title: title.value,
        content: content.value,
    };
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to blog page
    window.location.href = "./blog.html";
}

// Add event listener to form
document.getElementById('blogForm').addEventListener('submit', storeResponse);