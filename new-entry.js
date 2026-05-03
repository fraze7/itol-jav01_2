// Milestone 2: Capturing Input
// Milestone 3: Saving to LocalStorage

var dateElement = document.querySelector('#editorDate');

var today = new Date();
var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = today.toLocaleDateString('en-US', dateOptions);

dateElement.textContent = formattedDate.toUpperCase();

// Milestone 2: Select the form elements using document.querySelector
var titleInput = document.querySelector('#entryTitle');
var bodyInput = document.querySelector('#entryBody');
var saveBtn = document.querySelector('#saveBtn');
var discardBtn = document.querySelector('#discardBtn');

saveBtn.addEventListener('click', function() {

    var titleValue = titleInput.value;
    var bodyValue = bodyInput.value;

    // Don't save if both fields are empty
    if (titleValue.trim() === '' && bodyValue.trim() === '') {
        alert('Please write something before saving!');
        return;
    }

    if (titleValue.trim() === '') {
        titleValue = 'Untitled Reflection';
    }

    // Build the entry object
    var newEntry = {
        id: Date.now(),
        title: titleValue,
        body: bodyValue,
        date: formattedDate.toUpperCase()
    };

    // Milestone 3: 
    var existingData = localStorage.getItem('entries');
    var entriesArray = [];

    if (existingData !== null) {
        entriesArray = JSON.parse(existingData);
    }

    entriesArray.push(newEntry);
    // Save the updated array back to localStorage
    localStorage.setItem('entries', JSON.stringify(entriesArray));

    window.location.href = 'index.html';
});


// Discard button goes back without saving
discardBtn.addEventListener('click', function() {
    var confirmed = confirm('Are you sure you want to discard this entry?');
    if (confirmed) {
        window.location.href = 'index.html';
    }
});
