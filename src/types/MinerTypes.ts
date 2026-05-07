/**
 * Tipos TypeScript para o Mineiro do Clash Royale
 * Estes tipos podem ser exportados e usados em outras linguagens através de conversão
 */

export interface MinerStats {
  level: number;
  hitpoints: number;
  damage: number;
  dps: number;
  attackSpeed: number;
  deployTime: number;
  tunnelTime: number;
}

export interface NerfUpdate {
  date: string;
  version: string;
  changes: string[];
  impact: 'high' | 'medium' | 'low';
  description: string;
}

export interface CardInfo {
  name: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  type: 'Troop' | 'Spell' | 'Building';
  elixirCost: number;
  arena: number;
}

export interface Strategy {
  title: string;
  description: string;
  tips: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  effectiveness: number;
}

export interface DeckComposition {
  name: string;
  cards: string[];
  description: string;
  winRate: string;
  archetype: 'Control' | 'Beatdown' | 'Cycle' | 'Siege';
}

export interface Synergy {
  cardName: string;
  synergyLevel: 'High' | 'Medium' | 'Low';
  reason: string;
}

export interface Counter {
  cardName: string;
  dangerLevel: 'high' | 'medium' | 'low';
  counterStrategy: string;
}

// Classe principal do Mineiro
export class MinerCard implements CardInfo {
  name = 'Miner';
  rarity: 'Legendary' = 'Legendary';
  type: 'Troop' = 'Troop';
  elixirCost = 3;
  arena = 6;

  private stats: Map<number, MinerStats> = new Map([
    [14, {
      level: 14,
      hitpoints: 1060,
      damage: 160,
      dps: 133,
      attackSpeed: 1.2,
      deployTime: 1.0,
      tunnelTime: 1.0
    }],
    [13, {
      level: 13,
      hitpoints: 980,
      damage: 147,
      dps: 122,
      attackSpeed: 1.2,
      deployTime: 1.0,
      tunnelTime: 1.0
    }],
  ]);

  getStatsForLevel(level: number): MinerStats | undefined {
    return this.stats.get(level);
  }

  getAllStats(): MinerStats[] {
    return Array.from(this.stats.values());
  }

  // Calcula o dano total em uma torre considerando o tempo
  calculateTowerDamage(seconds: number, level: number = 14): number {
    const stats = this.getStatsForLevel(level);
    if (!stats) return 0;
    
    const hits = Math.floor(seconds / stats.attackSpeed);
    return hits * stats.damage;
  }

  // Verifica se o mineiro sobrevive a um ataque
  canSurvive(incomingDamage: number, level: number = 14): boolean {
    const stats = this.getStatsForLevel(level);
    if (!stats) return false;
    return stats.hitpoints > incomingDamage;
  }
}

// Funções utilitárias
export const calculateElixirTrade = (
  minerElixir: number,
  defenseElixir: number
): { positive: boolean; difference: number } => {
  const difference = defenseElixir - minerElixir;
  return {
    positive: difference > 0,
    difference: Math.abs(difference)
  };
};

export const getMinerNerfHistory = (): NerfUpdate[] => {
  return [
    {
      date: '2016-05-03',
      version: 'Release',
      changes: ['Card added to the game'],
      impact: 'high',
      description: 'Initial release of the Miner card'
    },
    {
      date: '2016-09-19',
      version: 'Balance Update',
      changes: ['Deploy Time increased: 0.7s → 1s'],
      impact: 'low',
      description: 'First adjustment to give players more reaction time'
    },
    // Mais nerfs podem ser adicionados aqui
  ];
};

export default MinerCard;
