async function startAny() {
    async function promisse1() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABPEAV')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    async function promisse2() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABPESU')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    async function promisse3() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABQUAV')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    const promisses = [promisse1(), promisse2(), promisse3()];

    Promise.any(promisses).then(res => {
        const dado = res.value[0];
        const bloco = document.getElementById('resposta');
        bloco.innerHTML = "";
        bloco.innerHTML = `
            <h3>${dado.FNTNOME}</h3>
            <p>${dado.SERCOMENTARIO}</p>
        `;

    })

}

async function startRace() {
    async function promisse1() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ANATEL_APARELHO')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    async function promisse2() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('HIST_CAFETORRQ')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    async function promisse3() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('CE12_CUTBI12')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    const promisses = [promisse1(), promisse2(), promisse3()];

    Promise.race(promisses).then(res => {
        const dado = res.value[0];
        const bloco = document.getElementById('resposta');
        bloco.innerHTML = "";
        bloco.innerHTML = `
            <h3>${dado.FNTNOME}</h3>
            <p>${dado.SERCOMENTARIO}</p>
        `;

    })

}

async function startAll() {
    async function promisse1() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('ANATEL_APARELHO')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    async function promisse2() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('HIST_CAFETORRQ')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    async function promisse3() {
        return await new Promise((resolve, reject) => {
            try {
                fetch("http://www.ipeadata.gov.br/api/odata4/Metadados('CE12_CUTBI12')").then(function (resp) {
                    resp.json().then(function (res) {
                        resolve(res);
                    })
                });
            } catch (err) {
                reject(err);
            }
        });
    } 

    const promisses = [promisse1(), promisse2(), promisse3()];
    Promise.all(promisses).then(res => {
        const dados = res;
        const bloco = document.getElementById('resposta');
        bloco.innerHTML = "";

        dados.forEach(elemento => {
            const dado = elemento.value[0]
            bloco.innerHTML += `
                <h3>${dado.FNTNOME}</h3>
                <p>${dado.SERCOMENTARIO}</p>
            `;
        });



    })
}


