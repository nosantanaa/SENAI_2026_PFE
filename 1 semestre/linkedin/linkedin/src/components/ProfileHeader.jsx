export default function ProfileHeader() {
  return (
    <div className="card profile-header">

      <div className="cover"></div>

      <div className="profile-info">

        <img
          className="avatar"
          src="https://i.pravatar.cc/150"
        />

        <h2 className="nome">Nome Sobrenome</h2>

        <p>Desenvolvedor | HTML | CSS | Typescript | Node</p>

        <p>Cidade, Estado, País</p>

        <div className="buttons">
          <button>Mensagem</button>
          <button className="outline">Mais</button>
        </div>

      </div>

    </div>
  )
}