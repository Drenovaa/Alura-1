//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo () {
    let nomeDoAmigo = document.querySelector('input').value;

    if (nomeDoAmigo == "") {
        alert("O input do nome não pode ser vazio");
        return;
    } else if (listaDeAmigos.includes(nomeDoAmigo)) {
        alert("Já existe uma pessoa com o mesmo nome na lista")
        return;
    } else{
        listaDeAmigos.push(nomeDoAmigo);
        exibirListaDeAmigos()
        return nomeDoAmigo
    }
};

function exibirListaDeAmigos () {
    let textoFormatado = listaDeAmigos.join(", ")
    exibirTexto("listaAmigos", `${textoFormatado}`);
}

function exibirAmigoSorteado (id) {
    exibirTexto("resultado", `O amigo secreto sorteado é: ${listaDeAmigos[id]}`);
}

function exibirTexto(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
};

function sortearAmigo() {
    let tamanhoDaLista = listaDeAmigos.length;
    let amigoSorteado = parseInt(Math.random() * tamanhoDaLista);
    return exibirAmigoSorteado(amigoSorteado)
};