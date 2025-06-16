// Games Database
const gamesDatabase = [
    {
        id: 1,
        title: "Highway Traffic",
        description: "Drive through busy highways, avoid other vehicles, and travel as far as possible to achieve high scores.",
        category: "racing",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/highway-traffic/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html",
        tags: ["Racing", "Driving", "Arcade"],
        rating: 4.5,
        plays: 12500,
        filename: "highway-traffic.html"
    },
    {
        id: 2,
        title: "GTA Simulator",
        description: "Open-world crime simulation game where you experience free city life and exciting missions.",
        category: "action",
        thumbnail: "https://img.onlinegames.io/games/2023/unity/gta-simulator/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2023/unity/gta-simulator/index.html",
        tags: ["Action", "Open World", "Simulation"],
        rating: 4.7,
        plays: 25000,
        filename: "gta-simulator.html"
    },
    {
        id: 3,
        title: "Drift Hunters Pro",
        description: "Professional drift racing game. Master drifting techniques and showcase your driving skills on various tracks.",
        category: "racing",
        thumbnail: "https://img.onlinegames.io/games/2023/unity/drift-hunters-pro/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html",
        tags: ["Racing", "Drifting", "Skills"],
        rating: 4.6,
        plays: 18700,
        filename: "drift-hunters.html"
    },
    {
        id: 4,
        title: "Stickman Destruction",
        description: "Control stickman characters in various destructive experiments and enjoy physics engine fun.",
        category: "arcade",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/stickman-destruction/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/stickman-destruction/index.html",
        tags: ["Arcade", "Physics", "Destruction"],
        rating: 4.3,
        plays: 15600,
        filename: "stickman-destruction.html"
    },
    {
        id: 5,
        title: "Masked Forces",
        description: "First-person shooter game. Use various weapons to fight enemies and complete missions.",
        category: "shooting",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/masked-forces/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/masked-forces/index.html",
        tags: ["Shooting", "FPS", "Combat"],
        rating: 4.4,
        plays: 22100,
        filename: "masked-forces.html"
    },
    {
        id: 6,
        title: "Stack Fire Ball",
        description: "Simple yet addictive arcade game. Control the fire ball through rotating towers.",
        category: "arcade",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/stack-fire-ball/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/stack-fire-ball/index.html",
        tags: ["Arcade", "Casual", "Skills"],
        rating: 4.2,
        plays: 31000,
        filename: "stack-fire-ball.html"
    },
    {
        id: 7,
        title: "Basketball King",
        description: "Basketball shooting game. Test your basketball skills and score as many baskets as possible.",
        category: "sports",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/basketball-king/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/basketball-king/index.html",
        tags: ["Sports", "Basketball", "Skills"],
        rating: 4.1,
        plays: 9800,
        filename: "basketball-king.html"
    },
    {
        id: 8,
        title: "Nuts and Bolts Puzzle",
        description: "Puzzle game where you solve complex mechanical puzzles by rotating screws and bolts.",
        category: "puzzle",
        thumbnail: "https://img.onlinegames.io/games/2023/unity/nuts-and-bolts-puzzle/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2023/unity/nuts-and-bolts-puzzle/index.html",
        tags: ["Puzzle", "Logic", "Mechanics"],
        rating: 4.5,
        plays: 14200,
        filename: "nuts-and-bolts-puzzle.html"
    },
    {
        id: 9,
        title: "Survival Island",
        description: "Survival adventure game. Collect resources, build shelter, and survive on a deserted island.",
        category: "adventure",
        thumbnail: "https://img.onlinegames.io/games/2023/unity/survival-island/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2023/unity/survival-island/index.html",
        tags: ["Adventure", "Survival", "Building"],
        rating: 4.3,
        plays: 16500,
        filename: "survival-island.html"
    },
    {
        id: 10,
        title: "Cookie Clicker Pro",
        description: "Classic clicker game. Click to make cookies and build your cookie empire.",
        category: "arcade",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/cookie-clicker-pro/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/cookie-clicker-pro/index.html",
        tags: ["Arcade", "Clicker", "Idle"],
        rating: 4.0,
        plays: 45000,
        filename: "cookie-clicker-pro.html"
    },
    {
        id: 11,
        title: "Geometry Dash",
        description: "Rhythm-based platform game. Jump and fly to the beat of music while avoiding obstacles.",
        category: "arcade",
        thumbnail: "https://img.onlinegames.io/games/2022/unity/geometry-dash/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2022/unity/geometry-dash/index.html",
        tags: ["Arcade", "Music", "Platform"],
        rating: 4.7,
        plays: 38000,
        filename: "geometry-dash.html"
    },
    {
        id: 12,
        title: "Archery World Tour",
        description: "Archery competition game. Showcase your archery skills in competitions around the world.",
        category: "sports",
        thumbnail: "https://html5games.com/thumbs/archery-world-tour-thumb.jpg",
        embedUrl: "https://html5games.com/Game/archery-world-tour/",
        tags: ["Sports", "Archery", "Competition"],
        rating: 4.2,
        plays: 11300,
        filename: "archery-world-tour.html"
    }
];

// Extended games data - more game types
const additionalGames = [
    {
        id: 13,
        title: "Bubble Woods",
        description: "Classic bubble shooter game. Aim and shoot bubbles of the same color to eliminate them.",
        category: "puzzle",
        thumbnail: "https://html5games.com/thumbs/bubble-woods-thumb.jpg",
        embedUrl: "https://html5games.com/Game/bubble-woods/",
        tags: ["Puzzle", "Bubble", "Match"],
        rating: 4.4,
        plays: 27500,
        filename: "bubble-woods.html"
    },
    {
        id: 14,
        title: "Moto X3M",
        description: "Thrilling motorcycle stunt game. Show your driving skills on obstacle-filled tracks.",
        category: "racing",
        thumbnail: "https://html5games.com/thumbs/moto-x3m-thumb.jpg",
        embedUrl: "https://html5games.com/Game/moto-x3m/",
        tags: ["Racing", "Motorcycle", "Stunts"],
        rating: 4.6,
        plays: 33200,
        filename: "moto-x3m.html"
    },
    {
        id: 15,
        title: "Zombie Shooter",
        description: "Zombie shooting game. Use various weapons to defend against zombie attacks.",
        category: "shooting",
        thumbnail: "https://img.onlinegames.io/games/2023/unity/zombie-shooter/thumb.webp",
        embedUrl: "https://www.onlinegames.io/games/2023/unity/zombie-shooter/index.html",
        tags: ["Shooting", "Zombie", "Survival"],
        rating: 4.3,
        plays: 19800,
        filename: "zombie-shooter.html"
    }
];

// Merge all game data
gamesDatabase.push(...additionalGames); 