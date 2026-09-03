import Header from '../components/header';


export default function Principal() {
    return (
        <>
            <Header />
            <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
                <h1>Bem-vindo ao Sistema Escolar</h1>
                <p>Este painel centraliza informações da instituição e ajuda na organização escolar.</p>
                <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
                    <section style={{ background: '#f2f7ff', padding: '1.5rem', borderRadius: '12px' }}>
                        <h2>Gestão escolar</h2>
                        <p>Cadastre alunos, acompanhe notas e mantenha registros organizados.</p>
                    </section>
                    <section style={{ background: '#eefaf3', padding: '1.5rem', borderRadius: '12px' }}>
                        <h2>Desempenho</h2>
                        <p>Monitore resultados e incentive uma rotina de aprendizagem eficiente.</p>
                    </section>
                </div>
            </main>
        </>
    );
}