# 🎮 Mineiro - Clash Royale | História Completa e Nerfs

Um site moderno e responsivo dedicado ao **Mineiro**, uma das cartas mais icônicas do Clash Royale. Este projeto documenta toda a história da carta, desde seu lançamento em 2016 até os dias atuais, incluindo todos os balanceamentos e nerfs.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Características

- 🎨 **Design Moderno e Responsivo** - Interface elegante que funciona em todos os dispositivos
- 📊 **Estatísticas Completas** - Todas as estatísticas do Mineiro por nível
- 📜 **Histórico de Nerfs** - Timeline interativa com todos os 16+ balanceamentos
- 🎯 **Estratégias** - Guias de como usar o Mineiro efetivamente
- 🏆 **Galeria** - Skins, emotes, conquistas e decks populares
- ⚡ **Performance** - Otimizado para carregamento rápido
- 🌐 **Multi-linguagem** - Exemplos em várias linguagens de programação

## 🚀 Tecnologias Utilizadas

### Frontend (Principal)
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário

### Exemplos em Múltiplas Linguagens
O projeto inclui exemplos de implementação em:

- ✅ **TypeScript** - Tipos e classes completas
- ✅ **JavaScript (Node.js)** - Implementação para backend
- ✅ **Python** - Classes e análise de dados
- ✅ **C#** - Implementação orientada a objetos
- ✅ **PHP** - Classes modernas com PHP 8+
- ✅ **Angular** - Service e Component completos
- ✅ **JSON** - Dados estruturados para APIs

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx      # Cabeçalho com navegação
│   │   ├── Hero.tsx        # Seção hero principal
│   │   ├── MinerStats.tsx  # Estatísticas do mineiro
│   │   ├── NerfHistory.tsx # Timeline de nerfs
│   │   ├── Strategy.tsx    # Estratégias e sinergias
│   │   ├── Gallery.tsx     # Galeria de conteúdo
│   │   └── Footer.tsx      # Rodapé
│   │
│   ├── types/              # TypeScript types
│   │   └── MinerTypes.ts   # Interfaces e classes
│   │
│   ├── data/               # Dados estruturados
│   │   └── minerData.json  # JSON com todos os dados
│   │
│   ├── examples/           # Exemplos em outras linguagens
│   │   ├── node-example.js
│   │   ├── python-example.py
│   │   ├── csharp-example.cs
│   │   ├── php-example.php
│   │   ├── angular-miner.service.ts
│   │   └── angular-miner.component.ts
│   │
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos customizados
│   └── index.css           # Estilos globais
│
├── index.html              # HTML principal
├── package.json            # Dependências
└── README.md              # Este arquivo
```

## 🎯 Funcionalidades Principais

### 1. Hero Section
- Apresentação visual impactante
- Estatísticas principais (3 de elixir, 1000 de dano, 1060 HP)
- Navegação rápida para seções

### 2. Estatísticas Detalhadas
- Stats por nível (13 e 14)
- Informações de HP, Dano, DPS, Velocidade de Ataque
- Características especiais da carta

### 3. História de Nerfs (16+ Updates)
- Timeline interativa com todos os balanceamentos desde 2016
- Filtros por nível de impacto (Alto, Médio, Baixo)
- Descrições detalhadas de cada mudança
- Estatísticas resumidas

### 4. Estratégias
- Guias de uso (Ataque à Torre, Tanque, Defesa, Contra-Ataque)
- Melhores sinergias (Poison, Zap, Princesa, etc.)
- Principais contadores
- Dicas profissionais

### 5. Galeria
- Skins do Mineiro
- Emotes relacionados
- Conquistas e marcos
- Decks populares com win rates

## 🔧 Como Usar

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd miner-clash-royale

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 💻 Exemplos de Código

### TypeScript/JavaScript (React)
O site principal usa React com TypeScript. Veja os componentes em `src/components/`.

### Node.js
```javascript
const { MinerCard } = require('./src/examples/node-example.js');

const miner = new MinerCard();
console.log(miner.calculateTotalDamage(10)); // 1330 HP em 10 segundos
```

### Python
```python
from python_example import MinerCard

miner = MinerCard()
damage = miner.calculate_total_damage(10)
print(f"Dano em 10 segundos: {damage} HP")
```

### PHP
```php
<?php
require 'php-example.php';

$miner = new MinerCard();
echo $miner->toJson();
?>
```

### C#
```csharp
using ClashRoyale.Cards;

var miner = new MinerCard();
Console.WriteLine(miner.ToJson());
```

### Angular
```typescript
import { MinerService } from './angular-miner.service';

constructor(private minerService: MinerService) {}

ngOnInit() {
  const stats = this.minerService.getStats(14);
  const nerfs = this.minerService.getNerfHistory();
}
```

## 📊 Dados Disponíveis

### JSON API
Todos os dados estão disponíveis em `src/data/minerData.json`:

```json
{
  "card": {
    "name": "Miner",
    "elixirCost": 3,
    "rarity": "Legendary"
  },
  "stats": { ... },
  "nerfHistory": [ ... ],
  "synergies": [ ... ],
  "counters": [ ... ],
  "popularDecks": [ ... ]
}
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no `tailwind.config.js` e `src/App.css`:
- Primária: Purple (#8b5cf6)
- Secundária: Pink (#ec4899)
- Background: Slate (#0f172a)

### Animações
Animações customizadas em `src/App.css`:
- `float` - Animação flutuante
- `glow` - Efeito de brilho
- `fadeIn` - Transição de entrada

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fork o projeto
2. Criar uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📝 Histórico de Nerfs Resumido

- **2016-05-03**: Lançamento da carta
- **2016-2017**: Ajustes de Deploy Time e HP
- **2017-06-19**: Grande nerf na velocidade de ataque
- **2017-10-09**: Redução de dano à torre em 20%
- **2020-06-01**: Maior nerf - Dano à torre reduzido em 35%
- **2020-2021**: Buffs compensatórios graduais
- **2021-10-27**: Atualização para Nível 14
- **2022+**: Ajustes finos contínuos

## 📄 Licença

Este projeto é apenas educacional e não tem afiliação com a Supercell. Clash Royale é uma marca registrada da Supercell.

## 👨‍💻 Autor

Desenvolvido com ❤️ por fãs de Clash Royale

---

**Supercell Disclaimer**: Este conteúdo não é afiliado, endossado, patrocinado ou especificamente aprovado pela Supercell e a Supercell não é responsável por ele. Para mais informações, visite [supercell.com/fan-content-policy](https://supercell.com/en/fan-content-policy/).
