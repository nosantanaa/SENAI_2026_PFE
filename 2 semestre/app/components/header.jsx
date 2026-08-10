import Link from "next/link";

export default function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <Link href="/" className="logo">
          F1
          <span>GRID</span>
        </Link>

        <nav className="menu">

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

          <Link href="/calendario">
            Calendário
          </Link>

          <Link href="/sobre">
            Sobre
          </Link>

        </nav>

      </div>

    </header>
  );
}