import "../noticias.css";

const noticias = [
  {
    titulo: "Gon",
    descricao: "Roupas Verdes",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM66Oy8_1-ZstmMlc74EQBgj5DrrMdkmNIA&s"
  },
  {
    titulo: "Killua",
    descricao: "Filho de assassinos",
    imagem: "https://i.pinimg.com/736x/c0/9f/c1/c09fc1b79516f5e0aa20aa852c6f56e6.jpg"
  },
  {
    titulo: "Damon Salvatore",
    descricao: "Irmão de Stefan Salvatore",
    imagem: "https://i.pinimg.com/564x/58/b8/c5/58b8c5c1789046e412396632d9c96979.jpg"
  }
];

export default function Noticias({ tema }) {
  return (
    <section className={`noticias-${tema}`}>
      <h2>Notícias</h2>

      <div className="cards">
        {noticias.map((n, index) => (
          <div key={index} className="card">
            <img src={n.imagem} alt={n.titulo} />
            <h3>{n.titulo}</h3>
            <p>{n.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
