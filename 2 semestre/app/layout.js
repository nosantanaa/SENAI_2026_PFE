import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "F1 GRID",
  description:
    "Notícias, pilotos, equipes e informações sobre Fórmula 1.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body>

        <Header />

        {children}

        <Footer />

      </body>

    </html>
  );
}