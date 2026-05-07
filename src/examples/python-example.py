"""
Exemplo de uso dos dados do Mineiro em Python
Este arquivo demonstra como trabalhar com os dados do Mineiro usando Python
"""

from typing import Dict, List, Optional
from dataclasses import dataclass
from enum import Enum
import json


class Rarity(Enum):
    COMMON = "Common"
    RARE = "Rare"
    EPIC = "Epic"
    LEGENDARY = "Legendary"


class Impact(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


@dataclass
class MinerStats:
    """Estatísticas do Mineiro por nível"""
    level: int
    hitpoints: int
    damage: int
    dps: int
    attack_speed: float
    deploy_time: float
    tunnel_time: float


@dataclass
class NerfUpdate:
    """Representa uma atualização de balanceamento"""
    date: str
    version: str
    changes: List[str]
    impact: Impact
    description: str


class MinerCard:
    """Classe principal do Mineiro do Clash Royale"""
    
    def __init__(self):
        self.name = "Miner"
        self.name_portuguese = "Mineiro"
        self.rarity = Rarity.LEGENDARY
        self.elixir_cost = 3
        self.arena = 6
        self.type = "Troop"
        
        # Estatísticas por nível
        self.stats = {
            14: MinerStats(
                level=14,
                hitpoints=1060,
                damage=160,
                dps=133,
                attack_speed=1.2,
                deploy_time=1.0,
                tunnel_time=1.0
            ),
            13: MinerStats(
                level=13,
                hitpoints=980,
                damage=147,
                dps=122,
                attack_speed=1.2,
                deploy_time=1.0,
                tunnel_time=1.0
            )
        }
    
    def get_stats(self, level: int = 14) -> Optional[MinerStats]:
        """Retorna as estatísticas para um nível específico"""
        return self.stats.get(level)
    
    def calculate_total_damage(self, seconds: float, level: int = 14) -> int:
        """Calcula o dano total em X segundos"""
        stats = self.get_stats(level)
        if not stats:
            return 0
        
        hits = int(seconds / stats.attack_speed)
        return hits * stats.damage
    
    def can_survive(self, incoming_damage: int, level: int = 14) -> bool:
        """Verifica se o mineiro sobrevive a um ataque"""
        stats = self.get_stats(level)
        if not stats:
            return False
        return stats.hitpoints > incoming_damage
    
    def calculate_elixir_trade(self, defense_elixir: int) -> Dict:
        """Calcula o trade de elixir"""
        difference = defense_elixir - self.elixir_cost
        return {
            "positive": difference > 0,
            "difference": abs(difference),
            "message": f"Trade {'positivo' if difference > 0 else 'negativo'} de {'+' if difference > 0 else ''}{difference} elixir"
        }
    
    def get_info(self) -> Dict:
        """Retorna informações formatadas da carta"""
        return {
            "name": self.name,
            "name_pt": self.name_portuguese,
            "cost": f"{self.elixir_cost} elixir",
            "rarity": self.rarity.value,
            "type": self.type,
            "special": "Pode ser implantado em qualquer lugar da Arena"
        }
    
    def to_json(self) -> str:
        """Converte as informações para JSON"""
        return json.dumps(self.get_info(), indent=2, ensure_ascii=False)


class NerfAnalyzer:
    """Analisador de histórico de nerfs"""
    
    def __init__(self):
        self.nerfs: List[NerfUpdate] = []
    
    def add_nerf(self, nerf: NerfUpdate):
        """Adiciona um nerf ao histórico"""
        self.nerfs.append(nerf)
    
    def get_high_impact_nerfs(self) -> List[NerfUpdate]:
        """Retorna apenas os nerfs de alto impacto"""
        return [n for n in self.nerfs if n.impact == Impact.HIGH]
    
    def count_by_impact(self) -> Dict[str, int]:
        """Conta nerfs por nível de impacto"""
        return {
            "high": len([n for n in self.nerfs if n.impact == Impact.HIGH]),
            "medium": len([n for n in self.nerfs if n.impact == Impact.MEDIUM]),
            "low": len([n for n in self.nerfs if n.impact == Impact.LOW])
        }
    
    def get_total_nerfs(self) -> int:
        """Retorna o total de nerfs"""
        return len(self.nerfs)


def main():
    """Função principal de exemplo"""
    print("=== Mineiro - Clash Royale ===\n")
    
    # Criar instância do Mineiro
    miner = MinerCard()
    
    # Mostrar informações básicas
    print("Informações básicas:")
    print(miner.to_json())
    
    # Cálculos de dano
    print("\n\nCálculo de dano:")
    print(f"Dano em 10 segundos: {miner.calculate_total_damage(10)} HP")
    print(f"Dano em 5 segundos: {miner.calculate_total_damage(5)} HP")
    
    # Análise de sobrevivência
    print("\n\nAnálise de sobrevivência:")
    print(f"Sobrevive a 1000 de dano? {'Sim' if miner.can_survive(1000) else 'Não'}")
    print(f"Sobrevive a 1200 de dano? {'Sim' if miner.can_survive(1200) else 'Não'}")
    
    # Trade de elixir
    print("\n\nTrade de elixir:")
    print(miner.calculate_elixir_trade(4))
    print(miner.calculate_elixir_trade(2))
    
    # Análise de nerfs
    print("\n\nAnálise de Nerfs:")
    analyzer = NerfAnalyzer()
    
    # Adicionar alguns nerfs de exemplo
    analyzer.add_nerf(NerfUpdate(
        date="2016-09-19",
        version="Balance Update",
        changes=["Deploy Time increased: 0.7s → 1s"],
        impact=Impact.LOW,
        description="Primeiro ajuste"
    ))
    
    analyzer.add_nerf(NerfUpdate(
        date="2017-06-19",
        version="Balance Update",
        changes=["Attack speed decreased: 1.0s → 1.2s"],
        impact=Impact.HIGH,
        description="Grande mudança no DPS"
    ))
    
    print(f"Total de nerfs: {analyzer.get_total_nerfs()}")
    print(f"Nerfs por impacto: {analyzer.count_by_impact()}")


if __name__ == "__main__":
    main()
