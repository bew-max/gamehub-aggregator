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
        thumbnail: "https://img.poki.com/thumbs/130x100/89f8b58db8c9b5fc70ff3be82cc5e8d9a8a3cdf6_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/bubble-woods",
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
        thumbnail: "https://img.poki.com/thumbs/130x100/77ba05e3a98d0fef4bccfa6c0e6e90dc6ff9e504_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/moto-x3m",
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
    },
    {
        id: 16,
        title: "Among Us",
        description: "Social deduction game where crewmates must find the impostor among them.",
        category: "arcade",
        thumbnail: "https://img.poki.com/thumbs/130x100/2ca4a82634026b7e58b4e05b3e0d47bc45d2d43b_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/among-us",
        tags: ["Arcade", "Social", "Mystery"],
        rating: 4.8,
        plays: 89000,
        filename: "among-us.html"
    },
    {
        id: 17,
        title: "Subway Surfers",
        description: "Endless running game. Run as far as you can in this colorful adventure.",
        category: "arcade",
        thumbnail: "https://img.poki.com/thumbs/130x100/37e9618b12cb9c4b5db5d9b81ab2f36329f61b16_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/subway-surfers",
        tags: ["Arcade", "Running", "Endless"],
        rating: 4.7,
        plays: 156000,
        filename: "subway-surfers.html"
    },
    {
        id: 18,
        title: "Temple Run 2",
        description: "Endless running adventure in mysterious temples. Collect treasures and avoid obstacles.",
        category: "adventure",
        thumbnail: "https://img.poki.com/thumbs/130x100/4c60e3b6d94ee37b72c9ff34f6d17c63c6b4e51a_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/temple-run-2",
        tags: ["Adventure", "Running", "Temple"],
        rating: 4.5,
        plays: 78000,
        filename: "temple-run-2.html"
    },
    {
        id: 19,
        title: "Slope",
        description: "Roll the ball down a slope without falling off the edge or hitting obstacles.",
        category: "arcade",
        thumbnail: "https://img.poki.com/thumbs/130x100/b5a1b0d334b9e3e2ad7b9c45a2aefef625dce9c3_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/slope",
        tags: ["Arcade", "Ball", "Skill"],
        rating: 4.6,
        plays: 92000,
        filename: "slope.html"
    },
    {
        id: 20,
        title: "Paper.io 2",
        description: "Capture territory by drawing lines and avoid other players in this io game.",
        category: "arcade",
        thumbnail: "https://img.poki.com/thumbs/130x100/78f6baf6da5e8c7f26ce35ba39c0448c89c82e44_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/paper-io-2",
        tags: ["Arcade", "IO", "Territory"],
        rating: 4.4,
        plays: 67000,
        filename: "paper-io-2.html"
    },
    {
        id: 21,
        title: "Fireboy and Watergirl",
        description: "Help Fireboy and Watergirl collect gems and reach their doors in this puzzle platformer.",
        category: "puzzle",
        thumbnail: "https://img.poki.com/thumbs/130x100/89d4c6c3fe77d87d5da99c7a12ad6d22e5b1c857_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/fireboy-and-watergirl-the-forest-temple",
        tags: ["Puzzle", "Platform", "Cooperation"],
        rating: 4.7,
        plays: 123000,
        filename: "fireboy-watergirl.html"
    },
    {
        id: 22,
        title: "Cut the Rope",
        description: "Feed candy to Om Nom by cutting ropes in the right order in this physics puzzle game.",
        category: "puzzle",
        thumbnail: "https://img.poki.com/thumbs/130x100/35a8c41e2e34f2e7f7b9b5a8c94bb42d8b2e4e5a_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/cut-the-rope",
        tags: ["Puzzle", "Physics", "Candy"],
        rating: 4.5,
        plays: 54000,
        filename: "cut-the-rope.html"
    },
    {
        id: 23,
        title: "Angry Birds",
        description: "Use a slingshot to launch birds and destroy the green pigs' structures.",
        category: "arcade",
        thumbnail: "https://img.poki.com/thumbs/130x100/45c7b2e6f9d4c1a8b5e3f2d7c6a8b4e9f1c2d3e4_poster_144.jpg",
        embedUrl: "https://poki.com/en/g/angry-birds-classic",
        tags: ["Arcade", "Physics", "Birds"],
        rating: 4.8,
        plays: 187000,
        filename: "angry-birds.html"
    },
    {
        id: 24,
        title: "2048",
        description: "Slide numbered tiles to combine them and reach the 2048 tile in this addictive puzzle game.",
        category: "puzzle",
        thumbnail: "https://img.poki.com/thumbs/130x100/2048-game-thumbnail.jpg",
        embedUrl: "https://poki.com/en/g/2048",
        tags: ["Puzzle", "Numbers", "Strategy"],
        rating: 4.3,
        plays: 76000,
        filename: "2048.html"
    },
    {
        id: 25,
        title: "Stick War Legacy",
        description: "Control an army of stick figures in this strategy war game.",
        category: "action",
        thumbnail: "https://img.poki.com/thumbs/130x100/stick-war-legacy-thumb.jpg",
        embedUrl: "https://poki.com/en/g/stick-war-legacy",
        tags: ["Action", "Strategy", "War"],
        rating: 4.6,
        plays: 43000,
        filename: "stick-war-legacy.html"
    }
];

// Merge all game data
gamesDatabase.push(...additionalGames); 