import { useEffect, useState } from "react";

export default function ConectaAPI() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const url = "https://randomuser.me/api/";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erro na requisição");
        return res.json();
      })
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Resultado da API</h1>

      {/* DADOS PERSONALIZADOS */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxw0MOJrwK07O3SpLnuibIiLeVr1GhhdKXg&s"
          alt="raposa"
          style={{ width: 150, borderRadius: 12 }}
        />
        <p>Nome: Noemi</p>
        <p>Email: noemisantana03@gmail.com</p>
        <p>País: Brasil</p>
      </div>
    </div>
  );
}
