# Athayde Lab

> Direito, código e software livre — onde a advocacia encontra a tecnologia.

**Site**: [athaydelab.com](https://athaydelab.com)
**YouTube**: [Athayde Lab](https://www.youtube.com/@athaydelab)
**GitHub**: [xathay](https://github.com/xathay)

## Stack

| Componente | Tecnologia |
|---|---|
| SSG | [Hugo](https://gohugo.io/) v0.155.3 |
| Tema | [Blowfish](https://blowfish.page/) v2.100.0 (submódulo git) |
| Hospedagem | [Cloudflare Pages](https://pages.cloudflare.com/) |
| Comentários | [Giscus](https://giscus.app/) (GitHub Discussions) |
| Newsletter | [Buttondown](https://buttondown.com/) |
| Fontes | DM Sans (Google Fonts) |

## Características

- Paleta personalizada: navy + laranja + teal
- Efeitos visuais: 3D card tilt, parallax, scroll reveal, glassmorphism
- Homepage: layout background com logo widescreen
- Avatar: pinguim (`assets/img/penguin.png`)
- Favicons derivados do pinguim
- Configuração completa em PT-BR
- YouTube/GitHub no header e footer

## Desenvolvimento local

```bash
# Clonar com submódulos
git clone --recurse-submodules https://github.com/xathay/athaydelab.com.git
cd athaydelab.com

# Servidor de desenvolvimento (com drafts)
hugo server --buildDrafts

# Build para produção
hugo --minify
```

## Estrutura do projeto

```
Site/
├── assets/css/
│   ├── custom.css              # Estilos customizados (glassmorphism, newsletter, etc.)
│   └── schemes/athaydelab.css  # Paleta de cores
├── config/_default/
│   ├── hugo.toml               # Config principal
│   ├── params.toml             # Parâmetros do tema
│   ├── languages.pt-br.toml   # Localização PT-BR
│   ├── menus.pt-br.toml       # Menus de navegação
│   └── markup.toml            # Config do Goldmark
├── content/
│   ├── posts/                  # Artigos do blog
│   ├── about/                  # Página Sobre
│   ├── contact/                # Página Contato
│   └── newsletter/             # Página Newsletter
├── layouts/
│   ├── partials/
│   │   ├── comments.html       # Giscus
│   │   ├── extend-head.html    # Google Fonts
│   │   └── extend-footer.html  # JS: parallax, 3D tilt, scroll reveal
│   └── shortcodes/
│       └── newsletter.html     # Formulário de inscrição
├── static/                     # Favicons e imagens estáticas
├── themes/blowfish/            # Tema (submódulo git)
├── wrangler.toml               # Config Cloudflare Pages
├── _headers                    # Headers de segurança e cache
└── _redirects                  # Redirects para Cloudflare
```

## Deploy (Cloudflare Pages)

| Configuração | Valor |
|---|---|
| Framework preset | Hugo |
| Build command | `hugo --minify` |
| Build output directory | `public` |
| Variável `HUGO_VERSION` | `0.155.3` |

Opção via CLI:
```bash
npx wrangler pages deploy public --project-name athaydelab
```

## Novo post

```bash
mkdir -p content/posts/titulo-do-post
cat > content/posts/titulo-do-post/index.md << 'EOF'
---
title: "Título do Post"
date: 2026-03-21
draft: true
description: "Descrição breve do post."
tags: ["tag1", "tag2"]
categories: ["Categoria"]
series: ["Nome da Série"]
---

Conteúdo aqui.
EOF
```

## Pendências

- [ ] Instalar [Giscus App](https://github.com/apps/giscus) no repo `xathay/athaydelab.com`
- [ ] Criar conta no [Buttondown](https://buttondown.com/) (username: `athaydelab`)
- [ ] Conectar repo ao Cloudflare Pages
- [ ] Configurar domínio `athaydelab.com` no Cloudflare DNS

## Licença

Conteúdo: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
Código: [MIT](https://opensource.org/licenses/MIT)
