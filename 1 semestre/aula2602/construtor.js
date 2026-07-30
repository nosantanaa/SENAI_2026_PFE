class Estudante{
    nome;
    #ra;
    #cpf; 

    constructor(nome,ra,cpf){
        this.nome = nome
        this.#ra = ra
        this.#cpf = cpf
    }
}

const Noemi = new Estudante('Noemi da Silva', 33333332, 9377398364329)
console.log(Noemi)