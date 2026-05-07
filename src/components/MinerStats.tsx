const MinerStats = () => {
  const stats = [
    { label: 'Custo de Elixir', value: '3', icon: '💧', color: 'from-blue-500 to-cyan-500' },
    { label: 'Tipo', value: 'Tropa', icon: '🎯', color: 'from-purple-500 to-pink-500' },
    { label: 'Raridade', value: 'Lendária', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
    { label: 'Alcance', value: 'Curto', icon: '📏', color: 'from-green-500 to-emerald-500' },
    { label: 'Velocidade', value: 'Rápida', icon: '⚡', color: 'from-red-500 to-pink-500' },
    { label: 'Alvo', value: 'Terrestre', icon: '🎪', color: 'from-indigo-500 to-purple-500' },
  ];

  const attributes = [
    {
      title: 'Habilidade Única',
      description: 'Pode ser implantado em qualquer lugar da Arena',
      icon: '🎯',
      highlight: true,
    },
    {
      title: 'Túnel Subterrâneo',
      description: 'Viaja sob o solo até o ponto de destino',
      icon: '🔽',
      highlight: false,
    },
    {
      title: 'Dano Durante Viagem',
      description: 'Causa dano a tropas inimigas durante o túnel',
      icon: '💥',
      highlight: false,
    },
    {
      title: 'Versátil',
      description: 'Excelente para defesa e ataque',
      icon: '⚔️',
      highlight: false,
    },
  ];

  return (
    <section id="stats" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estatísticas do <span className="gradient-text">Mineiro</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça todos os detalhes e características desta carta lendária
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-hover bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center"
            >
              <div className={`text-5xl mb-3 bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">📊</span>
              Estatísticas Base (Nível 14)
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Pontos de Vida</span>
                <span className="text-2xl font-bold text-green-400">1060</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Dano</span>
                <span className="text-2xl font-bold text-red-400">160</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">DPS</span>
                <span className="text-2xl font-bold text-orange-400">133</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Velocidade de Ataque</span>
                <span className="text-2xl font-bold text-blue-400">1.2s</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Tempo de Deploy</span>
                <span className="text-2xl font-bold text-purple-400">1s</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Tempo de Túnel</span>
                <span className="text-2xl font-bold text-pink-400">1s</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {attributes.map((attr, index) => (
              <div
                key={index}
                className={`card-hover ${
                  attr.highlight
                    ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-500'
                    : 'bg-slate-800/50 border border-purple-500/30'
                } backdrop-blur-sm rounded-xl p-6`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl bg-slate-700/50 w-14 h-14 rounded-lg flex items-center justify-center">
                    {attr.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{attr.title}</h4>
                    <p className="text-gray-400">{attr.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <span className="text-3xl mr-3">💡</span>
            Curiosidades
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🗓️</div>
              <div className="text-xl font-bold text-purple-300 mb-1">Maio 2016</div>
              <div className="text-gray-400">Data de Lançamento</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-xl font-bold text-purple-300 mb-1">Top 10</div>
              <div className="text-gray-400">Cartas Mais Usadas</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-xl font-bold text-purple-300 mb-1">15+</div>
              <div className="text-gray-400">Balanceamentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinerStats;
