const path = 'paises.json';

async function pegarPaises() {
    await fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const selectPais = document.getElementById('select-block');
            data.map((elemento, i) => {
                selectPais.innerHTML += `
                    <option value="${elemento.nome_pais}">${elemento.nome_pais}</option>
                `
    
            })


        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}


async function configurarInformacoes() {
    await fetch(path)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const gentilico = document.getElementById('gentilico');
        const sigla = document.getElementById('sigla');
        const nomePais = document.getElementById('nome-pais');
        const selectValue = document.getElementById('select-block').value;

        const index = data.findIndex(elemento => selectValue === elemento.nome_pais);

        const pais = data[index];

        gentilico.innerText = pais.gentilico;
        nomePais.innerText = pais.nome_pais_int;
        sigla.innerText = pais.sigla;
        

    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });
}


pegarPaises()

configurarInformacoes()