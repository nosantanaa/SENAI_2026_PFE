import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Categorias() {
    return (
        <div className="site">
            <Header />
            <main className="main-content">
                <div className="page-header">
                    <span className="page-tag">Explorar</span>
                    <h1>Categorias de Notícias</h1>
                    <p>Navegue pelos temas de seu interesse e acompanhe todas as atualizações.</p>
                </div>

                <div className="categories-grid">
                    <Link href="/categorias/esportes" className="category-card">
                        <span>⚽</span>
                        <h2>Esportes</h2>
                        <p>Futebol, basquete, automobilismo, vôlei e os principais campeonatos do mundo.</p>
                    </Link>

                    <div className="category-card">
                        <span>💻</span>
                        <h2>Tecnologia</h2>
                        <p>Inovações, inteligência artificial, gadgets e as novidades do mercado tech.</p>
                    </div>

                    <div className="category-card">
                        <span>🎬</span>
                        <h2>Cultura & Lazer</h2>
                        <p>Cinema, música, séries, arte e os lançamentos mais aguardados do ano.</p>
                    </div>

                    <div className="category-card">
                        <span>📈</span>
                        <h2>Economia</h2>
                        <p>Mercado financeiro, negócios, empreendedorismo e tendências globais.</p>
                    </div>

                    <div className="category-card">
                        <span>🧬</span>
                        <h2>Ciência & Saúde</h2>
                        <p>Descobertas científicas, medicina, bem-estar e cuidados com a saúde.</p>
                    </div>

                    <div className="category-card">
                        <span>🎮</span>
                        <h2>Games & eSports</h2>
                        <p>Lançamentos de jogos, torneios de eSports, análises e cultura gamer.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}