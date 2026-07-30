import { Routes, Route } from "react-router-dom";

//import das páginas
import Principal from '../pages/principal';
import Sobre from "../pages/sobre";
import Contato from "../pages/contato";

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/Sobre' element={<Sobre/>}/>
            <Route path='/Contato' element={<Contato/>}/>
        </Routes>
    )
}
