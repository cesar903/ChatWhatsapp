const express = require("express");
const cors = require("cors");
const ObterModelo = require("./functions/Modelo");
require("./functions/Conexao");

const app = express();
app.use(cors());
app.use(express.json());

// Rota para receber mensagens de uma "sala"
app.post("/mensagem/:codigo", async (req, res) => {
    console.log("Recebendo mensagem");
    const { mensagem } = req.body;
    const codigo = req.params.codigo;

    // Pega o IP do usuário
    let nome = req.body.nome


    const Modelo = ObterModelo(codigo);

    await Modelo.create({ nome: nome, mensagem });
    res.send({ sucesso: true });
});


// Rota para obter mensagens da "sala"
app.get("/mensagem/:codigo", async (req, res) => {
    const Modelo = ObterModelo(req.params.codigo);
    const mensagens = await Modelo.find().sort({ tempo: 1 });
    res.json(mensagens);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
