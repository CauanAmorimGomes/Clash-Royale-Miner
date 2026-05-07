/**
 * Exemplo de integração com API REST
 * Este arquivo demonstra como consumir dados do Mineiro via API
 */

import minerData from '../data/minerData.json';

// Tipos para a API
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: number;
}

interface ApiError {
  success: false;
  error: string;
  code: number;
  timestamp: number;
}

// Classe de API Client
class MinerApiClient {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  // Método genérico de requisição
  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: this.headers,
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // GET - Obter informações da carta
  async getCardInfo() {
    return this.request('/miner/info');
  }

  // GET - Obter stats por nível
  async getStats(level: number = 14) {
    return this.request(`/miner/stats/${level}`);
  }

  // GET - Obter histórico de nerfs
  async getNerfHistory() {
    return this.request('/miner/nerfs');
  }

  // GET - Obter nerfs por impacto
  async getNerfsByImpact(impact: 'high' | 'medium' | 'low') {
    return this.request(`/miner/nerfs?impact=${impact}`);
  }

  // GET - Obter decks populares
  async getPopularDecks() {
    return this.request('/miner/decks');
  }

  // POST - Calcular dano
  async calculateDamage(seconds: number, level: number = 14) {
    return this.request('/miner/calculate/damage', {
      method: 'POST',
      body: JSON.stringify({ seconds, level }),
    });
  }

  // POST - Calcular trade de elixir
  async calculateElixirTrade(defenseElixir: number) {
    return this.request('/miner/calculate/trade', {
      method: 'POST',
      body: JSON.stringify({ defenseElixir }),
    });
  }

  // GET - Buscar sinergias
  async getSynergies() {
    return this.request('/miner/synergies');
  }

  // GET - Buscar contadores
  async getCounters() {
    return this.request('/miner/counters');
  }
}

// Mock API Server (simulação para desenvolvimento)
class MockMinerApiServer {
  // Simula latência de rede
  private delay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Cria resposta de sucesso
  private success<T>(data: T): ApiResponse<T> {
    return {
      success: true,
      data,
      timestamp: Date.now(),
    };
  }

  // Cria resposta de erro
  private error(message: string, code: number = 500): ApiError {
    return {
      success: false,
      error: message,
      code,
      timestamp: Date.now(),
    };
  }

  // Handlers
  async getCardInfo() {
    await this.delay();
    return this.success(minerData.card);
  }

  async getStats(level: number) {
    await this.delay();
    const stats = minerData.stats[`level${level}` as keyof typeof minerData.stats];
    
    if (!stats) {
      return this.error(`Stats not found for level ${level}`, 404);
    }
    
    return this.success(stats);
  }

  async getNerfHistory() {
    await this.delay();
    return this.success(minerData.nerfHistory);
  }

  async getNerfsByImpact(impact: string) {
    await this.delay();
    const filtered = minerData.nerfHistory.filter(
      nerf => nerf.impact === impact
    );
    return this.success(filtered);
  }

  async getPopularDecks() {
    await this.delay();
    return this.success(minerData.popularDecks);
  }

  async calculateDamage(seconds: number, level: number) {
    await this.delay();
    const stats = minerData.stats[`level${level}` as keyof typeof minerData.stats];
    
    if (!stats) {
      return this.error(`Stats not found for level ${level}`, 404);
    }
    
    const hits = Math.floor(seconds / stats.attackSpeed);
    const totalDamage = hits * stats.damage;
    
    return this.success({
      seconds,
      level,
      hits,
      damagePerHit: stats.damage,
      totalDamage,
    });
  }

  async calculateElixirTrade(defenseElixir: number) {
    await this.delay();
    const minerCost = minerData.card.elixirCost;
    const difference = defenseElixir - minerCost;
    
    return this.success({
      minerCost,
      defenseElixir,
      difference,
      positive: difference > 0,
      message: difference > 0
        ? `Trade positivo de +${difference} elixir`
        : `Trade negativo de ${difference} elixir`,
    });
  }

  async getSynergies() {
    await this.delay();
    return this.success(minerData.synergies);
  }

  async getCounters() {
    await this.delay();
    return this.success(minerData.counters);
  }
}

// Hook React para usar a API
export function useMinerApi() {
  const client = new MinerApiClient();

  return {
    // Queries
    getCardInfo: () => client.getCardInfo(),
    getStats: (level?: number) => client.getStats(level),
    getNerfHistory: () => client.getNerfHistory(),
    getNerfsByImpact: (impact: 'high' | 'medium' | 'low') => 
      client.getNerfsByImpact(impact),
    getPopularDecks: () => client.getPopularDecks(),
    getSynergies: () => client.getSynergies(),
    getCounters: () => client.getCounters(),
    
    // Mutations
    calculateDamage: (seconds: number, level?: number) => 
      client.calculateDamage(seconds, level),
    calculateElixirTrade: (defenseElixir: number) => 
      client.calculateElixirTrade(defenseElixir),
  };
}

// Exemplo de uso com async/await
async function exampleUsage() {
  const api = new MinerApiClient();

  try {
    // Obter informações da carta
    const cardInfo = await api.getCardInfo();
    console.log('Card Info:', cardInfo.data);

    // Obter stats do nível 14
    const stats = await api.getStats(14);
    console.log('Stats:', stats.data);

    // Obter histórico de nerfs
    const nerfs = await api.getNerfHistory();
    console.log('Nerfs:', nerfs.data);

    // Calcular dano
    const damage = await api.calculateDamage(10, 14);
    console.log('Damage:', damage.data);

    // Calcular trade de elixir
    const trade = await api.calculateElixirTrade(4);
    console.log('Trade:', trade.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Exportações
export { MinerApiClient, MockMinerApiServer, exampleUsage };
export type { ApiResponse, ApiError };

// Exemplo de uso em componente React
export const ExampleComponent = () => {
  // Exemplo comentado de como usar em um componente React real
  /*
  import { useState, useEffect } from 'react';
  import { useMinerApi } from './api-integration';

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const api = useMinerApi();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.getStats(14);
        setStats(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(stats)}</div>;
  */

  return null;
};
