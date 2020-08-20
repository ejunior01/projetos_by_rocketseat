<h1 align="center">
    <img width="300px" alt="Logo Ecoleta" src="./public/assets/logo.svg" />
</h1>
<p align="center">
<a href="https://rocketseat.com.br">
<img alt="Made by Junior Santos" src="https://img.shields.io/badge/made%20by-Junior Santos-%237519C1">
</a>
<p/>

------

### :mortar_board: Descrição do Projeto

Projeto desenvolvido através do **Next Level Week 2**  by  [Rocketseat](https://rocketseat.com.br/) entre os dias 03/08 e 07/08. 

------

###  :mortar_board: ​Funcionalidades do Site Ecoleta

:trophy: Cadastramento de Professores para dar aulas

:trophy: Buscas de por aulas disponíveis. 

----

<h3 align="center">
    Layout da aplicação
</h3>

------

#### :computer: Tela Inicial

<h4 align="center">
    <img src="./public/design/screencapture-home.png"/>
</h4>

------

#### :computer: Tela Aulas

<h4 align="center">
    <img src="./public/design/screencapture-create-point.png"/>
</h4>

------

#### :computer: Tela Cadastro de Proffys

<h4 align="center">
    <img src="./public/design/screencapture-search.png"/>
</h4>

------

### :mortar_board: Dependências

:vertical_traffic_light: [Node.js](https://nodejs.org/en/)

:vertical_traffic_light: [Express](https://expressjs.com/pt-br/)

:vertical_traffic_light: [Nunjucks](https://mozilla.github.io/nunjucks/)

:vertical_traffic_light: [Sqlite-async](https://www.sqlite.org/index.html)

:vertical_traffic_light: [Nodemon](https://www.npmjs.com/package/nodemon)

------

###  :mortar_board: ​Banco de Dados

Foi utilizando o SQLITE-async para gerenciar o banco de Dados, a base de dados é crianda com a execução do arquivo **db.js**. Abaixo descrição da Estrutura da tabela **proffys, classes e class_schedule** no banco de dados.

**proffys**

| id| name| avatar |whatsapp | bio |
|--|--|--|--|--|
|INTEGER PRIMARY KEY AUTOINCREMENT|text|text|text|text|

**classes**

| id| subject | cost |proffy_id |
|--|--|--|--|
|INTEGER PRIMARY KEY AUTOINCREMENT|integer|text|integer|

**class_schedule**

| id| class_id | weekday |time_from | time_to |
|--|--|--|--|--|
|INTEGER PRIMARY KEY AUTOINCREMENT|integer| integer |integer|integer|

------

#### Atualizações:

- [ ] A


### :mortar_board: Status do Projeto: Em desenvolvimento :construction:
------

### :pencil: Licença

<p align="center">
	Copyright (c) 2020 Edvan Ribeiro
    <br/>
    Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/ejunior01/projetos_by_rocketseat/blob/master/LICENSE">LICENSE</a> para mais detalhes.
</p>
