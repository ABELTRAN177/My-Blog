// second theme toggle fires imidiately when the page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const svgIcon = document.querySelector('#theme-toggle2');
    const body = document.body;

    // Loads theme from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    }

    svgIcon.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Saves theme to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });
});

// when user clicks on the back button, they are redirected to the previous page
document.getElementById("backbtn").onclick = function() {
    document.location.href = "index.html"
}

// <-------------------->
window.onload = function() {
    // Retrieve the blogList from localStorage
    const blogListString = localStorage.getItem('blogList');

    // Parse the JSON string back to an array
    const blogList = JSON.parse(blogListString);

    // Check if blogList is not null and has at least one item
    if(blogList && blogList.length > 0) {
        // Loop through the blogList
        for(let i = 0; i < blogList.length; i++) {
            // Get the current blog post
            const blog = blogList[i];

            // Create a new card with the blog post's data
            // form html is mimicked to create a card with the blog post's data
            const cardHTML = `
            <div class="card border-dark mb-3 dark-theme-card" style="max-width: 100%; width: 100%; max-height: 10%; margin: auto">
                <div class="card-header bg-transparent border-dark dark-theme-header"><strong>${blog.title}</strong></div>
                <div class="card-body text-dark dark-theme-body">
                    <p class="card-text">${blog.message}</p>
                </div>
                <div class="card-footer bg-transparent border-dark dark-theme-footer"> Posted by: ${blog.username}</div>
                <button class="delete-button" data-index="${i}">Delete</button>
            </div>`;
            // this adds HTML to the end of the blogs element
            document.getElementById('blogs').innerHTML += cardHTML;
        }

        // Add event listeners to the delete buttons within the blog posts card
        const deleteButtons = document.getElementsByClassName('delete-button');
        for(let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', function() {
                // Get the index of the blog post to delete
                const index = this.getAttribute('data-index');

                // when the user clicks delete, it removes the blog post from the blogList array
                blogList.splice(index, 1);

                // Updates the local storage
                localStorage.setItem('blogList', JSON.stringify(blogList));

                // Reload the page
                location.reload();
            });
        }
    } else {
        // If there are no blog posts, clear the blogs element
        document.getElementById('blogs').innerHTML = '';
    }

    const title = localStorage.getItem('title');

    if (title) {
        // Display the title value
        document.getElementById('card-title').textContent = title;
    }
}

// <-------------------->
// this event listener listens for the click event on the blogs element
// when the user clicks on the blogs element, it creates a new card element
document.getElementById('blogs').addEventListener('click', function() {
    let container = document.getElementById('blogs');
    let newCard = document.createElement('div');
    newCard.className = 'card';

    // if the title is not null or undefined it will execute
    // in the "if" statement, it creates a new element and sets the text content to the title
    // it also gives the element an id of 'card-title'
    const title = localStorage.getItem('title');
    if (title) {
        let titleElement = document.createElement('h5');
        titleElement.id = 'card-title';
        titleElement.textContent = title;
        newCard.appendChild(titleElement);
    }

    // this adds a new card to the top of the blogs element
    container.prepend(newCard);
});