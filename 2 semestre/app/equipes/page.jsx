export default function Equipes() {
  const equipes = [
    "Equipe Alpha",
    "Equipe Beta",
    "Equipe Gamma",
    "Equipe Delta",
    "Equipe Epsilon",
    "Equipe Zeta",
    "Equipe Omega",
    "Equipe Racing",
    "Equipe Motorsport",
    "Equipe GP",
  ];

  return (
    <main>

      <div className="container page-content">

        <span className="category">
          Fórmula 1
        </span>

        <h1>
          Equipes
        </h1>

        <p>
          Conheça as equipes que disputam
          o campeonato.
        </p>


        <div className="teams-grid">

          {equipes.map((equipe, index) => (

            <article
              className="team-card"
              key={equipe}
            >

              <div className="team-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2>
                {equipe}
              </h2>

              <p>
                Informações da equipe
              </p>

            </article>

          ))}

        </div>

      </div>

    </main>
  );
}