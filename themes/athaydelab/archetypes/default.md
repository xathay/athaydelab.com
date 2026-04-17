---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
status: "draft"
tags: []
summary: ""
---

Escreva aqui a introdução do artigo. Este primeiro parágrafo aparece como excerpt na listagem.

## Primeira seção

Conteúdo da seção.

### Subseção

Detalhamento.

## Código

```bash
# Exemplo
echo "hello world"
```

## Imagem

{{</* figure src="/images/exemplo.png" alt="Descrição" caption="Fig. 1 — Legenda" */>}}

## Vídeo

{{</* youtube ID_DO_VIDEO */>}}

## Link interno (wikilink)

Este artigo se conecta com {{</* wiki "Outro Artigo" */>}}.

## Citação

> "Uma citação importante que quero destacar." — Fonte
