import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>

          <h2>
            F1 GRID
          </h2>

          <p>
            Notícias e informações
            sobre o mundo da Fórmula 1.
          </p>

        </div>

        <div className="footer-links">

          <Link href="/">
            Início
          </Link>

          <Link href="/noticias">
            Notícias
          </Link>

          <Link href="/pilotos">
            Pilotos
          </Link>

          <Link href="/equipes">
            Equipes
          </Link>

          <Link href="/sobre">
            Sobre
          </Link>

        </div>

      </div>

      <div className="copyright">

        © 2026 F1 GRID — Projeto acadêmico

      </div>

    </footer>
  );
}