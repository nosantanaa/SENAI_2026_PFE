'use client';
import { useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";

export default function CadAluno() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    return (
        <>
            <Header />
            <main className={styles.page}>
                <div className={styles.shell}>
                    <header className={styles.intro}>
                        <p className={styles.eyebrow}>Gestão escolar</p>
                        <h1 className={styles.title}>Novo aluno, novo começo.</h1>
                        <p className={styles.description}>
                            Adicione um estudante à base da escola e mantenha as informações acadêmicas sempre organizadas.
                        </p>
                    </header>

                    <section className={styles.content} aria-label="Cadastro de aluno">
                        <aside className={styles.aside}>
                            <div>
                                <h2>Vamos preparar esse cadastro?</h2>
                                <p>Preencha os dados principais para criar o registro do aluno.</p>
                            </div>
                            <ol className={styles.steps}>
                                <li className={styles.step}>
                                    <span className={styles.stepNumber}>1</span>
                                    <span>Identifique o estudante</span>
                                </li>
                                <li className={styles.step}>
                                    <span className={styles.stepNumber}>2</span>
                                    <span>Informe a turma e a idade</span>
                                </li>
                                <li className={styles.step}>
                                    <span className={styles.stepNumber}>3</span>
                                    <span>Finalize para salvar</span>
                                </li>
                            </ol>
                        </aside>

                        <form className={styles.form} action="">
                            <div className={styles.formHeader}>
                                <h2>Dados do aluno</h2>
                                <p>Todos os campos são obrigatórios.</p>
                            </div>

                            <div className={styles.fields}>
                                <div className={styles.field}>
                                    <label htmlFor="nome">Nome completo</label>
                                    <input id="nome" name="nome" type="text" placeholder="Ex.: Ana Carolina Souza" value={nome} onChange={(e) => setNome(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="idade">Idade</label>
                                    <input id="idade" name="idade" type="number" min="1" max="100" placeholder="Ex.: 14" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="serie">Série</label>
                                    <input id="serie" name="serie" type="text" placeholder="Ex.: 9º ano" value={serie} onChange={(e) => setSerie(e.target.value)} required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="ra">RA</label>
                                    <input id="ra" name="ra" type="number" min="1" placeholder="Ex.: 2024001" value={ra} onChange={(e) => setRa(e.target.value)} required />
                                </div>
                            </div>

                            <button className={styles.submit} type="submit">Cadastrar aluno</button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
}