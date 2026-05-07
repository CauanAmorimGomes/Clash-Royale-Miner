/**
 * Constantes e dados do Mineiro do Clash Royale
 * Este arquivo contém todas as informações estáticas sobre a carta
 */

export const MINER_INFO = {
  name: 'Miner',
  namePT: 'Mineiro',
  rarity: 'Legendary',
  type: 'Troop',
  elixirCost: 3,
  arena: 6,
  releaseDate: '2016-05-03',
  description: 'Can be deployed anywhere in the Arena. He tunnels to his target, dealing damage to ground troops while underground.',
  descriptionPT: 'Pode ser implantado em qualquer lugar da Arena. Ele cava até lá, causando dano às tropas inimigas enquanto viaja.',
  icon: '⛏️',
} as const;

export const MINER_STATS_BY_LEVEL = {
  14: {
    level: 14,
    hitpoints: 1060,
    damage: 160,
    dps: 133,
    attackSpeed: 1.2,
    speed: 'Fast',
    deployTime: 1.0,
    tunnelTime: 1.0,
    range: 'Melee',
    targets: 'Ground',
  },
  13: {
    level: 13,
    hitpoints: 980,
    damage: 147,
    dps: 122,
    attackSpeed: 1.2,
    speed: 'Fast',
    deployTime: 1.0,
    tunnelTime: 1.0,
    range: 'Melee',
    targets: 'Ground',
  },
  12: {
    level: 12,
    hitpoints: 907,
    damage: 136,
    dps: 113,
    attackSpeed: 1.2,
    speed: 'Fast',
    deployTime: 1.0,
    tunnelTime: 1.0,
    range: 'Melee',
    targets: 'Ground',
  },
  11: {
    level: 11,
    hitpoints: 838,
    damage: 126,
    dps: 105,
    attackSpeed: 1.2,
    speed: 'Fast',
    deployTime: 1.0,
    tunnelTime: 1.0,
    range: 'Melee',
    targets: 'Ground',
  },
  10: {
    level: 10,
    hitpoints: 775,
    damage: 116,
    dps: 96,
    attackSpeed: 1.2,
    speed: 'Fast',
    deployTime: 1.0,
    tunnelTime: 1.0,
    range: 'Melee',
    targets: 'Ground',
  },
} as const;

export const NERF_TIMELINE = [
  {
    id: 1,
    date: '2016-05-03',
    year: 2016,
    month: 'Maio',
    version: 'Lançamento',
    type: 'release' as const,
    changes: ['Carta adicionada ao jogo'],
    impact: 'high' as const,
    description: 'O Mineiro foi lançado como uma carta lendária revolucionária.',
  },
  {
    id: 2,
    date: '2016-09-19',
    year: 2016,
    month: 'Setembro',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['Deploy Time aumentado: 0.7s → 1s'],
    impact: 'low' as const,
    description: 'Primeiro ajuste para dar aos jogadores mais tempo de reação.',
  },
  {
    id: 3,
    date: '2016-11-01',
    year: 2016,
    month: 'Novembro',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['HP reduzido em 6%'],
    impact: 'medium' as const,
    description: 'Redução de vida para tornar o Mineiro mais vulnerável.',
  },
  {
    id: 4,
    date: '2016-12-13',
    year: 2016,
    month: 'Dezembro',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['Dano reduzido em 6%'],
    impact: 'medium' as const,
    description: 'Nerf no dano para reduzir eficiência.',
  },
  {
    id: 5,
    date: '2017-06-19',
    year: 2017,
    month: 'Junho',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: [
      'Velocidade de ataque reduzida: 1.0s → 1.2s',
      'Primeiro golpe mais rápido: 0.7s',
    ],
    impact: 'high' as const,
    description: 'Mudança significativa no ritmo de ataque do Mineiro.',
  },
  {
    id: 6,
    date: '2017-08-21',
    year: 2017,
    month: 'Agosto',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['Deploy Time aumentado: 1s → 1.2s'],
    impact: 'low' as const,
    description: 'Mais tempo para os oponentes reagirem.',
  },
  {
    id: 7,
    date: '2017-10-09',
    year: 2017,
    month: 'Outubro',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['Dano de coroação reduzido em 20%', 'HP reduzido em 6%'],
    impact: 'high' as const,
    description: 'Grande nerf que reduziu significativamente o dano à torre.',
  },
  {
    id: 8,
    date: '2018-02-12',
    year: 2018,
    month: 'Fevereiro',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['Primeiro golpe: 0.7s → 1.2s (normalizado)'],
    impact: 'medium' as const,
    description: 'Remoção do primeiro golpe rápido.',
  },
  {
    id: 9,
    date: '2018-04-02',
    year: 2018,
    month: 'Abril',
    version: 'Balance Update',
    type: 'buff' as const,
    changes: ['Dano de coroação aumentado em 33%'],
    impact: 'medium' as const,
    description: 'Buff parcial revertendo parte do nerf anterior.',
  },
  {
    id: 10,
    date: '2020-06-01',
    year: 2020,
    month: 'Junho',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['Dano de coroação reduzido em 35%'],
    impact: 'high' as const,
    description: 'Um dos maiores nerfs da história do Mineiro.',
  },
  {
    id: 11,
    date: '2020-09-07',
    year: 2020,
    month: 'Setembro',
    version: 'Balance Update',
    type: 'buff' as const,
    changes: ['HP aumentado em 3%'],
    impact: 'low' as const,
    description: 'Pequeno buff compensatório.',
  },
  {
    id: 12,
    date: '2020-10-05',
    year: 2020,
    month: 'Outubro',
    version: 'Balance Update',
    type: 'buff' as const,
    changes: ['Dano de coroação aumentado em 10%'],
    impact: 'low' as const,
    description: 'Pequeno buff tentando reequilibrar.',
  },
  {
    id: 13,
    date: '2021-01-06',
    year: 2021,
    month: 'Janeiro',
    version: 'Balance Update',
    type: 'buff' as const,
    changes: ['Dano de coroação aumentado em 10%'],
    impact: 'low' as const,
    description: 'Continuação dos ajustes finos.',
  },
  {
    id: 14,
    date: '2021-06-07',
    year: 2021,
    month: 'Junho',
    version: 'Balance Update',
    type: 'buff' as const,
    changes: ['HP aumentado em 3%'],
    impact: 'low' as const,
    description: 'Buff de HP para melhorar sobrevivência.',
  },
  {
    id: 15,
    date: '2021-10-27',
    year: 2021,
    month: 'Outubro',
    version: 'Balance Update - Nível 14',
    type: 'rework' as const,
    changes: ['Ajustes para novo sistema de níveis', 'Estatísticas rebalanceadas para Nível 14'],
    impact: 'medium' as const,
    description: 'Atualização do sistema de níveis do jogo.',
  },
  {
    id: 16,
    date: '2022-03-07',
    year: 2022,
    month: 'Março',
    version: 'Balance Update',
    type: 'nerf' as const,
    changes: ['HP reduzido em 3%'],
    impact: 'low' as const,
    description: 'Pequeno nerf ajustando HP.',
  },
] as const;

export const SYNERGIES = [
  { card: 'Poison', emoji: '☠️', level: 'High', reason: 'Elimina tropas de defesa enquanto Mineiro tanqueia' },
  { card: 'Zap', emoji: '⚡', level: 'High', reason: 'Reseta torres e tropas para dano extra' },
  { card: 'Princess', emoji: '👸', level: 'Medium', reason: 'Cria pressão em duas pistas' },
  { card: 'Magic Archer', emoji: '🏹', level: 'High', reason: 'Suporte aéreo forte' },
  { card: 'Fireball', emoji: '🔥', level: 'Medium', reason: 'Remove defesas de média vida' },
  { card: 'Bats', emoji: '🦇', level: 'Medium', reason: 'Tanque de dano rápido' },
  { card: 'The Log', emoji: '🪵', level: 'High', reason: 'Remove pequenas tropas de defesa' },
  { card: 'Tornado', emoji: '🌪️', level: 'Medium', reason: 'Agrupa tropas para Poison' },
] as const;

export const COUNTERS = [
  { card: 'Mini P.E.K.K.A', emoji: '🗡️', danger: 'high', reason: 'Alto dano elimina rapidamente' },
  { card: 'Knight', emoji: '🛡️', danger: 'medium', reason: 'Bom HP e dano para trade positivo' },
  { card: 'Valkyrie', emoji: '💃', danger: 'high', reason: 'Dano em área e alto HP' },
  { card: 'Spirits', emoji: '👻', danger: 'low', reason: 'Cartas baratas que ajudam na defesa' },
  { card: 'Skeletons', emoji: '💀', danger: 'low', reason: '1 de elixir para distrair' },
  { card: 'Guards', emoji: '🛡️', danger: 'medium', reason: 'Escudos absorvem dano' },
  { card: 'Electro Wizard', emoji: '⚡', danger: 'medium', reason: 'Stun contínuo reduz DPS' },
  { card: 'Goblin Gang', emoji: '👺', danger: 'low', reason: 'Trade positivo de elixir' },
] as const;

export const POPULAR_DECKS = [
  {
    name: 'Miner Control',
    archetype: 'Control',
    cards: ['⛏️', '☠️', '🏹', '💃', '🦇', '💀', '🪵', '🌪️'],
    winRate: '54%',
    difficulty: 'Medium',
    description: 'Deck focado em controle com pressão constante e poison para eliminar defesas.',
  },
  {
    name: 'Miner Poison',
    archetype: 'Control',
    cards: ['⛏️', '☠️', '🛡️', '⚡', '👑', '🏹', '🔮', '🏰'],
    winRate: '52%',
    difficulty: 'Medium',
    description: 'Deck clássico que usa poison para eliminar tropas de defesa.',
  },
  {
    name: 'Miner Wall Breakers',
    archetype: 'Cycle',
    cards: ['⛏️', '💣', '⚡', '🔥', '🏹', '🦇', '👻', '🏰'],
    winRate: '51%',
    difficulty: 'High',
    description: 'Deck agressivo com pressão dupla usando wall breakers.',
  },
  {
    name: 'Miner Cycle',
    archetype: 'Cycle',
    cards: ['⛏️', '⚡', '🔥', '👻', '🏹', '🛡️', '🔮', '🏰'],
    winRate: '53%',
    difficulty: 'Easy',
    description: 'Deck rápido focado em ciclo de cartas para pressão constante.',
  },
  {
    name: 'Miner Skeleton Barrel',
    archetype: 'Chip',
    cards: ['⛏️', '🎈', '⚡', '🪵', '💀', '🏹', '🦇', '🏰'],
    winRate: '50%',
    difficulty: 'Medium',
    description: 'Deck de chip damage com múltiplas ameaças aéreas.',
  },
] as const;

export const TRIVIA = {
  releaseYear: 2016,
  totalBalanceChanges: 16,
  mostUsedWith: ['Poison', 'The Log', 'Bats'],
  proPlayerUsage: 'High',
  estimatedTournamentWins: 100,
  funFacts: [
    'Primeira carta que pode ser implantada em qualquer lugar da Arena',
    'Uma das cartas lendárias mais bem balanceadas',
    'Manteve-se relevante no meta por mais de 6 anos',
    'Usado em mais de 100 decks vencedores de torneios',
    'O maior nerf foi de 35% no dano à torre em Junho de 2020',
    'Pode causar dano enquanto está cavando o túnel',
  ],
  records: {
    highestWinRate: '56%',
    lowestWinRate: '42%',
    peakUsageRate: '18%',
    currentUsageRate: '8%',
  },
} as const;

export const ACHIEVEMENTS = [
  {
    title: 'Carta Meta',
    description: 'Manteve-se como uma das cartas mais usadas por mais de 6 anos',
    icon: '🏆',
    year: '2016-2023',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Balanceamento Perfeito',
    description: 'Considerada uma das cartas mais bem balanceadas do jogo',
    icon: '⚖️',
    year: '2018-2023',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Favorita dos Pros',
    description: 'Usada por jogadores profissionais em torneios mundiais',
    icon: '⭐',
    year: '2016-2023',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Lendário Versátil',
    description: 'Funciona em diversos tipos de deck e estratégias',
    icon: '🎯',
    year: '2016-2023',
    color: 'from-green-500 to-emerald-500',
  },
] as const;

// Tipos derivados
export type MinerLevel = keyof typeof MINER_STATS_BY_LEVEL;
export type NerfType = typeof NERF_TIMELINE[number]['type'];
export type ImpactLevel = typeof NERF_TIMELINE[number]['impact'];
export type Archetype = typeof POPULAR_DECKS[number]['archetype'];

// Funções utilitárias
export const getNerfsByYear = (year: number) => {
  return NERF_TIMELINE.filter(nerf => nerf.year === year);
};

export const getNerfsByType = (type: NerfType) => {
  return NERF_TIMELINE.filter(nerf => nerf.type === type);
};

export const getNerfsByImpact = (impact: ImpactLevel) => {
  return NERF_TIMELINE.filter(nerf => nerf.impact === impact);
};

export const getStatsForLevel = (level: MinerLevel) => {
  return MINER_STATS_BY_LEVEL[level];
};

export const calculateDamageInSeconds = (seconds: number, level: MinerLevel = 14) => {
  const stats = MINER_STATS_BY_LEVEL[level];
  const hits = Math.floor(seconds / stats.attackSpeed);
  return {
    hits,
    damagePerHit: stats.damage,
    totalDamage: hits * stats.damage,
    dps: stats.dps,
  };
};

export const calculateElixirTrade = (defenseElixir: number) => {
  const difference = defenseElixir - MINER_INFO.elixirCost;
  return {
    minerCost: MINER_INFO.elixirCost,
    defenseElixir,
    difference,
    positive: difference > 0,
    percentage: ((difference / MINER_INFO.elixirCost) * 100).toFixed(0),
  };
};
