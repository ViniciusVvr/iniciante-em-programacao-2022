const X = "X";
const O = "O";
checarTurno = true;
 let jogador;
 vencedor = false;
 let empate = 0;



//Função principal
function selecionarArea(posicaoLinha, posicaoColuna){ 
        vezjogador();
        vitoriaVertical();
        vitoriaHorizontal();
        vitoriaDiagonal();
        MostraJogador(posicaoLinha, posicaoColuna);
        empatou();


        if (checarTurno == false){
                desenharSimbolo(X, posicaoLinha, posicaoColuna)
                marcarJogadorAtivo(O)  
        }
        if (checarTurno == true){
                desenharSimbolo(O, posicaoLinha, posicaoColuna)
        }}      marcarJogadorAtivo(X)    
        
//função que reinicia o jogo ao clicar no botão
function reiniciarJogo() {
        location.reload();
    }


//Inverte a vez de cada Jogador
function vezjogador(){
        marcarJogadorAtivo("X");

        turno = checarTurno ? X : O
        console.log(turno);
        checarTurno =  !checarTurno;
        console.log(checarTurno);

        if (checarTurno == false) {
                marcarJogadorAtivo(O);
                jogador = X;
        
            }
            if (checarTurno == true) {
        
                jogador = O;
                marcarJogadorAtivo(X);
}}

function MostraJogador(posicaoLinha, posicaoColuna) {
        if (jogador == X) {
            desenharSimbolo(X, posicaoLinha, posicaoColuna);
            empate++;
            
        }
        if (jogador == O) {
            desenharSimbolo(O, posicaoLinha, posicaoColuna);
            empate++;
        }
    }

//verificar a vitoria(L=linha, C=coluna)

function vitoriaVertical() {
let L1C1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
let L2C1 = document.querySelector(`[data-linha='${2}'][data-coluna='${1}']`);
let L3C1 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`); 

if (L1C1.textContent === L2C1.textContent && 
        L1C1.textContent === L3C1.textContent && 
        L2C1.textContent === L3C1.textContent && L1C1.textContent != "" && 
        L2C1.textContent != "" && 
        L3C1.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        
    }

    let L1C2 = document.querySelector(`[data-linha='${1}'][data-coluna='${2}']`);
    let L2C2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
    let L3C2 = document.querySelector(`[data-linha='${3}'][data-coluna='${2}']`);

    if (L1C2.textContent === L2C2.textContent && 
        L1C2.textContent === L3C2.textContent && 
        L2C2.textContent === L3C2.textContent && 
        L1C2.textContent != "" && 
        L2C2.textContent != "" && 
        L3C2.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        
    }

    let L1C3 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);
    let L2C3 = document.querySelector(`[data-linha='${2}'][data-coluna='${3}']`);
    let L3C3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);

    if (L1C3.textContent === L2C3.textContent && 
        L1C3.textContent === L3C3.textContent && L2C3.textContent === L3C3.textContent 
        && L1C3.textContent != "" 
        && L2C3.textContent != "" 
        && L3C3.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        
    }
}

    //----------------------------------------------------------------------------------------------------------------------------------------//
    
    function vitoriaHorizontal() {

        let C1L1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
        let C2L1 = document.querySelector(`[data-linha='${1}'][data-coluna='${2}']`);
        let C3L1 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);
    
        if (C1L1.textContent === C2L1.textContent && 
                C1L1.textContent === C3L1.textContent && 
                C2L1.textContent === C3L1.textContent && 
                C1L1.textContent != "" && 
                C2L1.textContent != "" && C3L1.textContent != "") {
            exibirResultado(`Jogador ${jogador} venceu!`);
            vencedor = true;
            
        }
    
        let C1L2 = document.querySelector(`[data-linha='${2}'][data-coluna='${1}']`);
        let C2L2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
        let C3L2 = document.querySelector(`[data-linha='${2}'][data-coluna='${3}']`);
    
        if (C1L2.textContent === C2L2.textContent && 
                C1L2.textContent === C3L2.textContent && 
                C2L2.textContent === C3L2.textContent && 
                C1L2.textContent != "" && 
                C2L2.textContent != "" && 
                C3L2.textContent != "") {
            exibirResultado(`Jogador ${jogador} venceu!`);
            vencedor = true;
            
        }
    
        let C1L3 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);
        let C2L3 = document.querySelector(`[data-linha='${3}'][data-coluna='${2}']`);
        let C3L3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);
    
        if (C1L3.textContent === C2L3.textContent && 
                C1L3.textContent === C3L3.textContent && 
                C2L3.textContent === C3L3.textContent && 
                C1L3.textContent != "" && 
                C2L3.textContent != "" && 
                C3L3.textContent != "") {
            exibirResultado(`Jogador ${jogador} venceu!`);
            vencedor = true;
            
        }
    
    }
    
    //----------------------------------------------------------------------------------------------------------------------------------------//

    function vitoriaDiagonal() {
        // D(Diagonal)
        let DL1C1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
        let DL2C2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
        let DL3C3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);
    
    
        if (DL1C1.textContent === DL2C2.textContent && 
                DL1C1.textContent === DL3C3.textContent && 
                DL2C2.textContent === DL3C3.textContent && 
                DL1C1.textContent != "" && 
                DL2C2.textContent != "" && 
                DL3C3.textContent != "") {
            exibirResultado(`Jogador ${jogador} venceu!`);
            vencedor = true;
            
        }

    //----------------------------------------------------------------------------------------------------------------------------------------//

        let DL1C3 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);
        let DL3C1 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);
    
        if (DL1C3.textContent === DL2C2.textContent && 
                DL1C3.textContent === DL3C1.textContent && 
                DL2C2.textContent === DL3C1.textContent && 
                DL1C3.textContent != "" && 
                DL2C2.textContent != "" && DL3C1.textContent != "") {
            exibirResultado(`Jogador ${jogador} venceu!`);
            vencedor = true;
            
        }
    }

    //verificação de empate

    function empatou(){
        if (empate == 9 && vencedor == false){
                exibirResultado("Empatou, meu caro :)");
        }
}