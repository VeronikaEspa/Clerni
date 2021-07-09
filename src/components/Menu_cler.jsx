import React from 'react'
import {Link} from "react-router-dom"
import clerni from '../utils/images/index/CLERNI.svg'


function Menu_cler(){
    return(
        <>
            <div className="Menu">
                <div className="menuHorizontal">
                    <img src={clerni} alt="menu"/>
                        <Link to = "/Clerni">
                            <button className="link" type="button">Inicio</button>
                        </Link>
                        <button type="button">Metodologia</button>
                        <Link to = "/beneficios">
                            <button className="link" type="button">Beneficios</button>
                        </Link>
                        <button type="button">Material de apoyo</button>
                        <button type="button">Iniciar Sesión</button>
                </div>
            </div>
        </>
    )
}


export default Menu_cler;