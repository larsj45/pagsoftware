# PagSoftware 🚀

Plataforma de financiamento para software B2B. Permite que compradores paguem em parcelas enquanto fornecedores recebem à vista.

## 🎯 Características

- ✅ **Taxa fixa de 2,5% a.m.** - transparente e competitiva
- ✅ **Aprovação em até 24h** - processo automatizado
- ✅ **100% online** - sem burocracia ou papelada
- ✅ **Simulador interativo** - cálculo em tempo real
- ✅ **WhatsApp integrado** - solicitação direta pelo chat

## 🛠️ Tecnologias

- **Framework:** Next.js 15 com App Router
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS + Glassmorphism
- **UI:** React 19
- **Email:** Resend API
- **Deploy:** Vercel
- **Domínio:** pagsoftware.com.br

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/larsj45/pagsoftware.git
cd pagsoftware

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

## ⚙️ Configuração

### **1. Variáveis de Ambiente**

Copie `.env.example` para `.env.local` e configure:

```bash
cp .env.example .env.local
```

**Variáveis obrigatórias:**
```env
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXX
```

### **2. Resend (Email)**

1. Crie conta em [resend.com](https://resend.com)
2. Gere uma API key
3. Configure domínio `pagsoftware.com.br` no Resend
4. Adicione a chave em `.env.local`

### **3. Deploy no Vercel**

Configure as variáveis no painel do Vercel:
- `RESEND_API_KEY`
- `CONTACT_EMAIL=contato@pagsoftware.com.br`

## 📦 Scripts disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Linting com ESLint
```

## 🏗️ Estrutura do projeto

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── layout.tsx       # Layout raiz da aplicação
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/          # Componentes reutilizáveis
│   └── SimuladorFinanciamento.tsx
└── lib/                 # Utilitários e helpers
```

## 🚀 Deploy no Vercel

1. **Conectar repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório `pagsoftware`

2. **Configurar domínio:**
   - Vá em Project Settings > Domains
   - Adicione `pagsoftware.com.br`
   - Configure DNS: CNAME `pagsoftware` → `cname.vercel-dns.com`

3. **Deploy automático:**
   - Commits na branch `main` fazem deploy automático
   - Preview deployments para PRs

## 📊 Funcionalidades do simulador

- **Input formatado** em reais (R$)
- **Slider de parcelas** (3x a 36x)
- **Cálculo em tempo real:**
  - Valor da parcela mensal
  - Valor total a pagar
  - Juros total
- **Integração WhatsApp** para solicitação

## 📞 Contato

- **WhatsApp:** +55 11 97353-1005
- **Desenvolvido por:** Lars Janér

## 📄 Licença

Propriedade privada - Todos os direitos reservados.
