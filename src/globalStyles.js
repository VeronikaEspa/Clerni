import {createGlobalStyle} from 'styled-components'
import PoppinsBold from './utils/fonts/poppins/Poppins-Bold.woff'
import Poppins from './utils/fonts/poppins/poppins.woff'
import RobotoRegular from './utils/fonts/roboto/roboto_regular.woff'
import RobotoBold from './utils/fonts/roboto/Roboto-Bold.woff'
import RobotoBoldItalic from './utils/fonts/roboto/Roboto-BoldItalic.woff'
import RobotoLightItalic from './utils/fonts/roboto/Roboto-LightItalic.woff'
import RobotoMedium from './utils/fonts/roboto/Roboto-Medium.woff'
const GlobalStyles = createGlobalStyle`
//  FUENTES
@font-face {
    font-family: "poppins-bold";
    src: local("poppins-bold"), url(${PoppinsBold}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins";
    src: local("poppins"), url(${Poppins}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "roboto-medium";
    src: local("roboto-medium"), url(${RobotoMedium}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "roboto-light-Italic";
    src: local("roboto-light-Italic"), url(${RobotoLightItalic}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "roboto-regular";
    src: local("roboto-regular"), url(${RobotoRegular}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "roboto-bold-italic";
    src: local("roboto-bold-italic"), url(${RobotoBoldItalic}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "roboto-bold";
    src: local("roboto-bold"), url(${RobotoBold}) format("woff");
    font-weight: normal;
}



html, body{
    margin: 0;
    padding: 0;
    background-color: #FBFAFA;
    width: 100%;
}
/* Menu horizontal estilos*/
.menuHorizontal{
    align-items: center;
    justify-content: center;
    list-style: none;
    display: flex;
    width: 99%;
    justify-content: space-around;
    background-color: #0054AA;
    color: #FBFAFA;
    padding: 0.5%;
    margin: 0;
}
button{
    background: none;
    border: none;
    cursor: pointer;
}
a{
    color: #FBFAFA;
    font-family:roboto-medium;
    font-size: 18px;
    text-decoration-line: none
}
.iniciarSesion{
    color: #FFB932;
    font-size: 24px;
    font-family: roboto-medium;
}
/* Agregar la imagen del logo y cambiar tamaño */
.logoMenu{
    margin-top: 1%;
    margin-right: 0%;
    width: 17%;
}
/*colores*/
/*COLORES DEFINIDOS*/
.azul{
    color: #0054AA;
}
.naranja{
    color: #FFB932;
}
.blanco{
    color: #FBFAFA;
}
.azulClaro{
    color: #85CAF1;
}
.gris{
    color: #E5E5E5;
}
.piedePagina{ /*Footer*/
    display: flex;
    padding: 1%;
    justify-content: space-around;
    background-color: rgb(41, 38, 38);
    color: rgb(233, 229, 229);
    font-family: roboto-medium;
    font-size: 13px;
}
@media screen and (min-width:760px) and (max-width:893px){
    .piedePagina{ /*Footer*/
        font-size: 10px;
    }
    .logoMenu{ /*Espacio del logo*/
        margin: 0;
        margin-top: 1%;
        margin-left: 2%;
    }
    .logoMenu img{ /*Imagen logo*/
        width: 90%;
    }
    a{ /*Menu*/
        font-size: 14px;
    }
    .iniciarSesion{ /*Boton Inicio sesion del menu*/
        font-size: 18px;
    }
}
@media screen and (min-width:300px) and (max-width:759px){
    .piedePagina{ /*Footer*/
        text-align: center;
        font-size: 10px;
        flex-direction: column;
        padding: 0;
    }
    .logoMenu{ /*Espacio del logo*/
        margin: 0;
        margin-top: 1%;
        margin-left: 2%;
    }
    .logoMenu img{ /*Imagen logo*/
        width: 90%;
    }
    a{ /*Menu*/
        font-size: 14px;
    }
    .iniciarSesion{ /*Boton Inicio sesion del menu*/
        font-size: 18px;
    }
}
`
export default GlobalStyles;