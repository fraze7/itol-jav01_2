// Milestone 2: Capturing Input
// Milestone 3: Saving to LocalStorage

const dateElement = document.querySelector('#editorDate');

const today = new Date();
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', dateOptions);

dateElement.textContent = formattedDate.toUpperCase();

// Milestone 2: Select the form elements using document.querySelector
const titleInput = document.querySelector('#entryTitle');
const bodyInput = document.querySelector('#entryBody');
const saveBtn = document.querySelector('#saveBtn');
const discardBtn = document.querySelector('#discardBtn');

saveBtn.addEventListener('click', function() {

    let titleValue = titleInput.value;
    const bodyValue = bodyInput.value;

    // Don't save if both fields are empty
    if (titleValue.trim() === '' && bodyValue.trim() === '') {
        alert('Please write something before saving!');
        return;
    }

    if (titleValue.trim() === '') {
        titleValue = 'Untitled Reflection';
    }

    // Build the entry object
    const newEntry = {
        id: Date.now(),
        title: titleValue,
        body: bodyValue,
        date: formattedDate.toUpperCase()
    };

    // Milestone 3:
    const existingData = localStorage.getItem('entries');
    let entriesArray = [];

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
    const confirmed = confirm('Are you sure you want to discard this entry?');
    if (confirmed) {
        window.location.href = 'index.html';
    }
});
