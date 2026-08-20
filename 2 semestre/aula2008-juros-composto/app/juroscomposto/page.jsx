
"use client";

import { useState } from "react";

export default function JurosCompostos() {
  const [capital, setCapital] = useState("");
  const [txJuros, setTxJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [result, setResult] = useState(null);

  const calcularJuros = (e) => {
    e.preventDefault();

    const cap = parseFloat(capital);
    const tax = parseFloat(txJuros) / 100;
    const temp = parseFloat(tempo);

    if (isNaN(cap) || isNaN(tax) || isNaN(temp)) {
      return;
    }

    const montante = cap * Math.pow(1 + tax, temp);
    const juros = montante - cap;

    setResult({
      juros: juros.toFixed(2),
      montante: montante.toFixed(2),
    });
  };

  return (
    <main className="container">
      <div className="card">
        <div className="header">
          <div className="icon">$</div>

          <h1>Calculadora de Juros Compostos</h1>

          <p>Descubra quanto seu dinheiro pode render</p>
        </div>

        <form onSubmit={calcularJuros} className="form">
          <div className="input-group">
            <label htmlFor="capital">Capital</label>

            <div className="input-wrapper">
              <span>R$</span>

              <input
                id="capital"
                type="number"
                step="0.01"
                placeholder="Ex: 1000"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="juros">Taxa de juros (%)</label>

            <div className="input-wrapper">
              <input
                id="juros"
                type="number"
                step="0.01"
                placeholder="Ex: 10"
                value={txJuros}
                onChange={(e) => setTxJuros(e.target.value)}
              />

              <span>%</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="tempo">Tempo aplicado</label>

            <div className="input-wrapper">
              <input
                id="tempo"
                type="number"
                step="0.01"
                placeholder="Ex: 2"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
              />

              <span>períodos</span>
            </div>
          </div>

          <button type="submit" className="button">
            Calcular juros
          </button>
        </form>

        {result && (
          <div className="result">
            <div className="result-item">
              <span>Rendimento</span>

              <strong>R$ {result.juros}</strong>
            </div>

            <div className="divider"></div>

            <div className="result-item">
              <span>Total acumulado</span>

              <strong>R$ {result.montante}</strong>
            </div>
          </div>
        )}

        <div className="formula">
          <strong>Fórmula:</strong> M = C × (1 + i)ᵗ
        </div>
      </div>
    </main>
  );
}
