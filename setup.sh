#!/bin/bash
# AthaydeLab Hugo Setup Script
# Roda este script DENTRO da pasta do seu projeto Hugo

set -e

echo "🐧 AthaydeLab Blog Setup"
echo "========================"
echo ""

# Verifica se Hugo está instalado
if ! command -v hugo &> /dev/null; then
  echo "❌ Hugo não encontrado. Instale com: sudo pacman -S hugo"
  exit 1
fi

HUGO_VERSION=$(hugo version | grep -oP 'v\d+\.\d+\.\d+')
echo "✓ Hugo $HUGO_VERSION detectado"

# Verifica se é projeto Hugo (tem config.toml ou hugo.toml)
if [ ! -f "config.toml" ] && [ ! -f "hugo.toml" ]; then
  echo "⚠️  Nenhum config.toml encontrado. Criando projeto Hugo..."
  hugo new site . --force
fi

# Cria estrutura de pastas
echo "📁 Criando estrutura de pastas..."
mkdir -p content/artigos
mkdir -p content/projetos
mkdir -p static/images
mkdir -p themes/athaydelab

echo ""
echo "✅ Estrutura inicial criada!"
echo ""
echo "PRÓXIMOS PASSOS:"
echo ""
echo "1. Copie os arquivos do tema (pasta athaydelab/) para themes/athaydelab/"
echo "2. Copie o config.toml fornecido para a raiz"
echo "3. Copie seu logo para static/images/logo.png"
echo "4. Crie seu primeiro artigo:"
echo "   hugo new artigos/meu-primeiro-artigo.md"
echo "5. Rode o servidor local:"
echo "   hugo server -D"
echo "6. Abra http://localhost:1313 no browser"
echo ""
