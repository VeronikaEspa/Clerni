import React from 'react'
import '../../utils/css/beneficios.css'
import '../../utils/css/globalStyles.css'
import { Menu_cler, Footer } from '../../components/export.js'
import Popup from 'reactjs-popup'
import imagen_1 from '../../utils/images/beneficios/imagen_1.png'
import imagen_2 from '../../utils/images/beneficios/imagen_2.png'
import circulo_1 from '../../utils/images/beneficios/circulo_1.png'
import circulo_2 from '../../utils/images/beneficios/circulo_2.png'
import circulo_3 from '../../utils/images/beneficios/circulo_3.png'
import circulo_4 from '../../utils/images/beneficios/circulo_4.png'
import prueba2_cel from '../../utils/images/beneficios/prueba2_cel.svg'
import paypal from '../../utils/images/beneficios/paypal.jpg'
import nequi from '../../utils/images/beneficios/nequi.jpg'
import bancolombia from '../../utils/images/beneficios/bancolombia.jpg'
import celular_paypal from '../../utils/images/beneficios/celular_paypal.svg'
import celular_nequi from '../../utils/images/beneficios/celular_nequi.svg'
import celular_bancolombia from '../../utils/images/beneficios/celular_bancolombia.svg'
import pagos_gerald from '../../utils/images/beneficios/pagos_gerald.svg'

const beneficios = () => {
    return( 
        <>
        
        <Menu_cler />
        
        <div className="cabecera_beneficios">
            <div className="titulo"><svg  viewBox="0 0 1291 1364" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1291" height="1219" fill="#0054AA"/>
                <rect x="127" y="79" width="404" height="670" fill="#85CAF1"/>
                <rect y="1219" width="1291" height="145" fill="#FFFDFD"/>
                <rect x="551" y="102" width="658" height="611" fill="#FBFAFA"/>
                </svg>
            </div>
            <div className="parche1_responsive"></div>
            <div className="fondo_responsive1"><svg viewBox="0 0 1211 1590" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M123.001 1487.98C439.496 1682.22 764.5 1175.5 1211 1589.5V204H0.00109863V1104.43C0.0020752 1313.14 -1.70422 1411.45 123.001 1487.98Z" fill="#FFB932"/>
                <path d="M496.499 1424.87C742.499 1356.66 960 1296.9 1211 1517V0H0L0.000976562 1095.37C14 1482.42 250.499 1493.08 496.499 1424.87Z" fill="#0054AA"/>
                </svg>
            </div>
            <div className="contenedor1">
                <div className="imagen1"><img src={imagen_1} alt=""/></div>
                <div className="texto1">
                    <div className="espacio_entretexto1">
                        <h1>Flexible</h1>
                        <p>Puedes agendar clases desde 2 horas antes de lunes a sábado de 8am a 10pm y cancelarlas
                            desde 20 minutos antes.
                        </p>
                    </div>
                    <div  className="espacio_entretexto1">
                    <h1>Personalizado</h1>
                    <p>Durante la llamada tienes un profesor exclusivamente para ti, que acondiciona el 
                        nivel al tuyo y resuelve tus dudas de inmediato.
                    </p>
                    </div>
                    <div  className="espacio_entretexto1">
                        <h1>Práctico</h1>
                        <p>Buscamos que no te canses de aprender idiomas, por esta razón nuestras clases son
                            desde 10 minutos para que las tomes en cualquier momento.

                        </p>
                    </div>
                    <div  className="espacio_entretexto1">
                        <h1>Didáctico</h1>
                        <p>Nuestro objetivo es que cada clase sea única y te motive agendar la siguiente
                            para seguir aprendiendo con una metodología didáctica.
                        </p>
                        </div>
                </div>
            </div>

            <div className="contenedor2">
                <div className="texto2">
                    <p>Nuestro equipo está dispuesto a resolver cualquier
                        inquietud que tengas.Estamos aquí para facilitar tu
                        proceso de aprendizaje de nuevos idiomas, cuéntanos si te gustaría ser parte de Clerni.
                    </p>
                    <a className="letra_boton" href="../pages/formulario_registro.html"><button type="button" class="primer_boton">Regístrate</button></a>
                </div>
                <div className="imagen2"><img src={imagen_2} alt=""/></div>    
            </div>

        </div>
        
        <div className="titulo_porque"><h1 className="titulo_porque">¿Por qué Clerni?</h1></div>
        <div className="razones">
            <div className="circulos izquierda"><img src={circulo_1} alt=""/></div>
            <div className="razones_izquierda">
                <h1>Disfrutarás cada clase</h1>
                <p>Nuestros profesores son escogidos mediante un proceso riguroso y cuidadoso porque queremos garantizarte
                    una experiencia increíblemente educativa pero a su vez practica y cercana.
                </p>
            </div>
        </div>

        <div className="razones">
            <div className="razones_derecha ">
                <h1>Hablarás fluido</h1>
                <p>Nuestras clases están planeadas y organizadas con el objetivo de que puedas ver resultados mes a mes
                    con el único objetivo de que logres entender y hablar en inglés con confianza y fluidez.
                </p>
            </div>
            <div className="circulos derecha"><img src={circulo_2} alt=""/></div>
        </div>

        <div className="razones">
            <div className="circulos izquierda"><img src={circulo_3} alt=""/></div>
            <div className="razones_izquierda">
                <h1>Dejarás la pena</h1>
                <p>Con nuestra metodología podrás retarte a hablar en inglés sintiéndote tranquilo de cometer errores 
                    y aprendiendo directamente desde el habla y la escucha con profesores capacitados para hacerte sentir 
                    muy bien.
                </p>
            </div>
        </div>

        <div className="razones">
            <div className="razones_derecha ">
                <h1>No perderás más oportunidades</h1>
                <p>Nuestras clases están planeadas y organizadas con el objetivo de que puedas ver resultados mes a mes
                    con el único objetivo de que logres entender y hablar en inglés con confianza y fluidez.
                </p>
            </div>
            <div className="circulos derecha"><img src={circulo_4} alt=""/></div>
        </div>

        <div className="abajo_beneficios">
            <div className="titulo2">
                <svg viewBox="0 0 1211 578" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M568.012 327.441C1098.36 301.371 900.839 78.4572 1211 84.1055V578H0C0 578 37.6671 353.511 568.012 327.441Z" fill="#FFB932"/>
                    <path d="M596.165 360.74C1134.33 339.262 924.37 172.842 1211 177.08V578H22C22 578 57.9965 382.218 596.165 360.74Z" fill="#0054AA"/>
                    <rect x="168" y="15" width="250" height="542" rx="45" fill="#0054AA"/>
                </svg>
            </div>
            <div className="contenedor3">
                <div className="imagenpagos"><img src={prueba2_cel} alt=""/></div>
                    <div className="textopagos">       
                        <h1>¡Pruébalo ahora!</h1>
                        <p>Ten una conversación con nuestros profesores en inglés donde identificaremos 
                            tu nivel de fluidez, entendimiento gramatical y de vocabulario. Mientras te 
                            decimos más tips de aprendizaje.
                        </p>
                        <div className="botones_pagos">
                        
                        {/*Modal1*/}
                            <Popup
                                trigger={<button><img src={paypal} alt=""/></button>} //Modal de la pagina
                                modal
                                nested
                                >
                                {close => (
                                <div className="content1" >
                                    
                                    <div className="modal" >
                                    {' '}
                                    <button className="close" onClick={close} id="cerrar">
                                    &times;
                                    </button>
                                        <div className="titulo_modals_beneficios"> 
                                            Metodos de pago
                                        </div> 
                                        <div className="modals_beneficios_contenido" > 
                                            <div className="containerImagenCelular"> 
                                                <img src={celular_paypal} alt="" className="celular"/>
                                                <img src={pagos_gerald} alt="" className="globos_texto_beneficios" />
                                                
                                                <div className="texto1_contenido_pay">Número celular de la cuenta: 3046699930.</div>
                                                <div className="texto2_contenido_pay">
                                                    Nombre del titular : Diego Buitrago 
                                                    Link de pago: paypal.me/clernipago
                                                </div>  
                                                <div className="texto3_contenido_pay">
                                                    Válido para: México, España
                                                    Argentina, Chile, Ecuador, Bolivia, Paraguay,
                                                    Uruguay, Nicaragua Republica Dominicana, Honduras y EE UU.
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                )}
                            </Popup>

                            {/*Modal2*/}

                            <Popup
                                trigger={<button><img src={nequi} alt="" /></button>} //Modal de la pagina
                                modal
                                nested
                                >
                                {close => (
                                <div className="content1">
                                    
                                    <div className="modal">
                                    {' '}
                                    <button className="close" onClick={close} id="cerrar">
                                    &times;
                                    </button>
                                        <div className="titulo_modals_beneficios"> 
                                            Metodos de pago
                                        </div> 
                                        <div className="modals_beneficios_contenido" > 
                                            <div className="containerImagenCelular"> 
                                                <img src={celular_nequi} alt="" className="celular"/>
                                                <img src={pagos_gerald} alt="" className="globos_texto_beneficios" />
                                                
                                                <div className="texto1_contenido_nequi">Número de cuenta: 3046699930</div>
                                                <div className="texto2_contenido_nequi">
                                                    Nombre del titular: Diego Buitrago 
                                                    Identificación del titular: 101430995
                                                </div>
                                                <div className="texto3_contenido_nequi">
                                                    Método de pago válido para: Colombia, El Salvador, Guatemala, Panamá, Perú y Puerto Rico.
                                                </div>

                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                )}
                            </Popup>

                            {/*Modal3*/}
                            <Popup
                            trigger={<button><img src={bancolombia} alt=""/></button>} //Modal de la pagina
                            modal
                            nested
                            >
                            {close => (
                            <div className="content1">
                                
                                <div className="modal">
                                {' '}
                                <button className="close" onClick={close} id="cerrar">
                                &times;
                                </button>
                                    <div className="titulo_modals_beneficios"> 
                                        Metodos de pago
                                    </div> 
                                    <div className="modals_beneficios_contenido" > 
                                        <div className="containerImagenCelular"> 
                                            <img src={celular_bancolombia} alt="" className="celular"/>
                                            <img src={pagos_gerald} alt="" className="globos_texto_beneficios" />
                                            
                                            <div className="texto1_contenido_banco">Número de cuenta: 3046699930</div>
                                            <div className="texto2_contenido_banco">
                                                Nombre del titular: Diego Buitrago 
                                                Identificación del titular: 101430995
                                            </div>
                                            <div className="texto3_contenido_banco">
                                                Método de pago válido para: Colombia Panamá, Costa Rica, Honduras, El Salvador
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            )}
                        </Popup>

                        </div>
                    </div>
                </div>
                
            </div>


        <Footer />
        
    </>

    )
}

export default beneficios; 