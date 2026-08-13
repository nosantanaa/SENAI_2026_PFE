import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Esportes() {
    return (
        <div className="site">
            <Header />
            <main className="main-content">
                <div className="page-header">
                    <span className="page-tag">Categoria</span>
                    <h1>Notícias de Esportes</h1>
                    <p>Fique por dentro das últimas novidades, campeonatos e bastidores do mundo esportivo.</p>
                </div>

                <div className="news-grid">
                    <div className="news-card">
                        <div className="news-image">⚽</div>
                        <div className="news-content">
                            <span>FUTEBOL</span>
                            <h2>Grande final do campeonato reúne milhares de torcedores</h2>
                            <p>Uma partida emocionante marcada por viradas históricas e um show de habilidades em campo.</p>
                            <a href="#">Leia mais &rarr;</a>
                        </div>
                    </div>

                    <div className="news-card">
                        <div className="news-image">🏀</div>
                        <div className="news-content">
                            <span>BASQUETE</span>
                            <h2>Novo recorde de pontos batido na temporada regular</h2>
                            <p>Atleta se destaca com atuação fenomenal e garante a vitória de sua equipe no último segundo.</p>
                            <a href="#">Leia mais &rarr;</a>
                        </div>
                    </div>

                    <div className="news-card">
                        <div className="news-image">🏎️</div>
                        <div className="news-content">
                            <span>FÓRMULA 1</span>
                            <h2>GP de velocidade promete corrida épica sob chuva</h2>
                            <p>Pilotos se preparam para condições adversas na pista com estratégias ousadas de pneus.</p>
                            <a href="#">Leia mais &rarr;</a>
                        </div>
                    </div>

                    <div className="news-card">
                        <div className="news-image">🏐</div>
                        <div className="news-content">
                            <span>VÔLEI</span>
                            <h2>Seleção conquista classificação antecipada para as finais</h2>
                            <p>Com defesa impecável e saques potentes, o time brasileiro garante lugar no pódio.</p>
                            <a href="#">Leia mais &rarr;</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

