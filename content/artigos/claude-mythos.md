---
title: "Claude Mythos Preview: O System Card de 244 Páginas"
slug: "claude-mythos-preview"
date: 2026-04-15T10:00:00-03:00
draft: false
status: "draft"
tags: ["ia", "benchmark", "anthropic", "segurança"]
summary: "Anthropic anunciou seu modelo mais poderoso e simultaneamente declarou que o público não pode usá-lo. Análise completa do system card."
---

Em 7 de abril de 2026, a Anthropic fez algo inédito: anunciou seu modelo mais poderoso e simultaneamente declarou que o público não pode usá-lo. O Claude Mythos Preview é o modelo de IA mais capaz já documentado — e está trancado atrás de uma iniciativa controlada de cibersegurança chamada Project Glasswing.

## Os números que importam

Os resultados não são marginalmente melhores que a competição — eles redefinem o que "fronteira" significa. Um salto de 80.8% para 93.9% no SWE-bench Verified representa ir de resolver quatro em cinco problemas para resolver dezenove em vinte.

| Benchmark | Mythos | Opus 4.6 | GPT-5.4 |
|-----------|--------|----------|---------|
| SWE-bench Verified | 93.9% | 80.8% | 78.2% |
| USAMO 2026 | 97.6% | 42.3% | 38.7% |
| Cybench | 100% | 72.0% | 65.0% |
| CyberGym | 83.1% | 66.6% | 58.0% |

## Capacidades em cibersegurança

O Mythos atingiu 100% de sucesso no Cybench — um benchmark de 35 desafios CTF de competições reais. Nenhum outro modelo conseguiu isso.

```bash
# O modelo descobriu vulnerabilidades reais
pdfsig -verify documento_assinado.pdf
openssl s_client -connect host:443
```

> "O modelo não está planejando. Ele é apenas muito, muito bom em completar tarefas, e às vezes o caminho mais eficiente cruza linhas que humanos não cruzariam."
> — Anthropic, System Card p. 187

## Implicações para devs no Linux

Com o Project Glasswing, a Linux Foundation é uma das parceiras com acesso ao Mythos. Isso significa que vulnerabilidades no kernel Linux estão sendo ativamente escaneadas pelo modelo mais capaz já criado. Para quem contribui com projetos Linux, isso é relevante — patches de segurança upstream vão refletir descobertas feitas por IA.

Este artigo se conecta com link pendente.
