import "./meuavatar.jsx";

export default function MeuAvatar(props) {
  return (
    <>
    <div className="container">
    <div className="avatar">
        <h1>
          <span>{props.informacoes}</span>
        </h1>
        <p></p>
        <h3>{props.nome}</h3>
        <p></p>
        <h3>{props.idade}</h3>
        <p></p>
        <h3>{props.estilo_musical}</h3>
        <h3>{props.disciplina}</h3>
      </div>
      </div>
    </>
  );
}
