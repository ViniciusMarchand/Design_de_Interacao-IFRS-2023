const bloco = document.getElementById('bloco-tabela');
async function construirGrafico() {
    const selectValue = document.getElementById('select-dado').value;
    if (selectValue === 'producao-veiculos') {

        let valoresFetch;

        try {
            valoresFetch = await fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ANFAVE12_QONIBUM12')/Valores");
        } catch (error) {
            console.error(error.message);
        }

        valoresFetch = await valoresFetch.json();
        valoresFetch = valoresFetch.value;

        fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ANFAVE12_QONIBUM12')")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                bloco.innerHTML = `
                <table class="table">
                <thead>
                    <tr>
                        <th>
                            Anfavea
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Produção Total (1957 - 2023)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="significado">
    
                        </td>
                        <td id="desc">
    
                        </td>
                        <td id="valores">
    
                        </td>
                    </tr>
                </tbody>
            </table>
                `

                const tdSignificado = document.getElementById('significado');
                const tdDesc = document.getElementById('desc');
                const tdValores = document.getElementById('valores');

                tdSignificado.innerText = data.value[0].FNTNOME;
                tdDesc.innerText = data.value[0].SERCOMENTARIO;

                const valorTotal = valoresFetch.reduce((resultado, valor) => {
                    return resultado + valor.VALVALOR
                }, 0);

                tdValores.innerText = valorTotal;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON:', error);
            });
    } else if (selectValue === 'ELETRO_CEETRES') {

        let valoresFetch;

        try {
            valoresFetch = await fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ELETRO_CEETRES')/Valores");
        } catch (error) {
            console.error(error.message);
        }

        valoresFetch = await valoresFetch.json();
        valoresFetch = valoresFetch.value;

        fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ELETRO_CEETRES')")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

                bloco.innerHTML = `
                <table class="table">
                <thead>
                    <tr>
                        <th>
                            Empresa
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Tarifa Média Total (1974 - 1922)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="significado">
    
                        </td>
                        <td id="desc">
    
                        </td>
                        <td id="valores">
    
                        </td>
                    </tr>
                </tbody>
            </table>
                `

                const tdSignificado = document.getElementById('significado');
                const tdDesc = document.getElementById('desc');
                const tdValores = document.getElementById('valores');

                tdSignificado.innerText = data.value[0].FNTNOME;
                tdDesc.innerText = data.value[0].SERCOMENTARIO;

                const valorTotal = valoresFetch.reduce((resultado, valor) => {
                    return resultado + valor.VALVALOR
                }, 0);

                tdValores.innerText = valorTotal;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON:', error);
            });
    } else if (selectValue === 'FCESP12_CINECD12') {

        let valoresFetch;

        try {
            valoresFetch = await fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('FCESP12_CINECD12')/Valores");
        } catch (error) {
            console.error(error.message);
        }

        valoresFetch = await valoresFetch.json();
        valoresFetch = valoresFetch.value;

        fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('FCESP12_CINECD12')")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

                bloco.innerHTML = `
                <table class="table">
                <thead>
                    <tr>
                        <th>
                            Fecomercio SP
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Faturamento Nominal Total (1990 - 2003)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="significado">
    
                        </td>
                        <td id="desc">
    
                        </td>
                        <td id="valores">
    
                        </td>
                    </tr>
                </tbody>
            </table>
                `

                const tdSignificado = document.getElementById('significado');
                const tdDesc = document.getElementById('desc');
                const tdValores = document.getElementById('valores');

                tdSignificado.innerText = data.value[0].FNTNOME;
                tdDesc.innerText = data.value[0].SERCOMENTARIO;

                const valorTotal = valoresFetch.reduce((resultado, valor) => {
                    return resultado + valor.VALVALOR
                }, 0);

                tdValores.innerText = valorTotal;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON:', error);
            });
    }

}
construirGrafico()

