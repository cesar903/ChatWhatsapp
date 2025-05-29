const codigoSala = "sala123"; // pode ser um IP ou algo gerado dinamicamente
const nomeUsuario = "UsuárioX"; // você pode pegar de um login, IP, ou outro campo

document.getElementById("btnEnviar").addEventListener("click", enviarMensagem);
document.getElementById("inputMensagem").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        alert("Mensagem enviada!");
        enviarMensagem();
    }
});

async function enviarMensagem() {
    const input = document.getElementById("inputMensagem");
    const mensagem = input.value.trim();
    if (!mensagem) return;

    await fetch(`http://localhost:3000/mensagem/${codigoSala}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem, nome: "cesar" })

    });

    input.value = "";
    carregarMensagens();
}

async function carregarMensagens() {
    const res = await fetch(`http://localhost:3000/mensagem/${codigoSala}`);
    const mensagens = await res.json();

    const divMensagens = document.getElementById("mensagens");
    divMensagens.innerHTML = mensagens.map(m =>
        `<p class="ele"><strong>${m.nome}:</strong> ${m.mensagem}</p>`
    ).join("");
}

// Atualiza a cada 3 segundos
setInterval(carregarMensagens, 3000);

// Carrega ao iniciar
carregarMensagens();
