import Header from '../../components/header'
import './relatorio.css'
import '../../components/graficoBarra'

export default function Relatorio(){
    const leituras = [
        {horario: "13:00", qualidadeAr: "boa", iqa: 42, temperatura: "26ºC", umidade: "68%"},
        {horario: "15:00", qualidadeAr: "moderada", iqa: 55, temperatura: "30ºC", umidade: "37%"},
        {horario: "17:00", qualidadeAr: "ruim", iqa: 28, temperatura: "19ºC", umidade: "80%"},
        {horario: "19:00", qualidadeAr: "boa", iqa: 35, temperatura: "41ºC", umidade: "43%"},
    ]
    
    return(
    <div className="container">
        <Header />
        <h3>relatório estação meteorológica</h3>
        <p>monitoramento da temperatura e umidade em tempo real </p>

        <section className='graficos'>
            {/* colocar graficos */}
        </section>
        
        <section className='tabela-leituras'>
            <table>
                <thead>
                    <tr>
                        <th>horário</th>
                        <th>qualidade do ar</th>
                        <th>IQA</th>
                        <th>temperatura</th>
                        <th>umidade</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        leituras.map((item, index) => (
                            <tr key={index}>
                                <td>{item.horario}</td>
                                <td>{item.qualidadeAr}</td>
                                <td>{item.iqa}</td>
                                <td>{item.temperatura}</td>
                                <td>{item.umidade}</td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </section>
    </div>
    )
}

