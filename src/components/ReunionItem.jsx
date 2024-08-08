import React from 'react';
import banderaPeru from '../assets/peru.jpg'
import banderaUsa from '../assets/usa.jpg'

const ReunionItem = ({ dia, description,ubicacion ,horaPeru, horaUsa }) => {
    return (
      <div className="flex flex-col pb-8 w-[47%]">
        <h1 className="uppercase border w-fit lg:text-xl text-md mb-8 font-semibold text-white font- tracking-widest border-gray-300 px-3 py-1  inline-block">
            {dia}
        </h1>
        
        <p className="mb-4 lg:text-lg text-md font-extralight text-white"><strong>{description}</strong> : {ubicacion}</p>
        <div className="flex flex-row flex-wrap gap-2 italic">
        {horaPeru &&
        <>
            <h3 className="text-base text-white">{horaPeru}</h3>
            <img src={banderaPeru} className="w-7" alt="Bandera de Perú" />
        </>}
        {horaUsa &&
        <>
            <h3 className="text-base text-white">{horaUsa}</h3>
            <img src={banderaUsa} className="w-7" alt="Bandera de Usa" />
        </>}
        </div>
      </div>
    );
  };
  
  export default ReunionItem;