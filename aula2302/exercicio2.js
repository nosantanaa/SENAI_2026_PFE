class Bicicleta{
    #modelo = 'caloi elite'
    #marca = 'caloi'
    #cor = 'roxo'
    #velocidadeMaxima = 30
    
    
    //metodos getter e setter
    //metodos publicos de acesso aos atributos

      
    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }
    
      
    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }
      

    setCor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }
    

    
    setVelocidade(valor){
        if(valor>35){
            console.log('nao é possivel inserir acima de 35')
        } else{
            console.log('é possivel inserir acima de 35')
        }
        this.#velocidadeMaxima = valor;
    }
    getVelocidade(){
        return this.#velocidadeMaxima;
    }
}


const bike = new Bicicleta(); //instancia do objeto bicicleta
bike.setModelo('caloi elite'); 
console.log(bike.getModelo());
bike.setMarca('caloi'); 
console.log(bike.getMarca());
bike.setCor('roxo'); 
console.log(bike.getCor());
bike.setVelocidade(40); //acesso ao atributo privado velocidade
console.log(bike.getVelocidade()); //acesso ao atributo privado velocidade
