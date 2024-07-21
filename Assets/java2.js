const svgIcon = document.querySelector('#theme-toggle svg');
const body = document.body;

svgIcon.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
document.getElementById("backbtn").onclick = function() {
    document.location.href = "index.html"
}

// Retrieve the data from localStorage-- flex box 
const userDataString = localStorage.getItem('userData');
    
// Parse the JSON string back to an object
const userData = JSON.parse(userDataString);

// Get the element where you want to display the user input
const userInputElement = document.getElementById('userInput');

// Display the user input on the page
userInputElement.textContent = userData.userInput;

// function createTaskCard(task) {
//     const card = $('<div>').addClass('card').attr('id', task.id);
//     const cardHeader = $('<div>').addClass('card-header').text(task.title);
//     const cardBody = $('<div>').addClass('card-body');
//     const cardDescription = $('<p>').addClass('card-text').text(task.description);
//     const cardDueDate = $('<p>').addClass('card-text').text(`Due Date: ${task.dueDate}`);
//     const deleteButton = $('<button>').addClass('btn btn-danger delete').text('Delete');
//     deleteButton.on('click', handleDeleteTask);
//     if(task.dueDate&& task.status!== 'done'){
//         const today = dayjs()
//         if (today.isSame(task.dueDate, 'day')) {
//             card.addClass('bg-warning text-white');
//         }
//         else if (today.isAfter(task.dueDate, 'day')) {
//             card.addClass('bg-danger text-white');
//         }
//     }
//     cardBody.append(cardDescription, cardDueDate, deleteButton);
//     card.append(cardHeader, cardBody);
//     return card;
// }
 