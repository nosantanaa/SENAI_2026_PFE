import Link from "next/link";

export default function Noticias() {
  return (
    <main>

      <div className="container page-content">

        <span className="category">
          F1 GRID
        </span>

        <h1>
          Notícias
        </h1>

        <p>
          Acompanhe as principais notícias
          do mundo da Fórmula 1.
        </p>


        <div className="news-list">


          <article className="news-item">

            <div className="card-image">
              GP
            </div>

            <div>

              <span className="category">
                Corrida
              </span>

              <h2>
                O que esperar da próxima
                etapa da Fórmula 1
              </h2>

              <p>
                Confira os principais pontos
                para acompanhar na próxima
                corrida.
              </p>

              <Link
                href="/noticia"
                className="read-more"
              >
                Ler notícia →
              </Link>

            </div>

          </article>


          <article className="news-item">

            <div className="card-image">
              PILOTOS
            </div>

            <div>

              <span className="category">
                Pilotos
              </span>

              <h2>
                A disputa pelo campeonato
                ganha novos capítulos
              </h2>

              <p>
                Os pilotos entram na pista
                buscando pontos importantes.
              </p>

            </div>

          </article>


          <article className="news-item">

            <div className="card-image">
              EQUIPES
            </div>

            <div>

              <span className="category">
                Equipes
              </span>

              <h2>
                Desenvolvimento dos carros
                é foco das equipes
              </h2>

              <p>
                As equipes continuam buscando
                melhorias para seus carros.
              </p>

            </div>

          </article>


          <article className="news-item">

            <div className="card-image">
              PISTA
            </div>

            <div>

              <span className="category">
                Bastidores
              </span>

              <h2>
                Os bastidores de um fim de
                semana de Fórmula 1
              </h2>

              <p>
                Descubra o que acontece fora
                da pista durante um Grande Prêmio.
              </p>

            </div>

          </article>


        </div>

      </div>

    </main>
  );
}