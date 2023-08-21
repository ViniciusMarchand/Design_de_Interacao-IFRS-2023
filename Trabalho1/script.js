
let jogoConfirmado = false;
const FORM = document.getElementById('form')
let corFinalEsquerdo;
let corFinalDireito;
FORM.addEventListener('submit', e => {
    e.preventDefault()
    let validado = true
    for (let i = 1; i <= 4; i++) {
        const VALOR_INPUT = document.getElementById(`time${i}`);
        const INPUT_COR = document.getElementById(`time${i}cor`);

        if (VALOR_INPUT.value == '' || INPUT_COR.value == '') {
            validado = false;
            break;
        }
    }
    if (validado == true) {
        colorirDesabilitar()
        comecaJogo();
    }

})

function comecaJogo() {
    const time1 = document.getElementById('time1');
    const time2 = document.getElementById('time2');
    const time3 = document.getElementById('time3');
    const time4 = document.getElementById('time4');

    const AREA_JOGO = document.getElementById('area-jogo');
    AREA_JOGO.innerHTML = `  <div class="semi-final esquerda" id="semi-final1">
    <div class="label-input-jogo" id='jogo1-time1'>
        <input type="number" class="input-number" placeholder="Gols" id='time1-semi-final'>
        <label for="" id="label-semi-time1">${time1.value}</label>
    </div>
    <input type="button" value="CONFIRMAR" onclick="resultadoSemiFinalVerificacao('1','2')" id="confimar-esquerdo">                
    <div class="label-input-jogo" id='jogo1-time2'>
        <label for="" id="label-semi-time2">${time2.value}</label>
        <input type="number" class="input-number" placeholder="Gols" id='time2-semi-final'>
    </div>            
</div>
<div class="final" id="final">
    <div class="label-input-jogo" id='final1-block'>
        <label for="" id='label-final1'>???</label>
        <input type="number" class="input-number" placeholder="Gols" id='time5-final' disabled>
    </div>
        <img src="imgs/trofeu.png" alt="" id="trofeu" onclick="resultadoFinalVerificacao()">
    <div class="label-input-jogo" id='final2-block'>
        <label for="" id='label-final2'>???</label >
        <input type="number" class="input-number" placeholder="Gols" id='time6-final' disabled>
    </div>
</div>
<div class="semi-final direita" id="semi-final2">
    <div class="label-input-jogo" id='jogo1-time3'>
        <input type="number" class="input-number" placeholder="Gols" id='time3-semi-final'>
        <label for="" id="label-semi-time3">${time3.value}</label>
    </div>
    <input type="button" value="CONFIRMAR" id="confimar-direito" onclick="resultadoSemiFinalVerificacao('3','4')">                
    <div class="label-input-jogo" id='jogo1-time4'>
        <label for="" id="label-semi-time4">${time4.value}</label>
        <input type="number" class="input-number" placeholder="Gols" id='time4-semi-final'>
    </div>
</div>`

    for (let i = 1; i <= 4; i++) {
        const elementoCor = document.getElementById(`time${i}cor`).value;
        const ELEMENTO_TIME_SEMI_FINAL = document.getElementById(`label${i}`)
        ELEMENTO_TIME_SEMI_FINAL.style.borderWidth = '5px'
        ELEMENTO_TIME_SEMI_FINAL.style.borderColor = `${elementoCor}`
    }
}

function colorirDesabilitar() {
    //time1cor
    for (let i = 1; i <= 4; i++) {
        const INPUT_COR = document.getElementById(`time${i}cor`);
        const ELEMENTO = document.getElementById(`label${i}`);
        const VALOR_INPUT = document.getElementById(`time${i}`);
        const BOTAO_CONFIRMAR = document.getElementById('botao-confirmar');
        ELEMENTO.style.border = `5px solid`;
        ELEMENTO.style.borderColor = `${INPUT_COR.value}`;
        VALOR_INPUT.setAttribute('disabled', '');
        INPUT_COR.setAttribute('disabled', '')
        BOTAO_CONFIRMAR.setAttribute('disabled', '')
    }
}
//RESULTADO SEMI FINAL
function resultadoSemiFinalVerificacao(num1, num2) {
    let validado = true
    const VALOR_INPUT_TIME1 = document.getElementById(`time${num1}-semi-final`).value;
    const VALOR_INPUT_TIME2 = document.getElementById(`time${num2}-semi-final`).value;
    if (VALOR_INPUT_TIME1 == '' || VALOR_INPUT_TIME2 == '' || parseInt(VALOR_INPUT_TIME1) < 0 || parseInt(VALOR_INPUT_TIME2) < 0) {
        validado = false;
    }

    if (validado == true) {
        resultadoSemiFinal(num1, num2);
    }
}
function resultadoSemiFinal(num1, num2) {
    const INPUT_TIME1 = document.getElementById(`time${num1}-semi-final`);
    const INPUT_TIME2 = document.getElementById(`time${num2}-semi-final`);
    let confirmarEsquerdo;
    if(num1 == 1){
        confirmarEsquerdo = document.getElementById('confimar-esquerdo');
    }else{
        confirmarEsquerdo = document.getElementById('confimar-direito');

    }
    INPUT_TIME1.setAttribute('disabled', '');
    INPUT_TIME2.setAttribute('disabled', '');
    confirmarEsquerdo.setAttribute('disabled', '');

    const golsTime1 = document.getElementById(`time${num1}-semi-final`).value;
    const golsTime2 = document.getElementById(`time${num2}-semi-final`).value;
    let ganhador;
    if (parseInt(golsTime1) > parseInt(golsTime2)) {
        const COR_TIME1 = document.getElementById(`time${num1}cor`).value;
        corFinalDireito = COR_TIME1
        const JOGO1 = document.getElementById(`jogo1-time${num1}`);
        JOGO1.style.background = `${COR_TIME1}`;
        ganhador = document.getElementById(`label-semi-time${num1}`).innerText;
    } else if (parseInt(golsTime2) > parseInt(golsTime1)) {
        const COR_TIME2 = document.getElementById(`time${num2}cor`).value;
        corFinalEsquerdo = COR_TIME2; 
        const JOGO2 = document.getElementById(`jogo1-time${num2}`);
        JOGO2.style.background = `${COR_TIME2}`;
        ganhador = document.getElementById(`label-semi-time${num2}`).innerText;
    }

    if (num1 == '1') {
        document.getElementById('label-final1').innerText = ganhador;
        document.getElementById('time5-final').removeAttribute('disabled', '');
    } else {
        document.getElementById('label-final2').innerText = ganhador;
        document.getElementById('time6-final').removeAttribute('disabled', '');

    }
}

//RESULTADO FINAIS
function resultadoFinalVerificacao() {
    let validado = true
    const VALOR_INPUT_TIME1 = document.getElementById(`time5-final`).value;
    const VALOR_INPUT_TIME2 = document.getElementById(`time6-final`).value;
    if (VALOR_INPUT_TIME1 == '' || VALOR_INPUT_TIME2 == '' || parseInt(VALOR_INPUT_TIME1) < 0 || parseInt(VALOR_INPUT_TIME2) < 0) {
        validado = false;
    }

    if (validado == true) {
        resultadoFinal()
    }
}

function resultadoFinal() {
    const INPUT_TIME1 = document.getElementById(`time5-final`);
    const INPUT_TIME2 = document.getElementById(`time6-final`);
    const CONFIRMAR_ESQUERDO = document.getElementById('confimar-esquerdo');
    INPUT_TIME1.setAttribute('disabled', '');
    INPUT_TIME2.setAttribute('disabled', '');
    CONFIRMAR_ESQUERDO.setAttribute('disabled', '');

    const golsTime1 = document.getElementById(`time5-final`).value;
    const golsTime2 = document.getElementById(`time6-final`).value;
    let ganhador;
    if (parseInt(golsTime1) > parseInt(golsTime2)) {
        const JOGO1 = document.getElementById(`final1-block`);
        JOGO1.style.background = `${corFinalEsquerdo}`;
        ganhador = document.getElementById('time5-final').innerText;
        document.body.style.backgroundColor = corFinalDireito;
        

    } else if (parseInt(golsTime2) > parseInt(golsTime1)) {
        const JOGO2 = document.getElementById('final2-block');
        JOGO2.style.background = `${corFinalDireito}`;
        ganhador = document.getElementById('time6-final').innerText;
    }

}

