const mongoose = require('mongoose')
const express = require ('express')
const app = express()
const cors = require('cors')
const port = 8050
const connectionString = "mongodb+srv://Mxriaa:teste123@appdbaula.micwrct.mongodb.net/"
const Produto = require('./models/produto')

app.use(express.json())
app.use(cors())

app.get ("/listar-produtos", async (req,res) => {
    try{
        let produtos = await Produto.find()
        return res.status(200).json(produtos) 
    } catch(error) {
        return res.status(500).json(error)
    }
})

app.post("/adicionar-produto", async (req,res) => {
    try{
        const {nome, descricao, imagem, categoria, valor} = req.body

        let produto = {
            nome,
            descricao,
            imagem, 
            categoria,
            valor
        }

        await Produto.create(produto)
        return res.status(201).json({ message: 'Produto adicionado a lista com sucesso'})
    }catch (error) {
        return res.status(400).json({ error: 'Erro ao adicionar produto a lista.'})
    }
})

mongoose.connect(connectionString, {
    dbName: "Lojinha"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})