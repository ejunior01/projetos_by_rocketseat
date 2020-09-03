<h1 align="center">
    <img width="300px" alt="Logo Proffy" src="./public/assets/logo.svg" />
</h1>
<p align="center">
<a href="https://rocketseat.com.br">
<img alt="Made by Junior Santos" src="https://img.shields.io/badge/made%20by-Junior Santos-%237519C1">
</a>
<p/>

------

### :mortar_board: Descrição do Projeto

Projeto desenvolvido através do **Next Level Week 2**  by  [Rocketseat](https://rocketseat.com.br/) entre os dias 03/08 e 07/08. 

Projeto foi desenvolvido com a instrução de Mayk Brito, onde foi ensina a desenvolver uma aplicação com Frontend e Backend. Utilizando tecnologias no Backend como Node.js, Express, Nunjucks e SQLITE-async, e no Frontend HTML, CSS e JavaScript.

A aplicação construída foi o Site **Proffy**, onde a proposta definida seria um local para alunos buscarem professores que estejam oferecendo aulas  particulares e os professores se cadastrando para oferecer aulas dentro de períodos estabelecidos.

------

###  :mortar_board: Funcionalidades do Site Ecoleta

:trophy: Cadastro de Professores para dar aulas, com informações de contato, preço, matéria e dias e horários disponíveis.

:trophy: Buscas de aulas disponíveis em determinada matéria. 

----

<h3 align="center">
    Layout da aplicação
</h3>

------

#### :computer: Tela Inicial

------

#### :computer: Tela Aulas


------

#### :computer: Tela Cadastro de Proffys


------

### :mortar_board: Dependências

:vertical_traffic_light: [Node.js](https://nodejs.org/en/) - Express: ^4.17.1 - Nunjucks: ^3.2.2 - Sqlite-async: ^1.1.0

------

###  :mortar_board: Banco de Dados

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

Foi feita uma proposto de uma versão do Proffy 2.0, onde a mesma inclui nessa versão funções como: autenticação de usuários, recuperação de senhas, perfil do proffy, salvar seus proffys favoritos e etc. Ainda não dei inicio na construção dessa versão..

link da proposta: [:mortar_board: Proffy 2.0](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970)


### :mortar_board: Status do Projeto: Em desenvolvimento :construction:

------

### :pencil: Licença

<p align="center">
	Copyright (c) 2020 Edvan Ribeiro
    <br/>
    Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/ejunior01/projetos_by_rocketseat/blob/master/LICENSE">LICENSE</a> para mais detalhes.
</p>
