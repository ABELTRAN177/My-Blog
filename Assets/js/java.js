// ensures that when the page is loaded the theme toggle fires right away when clicked
document.addEventListener('DOMContentLoaded', (event) => {
    const svgIcon = document.querySelector('#theme-toggle');
    const body = document.body;

    // Allows theme to load from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    }
    // when sun icon is clicked, the theme toggles between light and dark
    svgIcon.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Save theme to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // <--------------------> 
    document.getElementById('inputForm').addEventListener('submit', function(event) {
        // Prevent the form from refreshing the page
        event.preventDefault();
    
        // Save the form data and the user is redirected to the next page
        // If an error occurs in the submission, log it to the console
        try {
            saveData();
            document.location.href = "index2.html";
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    });

    // <-------------------->
    // saves user input to localStorage to then be displayed on the next page when it is retreived
    // If an error occurs in the submission, logs it 
    function saveData() {
        try {
            const blogList = JSON.parse(localStorage.getItem('blogList')) || [];
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
        } catch (error) {
            console.error('Error during data saving:', error);
        }
    }
});