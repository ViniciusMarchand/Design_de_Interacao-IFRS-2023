async function consultarCPF(cpf) {
    await fetch("https://brasilapi.com.br/api/ibge/uf/v1/SP")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Valores não encontrados: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)

        })
        .catch(error => {
            console.error('Valores não encontrados:', error);
        });
}

document.getElementById('meuForm').addEventListener("submit", async function (e) {
    e.preventDefault();
    const DDD = e.target.dddtel.value;
    const CEP = e.target.cep.value;
    const SIGLA = e.target.sigla.value;
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    //GET CEP
    await fetch("https://brasilapi.com.br/api/cep/v1/" + CEP)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Valores não encontrados na Api, tente outros. ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const { city, neighborhood, state, street } = data;
            res.innerHTML += `
                <div>
                    <hr>
                    <h2>informações do cep</h2>
                    <p>estado: ${state}</p>
                    <p>bairro: ${neighborhood}</p>
                    <p>cidade: ${city}</p>
                    <p>rua: ${street}</p>
                </div>
            `

        })
        .catch(error => {
            console.error('Valores não encontrados na Api, tente outros.', error);
        });

    //GET DDD
    await fetch("https://brasilapi.com.br/api/ddd/v1/" + DDD)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Valores não encontrados na Api, tente outros. ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const { cities, state } = data;
            res.innerHTML += `
        <div>
            <hr>
            <h2>informações do cep</h2>
            <p>estado: ${state}</p>
            <h3>Cidades com esse ddd:</h3>
            <p id="ddd-block"></p>
        </div>
        `
            const dddBlock = document.getElementById('ddd-block');

            cities.map((elemento, i) => {
                dddBlock.innerText += `${elemento}, `
            })


        })
        .catch(error => {
            console.error('Valores não encontrados na Api, tente outros.', error);
        });


    //GET ESTADO
    await fetch("https://brasilapi.com.br/api/ibge/uf/v1/" + SIGLA)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Valores não encontrados na Api, tente outros. ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const { nome, regiao } = data;
            res.innerHTML += `
            <div>
                <hr>
                <h2>informações do estado</h2>
                <p>nome: ${nome}</p>
                <p>região: ${regiao.nome}</p>
            </div>
        `

        })
        .catch(error => {
            console.error('Valores não encontrados na Api, tente outros.', error);
        });

})


//GET FERIADOS
fetch("https://brasilapi.com.br/api/feriados/v1/2023")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Valores não encontrados na Api, tente outros. ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const lista = document.getElementById('lista-feriados');
        data.forEach(elemento => {
            const { name, date } = elemento;
            const dataFeriado = new Date(date)
            const feriado = dataFeriado.toLocaleString('pt-br', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'GMT' })
            lista.innerHTML += `<li>${name}: ${feriado}</li>`
        });

    })
    .catch(error => {
        console.error('Valores não encontrados na Api, tente outros.', error);
    });


//GET PREVISÃO
fetch("https://brasilapi.com.br/api/cptec/v1/clima/previsao/4767/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Valores não encontrados na Api, tente outros. ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const dataPrev = data.clima[0].data;
        const min = data.clima[0].min;
        const max = data.clima[0].max;
        const condicaoDesc  = data.clima[0].condicao_desc;
    
        const spanData = document.getElementById('data-prev');
        const spanMin = document.getElementById('temp-min');
        const spanMax = document.getElementById('temp-max');
        const spanDesc = document.getElementById('descricao');
        const dataPrevObject = new Date(dataPrev);

        spanMax.innerText = max;
        spanMin.innerText = min
        spanData.innerText = dataPrevObject.toLocaleString('pt-br', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'GMT' })
        spanDesc.innerText = condicaoDesc;
    })
    .catch(error => {
        console.error('Valores não encontrados na Api, tente outros.', error);
    });


//GET PREVISÃO
fetch("https://brasilapi.com.br/api/ibge/municipios/v1/RS?providers=dados-abertos-br,gov,wikipedia")
.then(response => {
    if (!response.ok) {
        throw new Error(`Valores não encontrados na Api, tente outros. ${response.status}`);
    }
    return response.json();
})
.then(data => {
    const infoRioGrande = data.filter(cidade => cidade.nome === 'RIO GRANDE')
    document.getElementById('cod-rg').innerText = infoRioGrande[0].codigo_ibge

})
.catch(error => {
    console.error('Valores não encontrados na Api, tente outros.', error);
});
