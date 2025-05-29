const {app, BrowserWindow} = require('electron');

function criarJanela(){
    const janela = new BrowserWindow({
        height: 600,
        width: 1000,
    })
    janela.loadFile('./public/index.html')
}

app.whenReady()
    .then(function(){
        criarJanela()
    })
    .catch(function(error){
        console.log(error)
    })