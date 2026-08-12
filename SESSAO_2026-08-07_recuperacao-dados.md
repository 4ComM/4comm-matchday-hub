# Sessão 06–07/08/2026 — Hub Matchday e recuperação de dados

Arquivo histórico. O que vale para o dia a dia está condensado no `CLAUDE.md`.

## O que a sessão entregou

**Hub Matchday** saiu do handoff para o ar em https://4comm.github.io/4comm-matchday-hub/ —
`data.js` separado como fonte única, Semana simplificada com link da arte, correção de entregas,
deep-link do WhatsApp, papéis por URL, PWA e capa OG.

**Agenda de jogos** foi de 44 para 381 jogos futuros, integrando 10 fontes: calendário PARTIDAS,
ogol (20 clubes profissionais), CBF, FPF-SP, FMF, FGF, FCF, FPR, FFDF, e as federações de
Portugal e França.

**Recuperação histórica** montou a `CENTRAL_4ComM.xlsx`: 3.587 jogos desde 2015, 59 atletas,
11 abas, com fonte e comprovante em cada linha.

**Governança**: `fontes_atletas.json` (onde buscar cada atleta) e `criterios_dados.json`
(qual fonte manda em quê) passaram a existir e são a base da operação.

## Descobertas técnicas

- A **API da FPF** já entrega `LinkSumula` de cada jogo — não precisa adivinhar número de súmula.
- A **API da CBF** entrega JSON estruturado com escalação, substituições, gols e cartões — melhor
  que a FPF, que exige ler PDF.
- O **ScoutHub** (base44) tem API de entidades acessível com o token do navegador.
- A página do **ogol** traz o nome civil de registro — que é o que destrava a busca na súmula.
- Todas as federações estaduais testadas têm endpoint utilizável; nenhuma exigiu navegador real.

## Achados operacionais que mudaram decisão

- **Karlos Samuel jogava a semifinal do Catarinense Sub-20 no dia seguinte** e não estava mapeado
  em lugar nenhum. Virou especial gatilho A.
- **Luiz Felipe** tinha jogo de eliminação (quartas, volta, perdendo 0x1) tratado como rodada comum.
- **Thiaguinho** estava com jogo de mata-mata (venceu a ida 7x1) sem essa informação.
- **Arthur Diniz** estava zerado; terminou com 17 jogos, 1.244 min e 6 gols comprovados.
- **Ryan Nascimento** apareceu com 41 jogos e 20 gols — artilheiro sem registro nenhum.
- **Fellipe Lima** tinha 11 jogos e 837 minutos como titular, nenhum lançado internamente.
- **Data do jogo do Pietro** divergia: calendário dizia sábado 08h, federação dizia domingo 13h30.
  A federação estava certa.

## Erros cometidos e corrigidos (a origem das regras do CLAUDE.md)

1. Busca por nome no ogol casou **cinco jogadores errados** (Fabinho do Al-Ittihad, Moisés Caicedo,
   Thayllon do Paysandu, Dija do Tombense, Thalisson do Montedio) — pegos antes de entregar.
2. Marquei **Arthur Diniz só como CBF** e derrubei os 7 jogos da FPF que eu mesmo tinha comprovado.
3. **Categoria sem checar idade** zerou Giehl, Frediani e Luigi.
4. Varria **5 competições da FPF quando existem 9**.
5. Bug de cálculo dividindo minutos por 60 zerava toda a minutagem.
6. Interpretei **"Reserva" do ScoutHub como "não jogou"** — significa que entrou; quase reportei
   21 erros graves inexistentes.
7. **Wyscout em UTC** duplicou jogos noturnos (Felipe Amaral apareceu com 47 jogos, tem 34).
8. Contei **"Nenhum" como cartão** (Luca Canela com 36 cartões).
9. **"Luca Canela" casou com o arquivo do "Lucas Moura"** por substring.
10. Passei a sessão reconstruindo do ogol dado que **já existia mais rico no computador**
    (Antony: 385 jogos com xG em `02_DADOS/individuais/`).

## Estado das fontes por atleta

- **Profissional**: ogol resolve praticamente todos. IDs confirmados pelo Felipe.
- **Base paulista**: súmula da FPF cobre Sub-11 a Sub-20 + Copinha.
- **Base nacional**: CBF cobre Brasileirão Sub-17 e Sub-20.
- **Base fora de SP**: endpoints mapeados, extração ainda **não rodada** (MG, RS, SC, DF, BA).
- **Amistosos e torneios**: sem fonte pública. Registro do gestor é a única, e entra marcado.

## Próximos passos na ordem de valor

1. Resgatar os **632 arquivos que só existem em pasta efêmera**.
2. Rodar as federações estaduais restantes (MG, RS, SC, DF, BA).
3. Links publicados dos player profiles na aba CONTEÚDOS.
4. Subposições, arquétipos e badges no perfil estatístico.
5. Backend do hub em Apps Script sobre a planilha do Drive (mata o localStorage).
