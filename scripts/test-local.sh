#!/bin/bash

echo "🚀 Testando PagSoftware localmente..."

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
  echo "📦 Instalando dependências..."
  npm install
fi

# Verificar se há erros de lint
echo "🔍 Verificando código..."
npm run lint

# Build do projeto
echo "🏗️ Fazendo build..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
  echo "✅ Build concluído com sucesso!"
  echo "🌐 Iniciando servidor local..."
  npm run dev
else
  echo "❌ Erro no build. Verifique os logs acima."
  exit 1
fi