const estudantes = [
    { id: 1, nome: 'Vitoria', disciplina: 'portugues', ra: 12345},
    { id: 2, nome: 'Luís', disciplina: 'geografia', ra: 68943},
    { id: 3, nome: 'Noemi', disciplina: 'matematica', ra: 13355} 
]


export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'matematica')
    
    const listaEstudantes = lista.map((estudante) =>{
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.ra}</p>
            <p>{estudante.disciplina}</p>
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