const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Clash Royale', url: '#', icon: '🎮' },
    { name: 'Supercell', url: '#', icon: '🏢' },
    { name: 'Wiki', url: '#', icon: '📚' },
    { name: 'API', url: '#', icon: '🔌' },
  ];

  const social = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'Reddit', icon: '🔴', url: '#' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-purple-500/30 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 text-9xl">⛏️</div>
        <div className="absolute bottom-0 right-1/4 text-9xl">⛏️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-purple-500/50">
                ⛏️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Mineiro - Clash Royale</h3>
                <p className="text-sm text-purple-300">História Completa e Nerfs</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Um site dedicado a documentar toda a história do Mineiro, uma das cartas mais 
              icônicas do Clash Royale. Desde seu lançamento até os dias de hoje.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Desenvolvido com</span>
              <span className="text-red-500 text-xl">❤️</span>
              <span>por fãs de Clash Royale</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Redes Sociais</h4>
            <ul className="space-y-2">
              {social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">2016</div>
            <div className="text-sm text-gray-400">Ano de Lançamento</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">16+</div>
            <div className="text-sm text-gray-400">Balanceamentos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">3</div>
            <div className="text-sm text-gray-400">Custo de Elixir</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-sm text-gray-400">Possibilidades</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Mineiro Clash Royale. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Contato
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            Este site não é afiliado à Supercell. Clash Royale é uma marca registrada da Supercell.
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-110 transition-all z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
