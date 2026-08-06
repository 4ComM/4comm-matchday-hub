// ============================================================
// data.js — FONTE ÚNICA de dados do Hub Matchday 4ComM
// Atualizado em 06/08/2026 a partir de:
//   - Radar_de_Jogos_4ComM.xlsx aba 03 ELENCO (carteira de gestores
//     preenchida pelo Head de Conteúdo em 27/07 — FONTE OFICIAL)
//   - hub_data.json (diagnóstico WhatsApp 06/08 — trilhas e fila)
// Próximo passo do backlog: gerar este arquivo do Google Sheets.
// Formato atletas: [nome, categoria/tier, clube, gestor, trilha(designer), marca, obs, apelido, equipes[]]
// Formato jogos:   [competição, adversário, mando, data, hora, local, fonte, probabilidade, gatilhoA(0/1)]
// ============================================================
window.__DATA = {
"gerado": "06/08/2026 · carteira oficial 27/07 (Head de Conteúdo)",

"atletas": [
// ---- Profissional ----
["Gabigol", "Pro T2A", "Santos", "Junior Pedroso", "Felipe Salles", "—", "emprestado pelo Cruzeiro", "Gabriel Barbosa", []],
["Pablo Maia", "Pro T2A", "São Paulo", "Felipe Guimarães", "Felipe Salles", "Adidas", "", "", []],
["Thayllon", "Pro T3A", "Avaí", "Fran", "Felipe Salles", "SPK (parceiro)", "logo 4ComM + SPK, SPK primeiro não — 4ComM primeiro", "Thayllon Roberth", []],
["Moisés", "Pro T3A", "CSKA Moscou", "Felipe Guimarães", "Felipe Salles", "—", "fuso Rússia: entregar cedo", "", []],
["Peglow", "Pro T3A", "DC United", "Papito", "Edu/Leo", "—", "horário BRA + EUA", "João Peglow", []],
["Giovanni", "Pro T4A", "Ballkani", "Papito", "Felipe Salles", "—", "sem patrocinador fixo", "", []],
["Ryan Nascimento", "Pro T4A", "Bahia", "Roberto", "(definir)", "Puma", "marcar Puma Salvador Shopping em ação de loja · vice-artilheiro do Baiano 2026", "Ryan", ["Bahia Sub-20"]],
["Patrick de Lucca", "Pro T4A", "CRB", "Henrique", "(definir)", "—", "", "De Lucca", []],
["Felipe Oliveira", "Pro T4B", "São Paulo", "Henrique", "(definir)", "—", "", "", []],
["Kayk Alboes", "Pro T5A", "Linense", "Roberto", "(definir)", "—", "clube corrigido p/ Linense (Head de Conteúdo, 25/07)", "Kayk", []],
["Felipe Amaral", "Pro T3B", "América-MG", "Papito", "(definir)", "—", "", "Amaral", []],
["Kauê Canela", "Pro T5A", "Fortaleza", "Henrique", "(definir)", "—", "", "Kaue Canela", []],
["Hwaskar", "Pro T5B", "São Bernardo", "Henrique", "—", "—", "OPT-OUT total — não fazer artes (23/07)", "Hwaskar Fagundes", []],
["Thalisson", "Pro T3B", "Ceará", "Felipe Guimarães", "(definir)", "—", "NÃO usa IA — 'abomina'", "", []],
["Antony", "Pro", "Real Betis", "Papito", "(definir)", "—", "", "", []],
["Lucas Moura", "Pro", "São Paulo", "Junior Pedroso", "(definir)", "—", "", "", []],
["Ferreira", "Pro", "São Paulo", "Felipe Guimarães", "(definir)", "—", "", "Ferreirinha", []],
["Fabinho", "Pro", "Coritiba", "Junior Pedroso", "(definir)", "—", "", "", []],
["Palmberg", "Pro", "Real Murcia", "Luis Felipe", "(definir)", "—", "", "João Palmberg", []],
["Guilherme Torres", "Pro", "Al Sadd", "Junior Pedroso", "(definir)", "—", "baixo interesse em ativação de mídia (jul/2026)", "", []],
["Nathan Mendes", "Pro", "EC Vitória", "Henrique", "(definir)", "—", "lesionado — fora da temporada 2026; não cobrar jogo", "Nathan", []],
["Gabriel Alves", "Pro", "Brooklyn FC", "Felipe Guimarães", "(definir)", "—", "", "", []],
["Dija", "Pro", "XI de Piracicaba", "Luis Felipe", "(definir)", "—", "revisar: clube pode ser XV de Piracicaba", "", []],
["Richard Candido", "Pro", "Internacional", "Junior Pedroso", "(definir)", "—", "em negociação — conteúdo em modo incógnita, não cobrar jogo", "Richard", []],
["Laruccia", "Pro", "Portuguesa", "Luis Felipe", "(definir)", "—", "AUXILIAR TÉCNICO (não treinador — corrigido 27/07); não dá coletiva; racional diferente", "Raphael Laruccia", []],
// ---- Base ----
["Luca Canela", "Base Sub-15", "Athletico-PR", "Henrique", "Gui", "Puma", "fase artilheira — 20 participações em gol nos últimos 20 jogos", "Luca", []],
["Gustavo Passos", "Base Sub-17", "Athletico-PR", "Henrique", "Gui", "—", "", "", []],
["Karlos Samuel", "Base Sub-20", "Avaí", "Henrique", "Gui", "—", "", "Karlos", ["Avaí Sub-20"]],
["Thiaguinho", "Base Sub-20", "Fortaleza", "Henrique", "Gui", "—", "posição: MEIA (corrigido 27/07) · artilheiro do Cearense Sub-20 · emprestado", "", ["Fortaleza Sub-20"]],
["Lorenzo Dracena", "Base Sub-15", "Palmeiras", "Thiago Xavier", "Cauã", "RD (parceiro)", "logo RD sempre", "Lorenzo", ["Palmeiras Sub-15"]],
["Enrico", "Base Sub-14", "Palmeiras", "Thiago Xavier", "Cauã", "Puma", "IA só com aprovação da mãe · ⚠ ELENCO 27/07 diz Sem marca — confirmar", "", ["Palmeiras Sub-14"]],
["Luigi Dracena", "Base Sub-12", "Palmeiras", "Thiago Xavier", "Cauã", "RD (parceiro)", "", "Luigi", []],
["Felipe Brenelli", "Base Sub-15", "Guarani", "Thiago Xavier", "Cauã", "—", "", "Brenelli", ["Guarani Sub-15"]],
["Rafa Martinez", "Base Sub-14", "São Paulo", "Thiago Xavier", "Cauã", "Adidas", "", "Martinez", ["São Paulo Sub-14"]],
["Ryan Ridek", "Base Sub-14", "São Paulo", "Thiago Xavier", "Cauã", "Nike", "", "Ridek", ["São Paulo Sub-14"]],
["Aguirra", "Base Sub-17", "Corinthians", "Thiago Xavier", "Cauã", "—", "NÃO ASSINOU — sem logo 4ComM · não consta no ELENCO do radar — confirmar situação", "", []],
["Leonan", "Base Sub-17", "São Paulo", "Thiago Xavier", "Cauã", "—", "", "", []],
["Matheus Bittencourt", "Base Sub-15", "Referência", "Fran", "Felipe Salles", "Adidas", "SEM IA NO ROSTO — pai aprova (critério: clean) · ⚠ ELENCO diz Sem marca — confirmar", "Bitencourt", ["Referência Sub-15"]],
["Tiago Barros", "Base Sub-17", "Santos", "Fran", "Hyzzi", "—", "", "", ["Santos Sub-17"]],
["Luiz Gusttavo", "Base Sub-17", "Santos", "Fran", "Hyzzi", "—", "2 gols e 1 assistência em 25/07, primeiros pelo Santos", "Luiz Gustavo", ["Santos Sub-17", "Santos Sub-20"]],
["Diogo Oliveira", "Base Sub-15", "Vitória SC", "Fran", "Hyzzi", "Puma", "verificar se houve mudança para o Paris FC", "Dioguinho", []],
["Luiz Felipe", "Base Sub-15", "Juventude", "Fran", "Hyzzi", "—", "assinatura/anúncio pendentes desde 17/07", "Luiz Felipe Alves", ["Juventude Sub-15"]],
["Pietro Galli", "Base Sub-15", "Cruzeiro", "Papito", "Hyzzi", "—", "", "Pietro", ["Cruzeiro Sub-15"]],
["Rafinha Leonel", "Base Sub-20", "Santo André", "Papito", "Hyzzi", "—", "", "Rafinha", ["Santo André Sub-20"]],
["Rosenthal", "Base Sub-17", "Ibrachina", "Papito", "Hyzzi", "—", "contrato de representação assinado em 27/05/2026", "Felipe Rosenthal", ["Ibrachina Sub-17"]],
["João Toscano", "Base Sub-17", "São Paulo", "Fabio", "Gui", "Puma", "", "Toscano", ["São Paulo Sub-17"]],
["Arthur Diniz", "Base Sub-17", "RB Bragantino", "Fabio", "Letícia*", "Adidas", "⚠ ERRO RECORRENTE: já saiu arte com Puma — a marca é ADIDAS · Seleção Sub-16 · chuteira: modelo NOVO da Adidas", "Diniz", ["RB Bragantino Sub-17"]],
["Arthur Henrique", "Base Sub-15", "São Paulo", "Fabio", "Letícia*", "Adidas", "", "Thuy", ["São Paulo Sub-15"]],
["Diego Fidelis", "Base Sub-15", "São Paulo", "Fabio", "Gui", "Adidas", "", "Dieguinho", ["São Paulo Sub-15"]],
["Gustavo Defante", "Base Sub-17", "Referência", "Fabio", "Gui", "—", "", "Defante", ["Referência Sub-17"]],
["Fellipe Lima", "Base Sub-15", "Água Santa", "Luis Felipe", "Gui", "—", "", "", ["Água Santa Sub-15"]],
["Pedro Tizon", "Base Sub-13", "São Paulo", "Cristiano", "Cauã", "—", "", "Tizon", ["São Paulo Sub-13"]],
["Jean Louis", "Base Sub-19", "Paris FC", "Ivanildo", "(definir)", "—", "primeiro contrato profissional com o Paris FC (jun/2026)", "", []],
["Arthur Gustavo", "Base", "São Paulo", "Cristiano", "(definir)", "—", "", "Arthurzinho", []],
["Cauã Rodrigues", "Base", "Santos", "Fran", "(definir)", "—", "compliance: só usar envelope 4ComM após assinatura com o clube · não confundir com o designer Cauã", "Cauã", ["Santos Sub-17"]],
["Frediani", "Base", "Palmeiras", "Cristiano", "(definir)", "—", "", "", []],
["Guilherme Giehl", "Base", "RB Bragantino", "Thiago Xavier", "(definir)", "—", "emprestado · recusou post promocional com números", "Giehl", []],
["Jhonatan Almeida", "Base", "Internacional", "Luis Felipe", "(definir)", "—", "", "Jhonatan", []],
["Luiz Henrique", "Base", "Real Murcia", "Henrique", "(definir)", "—", "", "Luizinho", []],
["Pedro Gomes", "Base", "Referência", "Henrique", "(definir)", "—", "", "Pedrinho", []],
["Francisco Guimarães", "Base", "Goiás", "Felipe Guimarães", "(definir)", "—", "", "Francisco", []]
],

"gestores": ["Cristiano", "Fabio", "Felipe Guimarães", "Fran", "Henrique", "Ivanildo", "Junior Pedroso", "Luis Felipe", "Papito", "Roberto", "Thiago Xavier", "Outro / marketing"],

"designers": ["Felipe Salles", "Edu/Leo", "Gui", "Cauã", "Hyzzi", "Letícia", "Matheus (plantão)"],

"fila": [
["qui 07/08 15:00", "Luiz Gusttavo", "Paulista Sub-20 · São Bento (F)", "Base", "Média", "Hyzzi", "Radar", "produzir só D-2 (5ª cedo)"],
["sex 08/08 14:30", "Moisés", "Camp. Russo · FK Rostov (F)", "Especial · A", "Alta", "Felipe Salles", "Em produção", "entregar 5ª à noite — fuso"],
["sáb 08/08 09:00", "Fellipe Lima", "Paulista U15 · EC S. Bernardo (C)", "Base", "Alta", "Gui", "Na fila", ""],
["sáb 08/08 09:00", "Matheus Bittencourt", "Paulistão Sub-15 · Clube Vital (C)", "Base", "Alta", "Felipe Salles", "Na fila", "sem IA no rosto"],
["sáb 08/08 11:00", "Leonan", "Paulista Sub-17 · S. Bento Sorocaba (C)", "Especial · A", "Alta", "Cauã", "Na fila", "retorno de lesão"],
["dom 09/08 21:30", "Gabigol", "Copa do Brasil · Remo (F)", "Especial · A", "Alta", "Felipe Salles", "Na fila", ""],
["ter 11/08 19:30", "Thayllon", "Série B · Avaí × CRB (C)", "Especial · A", "Alta", "Felipe Salles", "Na fila", "4ComM + SPK"],
["ter 11/08 19:30", "Patrick de Lucca", "Série B · Avaí × CRB (F)", "Base", "A confirmar", "(definir)", "Radar", "mesmo jogo do Thayllon"],
["sex 15/08 20:30", "Peglow", "MLS · CF Montréal × DC United", "Especial · A", "Alta", "Edu/Leo", "Na fila", ""]
],

"rodizio": ["Aguirra*", "Brenelli", "Cauã Rodrigues", "Diego Fidelis", "Diogo Oliveira", "Felipe Amaral", "Felipe Oliveira", "Fellipe Lima", "Gustavo Defante", "Gustavo Passos", "Jean Louis", "João Toscano", "Karlos Samuel", "Kauê Canela", "Leonan ✓A", "Luca Canela", "Luigi", "Luiz Felipe", "Luiz Gusttavo", "Pablo Maia", "Patrick de Lucca", "Pedro Tizon", "Pietro Galli", "Rafa Martinez", "Rafinha Leonel", "Rosenthal", "Ryan Ridek", "Thalisson", "Thiaguinho", "Arthur Henrique", "Tiago Barros", "— já receberam no ciclo:", "Arthur Diniz (1)", "Enrico (1)", "Kayk (1)", "Ryan N. (1)", "Lorenzo (2)", "Moisés (2)", "Peglow (3)", "Giovanni (4)", "Thayllon (4)", "Gabigol (6)"],

"banco": [
["Karlos Samuel", "10/06", "Hyzzi", "vs Corinthians (cortado)", "story"],
["Luiz Gusttavo", "11/06", "Cauã", "vs Palmeiras (cortado)", "story"],
["Diego Fidelis", "13/06", "—", "jogo 13/06 (cortado)", "story"],
["Giovanni", "24/07", "F. Salles", "não foi ao jogo — 'guardar pro próximo'", "vídeo"]
],

"jogos": {
"Gabigol": [["Copa do Brasil", "Remo", "Fora", "09/08", "21:30", "—", "planilha 06/08 — oitavas", "Alta", 1], ["Brasileirão", "rodada do fim de semana", "—", "09-10/08", "—", "—", "recorrência — confirmar", "A confirmar", 0]],
"Pablo Maia": [["—", "sem jogo mapeado", "—", "a definir", "—", "—", "preencher manual", "A confirmar", 0]],
"Thayllon": [["Brasileirão Série B", "CRB", "Casa", "11/08", "19:30", "Ressacada", "pedido 03/08 · ⚠ jogo do Patrick tb", "Alta", 1]],
"Moisés": [["Campeonato Russo", "FK Rostov", "Fora", "08/08", "14:30", "Rostov Arena", "pedido 03/08", "Alta", 0], ["Campeonato Russo", "rodada seguinte", "—", "15-17/08", "—", "—", "recorrência", "A confirmar", 0]],
"Peglow": [["MLS", "CF Montréal", "Fora", "15/08", "20:30", "Saputo Stadium", "pedido 27/07", "Alta", 0]],
"Giovanni": [["UEFA Conference League", "fase seguinte", "—", "a definir", "—", "—", "se avançar — gatilho A", "A confirmar", 1]],
"Ryan Nascimento": [["Brasileiro/Baiano Sub-20", "rodada", "—", "15-16/08", "—", "—", "recorrência", "A confirmar", 0]],
"Patrick de Lucca": [["Brasileirão Série B", "Avaí", "Fora", "11/08", "19:30", "Ressacada", "⚠ mesmo jogo do Thayllon", "A confirmar", 0]],
"Felipe Oliveira": [["—", "sem jogo mapeado", "—", "a definir", "—", "—", "preencher manual", "A confirmar", 0]],
"Kayk Alboes": [["Copa Paulista", "rodada Linense", "—", "a definir", "—", "—", "confirmar com Roberto", "A confirmar", 0]],
"Felipe Amaral": [["Brasileirão Série B", "rodada América-MG", "—", "15-16/08", "—", "—", "recorrência", "A confirmar", 0]],
"Hwaskar": [],
"Thalisson": [["Brasileirão Série B", "rodada Ceará", "—", "a definir", "—", "—", "preencher manual", "A confirmar", 0]],
"Luca Canela": [["Base Athletico-PR", "pós BH Cup — confirmar", "—", "a definir", "—", "—", "confirmar com Henrique", "A confirmar", 0]],
"Gustavo Passos": [["Base Athletico-PR", "pós BH Cup — confirmar", "—", "a definir", "—", "—", "confirmar com Henrique", "A confirmar", 0]],
"Karlos Samuel": [["Catarinense Sub-20", "rodada", "Casa", "15/08", "—", "Ressacada", "recorrência", "A confirmar", 0]],
"Thiaguinho": [["Cearense/Brasileiro Sub-20", "rodada", "—", "15/08", "15:00", "—", "recorrência", "A confirmar", 0]],
"Lorenzo Dracena": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Enrico": [["Paulista Sub-14", "rodada", "—", "sáb/dom 15-16/08", "—", "a confirmar", "recorrência", "A confirmar", 0]],
"Luigi Dracena": [["IberCup/rodada", "a confirmar", "—", "a definir", "—", "—", "confirmar com Thiago", "A confirmar", 0]],
"Felipe Brenelli": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Rafa Martinez": [["Paulista Sub-14", "rodada", "—", "sáb/dom 15-16/08", "—", "a confirmar", "recorrência", "A confirmar", 0]],
"Ryan Ridek": [["Paulista Sub-14", "rodada", "—", "sáb/dom 15-16/08", "—", "a confirmar", "recorrência", "A confirmar", 0]],
"Aguirra": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Leonan": [["Paulista Sub-17", "São Bento de Sorocaba", "Casa", "08/08", "11:00", "Est. José Liberatti", "pedido 03/08", "Alta", 1]],
"Matheus Bittencourt": [["Paulistão Sub-15", "Clube Vital", "Casa", "08/08", "09:00", "Hermínio Espósito", "pedido 03/08", "Alta", 0]],
"Tiago Barros": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Luiz Gusttavo": [["Paulista Sub-20", "São Bento", "Fora", "07/08", "15:00", "CT Rei Pelé", "pedido 05/08", "Média", 0], ["Paulistão Sub-17", "rodada", "Casa", "15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Diogo Oliveira": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Luiz Felipe": [["Gauchão Sub-15", "rodada", "—", "a definir", "—", "—", "confirmar com Fran", "A confirmar", 0]],
"Pietro Galli": [["Mineiro Sub-15", "rodada", "—", "15/08", "09:00", "Toca da Raposa", "recorrência", "A confirmar", 0]],
"Rafinha Leonel": [["Sub-20", "rodada", "—", "fds 15-16/08", "—", "a confirmar", "recorrência", "A confirmar", 0]],
"Rosenthal": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"João Toscano": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Arthur Diniz": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Arthur Henrique": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Diego Fidelis": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Gustavo Defante": [["Paulista Sub-17", "—", "—", "08/08", "—", "—", "aviso 03/08: preservado (amarelo)", "Baixa", 0]],
"Fellipe Lima": [["Paulista U15", "EC São Bernardo", "Casa", "08/08", "09:00", "Estádio do Taboão", "pedido 04/08", "Alta", 0]],
"Pedro Tizon": [["Paulista Sub-13", "rodada", "—", "dom 16/08", "09:00", "a confirmar", "recorrência", "A confirmar", 0]],
"Jean Louis": [["Championnat U19", "rodada", "—", "a definir", "—", "—", "confirmar com Ivanildo", "A confirmar", 0]],
"Kauê Canela": [["—", "sem jogo mapeado", "—", "a definir", "—", "—", "preencher manual", "A confirmar", 0]]
}
};
