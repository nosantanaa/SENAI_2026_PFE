import Link from 'next/link';

export default function Header() {
    const styles = {
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            padding: '1.1rem clamp(1.25rem, 5vw, 4rem)',
            background: '#10213d',
            color: '#fff',
            boxShadow: '0 8px 24px rgba(16, 33, 61, 0.14)',
        },
        title: { margin: 0, fontSize: '1.35rem', letterSpacing: '0.01em' },
        nav: { flex: '1 1 auto' },
        list: { display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '0.55rem 1.25rem', padding: 0, margin: 0, listStyle: 'none' },
        link: { color: '#dceaff', fontSize: '0.9rem', fontWeight: 600 },
    };

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Projeto Escola</h1>
            <nav style={styles.nav} aria-label="Navegação principal">
                <ul style={styles.list}>
                    <li><Link style={styles.link} href='/cadaluno'>Cadastro de alunos</Link></li>
                    <li><Link style={styles.link} href='/listaluno'>Lista de alunos</Link></li>
                    <li><Link style={styles.link} href='/cadnota'>Cadastro de notas</Link></li>
                    <li><Link style={styles.link} href='/listnota'>Lista de notas</Link></li>
                </ul>
            </nav>
        </header>
    );
}