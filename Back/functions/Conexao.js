const mongoose = require("mongoose")

const endereco = "mongodb+srv://<USER>:<PASSWORD>@cesar.fcou2pe.mongodb.net/"
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set("strictQuery", false)

mongoose.connect(endereco, configuracao)
    .then(function () {
        console.log("CONECTADO COM O BANCO DE DADOS!")
    })

    .catch(function (erro) {
        console.log(erro.message)
    })

    

