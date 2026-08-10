export default function Calendario() {
  const corridas = [
    {
      etapa: "01",
      local: "Grande Prêmio 01",
      circuito: "Circuito Internacional",
    },
    {
      etapa: "02",
      local: "Grande Prêmio 02",
      circuito: "Circuito Nacional",
    },
    {
      etapa: "03",
      local: "Grande Prêmio 03",
      circuito: "Circuito Internacional",
    },
    {
      etapa: "04",
      local: "Grande Prêmio 04",
      circuito: "Circuito Mundial",
    },
    {
      etapa: "05",
      local: "Grande Prêmio 05",
      circuito: "Circuito Internacional",
    },
    {
      etapa: "06",
      local: "Grande Prêmio 06",
      circuito: "Circuito Nacional",
    },
  ];

  return (
    <main>

      <div className="container page-content">

        <span className="category">
          Temporada
        </span>

        <h1>
          Calendário
        </h1>

        <p>
          Confira as etapas da temporada
          de Fórmula 1.
        </p>


        <div className="calendar">

          {corridas.map((corrida) => (

            <article
              className="race"
              key={corrida.etapa}
            >

              <div className="race-number">
                {corrida.etapa}
              </div>

              <div>

                <span className="category">
                  Etapa
                </span>

                <h2>
                  {corrida.local}
                </h2>

                <p>
                  {corrida.circuito}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </main>
  );
}