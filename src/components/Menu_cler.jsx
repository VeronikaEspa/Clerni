import React from 'react' //Se importan 
import {Link} from "react-router-dom"
import '../utils/css/Menu.css'


function Menu_cler(){ 
    return(
        <>
            <div className="Menu">
                <nav className="menuHorizontal">
                Menu
                    <div className="links"> <Link to="/index"> <li> Inicio </li> </Link></div>
                    <div className="links"><Link to="/"> <li> Metodologia </li></Link></div>
                    <div className="links"><Link to="/beneficios" > <li> Beneficios </li> </Link> </div>
                    <div className="links"><Link to="/"> <li> Material de apoyo </li> </Link> </div>
                    <div className="links"><Link to="/" className="iniciarSesion"> <li> Iniciar Sesión </li> </Link> </div>
                </nav>
            
            </div>

        </>
    )
}


export default Menu_cler;