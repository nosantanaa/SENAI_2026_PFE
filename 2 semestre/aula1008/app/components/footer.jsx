

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Sesi <span>News</span></h2>
                    <p>O seu portal completo com as melhores notícias sobre esportes, tecnologia e novidades.</p>
                </div>
                <div className="footer-links">
                    <h3>Navegação</h3>
                    <Link href="/">Início</Link>
                    <Link href="/categorias">Categorias</Link>
                    <Link href="/categorias/esportes">Esportes</Link>
                </div>
                <div className="footer-social">
                    <h3>Redes Sociais</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter / X</a>
                    <a href="#">YouTube</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Todos os direitos reservados © 2026 - Sesi News</p>
            </div>
        </footer>
    );
}


