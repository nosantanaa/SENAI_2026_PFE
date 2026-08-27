'use client';

import { useState } from "react";
import Header from "../components/header";
import "../globals.css";

export default function BuscaCep() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);

    const search = async () => {
        if (cep && cep.length === 8) {
            try {
                const resposta = await fetch(
                    `https://viacep.com.br/ws/${cep}/json/`
                );

                const dados = await resposta.json();

                setEndereco(dados);
            } catch (err) {
                console.error("Não foi possível acessar a API", err);
            }
        }
    };

    return (
        <>
            <Header />

            <input
                type="number"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite o CEP"
            />

            <button onClick={search}>
                Buscar
            </button>

            {endereco && (
                <div>
                    <p>CEP: {endereco.cep}</p>
                    <p>Rua/Avenida: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>Estado: {endereco.uf}</p>
                </div>
            )}
        </>
    );
}