import React from 'react';
import DarFondo from '../assets/Sin título-1Mesa de trabajo 3.jpg';
import Yape from '../assets/yape.png';

import QR from '../assets/qr2.png';

function Dar() {
  return (
    <div 
      className='px-6 py-8 md:px-8 md:py-16 lg:px-16 lg:pt-36 lg:pb-12 flex m-0 bg-cover bg-center min-h-[100vh]' 
      style={{ backgroundImage: `url(${DarFondo})` }}
    >
      <div className='fade-in max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between items-center'>
        <div className='flex flex-col lg:w-full  w-full lg:gap-3 gap-3 justify-center lg:mt-0 mt-36 lg:mb-0 mb-4'>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-6xl mt-[10px] font-semibold ">
            Formas de dar
          </h1>
          <hr className='border-t-[3px] w-[100px] border-y-orange-500 py-2' />

          <h2 className='texto italic text-white w-3/4 lg:w-1/2'>
            "En todo os he enseñado que, trabajando así, se debe ayudar a los necesitados y recordando las palabras del Señor Jesús que dijo: Más bienaventurado es dar que recibir"
          </h2>
        </div>
        <div className='flex flex-row flex-wrap lg:pb-0   w-full lg:gap-3 gap-3 justify-between lg:mt-0 mt-12 lg:mb-0 '>
        <img 
            src={QR} 
            alt="QR"
            className="  w-fit lg:h-[250px] h-[200px]  items-start object-cover rounded-md"
            />
        <div className='flex flex-col md:w-[30%] lg:pb-0 pb-12  w-[48%]  lg:gap-1 gap-1 justify-start   lg:mb-0 '>
        <h1 className=' lg:text-2xl text-xl text-orange-500 text-left font-bold'>
                Yape        
            </h1> 
            <h1 className='texto text-white text-left mb-4 '>
                +51 975 801 561        
            </h1> 
            <h1 className=' lg:text-2xl text-xl text-orange-500 text-left font-bold'>
                Titular        
            </h1> 
            <h1 className='texto text-white text-left mb-4 '>
                Ricardo Serquen Benites      
            </h1> 

            <img 
                src={Yape} 
                alt="Yape"
                className="h-[80px] w-fit object-cover rounded-md"
                />

        </div>

        <div className='flex flex-col md:w-[30%] w-[48%] lg:pb-0  lg:gap-1 gap-1 justify-start  lg:mb-0 '>
        <h1 className=' lg:text-2xl text-xl text-orange-500 text-left font-bold'>
                BCP        
            </h1> 
            <h1 className=' lg:text-2xl text-xl text-cyan-700 text-left font-bold'>
                Numero de Cuenta        
            </h1> 
            <h1 className='texto text-white text-left mb-4 '>
                192 9183 8062 016    
            </h1> 
            <h1 className=' lg:text-2xl text-xl text-cyan-700  text-left font-bold'>
                Interbancaria        
            </h1> 
            <h1 className='texto text-white text-left mb-4 '>
                Ricardo Serquen Benites      
            </h1> 

            

        </div>
         

        </div>
        

        
      </div>
    </div>
  );
}

export default Dar;
