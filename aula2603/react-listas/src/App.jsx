import ListaSimples from './components/listaSimples'
import ListaMap from './components/listaMap'
import ListaFrutas from './components/listaFrutas'
import ListaFilter from './components/listaFilter'

/*function App() {

  return (
    <>
      <ListaMap titulo ='aprendendo listas no react'/>
    </>
  )
    

}*/

function App() {
  return (
    <>
    <ListaFrutas titulo = 'Lista de Nomes de Frutas' />
    <ListaFilter titulo = 'filtro'/>
    </>
  )
}

export default App
