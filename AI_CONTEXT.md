# Contexto do projeto (para IA)

## Resumo
- **Projeto**: `geoprodutos-front`
- **Objetivo**: front-end (web) para a loja “Geoprodutos” (Geoparque Uberaba).
- **Status**: scaffold inicial com React + Vite; UI ainda bem simples.

## Stack / ferramentas
- **React** (SPA)
- **Vite** (dev server / build)
- **ESLint** (lint)
- **Node**: necessário para rodar scripts do Vite

## Como rodar
- Dev server: `npm install` e `npm run dev`
- Build: `npm run build`
- Preview do build: `npm run preview`
- Lint: `npm run lint`

## Decisões de UI atuais
- **Cor terracota** (tema): `#C84C31`
  - Aplicada no `Header` e no fundo global/raiz (para a página não ficar branca).

## Estrutura de pastas (principais)
- `src/main.jsx`: bootstrap do React e import do CSS global.
- `src/index.css`: estilos globais (reset + fundo/cores).
- `src/App.jsx`: página inicial (conteúdo principal).
- `src/components/Header.jsx`: cabeçalho com navegação.
- `public/`: assets públicos.

## Padrões / convenções do código
- Componentes em React Function Components.
- Estilos atualmente misturam **CSS global** (`src/index.css`) e **inline styles** em alguns componentes.

## O que NÃO existe ainda (esperado para próximas etapas)
- Rotas (React Router)
- Estado global (carrinho, catálogo real)
- Integração com API/back-end
- Páginas de catálogo/carrinho/checkout

## Repositório remoto
- GitHub: https://github.com/caiocusinato/geoprodutos-front
