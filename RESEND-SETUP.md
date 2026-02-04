# 📧 Configuração Resend - PagSoftware

## 🚀 Setup Rápido

### **1. Criar conta Resend**
- Acesse: https://resend.com
- Cadastre-se (grátis: 3.000 emails/mês)
- Confirme email

### **2. Obter API Key**
1. Dashboard Resend → **API Keys**
2. **Create API Key**
3. Nome: `PagSoftware Production`
4. **Copie a chave** (começar com `re_...`)

### **3. Configurar domínio**
1. Dashboard Resend → **Domains**
2. **Add Domain:** `pagsoftware.com.br`
3. **Seguir instruções DNS** (adicionar registros)
4. **Verificar** domínio (pode demorar até 48h)

### **4. Configurar Vercel**
1. Painel Vercel → Project `pagsoftware`
2. **Settings** → **Environment Variables**
3. **Add Variable:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_XXXXXXXXXXXXXXXXXXXXXXXX`
   - **Environments:** Production + Preview + Development
4. **Save** e fazer **Redeploy**

## ✅ Teste

Após configuração:
1. Acesse site: www.pagsoftware.com.br
2. Vá em **Fale Conosco** ou use simulador
3. Preencha formulário e envie
4. Verifique:
   - ✅ Email chegou em `contato@pagsoftware.com.br`
   - ✅ Confirmação automática enviada ao usuário

## 📊 Monitoramento

**Dashboard Resend:**
- Logs de emails enviados
- Estatísticas de entrega
- Bounce/spam reports

## 🔧 Troubleshooting

**Erros comuns:**
- `Missing API key`: Variável não configurada no Vercel
- `Domain not verified`: Aguardar DNS propagar
- `403 Forbidden`: API key inválida

**Debug:**
- Vercel Functions → Logs
- Resend Dashboard → Activity

## 📧 Templates Configurados

**1. Email para PagSoftware:**
- Dados do lead/simulação
- Formatação profissional
- Reply-to automático

**2. Confirmação para usuário:**
- Design responsivo
- Próximos passos
- Contatos alternativos (WhatsApp)

## 💰 Limites

**Plano gratuito Resend:**
- ✅ 3.000 emails/mês
- ✅ 100 emails/dia
- ✅ Domínio personalizado

**Upgrade quando necessário:**
- $20/mês → 50.000 emails
- $80/mês → 100.000 emails

---

🎯 **Importante:** Sem a API key, formulários mostram erro gracioso e direcionam para WhatsApp como fallback.