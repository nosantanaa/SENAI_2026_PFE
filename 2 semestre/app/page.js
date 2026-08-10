import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section className="hero">

        <div className="container">

          <span className="hero-label">
            FÓRMULA 1
          </span>

          <h1>
            Tudo sobre a velocidade
            que move o mundo.
          </h1>

          <p>
            Notícias, pilotos, equipes,
            corridas e tudo que acontece
            dentro e fora das pistas.
          </p>

          <Link
            href="/noticias"
            className="button"
          >
            VER NOTÍCIAS
          </Link>

        </div>

      </section>


      <div className="container">

        <section className="featured">

          <div className="featured-image">
            FORMULA 1
          </div>

          <div className="featured-content">

            <span className="category">
              Destaque
            </span>

            <h2>
              A temporada de Fórmula 1
              está cheia de expectativas
            </h2>

            <p>
              As equipes trabalham para
              encontrar o melhor desempenho
              durante uma temporada marcada
              por grandes disputas.
            </p>

            <Link
              href="/noticia"
              className="button"
            >
              LER NOTÍCIA
            </Link>

          </div>

        </section>


        <section className="section">

          <div className="section-title">

            <h2>
              Últimas notícias
            </h2>

            <Link href="/noticias">
              Ver todas →
            </Link>

          </div>


          <div className="news-grid">


            <article className="card">

              <div className="card-image">
                GP
              </div>

              <span className="category">
                Corrida
              </span>

              <h3>
                O que esperar da próxima
                etapa da temporada
              </h3>

              <p>
                Confira os principais pontos
                para acompanhar durante o fim
                de semana.
              </p>

            </article>


            <article className="card">

              <div className="card-image">
                PILOTOS
              </div>

              <span className="category">
                Pilotos
              </span>

              <h3>
                Disputa entre pilotos ganha
                destaque no campeonato
              </h3>

              <p>
                A briga pelo campeonato
                promete grandes momentos.
              </p>

            </article>


            <article className="card">

              <div className="card-image">
                EQUIPES
              </div>

              <span className="category">
                Equipes
              </span>

              <h3>
                Equipes trabalham para
                melhorar desempenho
              </h3>

              <p>
                Desenvolvimento dos carros
                é destaque nos bastidores.
              </p>

            </article>


          </div>

        </section>


        <section className="section">

          <div className="section-title">

            <h2>
              Explore o F1 GRID
            </h2>

          </div>


          <div className="sport-links">

            <Link href="/pilotos">
              🏎️ Pilotos
            </Link>

            <Link href="/equipes">
              🏁 Equipes
            </Link>

            <Link href="/calendario">
              📅 Calendário
            </Link>

            <Link href="/noticias">
              📰 Notícias
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}