import { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('skins');

  const skins = [
    { name: 'Mineiro Original', emoji: '⛏️', rarity: 'Lendária', year: '2016' },
    { name: 'Mineiro de Natal', emoji: '🎅', rarity: 'Limitada', year: '2020' },
    { name: 'Mineiro Dourado', emoji: '👑', rarity: 'Especial', year: '2021' },
    { name: 'Mineiro das Trevas', emoji: '🌑', rarity: 'Lendária', year: '2022' },
  ];

  const emotes = [
    { name: 'Mineiro Rindo', emoji: '😄', type: 'Comum' },
    { name: 'Mineiro Chorando', emoji: '😭', type: 'Raro' },
    { name: 'Mineiro Bravo', emoji: '😠', type: 'Raro' },
    { name: 'Mineiro Pensativo', emoji: '🤔', type: 'Comum' },
    { name: 'Mineiro Comemorando', emoji: '🎉', type: 'Épico' },
    { name: 'Mineiro Dormindo', emoji: '😴', type: 'Comum' },
  ];

  const achievements = [
    {
      title: 'Carta Meta',
      description: 'Manteve-se como uma das cartas mais usadas por mais de 6 anos',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Balanceamento Perfeito',
      description: 'Considerada uma das cartas mais bem balanceadas do jogo',
      icon: '⚖️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Favorita dos Pros',
      description: 'Usada por jogadores profissionais em torneios mundiais',
      icon: '⭐',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Lendário Versátil',
      description: 'Funciona em diversos tipos de deck e estratégias',
      icon: '🎯',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const deckTypes = [
    {
      name: 'Miner Control',
      cards: ['⛏️', '⚡', '🏹', '🔥', '👸', '🦇', '💀', '🏰'],
      description: 'Deck focado em controle com pressão constante',
      winRate: '54%',
    },
    {
      name: 'Miner Poison',
      cards: ['⛏️', '☠️', '🛡️', '⚡', '👑', '🏹', '🔮', '🏰'],
      description: 'Deck clássico com poison para eliminar defesas',
      winRate: '52%',
    },
    {
      name: 'Miner Wall Breakers',
      cards: ['⛏️', '💣', '⚡', '🔥', '🏹', '🦇', '👻', '🏰'],
      description: 'Deck agressivo com pressão dupla',
      winRate: '51%',
    },
    {
      name: 'Miner Cycle',
      cards: ['⛏️', '⚡', '🔥', '👻', '🏹', '🛡️', '🔮', '🏰'],
      description: 'Deck rápido focado em ciclo de cartas',
      winRate: '53%',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria e <span className="gradient-text">Conquistas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore as variações, conquistas e decks populares do Mineiro
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('skins')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'skins'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800/50 text-gray-400 hover:text-white'
            }`}
          >
            🎨 Skins
          </button>
          <button
            onClick={() => setActiveTab('emotes')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'emotes'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800/50 text-gray-400 hover:text-white'
            }`}
          >
            😊 Emotes
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800/50 text-gray-400 hover:text-white'
            }`}
          >
            🏆 Conquistas
          </button>
          <button
            onClick={() => setActiveTab('decks')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'decks'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800/50 text-gray-400 hover:text-white'
            }`}
          >
            🃏 Decks
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Skins Tab */}
          {activeTab === 'skins' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              {skins.map((skin, index) => (
                <div
                  key={index}
                  className="card-hover bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center"
                >
                  <div className="text-8xl mb-4">{skin.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{skin.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-xs">
                      {skin.rarity}
                    </span>
                    <span className="text-gray-400 text-sm">{skin.year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Emotes Tab */}
          {activeTab === 'emotes' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-fadeIn">
              {emotes.map((emote, index) => (
                <div
                  key={index}
                  className="card-hover bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center"
                >
                  <div className="text-6xl mb-3">{emote.emoji}</div>
                  <h3 className="text-sm font-bold text-white mb-1">{emote.name}</h3>
                  <span className="inline-block px-2 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-xs">
                    {emote.type}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-hover bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-5xl bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Decks Tab */}
          {activeTab === 'decks' && (
            <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
              {deckTypes.map((deck, index) => (
                <div
                  key={index}
                  className="card-hover bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{deck.name}</h3>
                    <span className="px-4 py-2 bg-green-600/30 border border-green-500/50 rounded-full text-green-300 text-sm font-bold">
                      {deck.winRate} WR
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{deck.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {deck.cards.map((card, i) => (
                      <div
                        key={i}
                        className="w-14 h-14 bg-slate-700/50 rounded-lg flex items-center justify-center text-3xl hover:bg-slate-600/50 transition-all"
                      >
                        {card}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📈 Estatísticas Interessantes
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🎮</div>
              <div className="text-3xl font-bold text-purple-300 mb-1">8+</div>
              <div className="text-gray-400">Anos no Jogo</div>
            </div>
            <div>
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold text-purple-300 mb-1">Milhões</div>
              <div className="text-gray-400">de Jogadores Usaram</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🏅</div>
              <div className="text-3xl font-bold text-purple-300 mb-1">100+</div>
              <div className="text-gray-400">Vitórias em Torneios</div>
            </div>
            <div>
              <div className="text-4xl mb-2">💎</div>
              <div className="text-3xl font-bold text-purple-300 mb-1">40.000</div>
              <div className="text-gray-400">Ouro para Maxar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
