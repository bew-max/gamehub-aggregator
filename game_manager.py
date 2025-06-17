#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GameHub 游戏管理系统
用于管理真实可用的在线游戏
支持未来功能扩展：用户评论、收藏、游戏更新等
"""

import json
import os
from datetime import datetime
from typing import List, Dict, Optional

class GameManager:
    """游戏管理器 - 负责游戏数据的增删改查"""
    
    def __init__(self, data_file: str = "games_database.json"):
        self.data_file = data_file
        self.games = self.load_games()
    
    def load_games(self) -> List[Dict]:
        """从JSON文件加载游戏数据"""
        if os.path.exists(self.data_file):
            try:
                with open(self.data_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except (json.JSONDecodeError, FileNotFoundError):
                pass
        
        # 如果文件不存在或损坏，返回默认游戏列表
        return self.get_default_games()
    
    def save_games(self) -> bool:
        """保存游戏数据到JSON文件"""
        try:
            with open(self.data_file, 'w', encoding='utf-8') as f:
                json.dump(self.games, f, ensure_ascii=False, indent=2)
            return True
        except Exception as e:
            print(f"保存游戏数据失败: {e}")
            return False
    
    def get_default_games(self) -> List[Dict]:
        """获取默认的真实可用游戏列表"""
        return [
            {
                "id": 1,
                "title": "2048",
                "category": "puzzle",
                "thumbnail": "https://play2048.co/images/logo.png",
                "url": "https://play2048.co/",
                "rating": 4.5,
                "plays": 125000,
                "description": "经典数字益智游戏，滑动合并数字瓷砖达到2048",
                "tags": ["数字", "益智", "经典"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 2,
                "title": "俄罗斯方块",
                "category": "arcade",
                "thumbnail": "https://tetris.com/images/tetris-logo.png",
                "url": "https://tetris.com/play-tetris",
                "rating": 4.8,
                "plays": 89000,
                "description": "经典俄罗斯方块游戏，排列方块消除行",
                "tags": ["方块", "经典", "街机"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 3,
                "title": "贪吃蛇",
                "category": "arcade",
                "thumbnail": "https://via.placeholder.com/300x200/4CAF50/ffffff?text=Snake",
                "url": "https://playsnake.org/",
                "rating": 4.3,
                "plays": 67000,
                "description": "经典贪吃蛇游戏，控制蛇吃食物成长",
                "tags": ["经典", "休闲", "简单"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 4,
                "title": "吃豆人",
                "category": "arcade",
                "thumbnail": "https://via.placeholder.com/300x200/FFD700/000000?text=Pac-Man",
                "url": "https://www.google.com/doodles/30th-anniversary-of-pac-man",
                "rating": 4.7,
                "plays": 156000,
                "description": "经典吃豆人游戏，避开幽灵收集豆子",
                "tags": ["经典", "街机", "冒险"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 5,
                "title": "Flappy Bird",
                "category": "arcade",
                "thumbnail": "https://via.placeholder.com/300x200/87CEEB/ffffff?text=Flappy+Bird",
                "url": "https://flappybird.io/",
                "rating": 4.2,
                "plays": 92000,
                "description": "点击控制小鸟飞行，避开管道障碍",
                "tags": ["休闲", "简单", "挑战"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 6,
                "title": "Chrome恐龙",
                "category": "arcade",
                "thumbnail": "https://via.placeholder.com/300x200/757575/ffffff?text=Chrome+Dino",
                "url": "https://chromedino.com/",
                "rating": 4.4,
                "plays": 78000,
                "description": "Chrome浏览器离线恐龙游戏，跳跃避开仙人掌",
                "tags": ["休闲", "简单", "无尽"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 7,
                "title": "泡泡射手",
                "category": "puzzle",
                "thumbnail": "https://via.placeholder.com/300x200/FF6B6B/ffffff?text=Bubble+Shooter",
                "url": "https://bubbleshooter.net/",
                "rating": 4.1,
                "plays": 43000,
                "description": "射击相同颜色的泡泡进行消除",
                "tags": ["泡泡", "射击", "消除"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 8,
                "title": "纸牌接龙",
                "category": "puzzle",
                "thumbnail": "https://via.placeholder.com/300x200/228B22/ffffff?text=Solitaire",
                "url": "https://solitaired.com/",
                "rating": 4.6,
                "plays": 134000,
                "description": "经典纸牌接龙游戏，整理卡牌到目标位置",
                "tags": ["纸牌", "策略", "经典"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 9,
                "title": "国际象棋",
                "category": "puzzle",
                "thumbnail": "https://via.placeholder.com/300x200/8B4513/ffffff?text=Chess",
                "url": "https://lichess.org/",
                "rating": 4.8,
                "plays": 98000,
                "description": "在线国际象棋，与AI或其他玩家对战",
                "tags": ["象棋", "策略", "智力"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            },
            {
                "id": 10,
                "title": "填字游戏",
                "category": "puzzle",
                "thumbnail": "https://via.placeholder.com/300x200/4169E1/ffffff?text=Crossword",
                "url": "https://www.dailycrosswordpuzzles.com/",
                "rating": 4.3,
                "plays": 27000,
                "description": "每日填字游戏，挑战您的词汇量",
                "tags": ["文字", "词汇", "智力"],
                "status": "active",
                "verified": True,
                "created_at": "2025-01-01",
                "updated_at": "2025-01-01"
            }
        ]
    
    def add_game(self, game_data: Dict) -> bool:
        """添加新游戏"""
        # 自动分配ID
        max_id = max([game.get('id', 0) for game in self.games], default=0)
        game_data['id'] = max_id + 1
        
        # 设置默认值
        game_data.setdefault('status', 'active')
        game_data.setdefault('verified', False)
        game_data.setdefault('created_at', datetime.now().isoformat())
        game_data.setdefault('updated_at', datetime.now().isoformat())
        game_data.setdefault('plays', 0)
        game_data.setdefault('rating', 0.0)
        game_data.setdefault('tags', [])
        
        self.games.append(game_data)
        return self.save_games()
    
    def update_game(self, game_id: int, updates: Dict) -> bool:
        """更新游戏信息"""
        for game in self.games:
            if game['id'] == game_id:
                game.update(updates)
                game['updated_at'] = datetime.now().isoformat()
                return self.save_games()
        return False
    
    def delete_game(self, game_id: int) -> bool:
        """删除游戏（软删除）"""
        return self.update_game(game_id, {'status': 'deleted'})
    
    def get_game(self, game_id: int) -> Optional[Dict]:
        """获取单个游戏"""
        for game in self.games:
            if game['id'] == game_id and game.get('status') != 'deleted':
                return game
        return None
    
    def get_games_by_category(self, category: str) -> List[Dict]:
        """按分类获取游戏"""
        return [game for game in self.games 
                if game.get('category') == category and game.get('status') == 'active']
    
    def search_games(self, query: str) -> List[Dict]:
        """搜索游戏"""
        query = query.lower()
        results = []
        
        for game in self.games:
            if game.get('status') != 'active':
                continue
                
            # 搜索标题、描述、标签
            if (query in game.get('title', '').lower() or 
                query in game.get('description', '').lower() or
                any(query in tag.lower() for tag in game.get('tags', []))):
                results.append(game)
        
        return results
    
    def get_popular_games(self, limit: int = 10) -> List[Dict]:
        """获取热门游戏"""
        active_games = [game for game in self.games if game.get('status') == 'active']
        return sorted(active_games, key=lambda x: x.get('plays', 0), reverse=True)[:limit]
    
    def get_top_rated_games(self, limit: int = 10) -> List[Dict]:
        """获取高评分游戏"""
        active_games = [game for game in self.games if game.get('status') == 'active']
        return sorted(active_games, key=lambda x: x.get('rating', 0), reverse=True)[:limit]
    
    def verify_game(self, game_id: int) -> bool:
        """验证游戏可用性"""
        # 这里可以添加实际的URL检查逻辑
        return self.update_game(game_id, {'verified': True})
    
    def get_statistics(self) -> Dict:
        """获取平台统计信息"""
        active_games = [game for game in self.games if game.get('status') == 'active']
        
        return {
            'total_games': len(active_games),
            'total_plays': sum(game.get('plays', 0) for game in active_games),
            'average_rating': sum(game.get('rating', 0) for game in active_games) / len(active_games) if active_games else 0,
            'categories': list(set(game.get('category') for game in active_games)),
            'verified_games': len([game for game in active_games if game.get('verified')])
        }

def main():
    """主函数 - 用于测试和初始化"""
    manager = GameManager()
    
    print("🎮 GameHub 游戏管理系统")
    print("=" * 50)
    
    # 显示统计信息
    stats = manager.get_statistics()
    print(f"📊 平台统计:")
    print(f"   游戏总数: {stats['total_games']}")
    print(f"   总游玩次数: {stats['total_plays']:,}")
    print(f"   平均评分: {stats['average_rating']:.1f}")
    print(f"   游戏分类: {', '.join(stats['categories'])}")
    print(f"   已验证游戏: {stats['verified_games']}")
    
    # 显示热门游戏
    print(f"\n🔥 热门游戏 (前5名):")
    for i, game in enumerate(manager.get_popular_games(5), 1):
        print(f"   {i}. {game['title']} - {game['plays']:,} 次游玩")
    
    # 显示高评分游戏
    print(f"\n⭐ 高评分游戏 (前5名):")
    for i, game in enumerate(manager.get_top_rated_games(5), 1):
        print(f"   {i}. {game['title']} - {game['rating']:.1f}分")
    
    # 保存数据
    if manager.save_games():
        print(f"\n✅ 游戏数据已保存到 {manager.data_file}")
    else:
        print(f"\n❌ 保存失败")

if __name__ == "__main__":
    main() 