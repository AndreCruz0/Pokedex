# 🗭 Pokédex React — Projeto com Estilo Retrô, Visual Sofisticado e Interativo

Este é um projeto completo de Pokédex construído com **React** e **TailwindCSS**, inspirado no visual clássico da Pokédex, com um toque moderno e interativo. A aplicação apresenta uma experiência responsiva, estilosa, funcional e imersiva para explorar os Pokémon de forma intuitiva.

## 🌟 Funcionalidades

* 🌟 **Visual estilo Pokédex real com painel e cilindro central** — Interface inspirada na Pokédex clássica com visual retrô moderno.
* 💡 **Tema escuro e claro com transição suave** — Alternância de tema com botão, armazenando preferência global via contexto.
* 💅 **Estilização dinâmica com gradientes baseados no tipo do Pokémon** — Cada detalhe é personalizado com gradientes suaves para uma experiência visual rica e imersiva.
* ⚖️ **Alternância entre sprites normal e shiny** — Usuário pode visualizar as duas versões de sprites de cada Pokémon.
* ⌚ **Skeleton loaders e placeholders SVG para carregamento elegante** — Carregamento visualmente amigável com esqueleto animado e fallback SVG.
* 🔍 **Visualização completa de detalhes, habilidades e movimentos** — Tela de detalhes inclui nome, imagem, tipos, habilidades e movimentos.
* 📄 **Modal para exibir detalhes de cada movimento clicado** — Modal detalhado com descrição, tipo, efeito e atributos do movimento.
* ➕ **Botão "Carregar Mais Pokémons" com paginação automática** — Lista de Pokémons com botão de paginação para buscar mais resultados sem recarregar a página.
* 🧠 **Gerenciamento global com React Context API** — Contextos compartilhados para tema, offset de Pokémons, e dados da Pokédex.
* 🛠️ **Componentização total para escalabilidade** — Componentes modulares separados por responsabilidade: Painéis, Skeletons, Header, Cards, Modal, etc.
* 🚀 **Layout responsivo e adaptado para mobile/desktop** — Totalmente responsivo, com layout adaptável para diferentes resoluções de tela.


## 📁 Estrutura de Pastas

```bash
src/
├── assets/
│   └── colors.json              # Gradientes por tipo de Pokémon
├── components/
│   ├── ButtonTheme/            # Botão para alternar o tema (dark/light)
│   ├── PokedexBody/            # Layout da Pokédex com shell retrô
│   ├── PokemonDetails/         # Header, Moves, Abilities, Types, MoveModal
│   └── Skeleton/               # Skeleton loader e placeholder SVG
├── context/
│   ├── Details-context.js      # Armazena os dados do Pokémon clicado
│   └── Theme-context.js        # Armazena o tema selecionado (dark/light)
├── pages/
│   └── PokemonDetails.jsx      # Tela de detalhes completa com fundo dinâmico
├── services/
│   └── LoadDetails.js          # Carregamento de dados extras da PokéAPI
└── App.jsx                     # Entrypoint principal
```

## 🖌️ Gradientes por Tipo

O fundo da página de detalhes é customizado com base no tipo do Pokémon, utilizando gradientes bonitos, definidos em `assets/colors.json`.

```json
{
  "fire": "from-orange-400 via-red-500 to-red-700",
  "water": "from-blue-400 via-blue-600 to-blue-800",
  "grass": "from-green-300 via-green-500 to-green-700",
  "electric": "from-yellow-300 via-yellow-500 to-yellow-700",
  "psychic": "from-pink-400 via-pink-600 to-purple-700",
  "ghost": "from-indigo-400 via-purple-600 to-indigo-800",
  "dragon": "from-indigo-300 via-blue-500 to-purple-700",
  "ice": "from-cyan-300 via-blue-400 to-blue-600",
  "fighting": "from-orange-300 via-red-400 to-red-600",
  "poison": "from-purple-300 via-purple-500 to-purple-700",
  "rock": "from-yellow-600 via-yellow-700 to-yellow-800",
  "ground": "from-yellow-500 via-yellow-600 to-yellow-700",
  "bug": "from-lime-300 via-green-400 to-green-600",
  "fairy": "from-pink-200 via-pink-400 to-pink-600",
  "dark": "from-gray-800 via-gray-900 to-black",
  "steel": "from-gray-300 via-gray-500 to-gray-700",
  "flying": "from-blue-200 via-blue-300 to-blue-500",
  "normal": "from-gray-900 via-gray-800 to-gray-700",
  "default": "from-gray-200 via-gray-300 to-gray-400"
}
```

## ⚡️ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/pokedex-react.git
cd pokedex-react
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

## 🎓 Tecnologias Utilizadas

* [React](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [PokéAPI](https://pokeapi.co/)
* [React Router](https://reactrouter.com/)
* [Context API](https://reactjs.org/docs/context.html)

## 📸 Video do Projeto

<img  src="./public/pokemon.gif" />


---

Feito com ❤️ por um verdadeiro mestre Pokémon 
