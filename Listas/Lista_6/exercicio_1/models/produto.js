const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true},
    descricao: { type: String, required: true},
    imagem: { type: String, required: true},
    categoria: { type: String, required: true},
    valor: { type: Number, required: true}
})

const produto = mongoose.model('Produtos', produtoSchema)

module.exports = produto