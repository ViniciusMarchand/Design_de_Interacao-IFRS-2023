let jogoConfirmado = false;
const FORM = document.getElementById('form')

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
    const time1 = document.getElementById('time1').value;
    const time2 = document.getElementById('time2').value;
    const time3 = document.getElementById('time3').value;
    const time4 = document.getElementById('time4').value;

    const AREA_JOGO = document.getElementById('area-jogo');
    AREA_JOGO.innerHTML = `  <div class="semi-final esquerda" id="semi-final1">
    <div class="label-input-jogo">
        <input type="number" class="input-number" placeholder="Gols" id='time1-semi-final'>
        <label for="">${time1}</label>
    </div>
    <input type="button" value="CONFIRMAR" onclick="resultadoEsquerdoVerificacao()" id="confimar-esquerdo">                
    <div class="label-input-jogo">
        <label for="">${time2}</label>
        <input type="number" class="input-number" placeholder="Gols" id='time2-semi-final'>
    </div>            
</div>
<div class="final" id="final">
    <img src="imgs/trofeu.png" alt="" id="trofeu">
</div>
<div class="semi-final direita" id="semi-final2">
    <div class="label-input-jogo">
        <input type="number" class="input-number" placeholder="Gols" id='time3-semi-final'>
        <label for="">${time3}</label>
    </div>
    <input type="button" value="CONFIRMAR" id="confimar-direito">                
    <div class="label-input-jogo">
        <label for="">${time4}</label>
        <input type="number" class="input-number" placeholder="Gols" id='time4-semi-final'>
    </div>
</div>`

    for (let i = 1; i <= 4; i++) {
        const elementoCor = document.getElementById(`time${i}cor`).value;
        elementoTimeSemiFinal.style.border = '1px solid'
        elementoTimeSemiFinal.style.borderColor = `${elementoCor}`

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

function resultadoEsquerdoVerificacao() {
    let validado = true
    const VALOR_INPUT_TIME1 = document.getElementById(`time1-semi-final`).value;
    const VALOR_INPUT_TIME2 = document.getElementById(`time2-semi-final`).value;
    if (VALOR_INPUT_TIME1 == '' || VALOR_INPUT_TIME2 == '') {
        validado = false;
    }

    if (validado == true) {
        resultadoEsquerdo();
    }
}

function resultadoEsquerdo() {
    const INPUT_TIME1 = document.getElementById(`time1-semi-final`);
    const INPUT_TIME2 = document.getElementById(`time2-semi-final`);
    const CONFIRMAR_ESQUERDO = document.getElementById('confimar-esquerdo');
    INPUT_TIME1.setAttribute('disabled', '');
    INPUT_TIME2.setAttribute('disabled', '');
    CONFIRMAR_ESQUERDO.setAttribute('disabled', '');
    
    const golsTime1 = document.getElementById('time1-semi-final').value;
    const golsTime2 = document.getElementById('time2-semi-final').value;

    let ganhador;
    if(parseInt(golsTime1) > parseInt(golsTime2)){
        const COR_TIME1 = document.getElementById('time1cor');
        ganhador = `${COR_TIME1.value}`;
        INPUT_TIME1.style.borderColor = ``
    }else if(parseInt(golsTime2) > parseInt(golsTime1)){
        ganhador = 'time2';
    }

}

