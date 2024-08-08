import React from 'react'
import { Link } from 'react-router-dom'

function Boton({ text, path, className,color }) {
    return (
      <div className={`flex items-center justify-start ${className}`}>
        <Link
          to={path} // Asegúrate de actualizar el enlace según la ruta de tu página de contacto
          className={`text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-700 transition duration-500 ease-in-out transform px-5 py-2 rounded-lg shadow-lg`}>
          {text}
        </Link>
      </div>
    );
  }
  
  export default Boton;