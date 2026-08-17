'use client';

import { useState } from "react";
import Header from "../components/header";

export default function Calculadora() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [result, setResult] = useState(0);

    function Somar() {
        setResult(Number(n1) + Number(n2));
    }

    function Subtrair() {
        setResult(Number(n1) - Number(n2));
    }

    function Multiplicar() {
        setResult(Number(n1) * Number(n2));
    }

    function Dividir() {
        if (Number(n2) === 0) {
            setResult("Não é possível dividir por zero");
            return;
        }

        setResult(Number(n1) / Number(n2));
    }

    function RaizQuadrada() {
        if (Number(n1) < 0) {
            setResult("Não existe raiz real");
            return;
        }

        setResult(Math.sqrt(Number(n1)));
    }

    return (
        <>
            <Header />

            <main className="calculadora">
                <div className="card">
                    <h2>Calculadora</h2>

                    <label htmlFor="n1">Número 1</label>
                    <input
                        id="n1"
                        type="number"
                        value={n1}
                        onChange={(e) => setN1(e.target.value)}
                        placeholder="Digite um número"
                    />

                    <label htmlFor="n2">Número 2</label>
                    <input
                        id="n2"
                        type="number"
                        value={n2}
                        onChange={(e) => setN2(e.target.value)}
                        placeholder="Digite um número"
                    />

                    <div className="resultado">
                        <span>Resultado</span>
                        <strong>{result}</strong>
                    </div>

                    <div className="botoes">
                        <button onClick={Somar}>Somar +</button>
                        <button onClick={Subtrair}>Subtrair −</button>
                        <button onClick={Multiplicar}>Multiplicar ×</button>
                        <button onClick={Dividir}>Dividir ÷</button>
                        <button onClick={RaizQuadrada}>Raiz √</button>
                    </div>
                </div>
            </main>
        </>
    );
}