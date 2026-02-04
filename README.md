# PagSoftware

Plataforma de financiamento para software B2B. Permite que compradores paguem em parcelas enquanto fornecedores recebem à vista.

## Características

- Taxa fixa de 2,5% a.m.
- Aprovação em até 24h
- 100% online
- Simulador interativo de financiamento

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

## Tecnologias

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## Deploy

Configurado para deploy no Vercel com domínio pagsoftware.com.br

## Estrutura

```
src/
  app/           # App Router do Next.js
    layout.tsx   # Layout principal
    page.tsx     # Homepage com simulador
    globals.css  # Estilos globais
  components/    # Componentes reutilizáveis
  lib/          # Utilitários e helpers
```