/**
 * Angular Service para o Mineiro do Clash Royale
 * Este arquivo demonstra como criar um service Angular para gerenciar dados do Mineiro
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Interfaces TypeScript
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

export interface ElixirTradeResult {
  positive: boolean;
  difference: number;
  message: string;
}

export interface DeckComposition {
  name: string;
  cards: string[];
  description: string;
  winRate: string;
  archetype: 'Control' | 'Beatdown' | 'Cycle' | 'Siege';
}

@Injectable({
  providedIn: 'root'
})
export class MinerService {
  // Card info
  private readonly cardInfo = {
    name: 'Miner',
    namePortuguese: 'Mineiro',
    rarity: 'Legendary',
    type: 'Troop',
    elixirCost: 3,
    arena: 6
  };

  // Stats por nível
  private readonly statsMap = new Map<number, MinerStats>([
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
    }]
  ]);

  // BehaviorSubject para stats reativas
  private currentLevelSubject = new BehaviorSubject<number>(14);
  public currentLevel$ = this.currentLevelSubject.asObservable();

  private currentStatsSubject = new BehaviorSubject<MinerStats | null>(
    this.statsMap.get(14) || null
  );
  public currentStats$ = this.currentStatsSubject.asObservable();

  constructor() {}

  // Getter para informações da carta
  getCardInfo() {
    return { ...this.cardInfo };
  }

  // Getter para stats de um nível específico
  getStats(level: number = 14): MinerStats | undefined {
    return this.statsMap.get(level);
  }

  // Setter para nível atual (reativo)
  setCurrentLevel(level: number): void {
    if (this.statsMap.has(level)) {
      this.currentLevelSubject.next(level);
      this.currentStatsSubject.next(this.statsMap.get(level) || null);
    }
  }

  // Calcula dano total em X segundos
  calculateTotalDamage(seconds: number, level: number = 14): number {
    const stats = this.getStats(level);
    if (!stats) return 0;

    const hits = Math.floor(seconds / stats.attackSpeed);
    return hits * stats.damage;
  }

  // Verifica se pode sobreviver a um ataque
  canSurvive(incomingDamage: number, level: number = 14): boolean {
    const stats = this.getStats(level);
    if (!stats) return false;
    return stats.hitpoints > incomingDamage;
  }

  // Calcula trade de elixir
  calculateElixirTrade(defenseElixir: number): ElixirTradeResult {
    const difference = defenseElixir - this.cardInfo.elixirCost;
    return {
      positive: difference > 0,
      difference: Math.abs(difference),
      message: difference > 0
        ? `Trade positivo de +${difference} elixir`
        : `Trade negativo de ${difference} elixir`
    };
  }

  // Retorna histórico de nerfs
  getNerfHistory(): NerfUpdate[] {
    return [
      {
        date: '2016-05-03',
        version: 'Lançamento',
        changes: ['Carta adicionada ao jogo'],
        impact: 'high',
        description: 'Lançamento inicial do Mineiro'
      },
      {
        date: '2016-09-19',
        version: 'Balance Update',
        changes: ['Deploy Time aumentado: 0.7s → 1s'],
        impact: 'low',
        description: 'Primeiro ajuste para dar mais tempo de reação'
      },
      {
        date: '2016-11-01',
        version: 'Balance Update',
        changes: ['HP reduzido em 6%'],
        impact: 'medium',
        description: 'Redução de vida para tornar mais vulnerável'
      },
      {
        date: '2017-06-19',
        version: 'Balance Update',
        changes: [
          'Velocidade de ataque reduzida: 1.0s → 1.2s',
          'Primeiro golpe mais rápido: 0.7s'
        ],
        impact: 'high',
        description: 'Mudança significativa no ritmo de ataque'
      },
      {
        date: '2017-10-09',
        version: 'Balance Update',
        changes: [
          'Dano de coroação reduzido em 20%',
          'HP reduzido em 6%'
        ],
        impact: 'high',
        description: 'Grande nerf no dano à torre'
      },
      {
        date: '2020-06-01',
        version: 'Balance Update',
        changes: ['Dano de coroação reduzido em 35%'],
        impact: 'high',
        description: 'Um dos maiores nerfs da história'
      }
    ];
  }

  // Retorna decks populares
  getPopularDecks(): DeckComposition[] {
    return [
      {
        name: 'Miner Control',
        cards: ['⛏️', '⚡', '🏹', '🔥', '👸', '🦇', '💀', '🏰'],
        description: 'Deck focado em controle com pressão constante',
        winRate: '54%',
        archetype: 'Control'
      },
      {
        name: 'Miner Poison',
        cards: ['⛏️', '☠️', '🛡️', '⚡', '👑', '🏹', '🔮', '🏰'],
        description: 'Deck clássico com poison',
        winRate: '52%',
        archetype: 'Control'
      },
      {
        name: 'Miner Cycle',
        cards: ['⛏️', '⚡', '🔥', '👻', '🏹', '🛡️', '🔮', '🏰'],
        description: 'Deck rápido focado em ciclo',
        winRate: '53%',
        archetype: 'Cycle'
      }
    ];
  }

  // Filtra nerfs por impacto
  getNerfsByImpact(impact: 'high' | 'medium' | 'low'): NerfUpdate[] {
    return this.getNerfHistory().filter(nerf => nerf.impact === impact);
  }

  // Retorna estatísticas de nerfs
  getNerfStatistics() {
    const history = this.getNerfHistory();
    return {
      total: history.length,
      high: history.filter(n => n.impact === 'high').length,
      medium: history.filter(n => n.impact === 'medium').length,
      low: history.filter(n => n.impact === 'low').length
    };
  }
}
