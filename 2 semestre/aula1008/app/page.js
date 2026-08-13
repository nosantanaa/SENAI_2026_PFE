import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="site">
      <Header />
      <main className="main-content">
        <section className="hero">
          <p className="hero-tag">SESI NEWS</p>
          <h1>
            Notícias que conectam você <span>ao mundo.</span>
          </h1>
          <p className="hero-text">
            Acompanhe as principais notícias, resultados e novidades do mundo dos esportes, tecnologia e muito mais.
          </p>
        </section>

        <div className="page-header" style={{ marginTop: "50px" }}>
          <span className="page-tag">Destaques</span>
          <h2>Últimas Notícias</h2>
        </div>

        <div className="news-grid">
          <div className="news-card">
            <div className="news-image">⚽</div>
            <div className="news-content">
              <span>ESPORTES</span>
              <h2>Grande final do campeonato reúne milhares de torcedores</h2>
              <p>Uma partida emocionante marcada por viradas históricas e um show de habilidades em campo.</p>
              <Link href="/categorias/esportes">Ver mais em Esportes &rarr;</Link>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">💻</div>
            <div className="news-content">
              <span>TECNOLOGIA</span>
              <h2>Inteligência Artificial revoluciona o mercado de trabalho</h2>
              <p>Novas ferramentas transformam setores produtivos e criam novas oportunidades na área de TI.</p>
              <Link href="/categorias">Ver categorias &rarr;</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}