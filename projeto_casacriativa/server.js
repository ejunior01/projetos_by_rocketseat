// useu o express para criar e conffigurar meu server
const express = require("express")
const server = express()

const db = require ("./db")

// configurção do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
   express: server,
   noCache: true, // boolean

})

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// habiltar uso do req.body

server.use(express.urlencoded({extended:true}))

// crie uma rota
// e capture o pedido do cliente para responder
server.get("/", function(req, res) {
   // Consultar dados
    db.all(`SELECT * FROM ideas`, function(err, rows) 
    { if (err) {
      console.log(err)
      return res.send("Erro no Banco de Dados")}

      const reverseIdeas = [...rows].reverse()
      let lastIdeas = []
      for (let idea of reverseIdeas) {
         if (lastIdeas.length < 3 ) {
            lastIdeas.push(idea)
         }
      }   
      return res.render("index.html", { ideas: lastIdeas })
    })
})
server.get("/ideias", function(req, res) {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
       if (err) {
               console.log(err)
               return res.send("Erro no Banco de Dados")
    }
   const reverseIdeas = [...rows].reverse()
   return res.render("ideias.html", {ideas: reverseIdeas})
    })
})
server.post("/", function(req, res) {
   // inserir dados na tabela
   const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    const values = [
      req.body.image,
      req.body.title,
      req.body.category,
      req.body.description,
      req.body.link
    ]

    db.run(query, values, function(err)
    {if (err) {
      console.log(err)
      return res.send("Erro no Banco de Dados")}

      return res.redirect("/ideias")
   
   })

})

// liguei o servidor na porta 3000
server.listen(3000)
