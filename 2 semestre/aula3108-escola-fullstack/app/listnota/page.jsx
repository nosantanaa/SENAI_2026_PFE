'use client';
import Header from "../components/header";
import styles from "./page.module.css";

export default function ListNota() {
    return (
        <>
            <Header />
            <main className={styles.page}>
                <div className={styles.shell}>
                    <header className={styles.intro}>
                        <div>
                            <p className={styles.eyebrow}>Avaliação escolar</p>
                            <h1 className={styles.title}>Notas cadastradas</h1>
                            <p className={styles.description}>
                                Consulte os trabalhos e as notas lançadas para cada aluno.
                            </p>
                        </div>
                        <p className={styles.counter}><strong>1</strong>avaliação registrada</p>
                    </header>

                    <section className={styles.tableCard} aria-label="Lista de notas">
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th scope="col">Aluno</th>
                                        <th scope="col">T1</th>
                                        <th scope="col">T2</th>
                                        <th scope="col">N1</th>
                                        <th scope="col">N2</th>
                                        <th scope="col">N3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={styles.name}>Noemi</td>
                                        <td>8,5</td>
                                        <td>9,0</td>
                                        <td>7,5</td>
                                        <td>8,0</td>
                                        <td className={styles.highlight}>9,5</td>
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
