class Pessoa{
    nome; //atributo publico
    #cpf = '00100200304'; //atributo privado, onde voce adiciona o # pra privar o atributo

    //metodos getter e setter
    //metodos publicos de acesso aos atributos

    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const estudante = new Pessoa(); //instancia do objeto pessoa
estudante.nome = 'livia'; //acesso ao atributo publico nome
estudante.setCpf(222222222220); //acesso ao atributo privado cpf
console.log('o cpf é ' + estudante.getCpf()); //acesso ao atributo privado cpf
console.log(estudante.nome); //acesso ao atributo publico nome