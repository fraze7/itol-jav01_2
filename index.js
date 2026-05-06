// Milestone 4: Dynamic Rendering (The Home Page)

// Get grid container
var cardsGrid = document.querySelector('#cardsGrid');
// Retrieve the saved entries string from localStorage
var savedData = localStorage.getItem('entries');

if (savedData !== null) {

    // Parse JSON string back into a JS array
    var entriesArray = JSON.parse(savedData);
    // Clear out the hard-coded placeholder cards
    cardsGrid.innerHTML = '';

    var newestFirst = entriesArray.slice().reverse();
    var recentEntries = newestFirst.slice(0, 5);

    for (var i = 0; i < recentEntries.length; i++) {
        var entry = recentEntries[i];

        // Trim the body down to a short preview
        var bodyPreview = entry.body.substring(0, 150);
        if (entry.body.length > 150) {
            bodyPreview = bodyPreview + '...';
        }

        // Give the first card the featured class so it stands out
        var cardClass = 'card';
        if (i === 0) {
            cardClass = 'card card-featured';
        }

        var cardHTML = '<div class="' + cardClass + '">';
        cardHTML += '<p class="card-date">' + entry.date + '</p>';
        cardHTML += '<h2 class="card-title">' + entry.title + '</h2>';
        cardHTML += '<p class="card-body">' + bodyPreview + '</p>';
        cardHTML += '</div>';

        cardsGrid.innerHTML += cardHTML;
    }

    var ctaHTML = '<div class="card card-cta">';
    ctaHTML += '<div class="cta-icon">&#128221;</div>';
    ctaHTML += '<h3>Feeling inspired?</h3>';
    ctaHTML += '<p>Your vellum is waiting for its next entry.</p>';
    ctaHTML += '<a href="new-entry.html" class="cta-link">Start writing now</a>';
    ctaHTML += '</div>';

    cardsGrid.innerHTML += ctaHTML;
}
