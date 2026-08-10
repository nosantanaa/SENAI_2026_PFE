export default function Pilotos() {
  const pilotos = [
    {
      numero: "01",
      nome: "Piloto 01",
      equipe: "Equipe principal",
    },
    {
      numero: "02",
      nome: "Piloto 02",
      equipe: "Equipe principal",
    },
    {
      numero: "03",
      nome: "Piloto 03",
      equipe: "Equipe principal",
    },
    {
      numero: "04",
      nome: "Piloto 04",
      equipe: "Equipe principal",
    },
    {
      numero: "05",
      nome: "Piloto 05",
      equipe: "Equipe principal",
    },
    {
      numero: "06",
      nome: "Piloto 06",
      equipe: "Equipe principal",
    },
  ];

  return (
    <main>

      <div className="container page-content">

        <span className="category">
          Fórmula 1
        </span>

        <h1>
          Pilotos
        </h1>

        <p>
          Conheça os pilotos que fazem parte
          do grid da Fórmula 1.
        </p>


        <div className="drivers-grid">

          {pilotos.map((piloto) => (

            <article
              className="driver-card"
              key={piloto.numero}
            >

              <div className="driver-number">
                {piloto.numero}
              </div>

              <div>

                <span className="category">
                  Piloto
                </span>

                <h2>
                  {piloto.nome}
                </h2>

                <p>
                  {piloto.equipe}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </main>
  );
}