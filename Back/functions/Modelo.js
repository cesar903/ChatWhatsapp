const mongoose = require("mongoose");
const { Schema, model } = mongoose;

function ObterModelo(codigo) {
    const esquema = new Schema({
        nome: String,
        mensagem: String,
        tempo: { type: Date, default: Date.now }
    }, {
        collection: codigo
    });

    return mongoose.models[codigo] || model(codigo, esquema);
}

module.exports = ObterModelo;
