// Search functionality
import { startups } from 'statups.js';

export function searchStartups(query) {
    return startups.filter(startup => 
        startup.name.toLowerCase().includes(query.toLowerCase()) ||
        startup.industry.toLowerCase().includes(query.toLowerCase()) ||
        startup.solution.toLowerCase().includes(query.toLowerCase())
    );
}