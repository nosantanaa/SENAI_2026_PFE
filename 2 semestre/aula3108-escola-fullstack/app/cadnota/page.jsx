'use client';
import { useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";

export default function CadNota() {
    const [aluno, setAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    return (
        <>
            <Header />
            <main className={styles.page}>
                <div className={styles.shell}>
                    <header className={styles.intro}>
                        <p className={styles.eyebrow}>Avaliação escolar</p>
                        <h1 className={styles.title}>Cadastro de notas</h1>
                        <p className={styles.description}>
                            Registre os trabalhos e as notas do aluno em um único lugar, com tudo pronto para acompanhamento.
                        </p>
                    </header>

                    <section className={styles.content} aria-label="Cadastro de notas do aluno">
                        <aside className={styles.aside}>
                            <div>
                                <h2>Organize o desempenho da turma.</h2>
                                <p>Adicione as avaliações do aluno para manter o histórico escolar atualizado.</p>
                            </div>
                            <ol className={styles.steps}>
                                <li className={styles.step}><span className={styles.stepNumber}>1</span><span>Selecione o aluno</span></li>
                                <li className={styles.step}><span className={styles.stepNumber}>2</span><span>Informe trabalhos e notas</span></li>
                                <li className={styles.step}><span className={styles.stepNumber}>3</span><span>Finalize o lançamento</span></li>
                            </ol>
                        </aside>

                        <form className={styles.form} action="">
                            <div className={styles.formHeader}>
                                <h2>Dados da avaliação</h2>
                                <p>Use notas de 0 a 10. Todos os campos são obrigatórios.</p>
                            </div>

                            <div className={styles.fields}>
                                <div className={`${styles.field} ${styles.fullField}`}>
                                    <label htmlFor="aluno">Aluno</label>
                                    <input id="aluno" name="aluno" type="text" placeholder="Ex.: Noemi" value={aluno} onChange={(e) => setAluno(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="t1">T1 (Trabalho 1)</label>
                                    <input id="t1" name="t1" type="number" min="0" max="10" step="0.1" placeholder="0,0" value={t1} onChange={(e) => setT1(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="t2">T2 (Trabalho 2)</label>
                                    <input id="t2" name="t2" type="number" min="0" max="10" step="0.1" placeholder="0,0" value={t2} onChange={(e) => setT2(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="n1">N1 (Nota 1)</label>
                                    <input id="n1" name="n1" type="number" min="0" max="10" step="0.1" placeholder="0,0" value={n1} onChange={(e) => setN1(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="n2">N2 (Nota 2)</label>
                                    <input id="n2" name="n2" type="number" min="0" max="10" step="0.1" placeholder="0,0" value={n2} onChange={(e) => setN2(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="n3">N3 (Nota 3)</label>
                                    <input id="n3" name="n3" type="number" min="0" max="10" step="0.1" placeholder="0,0" value={n3} onChange={(e) => setN3(e.target.value)} required />
                                </div>
                            </div>

                            <button className={styles.submit} type="submit">Cadastrar notas</button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
}
