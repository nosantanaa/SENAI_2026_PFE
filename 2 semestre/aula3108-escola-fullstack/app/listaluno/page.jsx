'use client';
import Header from "../components/header";
import styles from "./page.module.css";

export default function ListAluno() {
    return (
        <>
            <Header />
            <main className={styles.page}>
                <div className={styles.shell}>
                    <header className={styles.intro}>
                        <div>
                            <p className={styles.eyebrow}>Gestão escolar</p>
                            <h1 className={styles.title}>Alunos cadastrados</h1>
                            <p className={styles.description}>
                                Consulte os estudantes registrados e acompanhe as informações principais de cada turma.
                            </p>
                        </div>
                        <p className={styles.counter}>
                            <strong>1</strong>
                            aluno registrado
                        </p>
                    </header>

                    <section className={styles.tableCard} aria-label="Lista de alunos">
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Idade</th>
                                        <th scope="col">Série</th>
                                        <th scope="col">RA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={styles.id}>03</td>
                                        <td className={styles.name}>Noemi</td>
                                        <td>18 anos</td>
                                        <td>3º ano</td>
                                        <td className={styles.ra}>135733</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}