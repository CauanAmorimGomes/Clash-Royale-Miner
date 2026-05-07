# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o projeto **Mineiro - Clash Royale**! Este documento fornece diretrizes para contribuições.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Funcionalidades](#sugerir-funcionalidades)
- [Pull Requests](#pull-requests)
- [Padrões de Código](#padrões-de-código)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 🚀 Como Contribuir

### 1. Fork o Repositório
```bash
# Clone seu fork
git clone https://github.com/seu-usuario/miner-clash-royale.git
cd miner-clash-royale
```

### 2. Crie uma Branch
```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/minha-nova-funcionalidade
# ou
git checkout -b fix/corrigir-bug
```

### 3. Faça suas Mudanças
```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Faça suas alterações...
```

### 4. Teste suas Mudanças
```bash
# Execute o build para verificar erros
npm run build

# Teste em diferentes tamanhos de tela
# Verifique a responsividade
```

### 5. Commit suas Mudanças
```bash
# Adicione seus arquivos
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"
```

### 6. Push e Pull Request
```bash
# Push para seu fork
git push origin feature/minha-nova-funcionalidade

# Abra um Pull Request no GitHub
```

## 🐛 Reportar Bugs

Se você encontrou um bug, por favor:

1. **Verifique** se já não existe uma issue sobre o bug
2. **Crie** uma nova issue com:
   - Título claro e descritivo
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)
   - Informações do ambiente (navegador, OS, etc.)

### Template de Bug Report

```markdown
**Descrição do Bug**
Uma descrição clara do que é o bug.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
 - OS: [ex: Windows 10]
 - Navegador: [ex: Chrome 120]
 - Versão: [ex: 1.0.0]
```

## 💡 Sugerir Funcionalidades

Sugestões de funcionalidades são bem-vindas! Por favor:

1. **Verifique** se a funcionalidade já não foi sugerida
2. **Crie** uma issue com:
   - Título claro
   - Descrição detalhada da funcionalidade
   - Por que seria útil
   - Exemplos de uso (se possível)
   - Mockups ou wireframes (opcional)

## 🔄 Pull Requests

### Checklist antes de Submeter

- [ ] O código segue os padrões do projeto
- [ ] Comentários foram adicionados quando necessário
- [ ] A documentação foi atualizada (se necessário)
- [ ] O build passa sem erros (`npm run build`)
- [ ] Testei em diferentes tamanhos de tela
- [ ] Commits seguem o padrão de mensagens
- [ ] Branch está atualizada com a main

### Tipos de Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

### Exemplos de Commits

```bash
feat: adiciona filtro de nerfs por ano
fix: corrige scroll suave no mobile
docs: atualiza README com novas instruções
style: formata código com prettier
refactor: reorganiza componentes em pastas
perf: otimiza carregamento de imagens
```

## 📝 Padrões de Código

### TypeScript/React

```typescript
// Use interfaces para tipos complexos
interface Props {
  name: string;
  level?: number;
}

// Componentes funcionais com arrow functions
const MyComponent = ({ name, level = 14 }: Props) => {
  return <div>{name}</div>;
};

// Export default no final
export default MyComponent;
```

### CSS/Tailwind

```tsx
// Prefira Tailwind classes
<div className="bg-purple-600 text-white rounded-lg p-4">
  Content
</div>

// CSS custom apenas quando necessário
// Use classes semânticas em App.css
```

### Nomeação

```typescript
// Componentes: PascalCase
const MinerCard = () => {};

// Funções: camelCase
const calculateDamage = () => {};

// Constantes: UPPER_CASE
const MAX_LEVEL = 14;

// Interfaces: PascalCase com prefixo I (opcional)
interface MinerStats {}
```

### Formatação

- **Indentação**: 2 espaços
- **Aspas**: Simples para strings
- **Ponto e vírgula**: Opcional mas consistente
- **Max line length**: 100 caracteres

## 🗂️ Estrutura do Projeto

### Adicionar Novo Componente

```bash
src/components/
  └── NovoComponente.tsx
```

```typescript
// src/components/NovoComponente.tsx
const NovoComponente = () => {
  return (
    <section id="novo-componente" className="py-20">
      {/* Seu código */}
    </section>
  );
};

export default NovoComponente;
```

### Adicionar Novo Tipo

```bash
src/types/
  └── NovoTipo.ts
```

```typescript
// src/types/NovoTipo.ts
export interface NovoTipo {
  id: number;
  name: string;
}
```

### Adicionar Dados

```bash
src/data/
  └── novoDado.json
```

## 🎨 Guia de Estilo Visual

### Cores

```css
/* Principais */
--purple: #8b5cf6
--pink: #ec4899
--slate: #0f172a

/* Estados */
--success: #10b981
--warning: #f59e0b
--error: #ef4444
```

### Espaçamento

```css
/* Use classes Tailwind */
p-4   /* 1rem = 16px */
p-6   /* 1.5rem = 24px */
p-8   /* 2rem = 32px */
```

### Tipografia

```css
/* Títulos */
text-4xl md:text-5xl  /* Hero */
text-2xl md:text-3xl  /* Section titles */
text-xl               /* Subtitles */

/* Corpo */
text-base             /* Padrão */
text-sm               /* Pequeno */
```

## 🧪 Testes

Atualmente o projeto não possui testes automatizados, mas contribuições nessa área são bem-vindas!

### Checklist Manual

- [ ] Navegação funciona em todas as seções
- [ ] Responsividade em mobile (320px+)
- [ ] Responsividade em tablet (768px+)
- [ ] Responsividade em desktop (1024px+)
- [ ] Animações funcionam suavemente
- [ ] Sem erros no console
- [ ] Links funcionam corretamente

## 📚 Recursos

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide)

## ❓ Dúvidas

Se tiver dúvidas:

1. Verifique a documentação existente
2. Procure em issues fechadas
3. Abra uma nova issue com a tag `question`

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

---

## 🎯 Áreas que Precisam de Contribuição

### Alta Prioridade
- [ ] Adicionar testes automatizados
- [ ] Melhorar acessibilidade (ARIA labels)
- [ ] Otimizar performance de animações
- [ ] Adicionar mais exemplos de código

### Média Prioridade
- [ ] Adicionar mais skins/emotes
- [ ] Criar versão em inglês
- [ ] Adicionar mais decks populares
- [ ] Melhorar SEO

### Baixa Prioridade
- [ ] Dark/Light mode toggle
- [ ] Exportar dados para PDF
- [ ] Adicionar gráficos interativos
- [ ] Integração com API oficial

---

**Obrigado por contribuir! 🎉**
