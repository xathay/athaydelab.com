# Athayde Lab - Blog

Blog pessoal sobre software livre, tecnologia, segurança e produtividade — com foco especial em advogados.

**Site**: [athaydelab.com](https://athaydelab.com)  
**YouTube**: [Athayde Lab](https://www.youtube.com/@athaydelab)

## Stack

- **SSG**: [Hugo](https://gohugo.io/)
- **Tema**: [Blowfish](https://blowfish.page/)
- **Hospedagem**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Comentários**: [Giscus](https://giscus.app/)

## Desenvolvimento local

```bash
# Instalar Hugo (Arch/BigLinux)
sudo pacman -S hugo

# Rodar servidor de desenvolvimento
hugo server --buildDrafts

# Build para produção
hugo --minify
```

## Deploy

O deploy é feito automaticamente via Cloudflare Pages quando há push na branch `main`.

### Configuração do Cloudflare Pages

| Configuração | Valor |
|---|---|
| Framework preset | Hugo |
| Build command | `hugo --minify` |
| Build output directory | `public` |
| Variável `HUGO_VERSION` | `0.155.3` |

## Novo post

```bash
# Criar novo post
mkdir -p content/posts/titulo-do-post
cat > content/posts/titulo-do-post/index.md << 'EOF'
---
title: "Título do Post"
date: 2026-03-13
draft: true
description: "Descrição breve do post."
tags: ["tag1", "tag2"]
categories: ["Categoria"]
---

Conteúdo do post aqui.
EOF
```

## Licença

Conteúdo: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)  
Código: [MIT](https://opensource.org/licenses/MIT)
