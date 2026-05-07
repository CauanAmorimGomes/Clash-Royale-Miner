<?php
/**
 * Exemplo de uso dos dados do Mineiro em PHP
 * Este arquivo demonstra como trabalhar com os dados do Mineiro usando PHP
 */

// Enums simulados (PHP 8.1+ tem enums nativos)
class Rarity {
    const COMMON = 'Common';
    const RARE = 'Rare';
    const EPIC = 'Epic';
    const LEGENDARY = 'Legendary';
}

class Impact {
    const LOW = 'low';
    const MEDIUM = 'medium';
    const HIGH = 'high';
}

class CardType {
    const TROOP = 'Troop';
    const SPELL = 'Spell';
    const BUILDING = 'Building';
}

// Classe de Estatísticas
class MinerStats {
    public int $level;
    public int $hitpoints;
    public int $damage;
    public int $dps;
    public float $attackSpeed;
    public float $deployTime;
    public float $tunnelTime;

    public function __construct(
        int $level,
        int $hitpoints,
        int $damage,
        int $dps,
        float $attackSpeed,
        float $deployTime,
        float $tunnelTime
    ) {
        $this->level = $level;
        $this->hitpoints = $hitpoints;
        $this->damage = $damage;
        $this->dps = $dps;
        $this->attackSpeed = $attackSpeed;
        $this->deployTime = $deployTime;
        $this->tunnelTime = $tunnelTime;
    }

    public function __toString(): string {
        return sprintf(
            "Level %d: %d HP, %d DMG, %d DPS",
            $this->level,
            $this->hitpoints,
            $this->damage,
            $this->dps
        );
    }
}

// Classe de Update de Nerf
class NerfUpdate {
    public string $date;
    public string $version;
    public array $changes;
    public string $impact;
    public string $description;

    public function __construct(
        string $date,
        string $version,
        array $changes,
        string $impact,
        string $description
    ) {
        $this->date = $date;
        $this->version = $version;
        $this->changes = $changes;
        $this->impact = $impact;
        $this->description = $description;
    }
}

// Classe principal do Mineiro
class MinerCard {
    private string $name = 'Miner';
    private string $namePortuguese = 'Mineiro';
    private string $rarity = Rarity::LEGENDARY;
    private string $type = CardType::TROOP;
    private int $elixirCost = 3;
    private int $arena = 6;
    private array $stats = [];

    public function __construct() {
        $this->initializeStats();
    }

    private function initializeStats(): void {
        $this->stats[14] = new MinerStats(
            level: 14,
            hitpoints: 1060,
            damage: 160,
            dps: 133,
            attackSpeed: 1.2,
            deployTime: 1.0,
            tunnelTime: 1.0
        );

        $this->stats[13] = new MinerStats(
            level: 13,
            hitpoints: 980,
            damage: 147,
            dps: 122,
            attackSpeed: 1.2,
            deployTime: 1.0,
            tunnelTime: 1.0
        );
    }

    public function getStats(int $level = 14): ?MinerStats {
        return $this->stats[$level] ?? null;
    }

    public function calculateTotalDamage(float $seconds, int $level = 14): int {
        $stats = $this->getStats($level);
        if ($stats === null) return 0;

        $hits = (int)($seconds / $stats->attackSpeed);
        return $hits * $stats->damage;
    }

    public function canSurvive(int $incomingDamage, int $level = 14): bool {
        $stats = $this->getStats($level);
        if ($stats === null) return false;
        return $stats->hitpoints > $incomingDamage;
    }

    public function calculateElixirTrade(int $defenseElixir): array {
        $difference = $defenseElixir - $this->elixirCost;
        return [
            'positive' => $difference > 0,
            'difference' => abs($difference),
            'message' => $difference > 0
                ? "Trade positivo de +{$difference} elixir"
                : "Trade negativo de {$difference} elixir"
        ];
    }

    public function getInfo(): array {
        return [
            'name' => $this->name,
            'name_pt' => $this->namePortuguese,
            'cost' => "{$this->elixirCost} elixir",
            'rarity' => $this->rarity,
            'type' => $this->type,
            'special' => 'Pode ser implantado em qualquer lugar da Arena'
        ];
    }

    public function toJson(): string {
        return json_encode($this->getInfo(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    // Getters
    public function getName(): string { return $this->name; }
    public function getElixirCost(): int { return $this->elixirCost; }
    public function getRarity(): string { return $this->rarity; }
}

// Analisador de Nerfs
class NerfAnalyzer {
    private array $nerfs = [];

    public function addNerf(NerfUpdate $nerf): void {
        $this->nerfs[] = $nerf;
    }

    public function getHighImpactNerfs(): array {
        return array_filter($this->nerfs, function($nerf) {
            return $nerf->impact === Impact::HIGH;
        });
    }

    public function countByImpact(): array {
        $counts = [
            'high' => 0,
            'medium' => 0,
            'low' => 0
        ];

        foreach ($this->nerfs as $nerf) {
            $counts[$nerf->impact]++;
        }

        return $counts;
    }

    public function getTotalNerfs(): int {
        return count($this->nerfs);
    }
}

// Função principal
function main(): void {
    echo "=== Mineiro - Clash Royale ===\n\n";

    // Criar instância do Mineiro
    $miner = new MinerCard();

    // Mostrar informações básicas
    echo "Informações básicas:\n";
    echo $miner->toJson() . "\n";

    // Cálculos de dano
    echo "\n\nCálculo de dano:\n";
    echo "Dano em 10 segundos: " . $miner->calculateTotalDamage(10) . " HP\n";
    echo "Dano em 5 segundos: " . $miner->calculateTotalDamage(5) . " HP\n";

    // Análise de sobrevivência
    echo "\n\nAnálise de sobrevivência:\n";
    echo "Sobrevive a 1000 de dano? " . ($miner->canSurvive(1000) ? "Sim" : "Não") . "\n";
    echo "Sobrevive a 1200 de dano? " . ($miner->canSurvive(1200) ? "Sim" : "Não") . "\n";

    // Trade de elixir
    echo "\n\nTrade de elixir:\n";
    $trade1 = $miner->calculateElixirTrade(4);
    echo $trade1['message'] . "\n";
    $trade2 = $miner->calculateElixirTrade(2);
    echo $trade2['message'] . "\n";

    // Análise de nerfs
    echo "\n\nAnálise de Nerfs:\n";
    $analyzer = new NerfAnalyzer();

    $analyzer->addNerf(new NerfUpdate(
        date: "2016-09-19",
        version: "Balance Update",
        changes: ["Deploy Time increased: 0.7s → 1s"],
        impact: Impact::LOW,
        description: "Primeiro ajuste"
    ));

    $analyzer->addNerf(new NerfUpdate(
        date: "2017-06-19",
        version: "Balance Update",
        changes: ["Attack speed decreased: 1.0s → 1.2s"],
        impact: Impact::HIGH,
        description: "Grande mudança no DPS"
    ));

    echo "Total de nerfs: " . $analyzer->getTotalNerfs() . "\n";
    $impactCount = $analyzer->countByImpact();
    echo "Nerfs de alto impacto: " . $impactCount['high'] . "\n";
    echo "Nerfs de médio impacto: " . $impactCount['medium'] . "\n";
    echo "Nerfs de baixo impacto: " . $impactCount['low'] . "\n";
}

// Executar se for chamado diretamente
if (php_sapi_name() === 'cli') {
    main();
}

?>
