export default function Sidebar(){

  const users = [1,2,3,4]

  return(

    <div className="sidebar card">

      <h3>Pessoas que talvez você conheça</h3>

      {users.map((user)=>(
        <div className="user" key={user}>

          <img src="https://i.pravatar.cc/50"/>

          <div>
            <p>Nome Sobrenome</p>
            <button>Conectar</button>
          </div>

        </div>
      ))}

    </div>

  )
}