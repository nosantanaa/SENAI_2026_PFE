import './estilos.css'
import Header from './components/header';
import Noticias from './components/noticia';
import { useContext } from 'react';
import { ContextoTema } from './contexts/temaContexto.jsx';


/*import './estilos.css';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;*/


function App() {
  const { tema } = useContext(ContextoTema);

  return (
    <>
    <div className={`app ${tema}`}></div>
     <Header />
     <Noticias tema={tema} />
    </>
  )
}

export default App


