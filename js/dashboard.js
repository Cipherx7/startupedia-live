// Import components and utilities
import { startups } from './startups.js';
import { createStartupCard } from './startupCard.js';
import { searchStartups } from './search.js';
import { searchStartups } from './bootstrap.js';

document.addEventListener('DOMContentLoaded', function() {
    const startupContainer = document.querySelector('.row.g-4');
    const searchInput = document.querySelector('.search-box input');

    // Render initial startup cards
    function renderStartups(startupsToRender) {
        startupContainer.innerHTML = startupsToRender.map(startup => 
            createStartupCard(startup)
        ).join('');
    }

    // Handle search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const filteredStartups = searchStartups(query);
        renderStartups(filteredStartups);
    });

    // Handle approach button click
    window.handleApproach = function(startupId) {
        const startup = startups.find(s => s.id === startupId);
        console.log(`Approaching ${startup.name}`);
        // Add your approach logic here
    };

    // Initial render
    renderStartups(startups);

    // Profile dropdown functionality
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileDropdown) {
        profileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Notification dropdown functionality
    const notificationDropdown = document.getElementById('notificationDropdown');
    if (notificationDropdown) {
        notificationDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Sign out functionality
    const signOutButton = document.querySelector('.profile-dropdown .text-danger');
    if (signOutButton) {
        signOutButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Signing out...');
            // Add your sign out logic here
        });
    }
 });
 
