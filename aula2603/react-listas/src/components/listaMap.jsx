const estudantes = [
    { id: 1, nome: 'Vitoria', idade: 11, ra: 12345},
    { id: 2, nome: 'Luís', idade: 18, ra: 68943},
    { id: 3, nome: 'Noemi', idade: 55, ra: 13355} 
]


export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) =>{
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.ra}</p>
            <p>{estudante.idade}</p>
        </li>
    })
    return(
    <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
    </>
    )
}