// Milestone 5: The Full Vault

const vaultEntries = document.querySelector('#vaultEntries');

const savedData = localStorage.getItem('entries');

// If nothing is saved, show an empty state message
if (savedData === null) {
    vaultEntries.innerHTML = '<div class="empty-state">'
        + '<h3>Your vault is empty.</h3>'
        + '<p>You haven\'t written any entries yet.</p>'
        + '<a href="new-entry.html">Write your first entry</a>'
        + '</div>';

} else {
    // Parse the JSON string back into an array
    const entriesArray = JSON.parse(savedData);

    // Show an empty state if the array has nothing in it
    if (entriesArray.length === 0) {
        vaultEntries.innerHTML = '<div class="empty-state">'
            + '<h3>Your vault is empty.</h3>'
            + '<p>You haven\'t written any entries yet.</p>'
            + '<a href="new-entry.html">Write your first entry</a>'
            + '</div>';

    } else {
        const newestFirst = entriesArray.slice().reverse();
        // Loop through every entry
        for (let i = 0; i < newestFirst.length; i++) {
            const entry = newestFirst[i];

            const bodyPreview = entry.body.length > 200 ? entry.body.substring(0, 200) + '...' : entry.body;

            const entryHTML = `
                <div class="vault-entry">
                    <button class="vault-entry-options">&#8943;</button>
                    <div class="vault-entry-meta">
                        <span class="vault-entry-date">${entry.date}</span>
                    </div>
                    <h2 class="vault-entry-title">${entry.title}</h2>
                    <p class="vault-entry-body">${bodyPreview}</p>
                </div>
            `;

            vaultEntries.innerHTML += entryHTML;
        }
    }
}
