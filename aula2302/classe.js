class Carro{
    //atributos
    modelo = 's10 cabine dupla';
    marca = 'chevrolet';
    ano = 2025;
    preco = 200000;


    //métodos
    mover(){
        console.log('estou me movendo!')
    }
    mostrar(){
        console.log('o carro é: ' + this.modelo + '' + this.marca + '' + this.ano + '' + this.preco)
    }
}

const caminhonete = new Carro(); //instanciar a classe = criar o objeto
caminhonete.mover(); //utilizar metodos
caminhonete.mostrar();
