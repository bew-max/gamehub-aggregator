let currentGames = [];
let currentFilter = 'all';
let gamesPerPage = 8;
let currentPage = 1;

// 初始化页面
function initializePage() {
    console.log('初始化页面开始');
    if (typeof gamesDatabase !== 'undefined') {
        currentGames = [...gamesDatabase];
        displayGames();
        updateStatistics();
        console.log('页面初始化成功，游戏数量:', gamesDatabase.length);
    } else {
        console.error('游戏数据库未加载');
    }
}

// 显示游戏
function displayGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) {
        console.error('找不到游戏网格元素');
        return;
    }

    const startIndex = 0;
    const endIndex = currentPage * gamesPerPage;
    const gamesToShow = currentGames.slice(startIndex, endIndex);

    gamesGrid.innerHTML = '';

    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });

    // 更新加载更多按钮状态
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (endIndex >= currentGames.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
    
    console.log('显示游戏完成，显示数量:', gamesToShow.length);
}

// 创建游戏卡片
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

// 生成星级评分
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

// 格式化数字
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// 打开游戏模态框
function openGameModal(game) {
    const modal = document.getElementById('gameModal');
    const title = document.getElementById('modalGameTitle');
    const content = document.getElementById('modalGameContent');

    if (!modal || !title || !content) {
        console.error('找不到模态框元素');
        return;
    }

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

// 关闭游戏模态框
function closeGameModal() {
    const modal = document.getElementById('gameModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// 获取分类名称
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

// 导航函数
function showAllGames() {
    console.log('显示所有游戏');
    currentFilter = 'all';
    currentPage = 1;
    currentGames = [...gamesDatabase];
    
    // 更新按钮状态
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    const firstBtn = document.querySelector('.category-filter');
    if (firstBtn) firstBtn.classList.add('active');
    
    // 清除搜索
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    displayGames();
    document.title = 'GameHub - Free Online Games Platform';
}

function showPopularGames() {
    console.log('显示热门游戏');
    currentFilter = 'popular';
    currentPage = 1;
    currentGames = [...gamesDatabase].sort((a, b) => b.plays - a.plays);
    
    // 更新按钮状态
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    displayGames();
    document.title = 'Popular Games - GameHub';
}

function showNewGames() {
    console.log('显示新游戏');
    currentFilter = 'new';
    currentPage = 1;
    // 按ID排序（假设ID越高越新）
    currentGames = [...gamesDatabase].sort((a, b) => b.id - a.id);
    
    // 更新按钮状态
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    displayGames();
    document.title = 'New Games - GameHub';
}

function showCategoriesModal() {
    console.log('显示分类');
    // 滚动到分类区域
    const categoryButtons = document.querySelectorAll('.category-filter');
    if (categoryButtons.length > 0) {
        categoryButtons[0].scrollIntoView({ behavior: 'smooth' });
    }
}

// 分类筛选
function filterByCategory(category) {
    console.log('筛选分类:', category);
    currentFilter = category;
    currentPage = 1;

    // 更新按钮状态
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 为当前点击的按钮添加active类
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    // 筛选游戏
    if (category === 'all') {
        currentGames = [...gamesDatabase];
    } else {
        currentGames = gamesDatabase.filter(game => game.category === category);
    }

    displayGames();
}

// 搜索游戏
function searchGames() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    currentPage = 1;

    console.log('搜索关键词:', searchTerm);

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

// 加载更多游戏
function loadMoreGames() {
    currentPage++;
    displayGames();
}

// 切换移动端菜单
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// 打开游戏页面
function openGamePage(filename) {
    window.open(`games/${filename}`, '_blank');
}

// 分享游戏
function shareGame(title, description) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Play ${title}! ${description}`,
            url: window.location.href
        });
    } else {
        // 备用方案：复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Game link copied to clipboard!');
        }).catch(() => {
            alert('Unable to copy link');
        });
    }
}

// 更新平台统计
function updateStatistics() {
    const totalGamesElement = document.getElementById('totalGames');
    if (totalGamesElement && typeof gamesDatabase !== 'undefined') {
        totalGamesElement.textContent = gamesDatabase.length + '+';
        console.log('统计更新完成');
    }
}

// 页面加载事件
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面DOM加载完成');
    
    // 搜索输入回车事件
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchGames();
            }
        });
    }

    // 点击模态框外部关闭
    const gameModal = document.getElementById('gameModal');
    if (gameModal) {
        gameModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeGameModal();
            }
        });
    }

    // 初始化页面
    initializePage();
});

console.log('main-simple.js 加载完成'); 