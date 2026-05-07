# 🚀 Guia de Início Rápido

## Visualizar o Site

O site já está pronto para uso! Aqui está como você pode visualizá-lo:

### Opção 1: Desenvolvimento Local (Recomendado)

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra no navegador
# O terminal mostrará o endereço (geralmente http://localhost:5173)
```

### Opção 2: Build de Produção

```bash
# 1. Gere o build
npm run build

# 2. Visualize o build
npm run preview
```

## 📱 Navegação do Site

O site possui as seguintes seções principais:

### 🏠 **Início (Hero)**
- Apresentação visual do Mineiro
- Estatísticas principais
- Botões de navegação rápida

### 📊 **Estatísticas**
- Stats completos por nível
- Características únicas
- Curiosidades sobre a carta

### ⚔️ **Nerfs**
- Timeline interativa com 16+ balanceamentos
- Filtros por impacto (Alto, Médio, Baixo)
- Detalhes de cada mudança desde 2016

### 🎯 **Estratégias**
- 4 tipos de estratégias (Ataque, Tanque, Defesa, Contra-ataque)
- Melhores sinergias com outras cartas
- Principais contadores
- Dicas profissionais

### 🖼️ **Galeria**
- Skins do Mineiro
- Emotes relacionados
- Conquistas históricas
- Decks populares com win rates

## 🎨 Características Visuais

### Design Moderno
- ✨ Gradientes purple/pink
- 🌟 Animações suaves
- 💫 Efeitos de hover interativos
- 🎭 Cards com glassmorphism

### Responsividade Total
- 📱 Mobile first
- 📱 Tablet otimizado
- 💻 Desktop completo
- 🖥️ Large screens

## 🛠️ Usando os Exemplos em Outras Linguagens

### TypeScript
```typescript
import { MinerCard } from './src/types/MinerTypes';

const miner = new MinerCard();
const stats = miner.getStatsForLevel(14);
const damage = miner.calculateTowerDamage(10);
```

### JavaScript (Node.js)
```bash
# Execute o exemplo
node src/examples/node-example.js
```

### Python
```bash
# Execute o exemplo
python src/examples/python-example.py
```

### PHP
```bash
# Execute o exemplo
php src/examples/php-example.php
```

### C#
```bash
# Compile e execute (requer .NET)
csc src/examples/csharp-example.cs
./csharp-example
```

### Angular
Os arquivos em `src/examples/angular-*.ts` podem ser copiados para um projeto Angular existente.

## 📊 Acessando os Dados

### JSON Direto
```javascript
import minerData from './src/data/minerData.json';

console.log(minerData.card.name); // "Miner"
console.log(minerData.stats.level14.hitpoints); // 1060
console.log(minerData.nerfHistory.length); // 16+
```

### Via TypeScript Classes
```typescript
import { MinerCard, calculateElixirTrade } from './src/types/MinerTypes';

const miner = new MinerCard();
const canSurvive = miner.canSurvive(1000, 14); // true
const trade = calculateElixirTrade(3, 4); // { positive: true, difference: 1 }
```

## 🎯 Principais Recursos

### Timeline de Nerfs Interativa
- Clique em qualquer nerf para ver mais detalhes
- Use os filtros para ver apenas nerfs de alto/médio/baixo impacto
- Indicadores visuais coloridos por nível de impacto

### Menu de Navegação
- Menu sticky que acompanha o scroll
- Navegação suave entre seções
- Menu mobile responsivo

### Animações
- Float animation no card principal
- Glow effects nos botões
- Hover states em todos os elementos interativos
- Fade in ao trocar de aba na galeria

## 💡 Dicas de Uso

1. **Scroll Suave**: Clique nos botões do menu para navegar suavemente entre seções
2. **Timeline**: Role pela timeline de nerfs para ver toda a história desde 2016
3. **Hover**: Passe o mouse sobre os cards para ver efeitos interativos
4. **Mobile**: O menu hambúrguer no mobile dá acesso a todas as seções
5. **Scroll to Top**: Use o botão no canto inferior direito para voltar ao topo

## 🔍 Estrutura de Dados

### Carta
```typescript
{
  name: "Miner",
  rarity: "Legendary",
  elixirCost: 3,
  type: "Troop"
}
```

### Stats
```typescript
{
  hitpoints: 1060,
  damage: 160,
  dps: 133,
  attackSpeed: 1.2
}
```

### Nerf
```typescript
{
  date: "2020-06-01",
  version: "Balance Update",
  changes: ["Crown Tower damage decreased by 35%"],
  impact: "high",
  description: "Um dos maiores nerfs da história"
}
```

## 🎨 Personalização Rápida

### Mudar Cores Principais
Edite `src/App.css`:
```css
.gradient-text {
  background: linear-gradient(135deg, #sua-cor-1 0%, #sua-cor-2 100%);
}
```

### Adicionar Novo Nerf
Edite `src/components/NerfHistory.tsx` e adicione ao array `nerfs`:
```typescript
{
  date: 'YYYY-MM-DD',
  version: 'Nome da Versão',
  changes: ['Mudança 1', 'Mudança 2'],
  impact: 'high' | 'medium' | 'low',
  description: 'Descrição detalhada'
}
```

### Adicionar Nova Estratégia
Edite `src/components/Strategy.tsx` e adicione ao array `strategies`.

## 🐛 Troubleshooting

### Build Error
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Porta em Uso
```bash
# Use uma porta diferente
npm run dev -- --port 3000
```

## 📚 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Documentação TypeScript](https://www.typescriptlang.org)
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [Clash Royale API](https://developer.clashroyale.com)

## 🎉 Pronto!

Seu site sobre o Mineiro do Clash Royale está pronto para uso! Explore todas as seções e aproveite os exemplos de código em múltiplas linguagens.

---

**Desenvolvido com ❤️ para a comunidade Clash Royale**
