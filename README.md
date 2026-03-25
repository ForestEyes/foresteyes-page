# ForestEyes

Site institucional do projeto ForestEyes, iniciativa que combina Ciencia Cidada e Aprendizado de Maquina para apoiar a deteccao de desmatamento em florestas tropicais.

## Sobre o projeto

O objetivo desta aplicacao e apresentar o projeto ForestEyes de forma clara e acessivel para publico academico e geral, com informacoes sobre:

- proposta e contexto do projeto
- participacao de voluntarios em ciencia cidada
- funcionamento geral da plataforma
- equipe, parceiros, midia e contatos
- producao academica (periodicos, simposios, resumos, teses e TCCs)

O site possui suporte a dois idiomas (PT/EN) com alternancia em tempo real na interface.

## Funcionalidades implementadas

- navegacao de pagina unica com seções ancoradas
- menu responsivo para desktop e mobile
- alternancia de idioma (portugues/ingles)
- secao de publicacoes com abas por tipo de producao
- aba de teses com links para tese e monografia/TCC
- pagina 404 para rotas inexistentes

## Stack tecnica

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui (Radix UI)
- React Router DOM
- TanStack Query
- Vitest + Testing Library
- ESLint

## Estrutura principal

```text
src/
	components/            # secoes da landing page e componentes de UI
	contexts/              # contexto de idioma
	pages/                 # paginas (Index e NotFound)
	test/                  # testes unitarios/configuracao
	App.tsx                # providers e rotas
```

## Como executar localmente

### Pre-requisitos

- Node.js 18+ (recomendado 20+)
- npm

### Passos

```bash
git clone https://github.com/gabrielcampanile/foresteyes.git
cd foresteyes
npm install
npm run dev
```

Aplicacao em desenvolvimento: `http://localhost:5173`

## Scripts disponiveis

- `npm run dev`: inicia ambiente de desenvolvimento com Vite
- `npm run build`: gera build de producao
- `npm run build:dev`: gera build com modo development
- `npm run preview`: sobe preview da build local
- `npm run lint`: executa lint com ESLint
- `npm run test`: executa testes uma vez
- `npm run test:watch`: executa testes em modo watch

## Publicacoes

A secao de publicacoes esta organizada por categorias:

- Periodicos
- Simposios
- Resumos Expandidos
- Resumos
- Teses

Na aba Teses, os links exibidos usam o rotulo Link (em vez de DOI) para documentos sem DOI oficial.

## Contribuicao

Contribuicoes sao bem-vindas. Fluxo sugerido:

1. Criar uma branch para a alteracao
2. Implementar e validar com lint/testes
3. Abrir Pull Request com descricao clara

## Licenca

Definir licenca do projeto (ex.: MIT, Apache-2.0) e adicionar arquivo `LICENSE`.
