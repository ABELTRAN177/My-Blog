document.addEventListener('DOMContentLoaded', (event) => {
    const svgIcon = document.querySelector('#theme-toggle');
    const body = document.body;

    // Load theme from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    }

    svgIcon.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Save theme to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });
});

// <-------------------->

document.getElementById("pagebtn").onclick = function () {
    saveData();
    document.location.href = "index2.html"
}
document.getElementById("backbtn").onclick = function () {
    document.location.href = "index.html"
}


// <-------------------->
function saveData() {
    const blogList = JSON.parse (localStorage.getItem ('blogList')) || [];
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const blog = {
        username: username,
        title: title,
        message: message
    };
    blogList.push(blog);
 
    const dataString = JSON.stringify(blogList);
    localStorage.setItem('blogList', dataString);
}

// document.getElementById("pagebtn").onclick = function() {
//     document.location.href = "index2.html"
// }
// <-------------------->
// document.getElementById('index.html').addEventListener('submit', function(event) {
//     event.preventDefault(); // This line prevents the default form submission behavior

//     // Your custom code to handle the form submission goes here
// });

function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('message').value;

    if (username === '' || title === '' || content === '') {
        alert('Please complete all fields before submitting the form.');
    } else {
        // Form is valid, you can submit the form here
        document.getElementById('index.html').submit();
    }
}