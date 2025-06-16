// Get current game data (from URL parameters or page data)
const currentGame = {
    id: parseInt('{{GAME_ID}}'),
    title: "{{GAME_TITLE}}",
    category: "{{GAME_CATEGORY_EN}}",
    rating: parseFloat('{{GAME_RATING}}'),
    plays: parseInt('{{GAME_PLAYS}}')
};

// Toggle fullscreen
function toggleFullscreen() {
    const iframe = document.querySelector('.game-container iframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    }
}

// Share game
function shareGame() {
    if (navigator.share) {
        navigator.share({
            title: currentGame.title,
            text: `Play ${currentGame.title}! An awesome game!`,
            url: window.location.href
        });
    } else {
        // Fallback: copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Game link copied to clipboard!');
        });
    }
}

// Toggle favorite status
function toggleFavorite() {
    const btn = event.target.closest('button');
    const icon = btn.querySelector('i');
    
    // Get favorites list from localStorage
    let favorites = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    
    if (favorites.includes(currentGame.id)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== currentGame.id);
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.innerHTML = '<i class="far fa-heart mr-2"></i>Favorite';
        alert('Removed from favorites');
    } else {
        // Add to favorites
        favorites.push(currentGame.id);
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.innerHTML = '<i class="fas fa-heart mr-2"></i>Favorited';
        alert('Added to favorites');
    }
    
    localStorage.setItem('favoriteGames', JSON.stringify(favorites));
}

// Check favorite status
function checkFavoriteStatus() {
    const favorites = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    const btn = document.querySelector('button[onclick="toggleFavorite()"]');
    const icon = btn.querySelector('i');
    
    if (favorites.includes(currentGame.id)) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.innerHTML = '<i class="fas fa-heart mr-2"></i>Favorited';
    }
}

// Load related games and popular games
function loadSidebarGames() {
    // Get related games (same category)
    const relatedGames = gamesDatabase
        .filter(game => game.category === currentGame.category && game.id !== currentGame.id)
        .slice(0, 5);

    // Get popular games (sorted by plays)
    const popularGames = gamesDatabase
        .sort((a, b) => b.plays - a.plays)
        .filter(game => game.id !== currentGame.id)
        .slice(0, 5);

    // Render related games
    const relatedContainer = document.getElementById('relatedGames');
    if (relatedGames.length > 0) {
        relatedContainer.innerHTML = relatedGames.map(game => `
            <a href="${game.filename}" class="block hover:bg-gray-50 p-2 rounded-lg transition">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                        <img src="${game.thumbnail}" alt="${game.title}" 
                             class="w-full h-full object-cover"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="w-full h-full bg-gray-300 flex items-center justify-center" style="display:none;">
                            <i class="fas fa-gamepad text-gray-400"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-medium text-gray-800 text-sm">${game.title}</h4>
                        <p class="text-xs text-gray-500">${getCategoryName(game.category)}</p>
                        <div class="flex items-center mt-1">
                            <div class="flex text-yellow-400 text-xs">
                                ${generateStars(game.rating)}
                            </div>
                            <span class="text-xs text-gray-500 ml-1">${game.rating}</span>
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    } else {
        relatedContainer.innerHTML = '<p class="text-gray-500 text-sm">No related games found</p>';
    }

    // Render popular games
    const popularContainer = document.getElementById('popularGames');
    popularContainer.innerHTML = popularGames.map(game => `
        <a href="${game.filename}" class="block hover:bg-gray-50 p-2 rounded-lg transition">
            <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                    <img src="${game.thumbnail}" alt="${game.title}" 
                         class="w-full h-full object-cover"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="w-full h-full bg-gray-300 flex items-center justify-center" style="display:none;">
                        <i class="fas fa-gamepad text-gray-400"></i>
                    </div>
                </div>
                <div class="flex-1">
                    <h4 class="font-medium text-gray-800 text-sm">${game.title}</h4>
                    <p class="text-xs text-gray-500">
                        <i class="fas fa-play mr-1"></i>${formatNumber(game.plays)}
                    </p>
                    <div class="flex items-center mt-1">
                        <div class="flex text-yellow-400 text-xs">
                            ${generateStars(game.rating)}
                        </div>
                        <span class="text-xs text-gray-500 ml-1">${game.rating}</span>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

// Helper functions
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

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Execute after page load
document.addEventListener('DOMContentLoaded', function() {
    checkFavoriteStatus();
    loadSidebarGames();
    
    // Increase game play count (simulated)
    setTimeout(() => {
        const playCountElement = document.querySelector('[data-play-count]');
        if (playCountElement) {
            let currentCount = parseInt(playCountElement.dataset.playCount);
            playCountElement.textContent = formatNumber(currentCount + 1);
        }
    }, 5000);
}); 