import os
import json
from datetime import datetime

class GamePageGenerator:
    def __init__(self):
        self.template_file = "templates/game-template.html"
        self.output_dir = "games"
        self.games_data = [
            {
                "id": 1,
                "title": "Highway Traffic",
                "description": "Drive through busy highways, avoid other vehicles, and travel as far as possible to achieve high scores. This is an exciting game that tests your reaction speed and driving skills.",
                "category": "Racing",
                "category_en": "racing",
                "embed_url": "https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html",
                "tags": ["Racing", "Driving", "Arcade", "Skills"],
                "rating": 4.5,
                "plays": 12500,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Use arrow keys or WASD to control car movement</li>
                    <li>Avoid other vehicles and obstacles</li>
                    <li>Travel as far as possible to get high scores</li>
                    <li>Collect power-ups for extra points</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Game Tips:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Stay calm and don't change lanes hastily</li>
                    <li>Observe traffic patterns and find the best timing</li>
                    <li>Use power-ups wisely to enhance gameplay</li>
                </ul>
                """,
                "filename": "highway-traffic.html"
            },
            {
                "id": 2,
                "title": "GTA Simulator",
                "description": "Open-world crime simulation game where you experience free city life and exciting missions. In this virtual city, you can drive various vehicles and complete different tasks.",
                "category": "Action",
                "category_en": "action",
                "embed_url": "https://www.onlinegames.io/games/2023/unity/gta-simulator/index.html",
                "tags": ["Action", "Open World", "Simulation", "Adventure"],
                "rating": 4.7,
                "plays": 25000,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>WASD to control character movement</li>
                    <li>Mouse to control camera view</li>
                    <li>Spacebar to jump</li>
                    <li>F key to interact with objects</li>
                    <li>E key to enter vehicles</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Game Features:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Open-world city environment</li>
                    <li>Diverse vehicle system</li>
                    <li>Rich mission content</li>
                    <li>Realistic physics engine</li>
                </ul>
                """,
                "filename": "gta-simulator.html"
            },
            {
                "id": 3,
                "title": "Drift Hunters Pro",
                "description": "Professional drift racing game. Master drifting techniques and showcase your driving skills on various tracks. Upgrade your vehicles and become the drift king.",
                "category": "Racing",
                "category_en": "racing",
                "embed_url": "https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html",
                "tags": ["Racing", "Drifting", "Skills", "Competition"],
                "rating": 4.6,
                "plays": 18700,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Arrow keys or WASD to control vehicle</li>
                    <li>Spacebar for handbrake drift</li>
                    <li>Shift key to accelerate</li>
                    <li>C key to change camera view</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Drifting Tips:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Slow down appropriately before turns</li>
                    <li>Use handbrake wisely to control the car</li>
                    <li>Maintain drift angle for higher scores</li>
                    <li>Practice optimal routes on different tracks</li>
                </ul>
                """,
                "filename": "drift-hunters.html"
            },
            {
                "id": 4,
                "title": "Stickman Destruction",
                "description": "Control stickman characters in various destructive experiments and enjoy physics engine fun. Watch funny stickman destruction in different scenarios.",
                "category": "Arcade",
                "category_en": "arcade",
                "embed_url": "https://www.onlinegames.io/games/2022/unity/stickman-destruction/index.html",
                "tags": ["Arcade", "Physics", "Destruction", "Fun"],
                "rating": 4.3,
                "plays": 15600,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Click screen to start destruction scenes</li>
                    <li>Choose different props and vehicles</li>
                    <li>Observe stickman physics reactions</li>
                    <li>Try different combinations for higher scores</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Game Features:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Realistic physics engine</li>
                    <li>Multiple destruction scenarios</li>
                    <li>Rich prop selection</li>
                    <li>Funny animation effects</li>
                </ul>
                """,
                "filename": "stickman-destruction.html"
            },
            {
                "id": 5,
                "title": "Masked Forces",
                "description": "First-person shooter game. Use various weapons to fight enemies and complete dangerous combat missions. Experience intense and exciting battle scenes.",
                "category": "Shooting",
                "category_en": "shooting",
                "embed_url": "https://www.onlinegames.io/games/2022/unity/masked-forces/index.html",
                "tags": ["Shooting", "FPS", "Combat", "Military"],
                "rating": 4.4,
                "plays": 22100,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>WASD keys to move character</li>
                    <li>Mouse to aim</li>
                    <li>Left click to shoot</li>
                    <li>Right click for scope</li>
                    <li>R key to reload</li>
                    <li>Spacebar to jump</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Combat Tips:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Use cover to protect yourself</li>
                    <li>Choose weapon types wisely</li>
                    <li>Pay attention to ammo management</li>
                    <li>Check minimap for enemy locations</li>
                </ul>
                """,
                "filename": "masked-forces.html"
            },
            # Additional popular games
            {
                "id": 16,
                "title": "Among Us",
                "description": "Social deduction game where crewmates must find the impostor among them. Work together to complete tasks while identifying the hidden impostor.",
                "category": "Arcade",
                "category_en": "arcade",
                "embed_url": "https://poki.com/en/g/among-us",
                "tags": ["Arcade", "Social", "Mystery", "Multiplayer"],
                "rating": 4.8,
                "plays": 89000,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>WASD or Arrow keys to move</li>
                    <li>Mouse to interact with tasks</li>
                    <li>Space or click to use/interact</li>
                    <li>R key to report dead bodies</li>
                    <li>Tab to access map</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Gameplay Tips:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Complete tasks quickly to help crewmates</li>
                    <li>Watch other players' behavior carefully</li>
                    <li>Report suspicious activities immediately</li>
                    <li>Use emergency meetings wisely</li>
                </ul>
                """,
                "filename": "among-us.html"
            },
            {
                "id": 17,
                "title": "Subway Surfers",
                "description": "Endless running game. Run as far as you can in this colorful adventure while avoiding trains and collecting coins.",
                "category": "Arcade",
                "category_en": "arcade",
                "embed_url": "https://poki.com/en/g/subway-surfers",
                "tags": ["Arcade", "Running", "Endless", "Adventure"],
                "rating": 4.7,
                "plays": 156000,
                "instructions": """
                <h4 class="font-semibold mb-2">Game Controls:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Arrow keys or WASD to move</li>
                    <li>Up arrow to jump</li>
                    <li>Down arrow to slide</li>
                    <li>Left/Right arrows to switch lanes</li>
                    <li>Space bar for hoverboard</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Game Tips:</h4>
                <ul class="list-disc list-inside space-y-1">
                    <li>Collect coins to unlock characters</li>
                    <li>Use power-ups strategically</li>
                    <li>Watch for trains and obstacles</li>
                    <li>Complete daily challenges for rewards</li>
                </ul>
                """,
                "filename": "subway-surfers.html"
            }
        ]

    def load_template(self):
        """Load HTML template"""
        try:
            with open(self.template_file, 'r', encoding='utf-8') as f:
                return f.read()
        except FileNotFoundError:
            print(f"Template file {self.template_file} not found!")
            return None

    def generate_tags_html(self, tags):
        """Generate tags HTML"""
        return ''.join([f'<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1">{tag}</span>' for tag in tags])

    def format_plays(self, plays):
        """Format play count"""
        if plays >= 1000:
            return f"{plays/1000:.1f}K"
        return str(plays)

    def generate_game_page(self, game_data):
        """Generate HTML page for single game"""
        template = self.load_template()
        if not template:
            return False

        # Replace placeholders in template
        replacements = {
            '{{GAME_ID}}': str(game_data['id']),
            '{{GAME_TITLE}}': game_data['title'],
            '{{GAME_DESCRIPTION}}': game_data['description'],
            '{{GAME_CATEGORY}}': game_data['category'],
            '{{GAME_CATEGORY_EN}}': game_data['category_en'],
            '{{GAME_EMBED_URL}}': game_data['embed_url'],
            '{{GAME_TAGS}}': ', '.join(game_data['tags']),
            '{{GAME_TAGS_HTML}}': self.generate_tags_html(game_data['tags']),
            '{{GAME_RATING}}': str(game_data['rating']),
            '{{GAME_PLAYS}}': self.format_plays(game_data['plays']),
            '{{GAME_DATE}}': datetime.now().strftime('%Y-%m-%d'),
            '{{GAME_INSTRUCTIONS}}': game_data['instructions']
        }

        html_content = template
        for placeholder, value in replacements.items():
            html_content = html_content.replace(placeholder, value)

        # Save generated HTML file
        try:
            # Ensure output directory exists
            os.makedirs(self.output_dir, exist_ok=True)
            
            output_path = os.path.join(self.output_dir, game_data['filename'])
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(html_content)
            
            print(f"✓ Successfully generated game page: {output_path}")
            return True
            
        except Exception as e:
            print(f"✗ Failed to generate game page {game_data['filename']}: {str(e)}")
            return False

    def generate_all_pages(self):
        """Generate all game pages"""
        print("Starting to generate game pages...")
        
        success_count = 0
        total_count = len(self.games_data)
        
        for game_data in self.games_data:
            if self.generate_game_page(game_data):
                success_count += 1
        
        print(f"\nGeneration completed! Success: {success_count}/{total_count}")
        
        if success_count < total_count:
            print("Some pages failed to generate, please check error messages.")
        else:
            print("All game pages generated successfully!")

    def create_sitemap(self):
        """Generate sitemap"""
        sitemap_content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourdomain.com/</loc>
        <lastmod>{}</lastmod>
        <priority>1.0</priority>
    </url>
""".format(datetime.now().strftime('%Y-%m-%d'))

        for game_data in self.games_data:
            sitemap_content += f"""    <url>
        <loc>https://yourdomain.com/games/{game_data['filename']}</loc>
        <lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod>
        <priority>0.8</priority>
    </url>
"""

        sitemap_content += "</urlset>"

        try:
            with open('sitemap.xml', 'w', encoding='utf-8') as f:
                f.write(sitemap_content)
            print("✓ Sitemap generated successfully: sitemap.xml")
        except Exception as e:
            print(f"✗ Failed to generate sitemap: {str(e)}")

    def generate_robots_txt(self):
        """Generate robots.txt file"""
        robots_content = """User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
"""
        try:
            with open('robots.txt', 'w', encoding='utf-8') as f:
                f.write(robots_content)
            print("✓ robots.txt generated successfully")
        except Exception as e:
            print(f"✗ Failed to generate robots.txt: {str(e)}")

def main():
    """Main function"""
    generator = GamePageGenerator()
    
    print("GameHub Game Page Generator")
    print("=" * 40)
    
    # Generate all game pages
    generator.generate_all_pages()
    
    # Generate SEO files
    print("\nGenerating SEO files...")
    generator.create_sitemap()
    generator.generate_robots_txt()
    
    print("\nAll tasks completed!")
    print("\nUsage Instructions:")
    print("1. Open index.html in browser to view homepage")
    print("2. Click game cards to preview in modal")
    print("3. Click 'Open Game Page' to view individual game pages")
    print("4. Update domain: Replace yourdomain.com in sitemap.xml and robots.txt with your actual domain")

if __name__ == "__main__":
    main() 