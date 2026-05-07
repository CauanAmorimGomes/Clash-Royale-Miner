/**
 * Exemplo de uso dos dados do Mineiro em Node.js
 * Este arquivo demonstra como consumir os dados em um ambiente Node.js
 */

// Importar dados (em um projeto real, você usaria require ou import)
const minerData = {
  // Dados simplificados para exemplo
  card: {
    name: "Miner",
    elixirCost: 3,
    rarity: "Legendary"
  },
  stats: {
    level14: {
      hitpoints: 1060,
      damage: 160,
      dps: 133,
      attackSpeed: 1.2
    }
  }
};

// Classe Mineiro em JavaScript
class MinerCard {
  constructor() {
    this.name = "Miner";
    this.elixirCost = 3;
    this.rarity = "Legendary";
  }

  // Calcula dano total em X segundos
  calculateTotalDamage(seconds, level = 14) {
    const stats = minerData.stats[`level${level}`];
    if (!stats) return 0;
    
    const hits = Math.floor(seconds / stats.attackSpeed);
    return hits * stats.damage;
  }

  // Verifica se pode sobreviver a um ataque
  canSurvive(incomingDamage, level = 14) {
    const stats = minerData.stats[`level${level}`];
    if (!stats) return false;
    return stats.hitpoints > incomingDamage;
  }

  // Calcula trade de elixir
  calculateElixirTrade(defenseElixir) {
    const difference = defenseElixir - this.elixirCost;
    return {
      positive: difference > 0,
      difference: Math.abs(difference),
      message: difference > 0 
        ? `Trade positivo de +${difference} elixir` 
        : `Trade negativo de -${Math.abs(difference)} elixir`
    };
  }

  // Retorna informações formatadas
  getInfo() {
    return {
      name: this.name,
      cost: `${this.elixirCost} elixir`,
      rarity: this.rarity,
      type: "Troop",
      special: "Can be deployed anywhere"
    };
  }
}

// Exemplo de uso
console.log("=== Mineiro - Clash Royale ===\n");

const miner = new MinerCard();
console.log("Informações básicas:");
console.log(miner.getInfo());

console.log("\nCálculo de dano:");
console.log(`Dano em 10 segundos: ${miner.calculateTotalDamage(10)} HP`);

console.log("\nAnálise de sobrevivência:");
console.log(`Sobrevive a 1000 de dano? ${miner.canSurvive(1000) ? "Sim" : "Não"}`);
console.log(`Sobrevive a 1200 de dano? ${miner.canSurvive(1200) ? "Sim" : "Não"}`);

console.log("\nTrade de elixir:");
console.log(miner.calculateElixirTrade(4));
console.log(miner.calculateElixirTrade(2));

// Exportar para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MinerCard, minerData };
}
