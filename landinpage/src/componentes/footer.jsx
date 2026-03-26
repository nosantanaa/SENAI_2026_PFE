
export default function Footer(){
    return(
        <footer>
            <p>
                ©
                <script>
                    const data_atual = new Date();
                    document.write(data_atual.getFullYear())
                </script>
                Academia Fitness. Todos os direitos reservados.
            </p>
        </footer>
    )
}