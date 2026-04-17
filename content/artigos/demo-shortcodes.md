---
title: "Demo: todos os shortcodes do tema"
slug: "demo-shortcodes"
date: 2026-04-16T14:00:00-03:00
draft: true
status: "draft"
tags: ["meta", "teste"]
summary: "Artigo de teste para visualizar jurisp, sidenote, wiki, hover previews e last-updated."
---

Este artigo existe apenas para testar o rendering dos shortcodes do tema. Pode deletar depois.

## Citações jurídicas — `jurisp`

Exemplo de jurisprudência inline — forma block (recomendada, sempre funciona):
{{< jurisp >}}STF, ADI 4.650/DF, Rel. Min. Luiz Fux, j. 17.09.2015, DJe 14.12.2015{{< /jurisp >}}.

Cita-se também a Súmula {{< jurisp tipo="sumula" >}}Súmula 7/STJ{{< /jurisp >}}, que veda o reexame de prova em recurso especial.

Referência a dispositivo legal: {{< jurisp tipo="lei" >}}art. 272, §5º, CPC{{< /jurisp >}} — base das intimações exclusivas.

Com link para a fonte oficial (hover muda o fundo): {{< jurisp tipo="lei" url="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" >}}CPC, art. 5º, LXXVIII{{< /jurisp >}}.

Doutrina em bloco (tipo=doutrina do `jurisp` — markdown habilitado, veja o itálico no título):

{{< jurisp tipo="doutrina" >}}
DINAMARCO, C. R. *Instituições de Direito Processual Civil*, v. I. 10. ed. São Paulo: Malheiros, 2020, p. 45.
{{< /jurisp >}}

## Fontes literárias e mídia — `fonte`

Para livros, artigos, teses, vídeos e podcasts o tratamento muda de *terminal* para *editorial*: entra a serifa **Crimson Pro**.

Livro (tipo padrão — `livro`):

{{< fonte >}}
CALVINO, Italo. *Seis propostas para o próximo milênio*. São Paulo: Companhia das Letras, 1990.
{{< /fonte >}}

Artigo científico:

{{< fonte tipo="artigo" >}}
TURING, Alan. "On Computable Numbers, with an Application to the Entscheidungsproblem". *Proceedings of the London Mathematical Society*, v. 2, n. 1, 1937, p. 230–265.
{{< /fonte >}}

Tese:

{{< fonte tipo="tese" >}}
Tese de doutorado sobre a natureza da prova digital no processo penal contemporâneo.
{{< /fonte >}}

Vídeo (com link):

{{< fonte tipo="video" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >}}
"Como funciona o peticionamento eletrônico no Linux", AthaydeLab, 2026.
{{< /fonte >}}

Podcast:

{{< fonte tipo="podcast" url="https://example.com/podcast" >}}
"O estado do software livre no Direito brasileiro", episódio 42.
{{< /fonte >}}

## Blockquote e drop cap (bônus)

O primeiro parágrafo deste artigo tem uma capitular no primeiro caractere — detalhe editorial clássico que acontece automático em qualquer post.

Blockquotes agora em serifa roman, com marca de aspas decorativa. Itálico só em `*trechos enfatizados*` de dentro. Atribuição via `<cite>`:

> A advocacia não é apenas uma profissão — é uma forma de olhar para o mundo através da *gramática do poder* e suas contenções. Cada petição é um argumento filosófico disfarçado de peça processual.
> <cite>Leonardo Athayde, rascunho de 2026</cite>

## Notas laterais — `sidenote`

Este parágrafo demonstra uma nota lateral estilo Tufte.{{< sidenote >}}No desktop (largura ≥ 1180px), esta nota aparece na margem direita. Em telas menores, o número vira botão colapsável — clique pra expandir inline.{{< /sidenote >}} O texto principal segue limpo, mas a observação técnica fica acessível ao lado para quem quer aprofundar.

Outra nota, agora com **markdown** dentro.{{< sidenote >}}Suporta *itálico*, **negrito**, e até [links](https://hugo.io). Útil pra glosas, comentários, ou aquele comentário técnico que quebraria o fluxo.{{< /sidenote >}} Excelente para poesia (tradição medieval de glosa marginal) e para textos jurídicos densos.

## Wikilinks com hover preview — `wiki`

Link para artigo existente (passe o mouse e veja o preview):
{{< wiki "Por que usar Linux como advogado em 2026?" >}}.

Link para artigo ainda não escrito (aparece cinza, sem preview):
{{< wiki "Assinatura com ICP-Brasil no LibreOffice" >}}.

## Último teste: last-updated

A metadata no topo mostra `publicado em X`. Quando este arquivo receber commits posteriores à data do front-matter, um segundo campo `↻ última atualização` aparece em ciano — só visível quando há divergência.

---

Pronto. Se tudo estiver ok aqui, pode apagar este arquivo: `rm content/artigos/demo-shortcodes.md`.
