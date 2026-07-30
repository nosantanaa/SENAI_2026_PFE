import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
import Hotel from '../img/hotel.jpeg'

export default function HomePage(){
    return(
        <>
        <Header titulo="hotel inn terraço"/>
        <main>
            <Image src={Hotel} width={800} height={400}></Image>
            <h2>bem vindo ao melhor hotel da regiao!</h2>
        </main>
        </>
    )
}

