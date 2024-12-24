// Startup card component
export function createStartupCard(startup) {
    return `
        <div class="col-md-6">
            <div class="startup-card p-4">
                <div class="startup-info mb-3">
                    <div class="mb-2">Startup Website: <a href="${startup.website}" class="text-primary">${startup.website}</a></div>
                </div>
                <h2 class="h5 mb-3">Startup Name: ${startup.name}</h2>
                <div class="mb-3">
                    <h6 class="mb-2">What we are solving:</h6>
                    <p class="text-muted">${startup.solution}</p>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <div class="mb-2"><strong>Industries:</strong></div>
                        <span class="startup-tag">${startup.industry}</span>
                    </div>
                    <div class="col-6">
                        <div class="mb-2"><strong>Founder:</strong></div>
                        <div>${startup.founder}</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-6">
                        <div class="mb-2"><strong>Collaboration:</strong></div>
                        <div>${startup.collaboration}</div>
                    </div>
                    <div class="col-6">
                        <div class="mb-2"><strong>We need help in:</strong></div>
                        <div>${startup.helpNeeded}</div>
                    </div>
                </div>
                <div class="text-end">
                    <button class="approach-btn" onclick="handleApproach('${startup.id}')">Approach</button>
                </div>
            </div>
        </div>
    `;
}