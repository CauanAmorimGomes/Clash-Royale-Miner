/**
 * Exemplo de uso dos dados do Mineiro em C#
 * Este arquivo demonstra como trabalhar com os dados do Mineiro usando C#
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace ClashRoyale.Cards
{
    // Enums
    public enum Rarity
    {
        Common,
        Rare,
        Epic,
        Legendary
    }

    public enum Impact
    {
        Low,
        Medium,
        High
    }

    public enum CardType
    {
        Troop,
        Spell,
        Building
    }

    // Estatísticas do Mineiro
    public class MinerStats
    {
        public int Level { get; set; }
        public int Hitpoints { get; set; }
        public int Damage { get; set; }
        public int DPS { get; set; }
        public double AttackSpeed { get; set; }
        public double DeployTime { get; set; }
        public double TunnelTime { get; set; }

        public override string ToString()
        {
            return $"Level {Level}: {Hitpoints} HP, {Damage} DMG, {DPS} DPS";
        }
    }

    // Update de Nerf
    public class NerfUpdate
    {
        public string Date { get; set; }
        public string Version { get; set; }
        public List<string> Changes { get; set; }
        public Impact Impact { get; set; }
        public string Description { get; set; }

        public NerfUpdate()
        {
            Changes = new List<string>();
        }
    }

    // Resultado de Trade de Elixir
    public class ElixirTradeResult
    {
        public bool Positive { get; set; }
        public int Difference { get; set; }
        public string Message { get; set; }

        public override string ToString()
        {
            return Message;
        }
    }

    // Classe principal do Mineiro
    public class MinerCard
    {
        public string Name { get; } = "Miner";
        public string NamePortuguese { get; } = "Mineiro";
        public Rarity Rarity { get; } = Rarity.Legendary;
        public CardType Type { get; } = CardType.Troop;
        public int ElixirCost { get; } = 3;
        public int Arena { get; } = 6;

        private Dictionary<int, MinerStats> stats;

        public MinerCard()
        {
            InitializeStats();
        }

        private void InitializeStats()
        {
            stats = new Dictionary<int, MinerStats>
            {
                [14] = new MinerStats
                {
                    Level = 14,
                    Hitpoints = 1060,
                    Damage = 160,
                    DPS = 133,
                    AttackSpeed = 1.2,
                    DeployTime = 1.0,
                    TunnelTime = 1.0
                },
                [13] = new MinerStats
                {
                    Level = 13,
                    Hitpoints = 980,
                    Damage = 147,
                    DPS = 122,
                    AttackSpeed = 1.2,
                    DeployTime = 1.0,
                    TunnelTime = 1.0
                }
            };
        }

        // Obtém estatísticas para um nível específico
        public MinerStats GetStats(int level = 14)
        {
            return stats.ContainsKey(level) ? stats[level] : null;
        }

        // Calcula dano total em X segundos
        public int CalculateTotalDamage(double seconds, int level = 14)
        {
            var minerStats = GetStats(level);
            if (minerStats == null) return 0;

            int hits = (int)(seconds / minerStats.AttackSpeed);
            return hits * minerStats.Damage;
        }

        // Verifica se pode sobreviver a um ataque
        public bool CanSurvive(int incomingDamage, int level = 14)
        {
            var minerStats = GetStats(level);
            if (minerStats == null) return false;
            return minerStats.Hitpoints > incomingDamage;
        }

        // Calcula trade de elixir
        public ElixirTradeResult CalculateElixirTrade(int defenseElixir)
        {
            int difference = defenseElixir - ElixirCost;
            return new ElixirTradeResult
            {
                Positive = difference > 0,
                Difference = Math.Abs(difference),
                Message = difference > 0
                    ? $"Trade positivo de +{difference} elixir"
                    : $"Trade negativo de {difference} elixir"
            };
        }

        // Retorna informações formatadas
        public Dictionary<string, string> GetInfo()
        {
            return new Dictionary<string, string>
            {
                ["Name"] = Name,
                ["NamePT"] = NamePortuguese,
                ["Cost"] = $"{ElixirCost} elixir",
                ["Rarity"] = Rarity.ToString(),
                ["Type"] = Type.ToString(),
                ["Special"] = "Can be deployed anywhere in the Arena"
            };
        }

        // Converte para JSON
        public string ToJson()
        {
            return JsonSerializer.Serialize(GetInfo(), new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }

    // Analisador de Nerfs
    public class NerfAnalyzer
    {
        private List<NerfUpdate> nerfs;

        public NerfAnalyzer()
        {
            nerfs = new List<NerfUpdate>();
        }

        public void AddNerf(NerfUpdate nerf)
        {
            nerfs.Add(nerf);
        }

        public List<NerfUpdate> GetHighImpactNerfs()
        {
            return nerfs.Where(n => n.Impact == Impact.High).ToList();
        }

        public Dictionary<string, int> CountByImpact()
        {
            return new Dictionary<string, int>
            {
                ["High"] = nerfs.Count(n => n.Impact == Impact.High),
                ["Medium"] = nerfs.Count(n => n.Impact == Impact.Medium),
                ["Low"] = nerfs.Count(n => n.Impact == Impact.Low)
            };
        }

        public int GetTotalNerfs()
        {
            return nerfs.Count;
        }
    }

    // Programa principal
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Mineiro - Clash Royale ===\n");

            // Criar instância do Mineiro
            var miner = new MinerCard();

            // Mostrar informações básicas
            Console.WriteLine("Informações básicas:");
            Console.WriteLine(miner.ToJson());

            // Cálculos de dano
            Console.WriteLine("\n\nCálculo de dano:");
            Console.WriteLine($"Dano em 10 segundos: {miner.CalculateTotalDamage(10)} HP");
            Console.WriteLine($"Dano em 5 segundos: {miner.CalculateTotalDamage(5)} HP");

            // Análise de sobrevivência
            Console.WriteLine("\n\nAnálise de sobrevivência:");
            Console.WriteLine($"Sobrevive a 1000 de dano? {(miner.CanSurvive(1000) ? "Sim" : "Não")}");
            Console.WriteLine($"Sobrevive a 1200 de dano? {(miner.CanSurvive(1200) ? "Sim" : "Não")}");

            // Trade de elixir
            Console.WriteLine("\n\nTrade de elixir:");
            Console.WriteLine(miner.CalculateElixirTrade(4));
            Console.WriteLine(miner.CalculateElixirTrade(2));

            // Análise de nerfs
            Console.WriteLine("\n\nAnálise de Nerfs:");
            var analyzer = new NerfAnalyzer();

            analyzer.AddNerf(new NerfUpdate
            {
                Date = "2016-09-19",
                Version = "Balance Update",
                Changes = new List<string> { "Deploy Time increased: 0.7s → 1s" },
                Impact = Impact.Low,
                Description = "Primeiro ajuste"
            });

            analyzer.AddNerf(new NerfUpdate
            {
                Date = "2017-06-19",
                Version = "Balance Update",
                Changes = new List<string> { "Attack speed decreased: 1.0s → 1.2s" },
                Impact = Impact.High,
                Description = "Grande mudança no DPS"
            });

            Console.WriteLine($"Total de nerfs: {analyzer.GetTotalNerfs()}");
            var impactCount = analyzer.CountByImpact();
            Console.WriteLine($"Nerfs de alto impacto: {impactCount["High"]}");
            Console.WriteLine($"Nerfs de médio impacto: {impactCount["Medium"]}");
            Console.WriteLine($"Nerfs de baixo impacto: {impactCount["Low"]}");

            Console.WriteLine("\n\nPressione qualquer tecla para sair...");
            Console.ReadKey();
        }
    }
}
