// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('php/get_startups.php') // Adjust the URL to your PHP file
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.querySelector('.card-container');
            data.forEach(startup => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${startup.image}" alt="${startup.name}">
                    <h2>${startup.name}</h2>
                    <p>${startup.description}</p>
                    <a href="startup_details.html?id=${startup.id}">View Details</a>
                `;
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching startups:', error));
});
