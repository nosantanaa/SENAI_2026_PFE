import { useState } from "react";
import '../App.css';

export default function Calculadora({titulo}){
 const [num1, setNum1] = useState(0)
 const [num2, setNum2] = useState(0)
 const [resultado, setResultado] = useState(0)
 
function somar(e){
    e.preventDefault();
    setResultado(Number(num1) + Number(num2))
}

function subtrair(e){
 e.preventDefault()
 if(Number(num1) <= 0 || Number(num2) <= 0){
  alert("Não são permitidos números zero ou negativos")
  return
 }
 setResultado(Number(num1) - Number(num2))
}

function multiplicar(e){
 e.preventDefault()
 if(Number(num1) <= 0 || Number(num2) <= 0){
  alert("Não são permitidos números zero ou negativos")
  return
 }
 setResultado(Number(num1) * Number(num2))
}

function dividir(e){
 e.preventDefault()
 if(Number(num1) <= 0 || Number(num2) <= 0){
  alert("Não são permitidos números zero ou negativos")
  return
 }
 setResultado(Number(num1) / Number(num2))
}

function potencia(e){
 e.preventDefault()
 if(Number(num1) <= 0 || Number(num2) <= 0){
  alert("Não são permitidos números zero ou negativos")
  return
 }
 setResultado(Math.pow(Number(num1), Number(num2)))
}

function raiz(e){
 e.preventDefault()
 if(Number(num1) <= 0){
  alert("Digite um número maior que zero")
  return
 }
 setResultado(Math.sqrt(Number(num1)))
}

function limpar(){
 setNum1(0)
 setNum2(0)
 setResultado(0)
}


 return(
<>
 
 <h1 className="titulo">{titulo}</h1>
 <div className="container">
        
        <form action="">
        <label htmlFor="numero1">numero 1</label>
        <input type="numero" placeholder="0" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <label htmlFor="numero2">numero 2</label>
        <input type="numero" placeholder="0" value={num2} onChange={(e) => setNum2(e.target.value)}/>

        <button className="botao" onClick={somar}>somar</button>
        <button className="botao" onClick={subtrair}>subtrair</button>
        <button className="botao" onClick={multiplicar}>multiplicar</button>
        <button className="botao" onClick={dividir}>dividir</button>
        <button className="botao" onClick={potencia}>potência</button>
        <button className="botao" onClick={raiz}>raiz</button>
        <button className="botao" onClick={limpar}>limpar</button>
        <span>resultado: {resultado}</span>
    </form>
    </div>
   
 </>
 )
 
}