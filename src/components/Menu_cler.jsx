import React from 'react'
import {Link} from "react-router-dom"
import clerni from '../utils/images/index/CLERNI.svg'


function Menu_cler(){
    return(
        <>
            <div className="Menu">
                <div className="menuHorizontal">
                    <img src={clerni} alt="menu"/>
                        <Link to = "/index">
                            <button className="links" type="button">Inicio</button>
                        </Link>
                        <button className="links" type="button">Metodologia</button>
                        <Link to = "/beneficios">
                            <button className="links" type="button">Beneficios</button>
                        </Link>
                        <button className="links" type="button">Material de apoyo</button>
                        <button className="links" type="button">Iniciar Sesión</button>
                </div>
            </div>
        </>
    )
}


export default Menu_cler;