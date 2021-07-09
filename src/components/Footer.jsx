import React from 'react'
import '../utils/css/Footer.css'
import face from '../utils/images/facebook.svg'
import youtu from '../utils/images/youtube.svg'
import insta from '../utils/images/instagram.svg'

const Footer = () => {
    return(
        <div className="piedePagina">
                <div className="columnas_piedePagina">
                    <div className="redes_sociales">
                        <a href="https://www.instagram.com/clernieducation/"><img src={youtu} alt=""/></a>
                        <a href="https://www.facebook.com/ClerniEducation/"><img src={face} alt=""/></a>
                        <a href="https://www.youtube.com/channel/UCC1G5O1scdkAtids1iMII7Q"><img src={insta} alt=""/></a>
                    </div>
                    <h4>Bogotá D.C., Colombia</h4>
                    <h4>Carrera 70 C #48 - 28 Oficina: C-21</h4>
                    <h4>Télefono: +57 304 669 9930</h4>
                    <h4>E-mail: contacto@clerni.com</h4>
                </div>
                <div className="columnas_piedePagina">
                    <a href="./beneficios.html"><h4>Beneficios</h4></a>
                    <a href="./beneficios.html#metodos_pago_menu"><h4>Métodos de pago</h4></a>
                    <a href="./materialApoyo.html"><h4>Material de apoyo</h4></a>
                </div>
                <div className="columnas_piedePagina">
                    <a href="./verometodologia.html"><h4>Metodología</h4></a>
                    <a href="./verometodologia.html#planes_menu"><h4>Planes de aprendizaje</h4></a>
                    <a href="./verometodologia.html#tipos_menu"><h4>Tipos de conversación</h4></a>
                    <a href="./verometodologia.html#equipo"><h4>Equípo</h4></a>
                </div>
                <div className="columnas_piedePagina">
                    <a href="./formulario_registro.html"><h4>Regístrese</h4></a>
                    <a href="http://127.0.0.1:8081/scriptcase/app/clerni/secu_Login/"><h4>Iniciar sesión</h4></a>
                </div>
                <div className="derechos"><h4>©Derechos reservados</h4></div>
                </div>
    )
}

export default Footer;