const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")


// configurar pasta public
server.use(express.static("public"))

// Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended:true}))


// utlizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos/rotas da aplicação
// req: requisição
// res: resposta

// página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

// página cadastro pontos
server.get("/create-point", (req, res) => {
    // req.query: query strings da nossa url
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: corpo do nosso formulário
    // console.log(req.body)

    // inserir dados no banco de dados
    const query = `INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items)

        VALUES (?,?,?,?,?,?,?);
        `
    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        return res.render("create-point.html", {saved:true})
    }
        const values = [
            req.body.name,
            req.body.image,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items,
        ]
    db.run(query, values, afterInsertData)

})

// página resultado das buscas
server.get("/search", (req, res) => {
    
    // configurar barra de busca
    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", {total:0})
    }

        //realizar buscas
    db.all(`SELECT * FROM places WHERE city like '%${search}%' ORDER BY city`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total:total})
    })
})


// Ligar o servidor
server.listen(3000)