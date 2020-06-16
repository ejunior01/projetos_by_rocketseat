// Configurando o servidor
const express = require("express");
const server = express();

// Configurar o servidor para apresentar arquivos extras
server.use(express.static('public'))

// habilitar body do formulário
server.use(express.urlencoded({extended: true}))

// Configurar a conexão com o banco de dados
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'doe',
})


// Configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})


// Configurando a apresentação da página
server.get("/", function(req, res) {
    db.query("SELECT * FROM donors", function(err, result) {
        if (err) return res.send("Erro no banco de dados.")
        const reverseDonors = [...result.rows].reverse()
        let lastdonors = []
        for (let donors of reverseDonors) {
           if (lastdonors.length < 4 ) {
            lastdonors.push(donors)
           }
        }
        return res.render("index.html", {donors:lastdonors})
    })

})

server.post("/", function(req, res) {
    // Pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if (name == "" || email == "" || blood == "") {
        return res.send("Favor preencher todos os campos!")
    }

    // colocando valores dentro do banco de dados.
    const query = `
    INSERT INTO donors ("name", "email","blood")
    VALUES ($1, $2, $3)`;

    const values = [name, email, blood]

    db.query(query, values, function(err) {
        // fluxo de erro
        if (err) return res.send("Erro no banco de dados.")

        // fluxo ideal 
        return res.redirect("/")

    })
})


//LIGAR O SERVIDOR E PERMITIR O ACESSO NA PORTA 3000
server.listen(3000, function() {
    console.log("Start Server")
})
