import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./estilo.css"
import Acordeon from "./Acordeon.jsx"
import Tarjeta from "./Tarjeta.jsx";
import Tarjeta2 from "./Tarjeta2.jsx";
import Tarjeta3 from "./Tarjeta3.jsx";


function Inicio(props)
{
    return(
        <div className="principal">
            <h1>DANZAS DE BOLIVIA</h1>
            <Acordeon></Acordeon>
        </div>
    );
}

function Ofertasdecursos(props)
{
    return(
        <div className="ofertas">
            <h1>OFERTAS DE CURSOS</h1>
             <div className="tarj">
                <div className="card1"><Tarjeta></Tarjeta></div>
                <div className="card2"><Tarjeta2></Tarjeta2></div>
                <div className="card3"><Tarjeta3></Tarjeta3></div>
            </div>
        </div>
    );
}

function Principal(props)
{
    return(
        <div>
            <nav>
                <div className="nombredelsitio">
                    <h1>Sergio el Bailador</h1>
                </div>
                
                <ul>
                    <li>
                        <Link to="/" className="enlace1" style={{ textDecoration: 'none' }}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/pag2" className="enlace2" style={{ textDecoration: 'none' }}>Ofertas de cursos</Link>
                    </li>
                </ul>  
            </nav>
            
            <div className="Contenido">
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/pag2" element={<Ofertasdecursos></Ofertasdecursos>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Principal;