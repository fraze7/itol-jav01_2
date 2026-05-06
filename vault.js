// Milestone 5: The Full Vault

var vaultEntries = document.querySelector('#vaultEntries');

var savedData = localStorage.getItem('entries');

// If nothing is saved, show an empty state message
if (savedData === null) {
    vaultEntries.innerHTML = '<div class="empty-state">'
        + '<h3>Your vault is empty.</h3>'
        + '<p>You haven\'t written any entries yet.</p>'
        + '<a href="new-entry.html">Write your first entry</a>'
        + '</div>';

} else {
    // Parse the JSON string back into an array
    var entriesArray = JSON.parse(savedData);

    // Show an empty state if the array has nothing in it
    if (entriesArray.length === 0) {
        vaultEntries.innerHTML = '<div class="empty-state">'
            + '<h3>Your vault is empty.</h3>'
            + '<p>You haven\'t written any entries yet.</p>'
            + '<a href="new-entry.html">Write your first entry</a>'
            + '</div>';

    } else {
        var newestFirst = entriesArray.slice().reverse();
        // Loop through every entry
        for (var i = 0; i < newestFirst.length; i++) {
            var entry = newestFirst[i];

            var bodyPreview = entry.body.substring(0, 200);
            if (entry.body.length > 200) {
                bodyPreview = bodyPreview + '...';
            }

            var entryHTML = '<div class="vault-entry">';
            entryHTML += '<button class="vault-entry-options">&#8943;</button>';
            entryHTML += '<div class="vault-entry-meta">';
            entryHTML += '<span class="vault-entry-date">' + entry.date + '</span>';
            entryHTML += '</div>';
            entryHTML += '<h2 class="vault-entry-title">' + entry.title + '</h2>';
            entryHTML += '<p class="vault-entry-body">' + bodyPreview + '</p>';
            entryHTML += '</div>';

            vaultEntries.innerHTML += entryHTML;
        }
    }
}
