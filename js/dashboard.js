// Import components and utilities
import { startups } from './startups.js';
import { createStartupCard } from './startupCard.js';
import { searchStartups } from './search.js';

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

  document.getElementById('toggleMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Notification Icon Click Event
document.getElementById('notification-icon').addEventListener('click', function() {
    alert("Please complete your profile to access all features."); // Simple alert for profile completion
});

// Submit Reason Functionality
document.getElementById('submitReason').addEventListener('click', function () {
    const reason = document.getElementById('reason').value;
    // Handle the reason here (e.g., send to server or simply log it)
    console.log("User's reason for joining:", reason);
    // Close the modal
    var modalEl = document.getElementById('approachModal');
    var modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance.hide();
});

// Submit New Startup Function
document.getElementById('submitStartup').addEventListener('click', function() {
    const startupName = document.getElementById('startupName').value;
    const solvingProblem = document.getElementById('solvingProblem').value;
    const startupWebsite = document.getElementById('startupWebsite').value;
    const startupIndustry = document.getElementById('startupIndustry').value;
    const founder = document.getElementById('founder').value;
    const helpNeeded = document.getElementById('helpNeeded').value;
    const collaboration = document.getElementById('collaboration').value;

    // Log or handle the submitted startup information
    console.log({
        startupName,
        solvingProblem,
        startupWebsite,
        startupIndustry,
        founder,
        helpNeeded,
        collaboration
    });

    // You might want to clear the form and close the modal afterward
    document.getElementById('createStartupForm').reset();
    var modalEl = document.getElementById('createStartupModal');
    var modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance.hide();
});

// Display all dashboard loaded message
console.log("Dashboard Loaded");
