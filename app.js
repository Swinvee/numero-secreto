let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero de 1 a 100');
}

exibirMensagemInicial();

function verificarChute(){
let chute = document.querySelector('input').value;
   
if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou !');
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa} !`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
tentativas ++;
limparCampo();
}

//função (método) é responsavel por fazer uma ação

function gerarNumeroAleatorio (){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados =[];
   }

if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
   return gerarNumeroAleatorio();
} else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
}
// o push serve pra adicionar algo na lista depois de já criada 
// já o pop remove o último elemento

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}