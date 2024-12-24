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
