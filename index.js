// Milestone 4: Dynamic Rendering (The Home Page)

// Get grid container
const cardsGrid = document.querySelector('#cardsGrid');
// Retrieve the saved entries string from localStorage
const savedData = localStorage.getItem('entries');

if (savedData !== null) {

    // Parse JSON string back into a JS array
    const entriesArray = JSON.parse(savedData);
    // Clear out the hard-coded placeholder cards
    cardsGrid.innerHTML = '';

    const newestFirst = entriesArray.slice().reverse();
    const recentEntries = newestFirst.slice(0, 5);

    for (let i = 0; i < recentEntries.length; i++) {
        const entry = recentEntries[i];

        // Trim the body down to a short preview
        const bodyPreview = entry.body.length > 150 ? entry.body.substring(0, 150) + '...' : entry.body;

        // Give the first card the featured class so it stands out
        const cardClass = i === 0 ? 'card card-featured' : 'card';

        const cardHTML = `
            <div class="${cardClass}">
                <p class="card-date">${entry.date}</p>
                <h2 class="card-title">${entry.title}</h2>
                <p class="card-body">${bodyPreview}</p>
            </div>
        `;

        cardsGrid.innerHTML += cardHTML;
    }

    const ctaHTML = `
        <div class="card card-cta">
            <div class="cta-icon">&#128221;</div>
            <h3>Feeling inspired?</h3>
            <p>Your vellum is waiting for its next entry.</p>
            <a href="new-entry.html" class="cta-link">Start writing now</a>
        </div>
    `;

    cardsGrid.innerHTML += ctaHTML;
}
