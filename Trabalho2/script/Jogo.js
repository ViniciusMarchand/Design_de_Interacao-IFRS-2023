export default class Jogo {
    constructor(jogador1, jogador2, estado) {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.estado = estado;
    }

    jogador1GanhaPonto() {
        this.jogador1.ganharPonto();
        this.setEstado(1)
    }

    jogador2GanhaPonto() {
        this.jogador2.ganharPonto();
        this.setEstado(2);
    }

    getPontosJogador1(){
        return this.jogador1.getPontos();
    }

    getPontosJogador2(){
        return this.jogador2.getPontos();
    }

    setEstado(num){
        this.estado = num; 
    }


    imprimirJogo(documentHtml, i) {
        documentHtml.innerHTML += `
        <div class="partida">
            <h3>Partida ${i+1}</h3>
            <h4>Vencedor:</h4>
            <div class="boteos-pontos">
            <input type="button" value="${this.jogador1.nome}" class="botao botao-partida" id="botao-partida-esquerdo${i}" onclick="vencedorEsquerdo(${i})">
                <input type="button" value="${this.jogador2.nome}" class="botao botao-partida" id="botao-partida-direito${i}" onclick="vencedorDireito(${i})">
            </div>
        </div> 
        `
        if(this.estado == 1){
            const botaoEsquerdo = document.getElementById(`botao-partida-esquerdo${i}`)
            const botaoDireito = document.getElementById(`botao-partida-direito${i}`)
            botaoEsquerdo.style.background = 'linear-gradient(180deg, rgb(141, 60, 141) 25%, rgba(97,45,97,1) 100%)';
            botaoEsquerdo.setAttribute('disabled', '')
            botaoDireito.setAttribute('disabled', '')
        }else if(this.estado == 2){
            const botaoEsquerdo = document.getElementById(`botao-partida-esquerdo${i}`)
            const botaoDireito = document.getElementById(`botao-partida-direito${i}`)
            botaoDireito.style.background = 'linear-gradient(180deg, rgb(141, 60, 141) 25%, rgba(97,45,97,1) 100%)';
            botaoDireito.setAttribute('disabled', '')
            botaoEsquerdo.setAttribute('disabled', '')
        }
    }

}