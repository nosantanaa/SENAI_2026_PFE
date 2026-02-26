class Jogador{//classe mae

    #nome
    #numero

    constructor(nome, numero){
        this.#nome = nome
        this.#numero = numero
    }
    treinar(){
        return '3 vezes na semana'
    }
    
    getNome(){
        return this.#nome
    }
    getNumero(){
        return this.#numero
    }

}

//classe jogadorFutebol  - classe filha
class jogadorFutebol extends Jogador{
    #peDominante;
    #totalGols

    constructor(peDominante,totalGols, nome, numero){
        super(nome,numero)
        this.#peDominante = peDominante
        this.#totalGols = totalGols
    }
    driblar(){
        return 'tomou uma caneta'
    }
    fazerGol(qntsGols){
        return this.#totalGols += qntsGols
    }

    //super acessa tributos e metodos da classe mae
    mostrar(){
        return 'o jogador' + super.getNome() + ' numero ' + super.getNumero() + ' pe dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols '
    }
}

const jogador = new jogadorFutebol('esquerdo',20,'kelvin destaque',7)
jogador.fazerGol(2)
console.log(jogador.mostrar())


class JogadorFutebolAmericano {
    constructor(nome, numero, listaJogadas, jardasConquistadas) {
        this.nome = nome;
        this.numero = numero;
        this.listaJogadas = listaJogadas;
        this.jardasConquistadas = jardasConquistadas;
    }

    fazerTouchDown() {
        return 'O jogador numero ' +  this.numero +' fez touchdown';
    }

    bloquear() {
        console.log(this.nome + ' realizou um bloqueio');
    }

    correrJardas(valor) {
        this.jardasConquistadas += valor;
        console.log(this.nome + 'correu' + valor + 'jardas');
    }
}


class JogadorBasquete {
    constructor(nome, numero, alturaSalto, totalCestas) {
        this.nome = nome;
        this.numero = numero;
        this.alturaSalto = alturaSalto;
        this.totalCestas = totalCestas;
    }

    arremessar() {
        return 'O jogador '+ this.nome + ' e número ' + this.numero + ' arremessou a bola';
    }

    fazerEnterrada(){
        console.log(this.nome + ' fez uma enterrada espetacular');
    }
}


//Futebol Americano
const jogador1 = new JogadorFutebolAmericano("Tomas", 12, "Pass", "Run", 50);
console.log(jogador1.fazerTouchDown()); 

//Basquete
const jogador2 = new JogadorBasquete("LeBron James", 23, 1.10, 510);
console.log(jogador2.arremessar()); 
