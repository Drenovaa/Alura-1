let numerosGerados = [];
let tamanhoMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function mensagemInicial () {
    exibirTexto("h1", "Jogo do número secreto");
    exibirTexto("p", `Escolha um número entre 1 e ${tamanhoMaximo}`);
    console.log(numerosGerados);
}
mensagemInicial();


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female");
};

function verificaValor(numero) {
    let mensagem = (tentativas > 1 ? "tentativas" : "tentativa");

    if (numero == numeroSecreto) {
        exibirTexto("h1", "Acertou");
        exibirTexto("p", `Você precisou de ${tentativas} ${mensagem}`);
        habilitarBotao();
    } else {
        if (numeroSecreto > numero) {
        exibirTexto("p", "O Número secreto é maior");
    } else {
        exibirTexto("p", "O Número secreto é menor");
    }
    tentativas++;
    limparCampo();
    };
};


function verificarChute() {
    let chute = document.querySelector('input').value;
    verificaValor(chute);
};

function habilitarBotao() {
    document.getElementById('reiniciar').disabled = false;
};

function desabilitarBotao() {
    document.getElementById('reiniciar').disabled = true;
};

function resetarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    desabilitarBotao();
    console.log(numerosGerados);

};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * tamanhoMaximo + 1);
    let tamanhoDaLista = numerosGerados.length;

    if (tamanhoDaLista == 3) {
        numerosGerados = [];
    }

    if (numerosGerados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else{
        numerosGerados.push(numeroSorteado);
        return numeroSorteado;
    }

};
