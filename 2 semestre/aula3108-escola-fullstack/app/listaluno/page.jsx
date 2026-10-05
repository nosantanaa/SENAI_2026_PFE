'use client';

import { useEffect, useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";

async function buscarAlunos() {
    const resposta = await fetch("/api/alunos");
    if (!resposta.ok) throw new Error("Não foi possível carregar os alunos.");
    return resposta.json();
}

export default function ListAluno() {
    const [alunos, setAlunos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [editandoId, setEditandoId] = useState(null);
    const [formulario, setFormulario] = useState({ nome: "", idade: "", serie: "", ra: "" });
    const [erro, setErro] = useState("");

    const termoPesquisa = pesquisa.trim().toLocaleLowerCase("pt-BR");
    const alunosFiltrados = termoPesquisa.length >= 3
        ? alunos.filter((aluno) => aluno.nome.toLocaleLowerCase("pt-BR").includes(termoPesquisa))
        : alunos;

    useEffect(() => {
        buscarAlunos()
            .then(setAlunos)
            .catch(() => setErro("Não foi possível carregar os alunos."));
    }, []);

    function iniciarEdicao(aluno) {
        setEditandoId(aluno.id_aluno);
        setFormulario({
            nome: aluno.nome,
            idade: aluno.idade,
            serie: aluno.serie,
            ra: aluno.ra,
        });
        setErro("");
    }

    async function salvarEdicao(evento) {
        evento.preventDefault();
        try {
            const resposta = await fetch("/api/alunos", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formulario, id_aluno: editandoId }),
            });
            if (!resposta.ok) throw new Error("Não foi possível atualizar o aluno.");
            setAlunos(await buscarAlunos());
            setEditandoId(null);
            setErro("");
        } catch {
            setErro("Não foi possível atualizar o aluno. Verifique os dados e tente novamente.");
        }
    }

    async function excluirAluno(idAluno) {
        if (!window.confirm("Tem certeza de que deseja excluir este aluno?")) return;
        try {
            const resposta = await fetch("/api/alunos", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_aluno: idAluno }),
            });
            if (!resposta.ok) throw new Error("Não foi possível excluir o aluno.");
            setAlunos(await buscarAlunos());
            setErro("");
        } catch {
            setErro("Não foi possível excluir o aluno. Tente novamente.");
        }
    }

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
                            <strong>{alunosFiltrados.length}</strong>
                            {alunosFiltrados.length === 1 ? "aluno encontrado" : "alunos encontrados"}
                        </p>
                    </header>

                    <div className={styles.searchBar}>
                        <label htmlFor="pesquisa-aluno">Buscar aluno</label>
                        <input
                            id="pesquisa-aluno"
                            type="search"
                            placeholder="Digite o nome (mínimo 3 caracteres)"
                            value={pesquisa}
                            onChange={(evento) => setPesquisa(evento.target.value)}
                        />
                    </div>

                    <section className={styles.tableCard} aria-label="Lista de alunos">
                        {erro && <p className={styles.error} role="alert">{erro}</p>}
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Idade</th>
                                        <th scope="col">Série</th>
                                        <th scope="col">RA</th>
                                        <th scope="col">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunosFiltrados.map((aluno) => (
                                        <tr key={aluno.id_aluno}>
                                            <td className={styles.id}>{aluno.id_aluno}</td>
                                            <td className={styles.name}>
                                                {editandoId === aluno.id_aluno ? (
                                                    <input aria-label="Nome do aluno" value={formulario.nome} onChange={(evento) => setFormulario({ ...formulario, nome: evento.target.value })} required />
                                                ) : aluno.nome}
                                            </td>
                                            <td>
                                                {editandoId === aluno.id_aluno ? (
                                                    <input aria-label="Idade do aluno" type="number" min="1" max="100" value={formulario.idade} onChange={(evento) => setFormulario({ ...formulario, idade: evento.target.value })} required />
                                                ) : `${aluno.idade} anos`}
                                            </td>
                                            <td>
                                                {editandoId === aluno.id_aluno ? (
                                                    <input aria-label="Série do aluno" value={formulario.serie} onChange={(evento) => setFormulario({ ...formulario, serie: evento.target.value })} required />
                                                ) : aluno.serie}
                                            </td>
                                            <td className={styles.ra}>
                                                {editandoId === aluno.id_aluno ? (
                                                    <input aria-label="RA do aluno" value={formulario.ra} onChange={(evento) => setFormulario({ ...formulario, ra: evento.target.value })} required />
                                                ) : aluno.ra}
                                            </td>
                                            <td className={styles.actions}>
                                                {editandoId === aluno.id_aluno ? (
                                                    <>
                                                        <button className={styles.saveButton} type="button" onClick={salvarEdicao}>Salvar</button>
                                                        <button className={styles.cancelButton} type="button" onClick={() => setEditandoId(null)}>Cancelar</button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button className={styles.editButton} type="button" onClick={() => iniciarEdicao(aluno)}>Editar</button>
                                                        <button className={styles.deleteButton} type="button" onClick={() => excluirAluno(aluno.id_aluno)}>Excluir</button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    {alunosFiltrados.length === 0 && (
                                        <tr>
                                            <td className={styles.empty} colSpan="6">
                                                {alunos.length === 0 ? "Nenhum aluno cadastrado." : "Nenhum aluno encontrado."}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}