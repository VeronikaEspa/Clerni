import React from 'react' //Se importan 
import {Link} from "react-router-dom"
import '../utils/css/globalStyles.css'
import clerni from '../utils/images/index/CLERNI.svg'


function Menu_cler(){ 
    return(
        <>
            <div className="Menu">
                <nav className="menuHorizontal">
                    <img src={clerni} alt="menu"/>
                    <div className="links"> <Link to="/inicio"> <li> Inicio </li> </Link></div>
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