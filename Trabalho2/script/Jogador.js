export default class Jogador {
    constructor(nome, pontos){
        this.nome = nome;
        this.pontos = pontos;
    }


    ganharPonto(){
        this.pontos++;
    }

    getPontos(){
        return this.pontos
    }

    getNome(){
        return this.nome;
    }
}