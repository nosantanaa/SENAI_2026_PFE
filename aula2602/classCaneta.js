class Caneta{
    //atributos publicos
    cor = 'amarelo';
    marca = 'faber castel';
    ponta = 'fina';
    qntTinta = 5;
    tampa = false;

    ///metodo tem () parenteses
    escrever(){
        return 'comecou a escrever';
    }
    sublinhar(valor){
        if(valor > this.qntTinta){
            return 'insuficiente'
        }else{
             return 'suficiente'
        }
       
        this.qntTinta -= valor;
        
        return 'a quantidade restante de tinta é ' + this.qntTinta
    }

    //alterar o metodo sublinhar para nao permitir subtrair a quantidade 
    //de tinta se o valor for maior que a quantidade estabelecida
}

const canetaFina = new Caneta();
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(6));