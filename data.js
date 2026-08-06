// ============================================================
// data.js — FONTE ÚNICA de dados do Hub Matchday 4ComM
// Gerado em 06/08/2026 a partir de: hub_data.json (diagnóstico
// WhatsApp 06/08) + atletas.json do site (roster ScoutHub 03/08).
// Próximo passo do backlog: gerar este arquivo a partir do
// Google Sheets (planilha motor no Drive).
// Formato atletas: [nome, categoria/tier, clube, gestor, trilha(designer), marca, obs]
// Formato jogos:   [competição, adversário, mando, data, hora, local, fonte, probabilidade, gatilhoA(0/1)]
// ============================================================
window.__DATA = {
"gerado": "06/08/2026",

"atletas": [
// ---- Profissional (com dados operacionais do diagnóstico) ----
["Gabigol", "Pro T2A", "Santos", "—", "Felipe Salles", "—", ""],
["Pablo Maia", "Pro T2A", "São Paulo", "F. Guimarães", "Felipe Salles", "Adidas", ""],
["Thayllon", "Pro T3A", "Avaí", "Fran", "Felipe Salles", "SPK (parceiro)", "logo 4ComM + SPK, SPK primeiro não — 4ComM primeiro"],
["Moisés", "Pro T3A", "CSKA Moscou", "—", "Felipe Salles", "—", "fuso Rússia: entregar cedo"],
["Peglow", "Pro T3A", "DC United", "Papito", "Edu/Leo", "—", "horário BRA + EUA"],
["Giovanni", "Pro T4A", "Ballkani", "Papito", "Felipe Salles", "—", "sem patrocinador fixo"],
["Ryan Nascimento", "Pro T4A", "Bahia", "Roberto", "(definir)", "Puma", "marcar Puma Salvador Shopping em ação de loja"],
["Patrick de Lucca", "Pro T4A", "CRB", "Henrique", "(definir)", "—", ""],
["Felipe Oliveira", "Pro T4B", "São Paulo", "Fabio", "(definir)", "—", ""],
["Kayk Alboes", "Pro T5A", "Londrina", "Roberto", "(definir)", "—", ""],
["Felipe Amaral", "Pro T3B", "América-MG", "Papito", "(definir)", "—", ""],
["Kaue Canela", "Pro T5A", "Fortaleza", "Henrique", "(definir)", "—", ""],
["Hwaskar", "Pro T5B", "São Bernardo", "—", "—", "—", "OPT-OUT total — não fazer artes (23/07)"],
["Thalisson", "Pro T3B", "Ceará", "—", "(definir)", "—", "NÃO usa IA — 'abomina'"],
// ---- Profissional (roster ScoutHub — carteira/trilha a definir) ----
["Antony", "Pro", "Real Betis", "(definir)", "(definir)", "—", ""],
["Lucas Moura", "Pro", "São Paulo", "(definir)", "(definir)", "—", ""],
["Ferreira", "Pro", "São Paulo", "(definir)", "(definir)", "—", "tb conhecido como Ferreirinha"],
["Fabinho", "Pro", "Coritiba", "(definir)", "(definir)", "—", ""],
["Palmberg", "Pro", "Real Murcia", "(definir)", "(definir)", "—", ""],
["Guilherme Torres", "Pro", "Al Sadd", "(definir)", "(definir)", "—", ""],
["Nathan Mendes", "Pro", "EC Vitória", "(definir)", "(definir)", "—", "lesionado — fora da temporada 2026 (cirurgia joelho 08/07)"],
["Gabriel Alves", "Pro", "Brooklyn FC", "(definir)", "(definir)", "—", ""],
["Dija", "Pro", "XI de Piracicaba", "(definir)", "(definir)", "—", "revisar: clube pode ser XV de Piracicaba"],
["Richard Candido", "Pro", "Internacional", "(definir)", "(definir)", "—", "em negociação — confirmar se entra na cobertura"],
["Laruccia", "Pro", "Portuguesa", "(definir)", "(definir)", "—", "confirmar se é treinador/auxiliar — racional diferente"],
// ---- Base (com dados operacionais do diagnóstico) ----
["Luca Canela", "Base Sub-15", "Athletico-PR", "Henrique", "Gui", "Puma", ""],
["Gustavo Passos", "Base Sub-17", "Athletico-PR", "Henrique", "Gui", "—", ""],
["Karlos Samuel", "Base Sub-20", "Avaí", "Henrique", "Gui", "—", ""],
["Thiaguinho", "Base Sub-20", "Fortaleza", "Henrique", "Gui", "—", ""],
["Lorenzo Dracena", "Base Sub-15", "Palmeiras", "Thiago Xavier", "Cauã", "RD (parceiro)", "logo RD sempre"],
["Enrico", "Base Sub-14", "Palmeiras", "Thiago Xavier", "Cauã", "Puma", "IA só com aprovação da mãe"],
["Luigi Dracena", "Base Sub-12", "Palmeiras", "Thiago Xavier", "Cauã", "RD (parceiro)", ""],
["Felipe Brenelli", "Base Sub-15", "Guarani", "Thiago Xavier", "Cauã", "—", ""],
["Rafa Martinez", "Base Sub-14", "São Paulo", "Thiago Xavier", "Cauã", "—", ""],
["Ryan Ridek", "Base Sub-14", "São Paulo", "Thiago Xavier", "Cauã", "—", ""],
["Aguirra", "Base Sub-17", "Corinthians", "Thiago Xavier", "Cauã", "—", "NÃO ASSINOU — sem logo 4ComM"],
["Leonan", "Base Sub-17", "São Paulo", "Thiago Xavier", "Cauã", "—", ""],
["Matheus Bittencourt", "Base Sub-15", "Referência", "Fran", "Felipe Salles", "Adidas", "SEM IA NO ROSTO — pai aprova (critério: clean)"],
["Tiago Barros", "Base Sub-17", "Santos", "Fran", "Hyzzi", "—", ""],
["Luiz Gustavo", "Base Sub-17", "Santos", "Fran", "Hyzzi", "—", ""],
["Diogo Oliveira", "Base Sub-15", "Vitória SC", "Fran", "Hyzzi", "Puma", ""],
["Luiz Felipe", "Base Sub-15", "Juventude", "Fran", "Hyzzi", "—", ""],
["Pietro Galli", "Base Sub-15", "Cruzeiro", "Papito", "Hyzzi", "—", ""],
["Rafinha Leonel", "Base Sub-20", "Santo André", "Papito", "Hyzzi", "—", ""],
["Rosenthal", "Base Sub-17", "Ibrachina", "Papito", "Hyzzi", "—", ""],
["João Toscano", "Base Sub-17", "São Paulo", "Fabio", "Gui", "Puma", ""],
["Arthur Diniz", "Base Sub-17", "RB Bragantino", "Fabio", "Letícia*", "Adidas", "chuteira: modelo NOVO da Adidas (pedido do atleta)"],
["Thuy", "Base Sub-15", "São Paulo", "Fabio", "Letícia*", "Adidas", ""],
["Dieguinho", "Base Sub-15", "São Paulo", "Fabio", "Gui", "Adidas", ""],
["Gustavo Defante", "Base Sub-17", "Referência", "Fabio", "Gui", "—", ""],
["Fellipe Lima", "Base Sub-15", "Água Santa", "Luis Felipe", "Gui", "—", ""],
["Pedro Tizon", "Base Sub-13", "São Paulo", "Cristiano", "Cauã", "—", ""],
["Jean Louis", "Base Sub-19", "Paris FC", "Ivanildo", "(definir)", "—", ""],
// ---- Base (roster ScoutHub — carteira/trilha a definir) ----
["Arthur Gustavo", "Base", "São Paulo", "(definir)", "(definir)", "—", ""],
["Cauã Rodrigues", "Base", "Santos", "(definir)", "(definir)", "—", "atleta — não confundir com o designer Cauã"],
["Frediani", "Base", "Palmeiras", "(definir)", "(definir)", "—", ""],
["Guilherme Giehl", "Base", "RB Bragantino", "(definir)", "(definir)", "—", "emprestado"],
["Jhonatan Almeida", "Base", "Internacional", "(definir)", "(definir)", "—", ""],
["Luizinho", "Base", "Real Murcia", "(definir)", "(definir)", "—", "nome: Luiz Henrique"],
["Pedrinho", "Base", "Referência", "(definir)", "(definir)", "—", "nome: Pedro Gomes"],
["Francisco Guimarães", "Base", "Goiás", "(definir)", "(definir)", "—", "⚠ homônimo do gestor 'F. Guimarães' — confirmar se são pessoas diferentes"]
],

"gestores": ["Cristiano", "F. Guimarães", "Fabio", "Fran", "Henrique", "Ivanildo", "Luis Felipe", "Papito", "Roberto", "Thiago Xavier", "Outro / marketing"],

"designers": ["Felipe Salles", "Edu/Leo", "Gui", "Cauã", "Hyzzi", "Letícia", "Matheus (plantão)"],

"fila": [
["qui 07/08 15:00", "Luiz Gustavo", "Paulista Sub-20 · São Bento (F)", "Base", "Média", "Hyzzi", "Radar", "produzir só D-2 (5ª cedo)"],
["sex 08/08 14:30", "Moisés", "Camp. Russo · FK Rostov (F)", "Especial · A", "Alta", "Felipe Salles", "Em produção", "entregar 5ª à noite — fuso"],
["sáb 08/08 09:00", "Fellipe Lima", "Paulista U15 · EC S. Bernardo (C)", "Base", "Alta", "Gui", "Na fila", ""],
["sáb 08/08 09:00", "Matheus Bittencourt", "Paulistão Sub-15 · Clube Vital (C)", "Base", "Alta", "Felipe Salles", "Na fila", "sem IA no rosto"],
["sáb 08/08 11:00", "Leonan", "Paulista Sub-17 · S. Bento Sorocaba (C)", "Especial · A", "Alta", "Cauã", "Na fila", "retorno de lesão"],
["dom 09/08 21:30", "Gabigol", "Copa do Brasil · Remo (F)", "Especial · A", "Alta", "Felipe Salles", "Na fila", ""],
["ter 11/08 19:30", "Thayllon", "Série B · Avaí × CRB (C)", "Especial · A", "Alta", "Felipe Salles", "Na fila", "4ComM + SPK"],
["ter 11/08 19:30", "Patrick de Lucca", "Série B · Avaí × CRB (F)", "Base", "A confirmar", "(definir)", "Radar", "mesmo jogo do Thayllon"],
["sex 15/08 20:30", "Peglow", "MLS · CF Montréal × DC United", "Especial · A", "Alta", "Edu/Leo", "Na fila", ""]
],

"rodizio": ["Aguirra*", "Brenelli", "Cauã Rodrigues", "Dieguinho", "Diogo Oliveira", "Felipe Amaral", "Felipe Oliveira", "Fellipe Lima", "Gustavo Defante", "Gustavo Passos", "Jean Louis", "João Toscano", "Karlos Samuel", "Kaue Canela", "Leonan ✓A", "Luca Canela", "Luigi", "Luiz Felipe", "Luiz Gustavo", "Pablo Maia", "Patrick de Lucca", "Pedro Tizon", "Pietro Galli", "Rafa Martinez", "Rafinha Leonel", "Rosenthal", "Ryan Ridek", "Thalisson", "Thiaguinho", "Thuy", "Tiago Barros", "— já receberam no ciclo:", "Arthur Diniz (1)", "Enrico (1)", "Kayk (1)", "Ryan N. (1)", "Lorenzo (2)", "Moisés (2)", "Peglow (3)", "Giovanni (4)", "Thayllon (4)", "Gabigol (6)"],

"banco": [
["Karlos Samuel", "10/06", "Hyzzi", "vs Corinthians (cortado)", "story"],
["Luiz Gustavo", "11/06", "Cauã", "vs Palmeiras (cortado)", "story"],
["Dieguinho", "13/06", "—", "jogo 13/06 (cortado)", "story"],
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
"Kayk Alboes": [["Londrina", "—", "—", "a definir", "—", "—", "confirmar com Roberto", "A confirmar", 0]],
"Felipe Amaral": [["Brasileirão Série B", "rodada América-MG", "—", "15-16/08", "—", "—", "recorrência", "A confirmar", 0]],
"Hwaskar": [],
"Thalisson": [["—", "sem jogo mapeado", "—", "a definir", "—", "—", "preencher manual", "A confirmar", 0]],
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
"Luiz Gustavo": [["Paulista Sub-20", "São Bento", "Fora", "07/08", "15:00", "CT Rei Pelé", "pedido 05/08", "Média", 0], ["Paulistão Sub-17", "rodada", "Casa", "15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Diogo Oliveira": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Luiz Felipe": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Pietro Galli": [["Mineiro Sub-15", "rodada", "—", "15/08", "09:00", "Toca da Raposa", "recorrência", "A confirmar", 0]],
"Rafinha Leonel": [["Sub-20", "rodada", "—", "fds 15-16/08", "—", "a confirmar", "recorrência", "A confirmar", 0]],
"Rosenthal": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"João Toscano": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Arthur Diniz": [["Paulistão Sub-17", "rodada", "—", "sáb 15/08", "11:00", "a confirmar", "recorrência sáb 11h", "A confirmar", 0]],
"Thuy": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Dieguinho": [["Paulistão Sub-15", "rodada", "—", "sáb 15/08", "09:00", "a confirmar", "recorrência sáb 09h", "A confirmar", 0]],
"Gustavo Defante": [["Paulista Sub-17", "—", "—", "08/08", "—", "—", "aviso 03/08: preservado (amarelo)", "Baixa", 0]],
"Fellipe Lima": [["Paulista U15", "EC São Bernardo", "Casa", "08/08", "09:00", "Estádio do Taboão", "pedido 04/08", "Alta", 0]],
"Pedro Tizon": [["Paulista Sub-13", "rodada", "—", "dom 16/08", "09:00", "a confirmar", "recorrência", "A confirmar", 0]],
"Jean Louis": [["Championnat U19", "rodada", "—", "a definir", "—", "—", "confirmar com Ivanildo", "A confirmar", 0]],
"Kaue Canela": [["—", "sem jogo mapeado", "—", "a definir", "—", "—", "preencher manual", "A confirmar", 0]]
}
};
