import Jogador from "./Jogador.js";
import Jogo from "./Jogo.js";
let jogadores = [];
let jogos = []
let quantidadeJogos = 21;
let isSaved = true;

function gerarSelecaoNomes() {
    const numJogadores = parseInt(document.getElementById("num-jogadores").value);
    if (numJogadores >= 2 && numJogadores <= 20) {
        const selecaoJogadores = document.getElementById("jogadores-nomes");
        selecaoJogadores.innerHTML = "";
        for (let i = 1; i <= numJogadores; i++) {
            selecaoJogadores.innerHTML += ` 
            <div class="label-nome">
                <label for="jogador${i}">Nome do Jogador ${i}</label>
                <input type="text" name="jogador${i}" id="jogador${i}" required>
            </div>`;
        }
    } else {
        alert('Escolha um número válido!');
    }
}

function criarJogadores(event) {
    event.preventDefault()
    const numJogadores = parseInt(document.getElementById("num-jogadores").value);
    document.getElementById("num-jogadores").setAttribute('disabled', '');
    document.getElementById('botao-confirmar-jogadores').setAttribute('disabled', '');
    jogadores = []
    for (let i = 1; i <= numJogadores; i++) {
        const elemento = document.getElementById(`jogador${i}`);
        jogadores.push(new Jogador(elemento.value, 0));
        elemento.setAttribute('disabled', '')
    }
    const pagina = document.getElementById('pagina');
    pagina.innerHTML = `
            <div class="jogos-block centralizar-conteudo">
                <h2>Defina o resultado dos jogos</h2>
                <div class="jogos" id="jogos">
         
                </div>
            </div>
        `;
    criarJogos()
}


function criarJogos() {
    if(localStorage.getItem('empate') == 'true'){
        const pagina = document.getElementById('pagina');
        pagina.innerHTML = `
                <div class="jogos-block centralizar-conteudo">
                    <h2>Defina o resultado dos jogos de desempate</h2>
                    <div class="jogos" id="jogos">
             
                    </div>
                </div>
            `;
    }
    localStorage.setItem('jogadores', JSON.stringify(jogadores));

    const jogosHtml = document.getElementById('jogos');

    if (localStorage.getItem('jogoSalvo') == null) {
        for (let i = 0; i < jogadores.length; i++) {
            for (let j = i + 1; j < jogadores.length; j++) {
                jogos.push(new Jogo(jogadores[i], jogadores[j], 0));
            }
        }
        console.warn('AQUI')

        quantidadeJogos = jogos.length;

    }

    for (let i = 0; i < jogos.length; i++) {
        jogos[i].imprimirJogo(jogosHtml, i)
    }

    localStorage.setItem('jogos', JSON.stringify(jogos));
    isSaved = false;
    localStorage.setItem('jogoSalvo', true);
    localStorage.setItem('quantidadeJogos', JSON.stringify(quantidadeJogos));
}

if (localStorage.getItem('jogoSalvo') == 'true' && isSaved) {
    var lsJogadores = JSON.parse(localStorage.getItem('jogadores'));
    var lsJogos = JSON.parse(localStorage.getItem('jogos'));
    for (let i = 0; i < lsJogadores.length; i++) {
        jogadores.push(new Jogador(lsJogadores[i].nome, lsJogadores[i].pontos))
    }
    let contador = 0;
    for (let i = 0; i < jogadores.length; i++) {
        for (let j = i + 1; j < jogadores.length; j++) {
            jogos.push(new Jogo(jogadores[i], jogadores[j], lsJogos[contador].estado));
            contador++;
        }
    }
    const pagina = document.getElementById('pagina');
    pagina.innerHTML = `
        <div class="jogos-block centralizar-conteudo">
            <h2>Defina o resultado dos jogos</h2>
            <div class="jogos" id="jogos">
     
            </div>
        </div>
    `;
    quantidadeJogos = parseInt(localStorage.getItem('quantidadeJogos'))
    criarJogos();

}

function vencedorEsquerdo(numJogo) {
    jogos[numJogo].jogador1GanhaPonto();
    localStorage.setItem('jogos', JSON.stringify(jogos));
    localStorage.setItem('jogadores', JSON.stringify(jogadores));

    const botaoEsquerdo = document.getElementById(`botao-partida-esquerdo${numJogo}`)
    const botaoDireito = document.getElementById(`botao-partida-direito${numJogo}`)
    botaoEsquerdo.style.background = 'linear-gradient(180deg, rgb(141, 60, 141) 25%, rgba(97,45,97,1) 100%)';
    botaoEsquerdo.setAttribute('disabled', '')
    botaoDireito.setAttribute('disabled', '')
    quantidadeJogos--;
    localStorage.setItem('quantidadeJogos', JSON.stringify(quantidadeJogos));
    if (quantidadeJogos == 0) {
        mostrarResultado()

    }

}

function vencedorDireito(numJogo) {
    jogos[numJogo].jogador2GanhaPonto();
    localStorage.setItem('jogos', JSON.stringify(jogos));
    localStorage.setItem('jogadores', JSON.stringify(jogadores));

    const botaoEsquerdo = document.getElementById(`botao-partida-esquerdo${numJogo}`)
    const botaoDireito = document.getElementById(`botao-partida-direito${numJogo}`)
    botaoDireito.style.background = 'linear-gradient(180deg, rgb(141, 60, 141) 25%, rgba(97,45,97,1) 100%)';
    botaoDireito.setAttribute('disabled', '')
    botaoEsquerdo.setAttribute('disabled', '')
    quantidadeJogos--;
    localStorage.setItem('quantidadeJogos', JSON.stringify(quantidadeJogos));
    if (quantidadeJogos == 0) {
        mostrarResultado()
    }

}

function mostrarResultado() {
    let jogadorComMaiorPonto;
    let maiorPonto = 0;
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].getPontos() > maiorPonto) {
            maiorPonto = jogadores[i].getPontos();
            jogadorComMaiorPonto = jogadores[i];
        }
    }
    let contadorNumEmpate = 0;
    let jogadoresAux = []
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].getPontos() == maiorPonto) {
            jogadoresAux.push(jogadores[i])
            contadorNumEmpate++;
        }
    }
    jogadores = [...jogadoresAux]
    if (contadorNumEmpate > 1) {
        isSaved = false;
        localStorage.clear();
        document.getElementById('jogos').innerHTML = ""
        jogos = []
        localStorage.setItem('empate',true)
        criarJogos();

    } else {
        const pagina = document.getElementById('pagina');
        pagina.innerHTML += `
        <div class="resultados-block centralizar-conteudo">
            <h2>Vencedor: ${jogadorComMaiorPonto.getNome()}</h2>
            <h2>Pontos: ${jogadorComMaiorPonto.getPontos()}</h2>
        </div>
        `
    }


}
try {
    const formularioNomes = document.getElementById('formulario-nome-jogadores');
    formularioNomes.addEventListener("submit", criarJogadores);
} catch (error) {
    console.log('Jogo Carregado')
}
if (quantidadeJogos == 0) {
    mostrarResultado()
}


function reiniciar() {
    localStorage.clear();
    location.reload();
}
window.reiniciar = reiniciar
window.vencedorDireito = vencedorDireito
window.vencedorEsquerdo = vencedorEsquerdo
window.gerarSelecaoNomes = gerarSelecaoNomes