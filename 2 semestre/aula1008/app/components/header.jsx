import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link href="/" className="logo">
                    Sesi <span>News</span>
                </Link>
                <nav className="nav">
                    <Link href="/" className="nav-link">Início</Link>
                    <Link href="/categorias" className="nav-link">Categorias</Link>
                    <Link href="/categorias/esportes" className="nav-link">Esportes</Link>
                </nav>
                <Link href="/categorias" className="header-button">Explorar</Link>
            </div>
        </header>
    );
}