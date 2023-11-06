const JANELA_ID = "janela";
const TEXTO_ID = "texto";

const JANELA_ABERTA = "janelaaberta.jpg";
const JANELA_FECHADA = "janelafechada.jpg";
const JANELA_QUEBRADA = "janelaquebra.png";

function setJanela(img, text) {
    document.getElementById(JANELA_ID).setAttribute("src", img);
    document.getElementById(TEXTO_ID).innerHTML = text;
}

function quebra() {
    setJanela(JANELA_QUEBRADA, "Janela Quebrada");
}

function abre() {
    setJanela(JANELA_ABERTA, "Janela Aberta");
}

function fecha() {
    setJanela(JANELA_FECHADA, "Janela Fechada")
}