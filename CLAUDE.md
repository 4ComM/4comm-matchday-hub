# 4ComM — Dados de atletas e matchday

Leia isto antes de qualquer coisa. É o resumo vivo do projeto: as regras que não se discutem,
onde cada dado mora, o estado de hoje e o que já foi resolvido e **não deve ser refeito**.
Histórico detalhado por sessão fica em `SESSAO_*.md`.

**Dono do projeto:** Felipe Mazmanian (Head/Diretor de Comunicação) · contato@4comm.com.br
**Última atualização:** 07/08/2026

---

## 1. Regras inegociáveis

### Fonte de dados
1. **O ScoutHub NUNCA é fonte primária.** Os gestores não mantêm o registro. Medido: de 113 jogos
   provados por súmula, 78 não existiam lá. Serve só para confirmar algo já conferido na fonte oficial.
2. **Profissional → ogol** (id no cadastro). Cobre ~95% dos casos de jogos, gols e assistências.
   Sofascore quando precisar de dado minutos após o jogo.
3. **Base → súmula oficial da federação** (estadual ou CBF). É a única fonte que diz se o atleta foi
   **relacionado e não entrou**, e a única que dá o minuto exato do gol.
4. **Estatística profunda (xG, ações, duelos) → Wyscout**, que já está no computador. Não estimar.
5. **Nunca publicar número sem fonte.** Se não tem prova, a planilha marca em amarelo e fica assim.
6. **Divergência entre fontes nunca é resolvida em silêncio** — mantém-se o registro e marca-se
   "⚠ confirmar". Quem decide é humano.

### Matchday (decididas no Cowork, não reabrir)
7. **Matchday para todos os jogos de todos os atletas.** Nenhuma feature filtra atleta para fora.
8. **A fila ordena sozinha:** data → camada → probabilidade. Sem reordenação manual.
9. **O pedido começa pelo gestor**, depois atleta da carteira, depois jogo pré-carregado.
10. **Probabilidade:** Alta produz · Média não produz antes de D-2 · Baixa não produz.
11. **Compliance vive no cadastro, não na memória:** logo 4ComM só após anúncio (Aguirra não assinou),
    opt-out (Hwaskar), IA nunca em rosto de quem recusou (Bittencourt, Thalisson), marca vem do cadastro.
12. **Especiais: 6–8/semana.** Mata-mata (semi, final, quartas, playoff) é sempre gatilho A.
13. **Custo nunca aparece em área pública.** `Custo_Matchday*.xlsx` e `build_hub.py` estão no `.gitignore`.

### Trabalho
14. **Versão única** (regra da casa, 29/07): atualizou = sobrescreve no mesmo lugar. Nunca `_v2`, `(1)`, `_FINAL2`.
15. **A planilha CENTRAL é gerada, não digitada.** Errou? Corrige a base e regenera.

---

## 2. Onde está cada dado

### Bases canônicas (neste repositório — versionadas, são a verdade)
| Arquivo | O que é |
|---|---|
| `fontes_atletas.json` | **Cadastro de fontes**: onde buscar cada atleta (id do ogol, nome civil, federações, clube, categorias) + dados pessoais (nascimento, posição, pé, altura, naturalidade) |
| `criterios_dados.json` | **Qual fonte manda em quê**, por tipo de dado e por competição; regras de operação; pendências de decisão |
| `data.js` | Elenco, agenda de jogos futuros, fila da semana, rodízio, banco de artes |
| `index.html` + `template_central.html` | O Hub Matchday (https://4comm.github.io/4comm-matchday-hub/) |

### Dados no computador
| Lugar | O que tem |
|---|---|
| `Documents\4ComM\` | **Estrutura oficial** (00_FUNDACAO … 99_ARQUIVO). É o destino de tudo. |
| `Documents\4ComM\02_DADOS\individuais\<atleta>\` | **Exportações Wyscout** — jogo a jogo com xG desde 2015. 14 atletas nossos. |
| `G:\Meu Drive\4ComM\4Data_Exports\` | Planilhas entregues: `CENTRAL_4ComM.xlsx`, `Radar_de_Jogos_4ComM.xlsx` |
| `AppData\...\Claude_...\LocalCache\` | ⚠️ **Pasta efêmera.** 632 arquivos só existem aí. Risco real de perda. |

### Scripts (hoje em scratchpad — mover para o repo quando estabilizar)
`consolidar.py` (ScoutHub) · `sumulas_fpf.py` (FPF) · `cbf_base.py` (CBF) · `ogol_pro.py` (ogol) ·
`wyscout.py` (Wyscout local) · `indexar.py` (índice do computador) · `central.py` (gera a CENTRAL)

### Endpoints que funcionam (todos exigem User-Agent de Chrome, salvo nota)
- **ogol**: `/jogador/{slug}/{id}/jogos?epoca_id=155` (155 = 2026) · perfil em `/jogador/{slug}/{id}` tem nome civil
- **CBF**: `/api/cbf/jogos/tabela-detalhada/campeonato/{id}` e `/api/cbf/jogos/{ref_jogo}` — JSON com escalação, substituições, gols, cartões e link da súmula. Sub-17 2026 = `1260640`, Sub-20 = `1260620`
- **FPF-SP**: `Handlers/Competicoes/ListarTabela.ashx?IdCampeonato={id}&Ano=2026&Rodada=0&IdClube=0&IdCategoria=0` — traz `LinkSumula` de cada jogo. IDs: Sub-11 125, Sub-12 203, Sub-13 127, Sub-14 202, Sub-15 32, Sub-17 33, Sub-20 221/219, Copinha 75
- **FMF** (MG): `fmf.com.br/Competicoes/ProxJogos.aspx?d={cat}` (d=4 Sub-15) — latin-1, usar curl+parser, **não** WebFetch
- **FGF** (RS): `fgf.com.br/competicoes/amador/62` · **FCF** (SC): `egol.fcf.com.br/sisgol/DERW700B.asp?...&RunReport=Run+Report` (sem UA especial, latin-1) · **FPR**: `federacaopr.com.br/campeonato/base/2026/{id}` · **FFDF**: POST `ffdf.com.br/pt/competicoes/jogos_ajax_ver3.php`
- **ScoutHub** (base44): `/api/apps/69d69bf97f2ff344ce0ff8f0/entities/{Athlete|Game}?limit=5000` com `Authorization: Bearer <localStorage.base44_access_token>`. Output grande do JS trunca no chat — subir receptor HTTP local e fazer POST.

---

## 3. Estado atual (07/08/2026)

- **Elenco:** 59 atletas (saíram Jhonatan Almeida e Pedro Gomes; Laruccia é auxiliar técnico, não entra em desempenho)
- **CENTRAL_4ComM.xlsx:** 11 abas · **3.587 jogos desde 2015** · 381 jogos futuros · 717 arquivos indexados
- **Cobertura:** 36 atletas COMPLETA · 12 PARCIAL · 4 SÓ INTERNA · 7 SEM DADOS
- **Hub Matchday no ar:** https://4comm.github.io/4comm-matchday-hub/ (Pages via Actions)
- **Rotina agendada:** `radar-ogol-matchday`, segunda 07:45 — varre ogol + FPF + CBF, atualiza `data.js` e publica

### Riscos abertos
1. **632 arquivos existem só em pasta efêmera** — prioridade máxima, resgatar para `Documents\4ComM`
2. **1.015 conteúdos duplicados** (1.637 cópias) espalhados
3. Base fora de SP ainda sem verificação: **Pietro (MG), Luiz Felipe (RS), Karlos (SC), Thiaguinho (DF), Ryan (BA)**

---

## 4. O que NÃO pode ser refeito

Estas armadilhas já custaram tempo. Estão resolvidas — não repita:

| Armadilha | O que acontece | Como evitar |
|---|---|---|
| **Buscar atleta por nome** | Casa homônimo: o "Fabinho" era o ex-Liverpool do Al-Ittihad; o "Moisés" era o Caicedo do Chelsea; o "Thayllon" era do Paysandu | Sempre pelo **id do ogol** ou **nome civil + clube + categoria** |
| **Categoria sem checar idade** | Atleta some da varredura. Giehl e Frediani (2008) estavam em Sub-17, são Sub-20; Luigi estava em Sub-13, é Sub-12 | **Sub-N em 2026 exige nascer em 2026−N** |
| **Marcar uma federação só** | Perde metade dos jogos. Arthur Diniz marcado só como CBF perdeu os 7 jogos da FPF | Base joga **estadual E nacional** — `federacoes` é lista |
| **Varrer só algumas competições** | Eu lia 5 da FPF; existem 9 (faltavam Sub-11, Sub-12, Sub-20 B e Copinha) | Conferir a lista completa em `ListarCampeonatosExercicio.ashx?anoExercicio=2026` |
| **Cruzar Wyscout por data exata** | Wyscout grava em **UTC**: jogo noturno cai no dia seguinte e entra duas vezes | Dedup com **tolerância de ±1 dia** |
| **"Reserva" do ScoutHub = não jogou** | Errado: significa que **começou no banco e entrou**. Normalizar pela minutagem | |
| **Nome truncado na súmula** | O PDF corta em ~33 chars ("Matheus Luizari Fontoura Bitencou") | Casar pelos **dois primeiros nomes**, nunca pelo sobrenome |
| **Buscar dado na internet antes de olhar em casa** | A planilha do Antony já tinha 385 jogos com xG; o ogol dá menos | **Consultar o índice de arquivos primeiro** |
| **Dia da semana escrito à mão** | Vinha errado no dado (07/08 aparecia como quinta, era sexta) | O hub **calcula** o dia a partir da data |

### Fatos apurados que não precisam de nova investigação
- **Leonan e Cauã Rodrigues** não foram relacionados nos 11 jogos varridos de cada clube — procurei o nome civil nos 231 PDFs. Não é falha de extração. (Leonan estava voltando de lesão.)
- **Paranaense Sub-15 e Sub-17 2026 acabaram** (Athletico hexacampeão em 13/06; eliminado no Sub-15 em 23/05).
- **Thiago Ramos = Tiago Barros** (mesma pessoa, grafia alternativa).
- **Portuguesa e Brasiliense** não publicam calendário futuro no ogol.
- **Nem FPF nem CBF registram assistência** — só ogol e Wyscout têm.

---

## 5. Pendências de decisão do Felipe

1. Publicar assistência de base **sem fonte oficial**?
2. Amistosos e torneios sem súmula (BH Cup, Copa RM, Alcans) entram nas estatísticas divulgadas?
3. Jogo-treino entre categorias do próprio clube conta como jogo?
4. Semana com **8 especiais** e o limite acordado é 7 — qual vira base?
5. **Luca Canela** joga a Copa Paraná Sub-16? (é Sub-15) — confirmar com Henrique
6. **Arthur Gustavo** segue sem fonte identificada

---

## 6. Como rodar

```bash
# atualizar dados (na ordem)
python consolidar.py && python sumulas_fpf.py && python cbf_base.py
python ogol_pro.py && python wyscout.py && python indexar.py
python central.py            # gera a CENTRAL_4ComM.xlsx

# publicar o hub
cd C:\Users\usuar\GitHub\4comm-matchday-hub && git add -A && git commit -m "..." && git push
```

Sempre `PYTHONIOENCODING=utf-8` — o console do Windows quebra em "⚠" e acentos.
