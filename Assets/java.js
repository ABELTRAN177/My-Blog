const svgIcon = document.querySelector('#theme-toggle svg');
const body = document.body;

svgIcon.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
document.getElementById("pagebtn").onclick = function() {
    document.location.href = "index2.html"
}
document.getElementById("backbtn").onclick = function() {
    document.location.href = "index.html"
}



// <-------------------->
const userInput = document.getElementById('index.html').value;
const dataToSave = {
    userInput: userInput
};
const dataString = JSON.stringify(dataToSave);
localStorage.setItem('userData', dataString);

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