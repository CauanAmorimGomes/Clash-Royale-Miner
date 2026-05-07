const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm">
                ⚡ Carta Lendária
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              O <span className="gradient-text">Mineiro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              A carta mais controversa do Clash Royale
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Desde seu lançamento, o Mineiro se tornou uma das cartas mais icônicas e balanceadas 
              do jogo. Descubra toda a história dos seus nerfs e como ele evoluiu ao longo dos anos.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg shadow-purple-500/50">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-purple-200">Elixir</div>
              </div>
              <div className="px-6 py-4 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <div className="text-3xl font-bold text-white">1000</div>
                <div className="text-sm text-gray-400">Dano</div>
              </div>
              <div className="px-6 py-4 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <div className="text-3xl font-bold text-white">1060</div>
                <div className="text-sm text-gray-400">HP</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={() => document.getElementById('nerfs')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
              >
                Ver História de Nerfs
              </button>
              <button 
                onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-purple-500/50 hover:bg-purple-600/30 hover:scale-105 transition-all duration-300"
              >
                Estratégias
              </button>
            </div>
          </div>

          {/* Miner Image/Card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border-2 border-purple-500/50 shadow-2xl float-animation">
                <div className="text-center space-y-4">
                  <div className="text-9xl mb-4">⛏️</div>
                  <h3 className="text-3xl font-bold text-white">Mineiro</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-yellow-400 text-2xl">⭐⭐⭐</span>
                  </div>
                  <div className="px-4 py-2 bg-purple-600 rounded-full text-white font-semibold">
                    Lendária
                  </div>
                  <p className="text-gray-400 text-sm max-w-xs mx-auto">
                    "Pode ser implantado em qualquer lugar da Arena. Ele cava até lá, causando dano às tropas inimigas enquanto viaja."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
