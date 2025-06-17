#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GameHub Game Page Generator
Generates individual SEO-optimized game pages with iframe embedding
"""

import os
import json
from datetime import datetime

class GamePageGenerator:
    def __init__(self):
        self.games_data = [
            {
                "id": 1,
                "title": "2048",
                "slug": "2048",
                "category": "puzzle",
                "thumbnail": "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://play2048.co/",
                "rating": 4.5,
                "plays": 125000,
                "description": "Classic number puzzle game. Slide numbered tiles to combine them and reach the 2048 tile.",
                "long_description": "2048 is a single-player sliding block puzzle game. The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048. However, one can continue to play the game after reaching the goal, creating tiles with larger numbers.",
                "instructions": "Use arrow keys or swipe to move tiles. When two tiles with the same number touch, they merge into one!",
                "controls": ["Arrow Keys: Move tiles", "WASD: Alternative movement", "Mouse/Touch: Swipe to move"],
                "tips": ["Plan your moves ahead", "Keep the highest number in a corner", "Don't fill up the board too quickly"],
                "tags": ["numbers", "puzzle", "classic", "math"],
                "meta_keywords": "2048 game, number puzzle, sliding puzzle, free online game, browser game"
            },
            {
                "id": 2,
                "title": "Tetris",
                "slug": "tetris",
                "category": "arcade",
                "thumbnail": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://tetris.com/play-tetris",
                "rating": 4.8,
                "plays": 89000,
                "description": "The legendary falling blocks puzzle game. Arrange blocks to complete lines and score points.",
                "long_description": "Tetris is a tile-matching puzzle video game originally designed and programmed by Russian game designer Alexey Pajitnov. The goal is to place the falling tetrominoes to form complete horizontal lines, which then disappear.",
                "instructions": "Use arrow keys to move and rotate falling pieces. Complete horizontal lines to clear them!",
                "controls": ["Arrow Keys: Move and rotate pieces", "Down Arrow: Drop faster", "Up Arrow: Rotate piece"],
                "tips": ["Keep the playing field as low as possible", "Learn the different piece shapes", "Plan where pieces will fit"],
                "tags": ["blocks", "classic", "arcade", "russian"],
                "meta_keywords": "tetris game, falling blocks, puzzle game, arcade game, classic games"
            },
            {
                "id": 3,
                "title": "Snake Game",
                "slug": "snake",
                "category": "arcade",
                "thumbnail": "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://playsnake.org/",
                "rating": 4.3,
                "plays": 67000,
                "description": "Classic snake game. Control the snake to eat food and grow longer without hitting walls or yourself.",
                "long_description": "The Snake game is a classic arcade game where the player maneuvers a line which grows in length, with the line itself being a primary obstacle.",
                "instructions": "Use arrow keys to control the snake. Eat food to grow longer but don't hit the walls or your tail!",
                "controls": ["Arrow Keys: Control snake direction", "WASD: Alternative controls"],
                "tips": ["Plan your path carefully", "Use the edges to your advantage", "Don't get trapped by your own tail"],
                "tags": ["snake", "classic", "retro", "simple"],
                "meta_keywords": "snake game, classic arcade, retro games, online snake, browser games"
            },
            {
                "id": 4,
                "title": "Pac-Man",
                "slug": "pacman",
                "category": "arcade",
                "thumbnail": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://www.google.com/doodles/30th-anniversary-of-pac-man",
                "rating": 4.7,
                "plays": 156000,
                "description": "The iconic arcade game. Guide Pac-Man through the maze, eat dots and avoid the ghosts.",
                "long_description": "Pac-Man is a maze action video game developed and released by Namco for arcades in 1980. The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts.",
                "instructions": "Use arrow keys to move Pac-Man. Eat all dots while avoiding the colored ghosts. Eat power pellets to turn the tables!",
                "controls": ["Arrow Keys: Move Pac-Man", "Direction changes: Navigate maze"],
                "tips": ["Learn the ghost patterns", "Use power pellets strategically", "Plan your route through the maze"],
                "tags": ["pacman", "arcade", "classic", "maze"],
                "meta_keywords": "pac-man game, arcade classic, maze game, retro gaming, pacman online"
            },
            {
                "id": 5,
                "title": "Flappy Bird",
                "slug": "flappy-bird",
                "category": "arcade",
                "thumbnail": "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://flappybird.io/",
                "rating": 4.2,
                "plays": 92000,
                "description": "Simple but challenging game. Tap to make the bird fly and navigate through pipes.",
                "long_description": "Flappy Bird is a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen. The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.",
                "instructions": "Click or tap to make the bird flap its wings. Navigate through the pipes without touching them!",
                "controls": ["Click/Tap: Flap wings", "Spacebar: Alternative flap control"],
                "tips": ["Maintain steady rhythm", "Don't over-tap", "Focus on the gaps between pipes"],
                "tags": ["bird", "flying", "challenging", "mobile"],
                "meta_keywords": "flappy bird game, flying game, endless runner, mobile game, challenging game"
            },
            {
                "id": 6,
                "title": "Chrome Dino",
                "slug": "chrome-dino",
                "category": "arcade",
                "thumbnail": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&sat=-100",
                "iframe_url": "https://chromedino.com/",
                "rating": 4.4,
                "plays": 78000,
                "description": "The famous Chrome browser offline game. Jump over cacti and pterodactyls in this endless runner.",
                "long_description": "The Chrome Dino game (also known as T-Rex game) is a browser game developed by Google and built into the Google Chrome web browser. The player guides a pixelated Tyrannosaurus rex across a side-scrolling landscape, avoiding obstacles to achieve a higher score.",
                "instructions": "Press spacebar or tap to jump over obstacles. The game gets faster as you progress!",
                "controls": ["Spacebar: Jump", "Up Arrow: Jump", "Down Arrow: Duck (at higher speeds)"],
                "tips": ["Watch for pterodactyls at higher speeds", "Time your jumps carefully", "The game speeds up as you progress"],
                "tags": ["dinosaur", "runner", "chrome", "offline"],
                "meta_keywords": "chrome dino game, t-rex game, endless runner, google game, browser game"
            },
            {
                "id": 7,
                "title": "Bubble Shooter",
                "slug": "bubble-shooter",
                "category": "puzzle",
                "thumbnail": "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://bubbleshooter.net/",
                "rating": 4.1,
                "plays": 43000,
                "description": "Match three or more bubbles of the same color to pop them. Clear the board to win!",
                "long_description": "Bubble Shooter is a puzzle game where the player shoots bubbles with a bubble cannon. The goal is to clear the playing field by forming groups of three or more like-colored bubbles.",
                "instructions": "Aim and shoot bubbles to match 3 or more of the same color. Clear all bubbles to complete the level!",
                "controls": ["Mouse: Aim and shoot", "Click: Fire bubble"],
                "tips": ["Aim for the largest groups", "Use bank shots off walls", "Plan several moves ahead"],
                "tags": ["bubbles", "match", "shooter", "colorful"],
                "meta_keywords": "bubble shooter game, puzzle game, match 3, bubble pop, online puzzle"
            },
            {
                "id": 8,
                "title": "Solitaire",
                "slug": "solitaire",
                "category": "puzzle",
                "thumbnail": "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&auto=format&hue=120",
                "iframe_url": "https://solitaired.com/",
                "rating": 4.6,
                "plays": 134000,
                "description": "Classic card game. Move all cards to the foundation piles in the correct order.",
                "long_description": "Solitaire, also known as Klondike Solitaire, is a patience card game. The goal is to build four foundation piles, one for each suit, in ascending order from Ace to King.",
                "instructions": "Drag cards to build sequences. Move cards to foundation piles starting with Ace and ending with King!",
                "controls": ["Mouse: Click and drag cards", "Double-click: Auto-move to foundation"],
                "tips": ["Expose hidden cards first", "Build on foundations when possible", "Don't move cards to foundations too quickly"],
                "tags": ["cards", "solitaire", "classic", "strategy"],
                "meta_keywords": "solitaire card game, klondike solitaire, patience game, card games online"
            },
            {
                "id": 9,
                "title": "Chess",
                "slug": "chess",
                "category": "puzzle",
                "thumbnail": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://lichess.org/",
                "rating": 4.8,
                "plays": 98000,
                "description": "The royal game of chess. Play against AI or other players in this strategic board game.",
                "long_description": "Chess is a strategic board game played on a checkered board with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide.",
                "instructions": "Click to select and move pieces. Capture the opponent's king to win. Think strategically!",
                "controls": ["Mouse: Click to select and move pieces", "Drag: Alternative piece movement"],
                "tips": ["Control the center", "Develop pieces early", "Protect your king"],
                "tags": ["chess", "strategy", "board", "classic"],
                "meta_keywords": "chess game online, chess strategy, board game, chess vs computer, online chess"
            },
            {
                "id": 10,
                "title": "Crossword",
                "slug": "crossword",
                "category": "puzzle",
                "thumbnail": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
                "iframe_url": "https://www.dailycrosswordpuzzles.com/",
                "rating": 4.3,
                "plays": 27000,
                "description": "Daily crossword puzzles to test your vocabulary and general knowledge.",
                "long_description": "A crossword is a word puzzle that usually takes the form of a square or rectangular grid of white- and black-shaded squares. The goal is to fill the white squares with letters, forming words or phrases, by solving clues.",
                "instructions": "Click on a clue to highlight the corresponding word. Type to fill in the letters!",
                "controls": ["Mouse: Click on clues and squares", "Keyboard: Type letters"],
                "tips": ["Start with easier clues", "Look for common letter patterns", "Use crossing words for hints"],
                "tags": ["crossword", "words", "vocabulary", "daily"],
                "meta_keywords": "crossword puzzle, word game, vocabulary game, daily puzzle, brain teaser"
            }
        ]
    
    def get_game_template(self):
        """Return the HTML template for individual game pages"""
        return '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Play Free Online | GameHub</title>
    <meta name="description" content="{description} Play {title} online for free. No downloads required!">
    <meta name="keywords" content="{meta_keywords}">
    <meta name="author" content="GameHub">
    <meta property="og:title" content="{title} - Free Online Game">
    <meta property="og:description" content="{description}">
    <meta property="og:type" content="game">
    <meta property="og:url" content="https://gamehub.help/games/{slug}.html">
    <meta property="og:image" content="{thumbnail}">
    <meta name="twitter:card" content="summary_large_image">
    
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "Game",
        "name": "{title}",
        "description": "{long_description}",
        "genre": "{category}",
        "url": "https://gamehub.help/games/{slug}.html",
        "image": "{thumbnail}",
        "aggregateRating": {{
            "@type": "AggregateRating",
            "ratingValue": "{rating}",
            "ratingCount": "{plays}"
        }},
        "offers": {{
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }}
    }}
    </script>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .game-frame {{
            width: 100%;
            height: 600px;
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }}
        @media (max-width: 768px) {{
            .game-frame {{
                height: 450px;
            }}
        }}
        .hero-gradient {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }}
    </style>
</head>

<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center">
                        <i class="fas fa-gamepad text-white text-xl"></i>
                    </div>
                    <div>
                        <a href="../index.html" class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">GameHub</a>
                        <p class="text-xs text-gray-500">Free Online Games</p>
                    </div>
                </div>
                
                <div class="flex items-center space-x-4">
                    <a href="../index.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        <i class="fas fa-home mr-2"></i>All Games
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Game Header -->
    <section class="hero-gradient text-white py-8">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p class="text-xl mb-6 opacity-90">{description}</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                        <i class="fas fa-star mr-2"></i>Rating: {rating}/5
                    </span>
                    <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                        <i class="fas fa-play mr-2"></i>{plays:,} plays
                    </span>
                    <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                        <i class="fas fa-tag mr-2"></i>{category_display}
                    </span>
                </div>
            </div>
        </div>
    </section>

    <!-- Game Content -->
    <main class="max-w-7xl mx-auto px-4 py-8">
        <!-- Game Player -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div class="bg-gray-800 text-white p-4">
                <h2 class="text-xl font-bold">
                    <i class="fas fa-gamepad mr-2"></i>Play {title} Online - Free & Instant
                </h2>
            </div>
            <div class="p-6">
                <div class="bg-gray-100 rounded-lg p-4 mb-6">
                    <iframe src="{iframe_url}" 
                            class="game-frame"
                            allowfullscreen
                            title="{title} Game"
                            loading="lazy">
                        <p>Your browser does not support iframes. Please <a href="{iframe_url}" target="_blank">click here to play {title}</a>.</p>
                    </iframe>
                </div>
                
                <!-- Game Controls & Tips -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-blue-50 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-blue-800 mb-3">
                            <i class="fas fa-keyboard mr-2"></i>Game Controls
                        </h3>
                        <ul class="text-blue-700 space-y-2">
                            {controls_html}
                        </ul>
                    </div>
                    
                    <div class="bg-green-50 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-green-800 mb-3">
                            <i class="fas fa-lightbulb mr-2"></i>Tips & Strategy
                        </h3>
                        <ul class="text-green-700 space-y-2">
                            {tips_html}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Game Information -->
        <div class="grid md:grid-cols-3 gap-8 mb-8">
            <!-- Game Description -->
            <div class="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">About {title}</h2>
                <div class="text-gray-600 space-y-4">
                    <p>{long_description}</p>
                    <p><strong>How to Play:</strong> {instructions}</p>
                </div>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-4">Why Play {title} Online?</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        <span class="text-sm">Completely Free</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        <span class="text-sm">No Download Required</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        <span class="text-sm">Mobile Friendly</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        <span class="text-sm">Instant Access</span>
                    </div>
                </div>
            </div>
            
            <!-- Game Stats & Tags -->
            <div class="space-y-6">
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Game Statistics</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Rating:</span>
                            <span class="font-semibold">{rating}/5 ⭐</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Total Plays:</span>
                            <span class="font-semibold">{plays:,}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Category:</span>
                            <span class="font-semibold">{category_display}</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Game Tags</h3>
                    <div class="flex flex-wrap gap-2">
                        {tags_html}
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Games -->
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">More {category_display} Games</h2>
            <div class="text-center">
                <a href="../index.html#{category}" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                    <i class="fas fa-gamepad mr-2"></i>Explore All {category_display} Games
                </a>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12 mt-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-3 mb-4">
                <div class="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center">
                    <i class="fas fa-gamepad text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold">GameHub</h3>
            </div>
            <p class="text-gray-400 mb-4">Your destination for free online games. Play instantly without downloads!</p>
            <div class="flex justify-center space-x-6 mb-4">
                <a href="../index.html" class="text-gray-400 hover:text-white transition">Home</a>
                <a href="../index.html#puzzle" class="text-gray-400 hover:text-white transition">Puzzle Games</a>
                <a href="../index.html#arcade" class="text-gray-400 hover:text-white transition">Arcade Games</a>
            </div>
            <p class="text-sm text-gray-500">© 2025 GameHub. All rights reserved. Play {title} and more games free online!</p>
        </div>
    </footer>
</body>
</html>'''
    
    def generate_game_page(self, game):
        """Generate HTML page for a single game"""
        template = self.get_game_template()
        
        # Format controls
        controls_html = '\n'.join([f'<li>• {control}</li>' for control in game['controls']])
        
        # Format tips
        tips_html = '\n'.join([f'<li>• {tip}</li>' for tip in game['tips']])
        
        # Format tags
        tags_html = '\n'.join([f'<span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{tag}</span>' for tag in game['tags']])
        
        # Category display name
        category_display = game['category'].title()
        
        html_content = template.format(
            title=game['title'],
            slug=game['slug'],
            description=game['description'],
            long_description=game['long_description'],
            instructions=game['instructions'],
            category=game['category'],
            category_display=category_display,
            thumbnail=game['thumbnail'],
            iframe_url=game['iframe_url'],
            rating=game['rating'],
            plays=game['plays'],
            meta_keywords=game['meta_keywords'],
            controls_html=controls_html,
            tips_html=tips_html,
            tags_html=tags_html
        )
        
        return html_content
    
    def generate_all_pages(self):
        """Generate all game pages"""
        # Create games directory
        os.makedirs('games', exist_ok=True)
        
        print("🎮 Generating SEO-optimized game pages with iframe embedding...")
        print("=" * 60)
        
        for game in self.games_data:
            html_content = self.generate_game_page(game)
            
            file_path = os.path.join('games', f"{game['slug']}.html")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(html_content)
            
            print(f"✅ Generated: {game['slug']}.html")
        
        print(f"\n🎉 Successfully generated {len(self.games_data)} game pages!")
        print("📁 All pages saved in the 'games/' directory")
        
        # Generate sitemap
        self.generate_sitemap()
        
        return len(self.games_data)
    
    def generate_sitemap(self):
        """Generate sitemap.xml for SEO"""
        sitemap_content = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://gamehub.help/</loc>
        <lastmod>{date}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
'''.format(date=datetime.now().strftime('%Y-%m-%d'))
        
        for game in self.games_data:
            sitemap_content += f'''    <url>
        <loc>https://gamehub.help/games/{game['slug']}.html</loc>
        <lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
'''
        
        sitemap_content += '</urlset>'
        
        with open('sitemap.xml', 'w', encoding='utf-8') as f:
            f.write(sitemap_content)
        
        print("✅ Generated: sitemap.xml for SEO")

def main():
    """Main function"""
    generator = GamePageGenerator()
    
    print("🎮 GameHub Game Page Generator")
    print("=" * 50)
    print("📋 Features:")
    print("   • SEO-optimized individual game pages")
    print("   • iframe embedding for seamless gameplay")
    print("   • Rich snippets and schema.org markup")
    print("   • Mobile-responsive design")
    print("   • Comprehensive game information")
    print("   • Detailed controls and tips")
    print("")
    
    pages_generated = generator.generate_all_pages()
    
    print(f"\n📊 Summary:")
    print(f"   • {pages_generated} game pages generated")
    print(f"   • All pages include iframe embedding")
    print(f"   • SEO metadata and schema markup added")
    print(f"   • Sitemap.xml created for search engines")
    print(f"   • Mobile-responsive design implemented")
    print(f"\n🚀 Ready for deployment!")

if __name__ == "__main__":
    main() 