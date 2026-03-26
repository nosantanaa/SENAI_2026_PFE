import "./App.css";
// import Saudacao from "./components/bemVindo.jsx";
// import Avatar from "./componentes/meuavatar.jsx";
import PropsNomeado from './components/propsNomeado.jsx'


function App() {
  return (
    // <Saudacao titulo="aprendendo props/properties/propriedades"
    //           texto="bem vinda"
    //           nome="ana clara"/>
    
    
    // <Avatar
    //  informacoes="Meu Avatar"
    //  nome="Nome: Noemi Santana Vitor de Oliveira"
    //  idade="Idade: 18 anos de idade"
    //  estilo_musical="Estilo musical: rap / rock / sertanejo / funk / metal" 
    //  disciplina="Disciplina fvt: química / física / matemática"
    //  />


    
    <PropsNomeado titulo="Usando props nomeado"
                  subtitulo="aprendendo props named"/>
    
  );
}

export default App;
