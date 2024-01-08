class Personagem {
    nome = '';
    energia = 0;
    vida = 0;
    ataque = 0;
    defesa = 0;

    constructor (nome: string) {
        this.energia = 50;
        this.ataque = 50;
        this.nome = nome;
    }
}

let nathan: Personagem;
nathan = new Personagem('Nathan Reis');//Sou obrigado a por o nome no Parâmetro pois ele foi definido em Constructor
nathan.energia = 100;
nathan.vida = 100;
nathan.ataque = 10;
nathan.defesa = 20;

let jon: Personagem = new Personagem('Json Snow');
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;

let sansa: Personagem = new Personagem('Sansa Stark');

console.log(sansa)