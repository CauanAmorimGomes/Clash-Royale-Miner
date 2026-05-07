import { useState } from 'react';

interface NerfData {
  date: string;
  version: string;
  changes: string[];
  impact: 'high' | 'medium' | 'low';
  description: string;
}

const NerfHistory = () => {
  const [selectedNerf, setSelectedNerf] = useState<number | null>(null);

  const nerfs: NerfData[] = [
    {
      date: '3 de Maio de 2016',
      version: 'Lançamento',
      changes: ['Carta adicionada ao jogo'],
      impact: 'high',
      description: 'O Mineiro foi lançado como uma carta lendária revolucionária, sendo a primeira carta que podia ser implantada em qualquer lugar da Arena.',
    },
    {
      date: '19 de Setembro de 2016',
      version: 'Balance Update',
      changes: [
        'Deploy Time aumentado: 0.7s → 1s',
      ],
      impact: 'low',
      description: 'Primeiro ajuste para dar aos jogadores mais tempo de reação ao ver o Mineiro sendo implantado.',
    },
    {
      date: '1 de Novembro de 2016',
      version: 'Balance Update',
      changes: [
        'HP reduzido em 6%',
      ],
      impact: 'medium',
      description: 'Redução de vida para tornar o Mineiro mais vulnerável a contra-ataques e defesas.',
    },
    {
      date: '13 de Dezembro de 2016',
      version: 'Balance Update',
      changes: [
        'Dano reduzido em 6%',
      ],
      impact: 'medium',
      description: 'Nerf no dano para reduzir sua eficiência tanto em ataque quanto em defesa.',
    },
    {
      date: '19 de Junho de 2017',
      version: 'Balance Update',
      changes: [
        'Velocidade de ataque reduzida: 1.0s → 1.2s',
        'Primeiro golpe mais rápido: 0.7s',
      ],
      impact: 'high',
      description: 'Mudança significativa no ritmo de ataque do Mineiro, reduzindo seu DPS mas mantendo sua viabilidade com um primeiro golpe mais rápido.',
    },
    {
      date: '21 de Agosto de 2017',
      version: 'Balance Update',
      changes: [
        'Deploy Time aumentado: 1s → 1.2s',
      ],
      impact: 'low',
      description: 'Mais tempo para os oponentes reagirem à implantação do Mineiro.',
    },
    {
      date: '9 de Outubro de 2017',
      version: 'Balance Update',
      changes: [
        'Dano de coroação reduzido em 20%',
        'HP reduzido em 6%',
      ],
      impact: 'high',
      description: 'Grande nerf que reduziu significativamente a capacidade do Mineiro de causar dano direto à torre.',
    },
    {
      date: '12 de Fevereiro de 2018',
      version: 'Balance Update',
      changes: [
        'Primeiro golpe: 0.7s → 1.2s (normalizado)',
      ],
      impact: 'medium',
      description: 'Remoção do primeiro golpe rápido, tornando o Mineiro mais previsível em combate.',
    },
    {
      date: '2 de Abril de 2018',
      version: 'Balance Update',
      changes: [
        'Dano de coroação aumentado em 33%',
      ],
      impact: 'medium',
      description: 'Buff parcial revertendo parte do nerf anterior de dano à torre.',
    },
    {
      date: '1 de Junho de 2020',
      version: 'Balance Update',
      changes: [
        'Dano de coroação reduzido em 35%',
      ],
      impact: 'high',
      description: 'Um dos maiores nerfs da história do Mineiro, drasticamente reduzindo seu dano direto às torres.',
    },
    {
      date: '7 de Setembro de 2020',
      version: 'Balance Update',
      changes: [
        'HP aumentado em 3%',
      ],
      impact: 'low',
      description: 'Pequeno buff compensatório para ajudar o Mineiro após o grande nerf anterior.',
    },
    {
      date: '5 de Outubro de 2020',
      version: 'Balance Update',
      changes: [
        'Dano de coroação aumentado em 10%',
      ],
      impact: 'low',
      description: 'Outro pequeno buff tentando reequilibrar a carta.',
    },
    {
      date: '6 de Janeiro de 2021',
      version: 'Balance Update',
      changes: [
        'Dano de coroação aumentado em 10%',
      ],
      impact: 'low',
      description: 'Continuação dos ajustes finos no dano à torre.',
    },
    {
      date: '7 de Junho de 2021',
      version: 'Balance Update',
      changes: [
        'HP aumentado em 3%',
      ],
      impact: 'low',
      description: 'Mais um pequeno buff de HP para melhorar a sobrevivência.',
    },
    {
      date: '27 de Outubro de 2021',
      version: 'Balance Update - Nível 14',
      changes: [
        'Ajustes para novo sistema de níveis',
        'Estatísticas rebalanceadas para Nível 14',
      ],
      impact: 'medium',
      description: 'Atualização do sistema de níveis do jogo, introduzindo o Nível 14.',
    },
    {
      date: '7 de Março de 2022',
      version: 'Balance Update',
      changes: [
        'HP reduzido em 3%',
      ],
      impact: 'low',
      description: 'Pequeno nerf ajustando o HP após buffs anteriores.',
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'from-red-500 to-orange-500';
      case 'medium':
        return 'from-yellow-500 to-orange-500';
      case 'low':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getImpactLabel = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'Alto Impacto';
      case 'medium':
        return 'Médio Impacto';
      case 'low':
        return 'Baixo Impacto';
      default:
        return 'Impacto';
    }
  };

  return (
    <section id="nerfs" className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-0 text-9xl">⛏️</div>
        <div className="absolute bottom-1/4 right-0 text-9xl">⛏️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            História de <span className="gradient-text">Balanceamentos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Uma jornada completa através de todos os nerfs e buffs do Mineiro ao longo dos anos
          </p>
          <div className="mt-6 flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
              <span className="text-sm text-gray-400">Alto Impacto</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <span className="text-sm text-gray-400">Médio Impacto</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-sm text-gray-400">Baixo Impacto</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative nerf-timeline max-w-5xl mx-auto">
          {nerfs.map((nerf, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
              }`}
            >
              <div
                className={`card-hover bg-slate-800/80 backdrop-blur-sm border-2 ${
                  selectedNerf === index ? 'border-purple-500' : 'border-purple-500/30'
                } rounded-xl p-6 ml-12 md:ml-0 cursor-pointer`}
                onClick={() => setSelectedNerf(selectedNerf === index ? null : index)}
              >
                {/* Timeline dot */}
                <div className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${getImpactColor(nerf.impact)} 
                  ${index % 2 === 0 ? 'md:right-[-12px]' : 'md:left-[-12px]'} 
                  left-[-44px] md:top-8 top-2 border-4 border-slate-900 z-10`}>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{nerf.version}</h3>
                      <p className="text-purple-400">{nerf.date}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${getImpactColor(nerf.impact)} shadow-lg`}>
                      {getImpactLabel(nerf.impact)}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {nerf.changes.map((change, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span className="text-gray-300 flex-1">{change}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedNerf === index && (
                    <div className="pt-4 border-t border-purple-500/30">
                      <p className="text-gray-400 italic">{nerf.description}</p>
                    </div>
                  )}

                  <button
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center space-x-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNerf(selectedNerf === index ? null : index);
                    }}
                  >
                    <span>{selectedNerf === index ? 'Ver menos' : 'Ver mais'}</span>
                    <span>{selectedNerf === index ? '▲' : '▼'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📊 Resumo de Mudanças
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">{nerfs.length}</div>
              <div className="text-gray-400">Total de Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">
                {nerfs.filter(n => n.impact === 'high').length}
              </div>
              <div className="text-gray-400">Alto Impacto</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {nerfs.filter(n => n.impact === 'medium').length}
              </div>
              <div className="text-gray-400">Médio Impacto</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {nerfs.filter(n => n.impact === 'low').length}
              </div>
              <div className="text-gray-400">Baixo Impacto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NerfHistory;
