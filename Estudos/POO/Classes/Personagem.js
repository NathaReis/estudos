"use strict";
class Personagem {
    constructor(nome) {
        this.nome = '';
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.energia = 50;
        this.ataque = 50;
        this.nome = nome;
    }
}
let nathan;
nathan = new Personagem('Nathan Reis'); //Sou obrigado a por o nome no Parâmetro pois ele foi definido em Constructor
nathan.energia = 100;
nathan.vida = 100;
nathan.ataque = 10;
nathan.defesa = 20;
let jon = new Personagem('Json Snow');
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;
let sansa = new Personagem('Sansa Stark');
console.log(sansa);
