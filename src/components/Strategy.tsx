const Strategy = () => {
  const strategies = [
    {
      title: 'Ataque à Torre',
      icon: '🏰',
      description: 'Use o Mineiro para atingir diretamente a torre do oponente, forçando-o a gastar elixir em defesa.',
      tips: [
        'Implante próximo à torre para maximizar o dano',
        'Combine com outras tropas para sobrecarregar a defesa',
        'Use quando o oponente estiver com baixo elixir',
      ],
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Tanque para Tropas',
      icon: '🛡️',
      description: 'O Mineiro pode ser usado como tanque para proteger tropas de suporte que causam dano.',
      tips: [
        'Combine com Mago ou Bruxa para maximizar o dano',
        'Implante na frente das suas tropas de suporte',
        'Excelente com tropas voadoras de suporte',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Defesa Surpresa',
      icon: '⚔️',
      description: 'Implante o Mineiro diretamente em cima de tropas inimigas ou próximo ao suporte delas.',
      tips: [
        'Ótimo contra Princesa, Arqueiras e Mosqueteira',
        'Pode eliminar tropas de suporte rapidamente',
        'Causa dano durante o túnel',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Contra-Ataque',
      icon: '🎯',
      description: 'Após defender um ataque, use o Mineiro na outra ponte para pressionar ambas as torres.',
      tips: [
        'Force o oponente a dividir sua defesa',
        'Aproveite quando ele estiver sem elixir',
        'Combine com tropas sobreviventes da defesa',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const synergies = [
    { card: '⚡', name: 'Poison', reason: 'Elimina tropas de defesa' },
    { card: '🔥', name: 'Zap', reason: 'Reseta torres e tropas' },
    { card: '👸', name: 'Princesa', reason: 'Pressão em duas pistas' },
    { card: '🏹', name: 'Arqueiras Mágicas', reason: 'Suporte aéreo forte' },
    { card: '💀', name: 'Bola de Fogo', reason: 'Remove defesas' },
    { card: '🦇', name: 'Morcegos', reason: 'Tanque de dano rápido' },
  ];

  const counters = [
    { card: '🗡️', name: 'Mini P.E.K.K.A', danger: 'high' },
    { card: '👑', name: 'Cavaleiro', danger: 'medium' },
    { card: '👻', name: 'Espíritos', danger: 'low' },
    { card: '⚡', name: 'Zap + Tropas', danger: 'medium' },
    { card: '🔥', name: 'Valquíria', danger: 'high' },
    { card: '🏰', name: 'Torre + Tropa', danger: 'medium' },
  ];

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="strategy" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estratégias e <span className="gradient-text">Sinergias</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Aprenda a usar o Mineiro de forma eficiente em suas partidas
          </p>
        </div>

        {/* Main Strategies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="card-hover bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <div className={`text-5xl bg-gradient-to-r ${strategy.color} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {strategy.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{strategy.title}</h3>
                  <p className="text-gray-400 mb-4">{strategy.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase">Dicas:</h4>
                    {strategy.tips.map((tip, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Synergies and Counters */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Synergies */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🤝</span>
              Melhores Sinergias
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {synergies.map((synergy, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-slate-700/50 transition-all"
                >
                  <div className="text-4xl mb-2">{synergy.card}</div>
                  <div className="text-white font-semibold mb-1">{synergy.name}</div>
                  <div className="text-xs text-gray-400">{synergy.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Counters */}
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              Principais Contadores
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {counters.map((counter, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-slate-700/50 transition-all"
                >
                  <div className="text-4xl mb-2">{counter.card}</div>
                  <div className="text-white font-semibold mb-2">{counter.name}</div>
                  <div className="flex items-center justify-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${getDangerColor(counter.danger)}`}></div>
                    <div className={`w-2 h-2 rounded-full ${counter.danger === 'medium' || counter.danger === 'high' ? getDangerColor(counter.danger) : 'bg-gray-600'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${counter.danger === 'high' ? getDangerColor(counter.danger) : 'bg-gray-600'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <span className="text-3xl mr-3">💎</span>
            Dicas Profissionais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">⏱️</div>
              <h4 className="text-lg font-bold text-white mb-2">Timing Perfeito</h4>
              <p className="text-gray-400 text-sm">
                Espere o momento certo quando o oponente usar elixir em outra pista
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎭</div>
              <h4 className="text-lg font-bold text-white mb-2">Seja Imprevisível</h4>
              <p className="text-gray-400 text-sm">
                Varie a posição de implantação para surpreender o adversário
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🧮</div>
              <h4 className="text-lg font-bold text-white mb-2">Conte o Elixir</h4>
              <p className="text-gray-400 text-sm">
                Sempre saiba quanto elixir seu oponente tem disponível
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
