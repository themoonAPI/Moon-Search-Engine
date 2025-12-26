// Moon Search Engine Script - Safe & Custom Searches

// Main search function
function search(site) {
    let query = document.getElementById('search').value.trim();
    
    // Prevent empty searches
    if (query === '') {
        alert('Please enter something to search! 🌙');
        return;
    }

    let url = '';

    // Build safe search URLs for each tab
    if (site === 'youtube') {
        url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query) + '&safe=strict';
    } else if (site === 'google') {
        url = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&safe=strict';
    } else if (site === 'bing') {
        url = 'https://www.bing.com/search?q=' + encodeURIComponent(query) + '&safeSearch=strict';
    } else if (site === 'firefox') {
        url = 'https://www.mozilla.org/en-US/search/?q=' + encodeURIComponent(query);
    } else if (site === 'kbh') {
        url = 'https://kbhgames.com/search/' + encodeURIComponent(query);
    }

    // Open results in new tab
    window.open(url, '_blank');

    // Optional: Clear input after search
    document.getElementById('search').value = '';
}

// Switch between tabs (YouTube, Google, etc.)
function switchTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Show selected tab
    document.getElementById(tabId).classList.add('active');

    // Update button styles
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Allow pressing Enter in the search bar from any tab
document.getElementById('search').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        let activeTab = document.querySelector('.tab-content.active').id;
        search(activeTab);
    }
});
