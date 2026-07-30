const frutas = [
    { id: 1, nome: 'jabuticaba'},
    { id: 2, nome: 'abacaxi'},
    { id: 3, nome: 'amora'},
    { id: 4, nome: 'maça'},
    { id: 5, nome: 'framboesa'} 
]


export default function ListaFrutas({titulo}){
    const listaFrutas = frutas.map((fruta) =>{
        return <li key={fruta.id}>
            <p>{fruta.nome}</p>
        </li>
    })
    return(
    <>
        <h1>{titulo}</h1>
        <ul>
            {listaFrutas}
        </ul>
    </>
    )
}