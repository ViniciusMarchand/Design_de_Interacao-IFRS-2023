let jogoConfirmado = false;
const FORM = document.getElementById('form')

FORM.addEventListener('submit', e =>{
    e.preventDefault()
    let validado = true
    for(let i = 1; i<=4; i++){
        const VALOR_INPUT = document.getElementById(`time${i}`);
        const INPUT_COR = document.getElementById(`time${i}cor`);

        if(VALOR_INPUT.value == '' || INPUT_COR.value ==''){
            validado = false;
            break;
        }
    }
    
    if(validado == true){
        colorirDesabilitar()
        comecaJogo();
    }

})


function comecaJogo(){
    const AREA_JOGO = document.getElementById('area-jogo');
    AREA_JOGO.innerHTML = ''

}

function colorirDesabilitar(){
    //time1cor
    for(let i = 1; i<=4; i++){
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