import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Conmutador({content}) {
  
  const [activeItem, setActiveItem] = useState(0);

  const handleActive = (index) => {
    
    index === activeItem ? setActiveItem(-1) : setActiveItem(index);
  };

  return (
    <>
      {content.map((item, index) => (
        <div key={index} className=''>
          <div
            className='flex flex-row justify-between items-center cursor-pointer'
            onClick={() => handleActive(index)}
          >
            <h1 className='text-lg lg:font-semibold font-medium text-gray-800 lg:mt-0 mt-4'>{item.titulo}</h1>
            <h1 className='text-lg lg:font-semibold font-medium text-gray-800 text-[15px]'>
              {activeItem === index ? <FaMinus className='text-sm' /> : <FaPlus className='text-sm'/>}
            </h1>
          </div>
          {activeItem === index && (
            <div className='mt-4 transition-all duration-500 ease-in-out transform'>
              <p className='text-gray-800 text-[15px] text-justify'>{item.descripcion}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Conmutador;
