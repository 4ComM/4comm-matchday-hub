# Hub Matchday · 4ComM

Hub operacional das artes de matchday da 4ComM. Nasceu de um diagnóstico de
9.824 mensagens de WhatsApp e 293 jogos-atleta reais. As decisões de produto
estão documentadas no Cowork (`HUB-MATCHDAY-decisoes.md`) e **não são
reabríveis aqui**.

**Página:** https://4comm.github.io/4comm-matchday-hub/

## Arquivos

| Arquivo | O quê |
|---|---|
| `index.html` | Hub (SPA): Semana, ＋Pedido, Designers, Criar arte, Agenda, Rodízio & Banco, Atletas, Regras |
| `data.js` | **Fonte única de dados** — atletas (roster completo), jogos, fila, rodízio, banco. Futuro: gerado do Google Sheets |
| `template_central.html` | Central de criação: 13 modelos 1080×1920, cores por clube, export PNG |
| `sw.js` + `manifest.webmanifest` | PWA — "instalar" no celular dos gestores |

## Papéis por URL

- `?papel=gestor` — Pedido, Semana, Agenda, Atletas
- `?papel=designer` — Semana, Designers, Criar arte, Rodízio
- `?papel=marketing` — visão completa (com Publicado ✔)

## Regras invioláveis (resumo)

1. Matchday para **todos** os jogos de **todos** os atletas.
2. A fila ordena sozinha: data → camada → probabilidade. Sem reordenação manual.
3. O pedido começa pelo **gestor**, depois atleta da carteira, depois jogo pré-carregado.
4. Probabilidade: Alta produz · Média não produz antes de D-2 · Baixa não produz.
5. Compliance no cadastro, não na memória (logo, opt-out, IA, marca).
6. Especiais: 6–8/semana. Gatilho A (importância) + Gatilho B (rodízio).
7. Jogo cortado: arte vira "Guardada"; publicada sai do ar.
8. **Custo nunca aparece aqui** — planilha restrita fica só no Drive.
9. Identidade interina (dark/vermelho #C8102E) até a nova identidade do Possa.

## Backlog

1. Backend leve: Google Apps Script (doGet/doPost) sobre a planilha do Drive —
   mata o localStorage, status sincroniza para todos.
2. ~~Papéis por URL~~ ✔ v1
3. ~~Separar `data.js` do `index.html`~~ ✔ v1 (falta gerar a partir do Sheets)
4. ~~Deep-link `wa.me` com mensagem pronta~~ ✔ v1
5. Banco de fotos por atleta (Drive) na Central de Templates.
6. Fila de aprovação da especial (faixa 1 exige revisão antes de publicar).
7. ~~PWA/manifest~~ ✔ v1
8. Fonte de jogos com antecedência: sites de federação + indicações dos gestores.
