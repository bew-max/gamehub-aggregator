let currentGames = [...gamesDatabase];
let currentFilter = 'all';
let gamesPerPage = 8;
let currentPage = 1;

// Initialize page
function initializePage() {
    displayGames();
}

// Display games
function displayGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    const startIndex = 0;
    const endIndex = currentPage * gamesPerPage;
    const gamesToShow = currentGames.slice(startIndex, endIndex);

    gamesGrid.innerHTML = '';

    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });

    // Update load more button status
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (endIndex >= currentGames.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer';
    card.onclick = () => openGameModal(game);

    card.innerHTML = `
        <div class="aspect-w-16 aspect-h-9 relative">
            <img src="${game.thumbnail}" alt="${game.title}" 
                 class="w-full h-48 object-cover" 
                 onerror="this.src='https://via.placeholder.com/400x300/f3f4f6/6b7280?text=${encodeURIComponent(game.title)}'">
            <div class="absolute top-2 right-2">
                <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">Free</span>
            </div>
        </div>
        <div class="p-4">
            <h3 class="font-bold text-lg text-gray-800 mb-2">${game.title}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">${game.description}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-1">
                    <div class="flex text-yellow-400">
                        ${generateStars(game.rating)}
                    </div>
                    <span class="text-xs text-gray-500">${game.rating}</span>
                </div>
                <span class="text-xs text-gray-500">
                    <i class="fas fa-play mr-1"></i>${formatNumber(game.plays)}
                </span>
            </div>
            <div class="mt-2">
                ${game.tags.map(tag => `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star text-xs"></i>';
    }

    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt text-xs"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star text-xs"></i>';
    }

    return starsHtml;
}

// Format number
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Open game modal
function openGameModal(game) {
    const modal = document.getElementById('gameModal');
    const title = document.getElementById('modalGameTitle');
    const content = document.getElementById('modalGameContent');

    title.textContent = game.title;
    content.innerHTML = `
        <div class="mb-4">
            <div class="aspect-w-16 aspect-h-9 mb-4">
                <iframe src="${game.embedUrl}" 
                        class="w-full h-96 md:h-[500px] border border-gray-300 rounded-lg"
                        allowfullscreen>
                </iframe>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold text-lg mb-2">Game Description</h4>
                <p class="text-gray-700 mb-3">${game.description}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <strong>Category:</strong> ${getCategoryName(game.category)}
                    </div>
                    <div>
                        <strong>Rating:</strong> 
                        <span class="text-yellow-500">${generateStars(game.rating)}</span>
                        ${game.rating}/5
                    </div>
                    <div>
                        <strong>Plays:</strong> ${formatNumber(game.plays)}
                    </div>
                    <div>
                        <strong>Tags:</strong> ${game.tags.join(', ')}
                    </div>
                </div>
                <div class="mt-4 flex gap-2">
                    <button onclick="openGamePage('${game.filename}')" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        <i class="fas fa-external-link-alt mr-2"></i>Open Game Page
                    </button>
                    <button onclick="shareGame('${game.title}', '${game.description}')" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                        <i class="fas fa-share mr-2"></i>Share
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close game modal
function closeGameModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Get category name
function getCategoryName(category) {
    const categoryNames = {
        'action': 'Action',
        'racing': 'Racing',
        'shooting': 'Shooting',
        'puzzle': 'Puzzle',
        'arcade': 'Arcade',
        'sports': 'Sports',
        'adventure': 'Adventure'
    };
    return categoryNames[category] || category;
}

// Filter by category
function filterByCategory(category) {
    currentFilter = category;
    currentPage = 1;

    // Update button state
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter games
    if (category === 'all') {
        currentGames = [...gamesDatabase];
    } else {
        currentGames = gamesDatabase.filter(game => game.category === category);
    }

    displayGames();
}

// Search games
function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentPage = 1;

    if (searchTerm === '') {
        if (currentFilter === 'all') {
            currentGames = [...gamesDatabase];
        } else {
            currentGames = gamesDatabase.filter(game => game.category === currentFilter);
        }
    } else {
        let searchResults = gamesDatabase.filter(game => 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            game.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );

        if (currentFilter !== 'all') {
            searchResults = searchResults.filter(game => game.category === currentFilter);
        }

        currentGames = searchResults;
    }

    displayGames();
}

// Load more games
function loadMoreGames() {
    currentPage++;
    displayGames();
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Open game page
function openGamePage(filename) {
    window.open(`games/${filename}`, '_blank');
}

// Share game
function shareGame(title, description) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Play ${title}! ${description}`,
            url: window.location.href
        });
    } else {
        // Fallback: copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Game link copied to clipboard!');
        });
    }
}

// Search input enter event
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchGames();
            }
        });
    }

    // Click outside modal to close
    const gameModal = document.getElementById('gameModal');
    if (gameModal) {
        gameModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeGameModal();
            }
        });
    }

    // Initialize page
    initializePage();
    
    // Update statistics
    updateStatistics();
});

// Update platform statistics
function updateStatistics() {
    const totalGamesElement = document.getElementById('totalGames');
    if (totalGamesElement) {
        totalGamesElement.textContent = gamesDatabase.length + '+';
    }
}

// Navigation functions
function showAllGames() {
    currentFilter = 'all';
    currentPage = 1;
    currentGames = [...gamesDatabase];
    
    // Update button state
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.category-filter').classList.add('active');
    
    // Clear search
    document.getElementById('searchInput').value = '';
    
    displayGames();
    document.title = 'GameHub - Free Online Games Platform';
}

function showPopularGames() {
    currentFilter = 'popular';
    currentPage = 1;
    currentGames = [...gamesDatabase].sort((a, b) => b.plays - a.plays);
    
    // Update button state
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    displayGames();
    document.title = 'Popular Games - GameHub';
}

function showNewGames() {
    currentFilter = 'new';
    currentPage = 1;
    // Sort by ID (assuming higher ID = newer)
    currentGames = [...gamesDatabase].sort((a, b) => b.id - a.id);
    
    // Update button state
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    displayGames();
    document.title = 'New Games - GameHub';
}

function showCategoriesModal() {
    // Show all categories
    const categories = ['all', 'action', 'racing', 'shooting', 'puzzle', 'arcade', 'sports', 'adventure'];
    const categoryButtons = document.querySelectorAll('.category-filter');
    categoryButtons[0].scrollIntoView({ behavior: 'smooth' });
} 