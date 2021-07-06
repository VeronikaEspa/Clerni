import React from 'react' //Importar siempre react
import '../utils/css/introduccion.estilos.css'
// import Foto3 from '../utils/images/Nozaki_kun.jpg'
const Introduccion = () => {
    return (
        <div className="Container_Cabecera">
            {/* <img className="ContainerImagen" src={Foto3} alt="Hola Copito"/> */}
            <div className="ContainerText">
            <h1>Hola! este es el componente Cabecera</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo quas accusamus iste officiis odit eaque perferendis quidem sapiente, harum, voluptas alias corrupti ratione tenetur ad cum voluptatibus? Recusandae, explicabo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo quas accusamus iste officiis odit eaque perferendis quidem sapiente, harum, voluptas alias corrupti ratione tenetur ad cum voluptatibus? Recusandae, explicabo!</p>
            </div>
        </div>
    )
}
export default Introduccion