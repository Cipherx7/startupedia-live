document.addEventListener('DOMContentLoaded', function() {
    fetch('get_startups.php')
        .then(response => response.json())
        .then(data => {
            const startupCardsContainer = document.getElementById('startup-cards');
            data.forEach(startup => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${startup.image}" alt="${startup.name}">
                    <h2>${startup.name}</h2>
                    <p><strong>What we are solving:</strong> ${startup.description}</p>
                    <p><strong>Startup Website:</strong> <a href="${startup.website}" target="_blank">${startup.website}</a></p>
                    <p><strong>Industries:</strong> ${startup.industries}</p>
                    <p><strong>Founder:</strong> ${startup.founder}</p>
                    <p><strong>We need help in:</strong> ${startup.help_needed}</p>
                    <p><strong>Collaboration:</strong> ${startup.collaboration}</p>
                `;
                startupCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
