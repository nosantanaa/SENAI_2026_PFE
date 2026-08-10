export default function Noticia() {
  return (
    <main>

      <article className="container article-page">

        <span className="category">
          Corrida
        </span>

        <h1>
          O que esperar da próxima
          etapa da Fórmula 1
        </h1>

        <p className="article-date">
          10 de agosto de 2026
        </p>

        <p className="article-author">
          Por F1 GRID
        </p>


        <div className="article-image">
          GRAND PRIX
        </div>


        <p>
          A próxima etapa da Fórmula 1 promete
          mais um fim de semana de muita
          velocidade e disputa dentro da pista.
        </p>

        <p>
          As equipes chegam ao circuito buscando
          o melhor equilíbrio entre velocidade,
          estratégia e conservação dos pneus.
        </p>


        <h2>
          Estratégia será importante
        </h2>

        <p>
          Durante uma corrida de Fórmula 1,
          diferentes estratégias podem mudar
          completamente o resultado final.
        </p>

        <p>
          Escolha dos pneus, momento das paradas
          e condições da pista são alguns dos
          fatores que podem influenciar a corrida.
        </p>


        <h2>
          O que acompanhar?
        </h2>

        <ul>

          <li>
            Desempenho dos pilotos
          </li>

          <li>
            Estratégia das equipes
          </li>

          <li>
            Qualificação
          </li>

          <li>
            Disputa por posições
          </li>

          <li>
            Resultado final
          </li>

        </ul>


        <div className="tags">

          <span>F1</span>

          <span>FORMULA 1</span>

          <span>CORRIDA</span>

        </div>


        <div className="comments">

          💬 Comentários

        </div>


        <form className="comment-form">

          <label>

            Nome*

            <input
              type="text"
              required
            />

          </label>


          <label>

            E-mail*

            <input
              type="email"
              required
            />

          </label>


          <label>

            Comentário*

            <textarea required />

          </label>


          <button type="submit">
            ENVIAR COMENTÁRIO
          </button>

        </form>

      </article>

    </main>
  );
}