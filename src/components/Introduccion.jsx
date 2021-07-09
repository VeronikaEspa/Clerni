import React from 'react' //Importar siempre react
import '../utils/css/introduccion.estilos.css'
import olaArriba from '../utils/images/index/Group 68.svg'
import logo from '../utils/images/index/Group 63.png'
import phone5 from '../utils/images/index/personas phone 5.png'
import globo from '../utils/images/index/Group 67.svg'
import olaFinal from '../utils/images/index/Group 70.svg'
import puntos from '../utils/images/index/Group 71.svg'
import chica1 from '../utils/images/index/chica1Usuario.png'
import chica2 from '../utils/images/index/chica2Usuario.png'
import chica3 from '../utils/images/index/chico3Usuario.png'
import '../utils/css/Footer.css'
import face from '../utils/images/facebook.svg'
import youtu from '../utils/images/youtube.svg'
import insta from '../utils/images/instagram.svg'
const Introduccion = () => {
    return (
        <>
        <section class="contenedorGeneral">
        <div class="cabecera_olas">
            <img src={olaArriba}/>
        </div>
        <section class="contenedorInicio">
            <div class="logo">
                <img src={logo}/>
            </div>
            <div class="decidelo">
                <p> ¡Decídelo! Aprende ingles</p>
                <p> hablando</p>
                <button type="button" class="empieza" id="boton">Empieza ahora</button>
            </div>
        </section>
        <div class="personas">
            <img src={phone5}/>
        </div>
        <div class="frase">
            <p>"Todo logro empieza con la decisión de intentarlo" -Gail Devers</p>
        </div>
        <div class="globo">
            <img src={globo}/>
        </div>
        <section class="contenedorVideo">
            <div class="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wUrLxy6LSXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
        </section>
        <div class="olaFinal">
            <img src={olaFinal}/>
        </div>
        <section class="abajo">
        <section class="numeros">
        <div class="puntos">
        <img src={puntos}/>
        </div>
            <div class="num">
                <div class="cont" id="numero">1600</div>
                <p>Llamadas</p>
            </div>
            <div class="num">
                <div class="cantidad" >50</div>
                <p>Estudiantes activos</p>
            </div>
            <div class="num ">
                <div class="cantidad">6</div>
                <p>Países</p>
            </div>
        </section>
            <div class="OpinionesPerso">
                <div class="person1 columValores">
                        <img src={chica1}/>
                    <p>Efectividad a bajo costo, excelente servicio, y pronunciación, además del uso de otras palabras, ampliando mi vocabulario</p>
                </div>
                <div class="person2 columValores">
                <img src={chica2}/>
                    <p>Es una empresa muy completa, me han ayudado muchisímo ya que además de ser responsables, cuentan con diferentes estrategias para aprender el idioma, tienen un buen servicio, y sus profesores no los ves como tal, ya que te hacen sentir cómodo al momento de hablar inglés</p>
                </div>
                <div class="person3 columValores">
                <img src={chica3}/>
                    <p>Muy recomendado, me han ayudado con mi fluidez y pronunciación, además del uso de otras palabras, ampliando mi vocabulario</p>
                </div>
            </div>
    </section>
    </section>
    <div className="piedePagina holimargin">
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
                    <a href=""><h4>Iniciar sesión</h4></a>
                </div>
                <div className="derechos"><h4>©Derechos reservados</h4></div>
                </div>
    </>
    )
}
export default Introduccion;