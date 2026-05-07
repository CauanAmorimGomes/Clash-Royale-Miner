/**
 * Angular Component para exibir informações do Mineiro
 * Este é um exemplo de como usar o MinerService em um componente Angular
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MinerService, MinerStats, NerfUpdate } from './angular-miner.service';

@Component({
  selector: 'app-miner',
  template: `
    <div class="miner-container">
      <!-- Header -->
      <header class="miner-header">
        <h1>{{ cardInfo.namePortuguese }}</h1>
        <p class="subtitle">{{ cardInfo.name }} - {{ cardInfo.rarity }}</p>
      </header>

      <!-- Level Selector -->
      <div class="level-selector">
        <label>Nível:</label>
        <select [(ngModel)]="selectedLevel" (change)="onLevelChange()">
          <option [value]="14">Nível 14</option>
          <option [value]="13">Nível 13</option>
        </select>
      </div>

      <!-- Stats Display -->
      <div class="stats-grid" *ngIf="currentStats">
        <div class="stat-card">
          <span class="stat-label">HP</span>
          <span class="stat-value">{{ currentStats.hitpoints }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Dano</span>
          <span class="stat-value">{{ currentStats.damage }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">DPS</span>
          <span class="stat-value">{{ currentStats.dps }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Velocidade</span>
          <span class="stat-value">{{ currentStats.attackSpeed }}s</span>
        </div>
      </div>

      <!-- Damage Calculator -->
      <div class="calculator">
        <h3>Calculadora de Dano</h3>
        <input 
          type="number" 
          [(ngModel)]="calculatorSeconds" 
          placeholder="Segundos"
          (input)="calculateDamage()"
        />
        <p *ngIf="calculatedDamage !== null">
          Dano em {{ calculatorSeconds }} segundos: 
          <strong>{{ calculatedDamage }} HP</strong>
        </p>
      </div>

      <!-- Elixir Trade Calculator -->
      <div class="trade-calculator">
        <h3>Calculadora de Trade</h3>
        <input 
          type="number" 
          [(ngModel)]="defenseElixir" 
          placeholder="Elixir de defesa"
          (input)="calculateTrade()"
        />
        <p *ngIf="tradeResult" [class.positive]="tradeResult.positive" [class.negative]="!tradeResult.positive">
          {{ tradeResult.message }}
        </p>
      </div>

      <!-- Nerf History -->
      <div class="nerf-history">
        <h3>Histórico de Nerfs</h3>
        
        <!-- Filter -->
        <div class="filter-buttons">
          <button 
            [class.active]="nerfFilter === 'all'"
            (click)="filterNerfs('all')">
            Todos ({{ nerfStats.total }})
          </button>
          <button 
            [class.active]="nerfFilter === 'high'"
            (click)="filterNerfs('high')">
            Alto Impacto ({{ nerfStats.high }})
          </button>
          <button 
            [class.active]="nerfFilter === 'medium'"
            (click)="filterNerfs('medium')">
            Médio ({{ nerfStats.medium }})
          </button>
          <button 
            [class.active]="nerfFilter === 'low'"
            (click)="filterNerfs('low')">
            Baixo ({{ nerfStats.low }})
          </button>
        </div>

        <!-- Nerf List -->
        <div class="nerf-list">
          <div 
            *ngFor="let nerf of filteredNerfs" 
            class="nerf-card"
            [attr.data-impact]="nerf.impact">
            <div class="nerf-header">
              <h4>{{ nerf.version }}</h4>
              <span class="nerf-date">{{ nerf.date }}</span>
            </div>
            <ul class="nerf-changes">
              <li *ngFor="let change of nerf.changes">{{ change }}</li>
            </ul>
            <p class="nerf-description">{{ nerf.description }}</p>
          </div>
        </div>
      </div>

      <!-- Popular Decks -->
      <div class="popular-decks">
        <h3>Decks Populares</h3>
        <div class="deck-grid">
          <div *ngFor="let deck of popularDecks" class="deck-card">
            <h4>{{ deck.name }}</h4>
            <div class="deck-cards">
              <span *ngFor="let card of deck.cards" class="card-emoji">{{ card }}</span>
            </div>
            <p>{{ deck.description }}</p>
            <div class="deck-stats">
              <span class="win-rate">{{ deck.winRate }} WR</span>
              <span class="archetype">{{ deck.archetype }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .miner-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .miner-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .miner-header h1 {
      font-size: 3rem;
      color: #8b5cf6;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      color: white;
    }

    .stat-label {
      display: block;
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .stat-value {
      display: block;
      font-size: 2rem;
      font-weight: bold;
      margin-top: 5px;
    }

    .calculator, .trade-calculator {
      margin: 30px 0;
      padding: 20px;
      background: #f3f4f6;
      border-radius: 10px;
    }

    .positive { color: #10b981; }
    .negative { color: #ef4444; }

    .filter-buttons {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .filter-buttons button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: #e5e7eb;
    }

    .filter-buttons button.active {
      background: #8b5cf6;
      color: white;
    }

    .nerf-card {
      background: white;
      padding: 20px;
      margin-bottom: 15px;
      border-radius: 10px;
      border-left: 4px solid #8b5cf6;
    }

    .nerf-card[data-impact="high"] {
      border-left-color: #ef4444;
    }

    .nerf-card[data-impact="medium"] {
      border-left-color: #f59e0b;
    }

    .deck-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .deck-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .deck-cards {
      display: flex;
      gap: 10px;
      margin: 15px 0;
    }

    .card-emoji {
      font-size: 2rem;
    }
  `]
})
export class MinerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Card Info
  cardInfo: any;

  // Stats
  selectedLevel = 14;
  currentStats: MinerStats | null = null;

  // Calculators
  calculatorSeconds = 10;
  calculatedDamage: number | null = null;
  defenseElixir = 4;
  tradeResult: any = null;

  // Nerfs
  nerfFilter: 'all' | 'high' | 'medium' | 'low' = 'all';
  allNerfs: NerfUpdate[] = [];
  filteredNerfs: NerfUpdate[] = [];
  nerfStats: any;

  // Decks
  popularDecks: any[] = [];

  constructor(private minerService: MinerService) {
    this.cardInfo = this.minerService.getCardInfo();
    this.nerfStats = this.minerService.getNerfStatistics();
  }

  ngOnInit(): void {
    // Subscribe to current stats
    this.minerService.currentStats$
      .pipe(takeUntil(this.destroy$))
      .subscribe(stats => {
        this.currentStats = stats;
        this.calculateDamage();
      });

    // Load data
    this.allNerfs = this.minerService.getNerfHistory();
    this.filteredNerfs = this.allNerfs;
    this.popularDecks = this.minerService.getPopularDecks();
    
    // Initial calculations
    this.calculateDamage();
    this.calculateTrade();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLevelChange(): void {
    this.minerService.setCurrentLevel(this.selectedLevel);
  }

  calculateDamage(): void {
    this.calculatedDamage = this.minerService.calculateTotalDamage(
      this.calculatorSeconds,
      this.selectedLevel
    );
  }

  calculateTrade(): void {
    this.tradeResult = this.minerService.calculateElixirTrade(this.defenseElixir);
  }

  filterNerfs(filter: 'all' | 'high' | 'medium' | 'low'): void {
    this.nerfFilter = filter;
    if (filter === 'all') {
      this.filteredNerfs = this.allNerfs;
    } else {
      this.filteredNerfs = this.minerService.getNerfsByImpact(filter);
    }
  }
}
