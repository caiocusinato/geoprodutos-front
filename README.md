# Geoprodutos (Monorepo)

Estrutura do repositório:

- `geoprodutos-front/` — Frontend (Vite + React)
- `geoprodutos-back/` — Backend (Express + MySQL)

## Rodar o projeto

Instalar dependências (uma vez):

- `npm run install:all`

Rodar o backend (porta 3000):

- `npm run start:back`

Rodar o frontend (porta 5173):

- `npm run dev:front`

## Variáveis de ambiente (backend)

No backend, copie o exemplo e preencha:

- `cp geoprodutos-back/.env.example geoprodutos-back/.env`
