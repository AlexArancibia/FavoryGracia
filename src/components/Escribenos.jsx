import React from 'react'
import EscribenosFondo from '../assets/RECURSOSMesa-de-trabajo-4.png'
import EscribenosFondo2 from '../assets/Sin título-1Mesa de trabajo 1.jpg'
import EscribenosImg  from '../assets/Sin título-1Mesa de trabajo 2.jpg'
import CasaDePaz  from '../assets/casadepaz.png'
import QRCasaPaz  from '../assets/qr.png'
import { FormularioCompleto, FormularioOracion } from './Formularios'
import { FaFacebookF ,FaInstagram ,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Escribenos() {
  return (
    <><div 
      className='px-6 py-8 md:px-8 md:py-16 lg:px-16 lg:pt-36 lg:pb-12 flex m-0 bg-cover bg-center md:min-h-[70vh] min-h-[50vh]' 
      style={{ backgroundImage: `url(${EscribenosFondo})` }} >
      <div className='max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between items-center '>
              
      <div className='flex flex-col lg:w-4/12   lg:pb-0 pb-12 w-full lg:gap-3 gap-3 justify-center lg:mt-0 mt-36 lg:mb-0 mb-84'>
    
          <h1 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-6xl mt-[10px]  font-semibold '> 
           Escríbenos
          </h1>
        
          <hr className='border-t-[7px] w-[100px] border-y-orange-500 py-2' />


  
        
        </div>

        <div className='flex flex-row flex-wrap lg:w-7/12 w-full lg:gap-3 gap-3 justify-between'>
        
        </div>

        
    </div>
    </div>
    <div 
      className='px-6 py-10 md:px-10 md:py-8 lg:px-16 lg:py-24 flex m-0 bg-cover bg-center ' >
      <div className='max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between  items-start '>
              
      <div className='flex flex-col md:w-1/3 w-full justify-start items-start '>
      <img 
      src={EscribenosImg} 
      alt="Escribenos"
      className="h-[600px] w-full object-cover rounded-md object-bottom"
    />
      </div>

      <div className='flex flex-col md:w-2/3 w-full justify-start item md:px-8 px-0 md:pt-0 pt-12 '>
      <h1 className='text-xl md:text-xl lg:text-3xl xl:text-2xl font-semibold '> 
           Envianos un mensaje
          </h1>
          <hr className='border-t-[4px] w-[100px] border-y-orange-500 mb-8' />
          
      <FormularioCompleto /> 
      </div>

        
    </div>
    </div>


    <div 
      className='px-6 py-10 md:px-10 md:py-16 lg:px-16 lg:py-24 flex m-0 bg-cover bg-center' 
      style={{ backgroundImage: `url(${EscribenosFondo2})` }} >
      <div className='max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between  items-start '>


      <div className='flex flex-col lg:w-3/5 w-full justify-start item  '>
      <h1 className='text-white text-xl md:text-lxl lg:text-3xl xl:text-2xl mt-[10px]   font-semibold '> 
           Petición de Oración
          </h1>
          <hr className='border-t-[4px] w-[100px] border-y-orange-500 py-4' />
      
      <FormularioOracion /> 
      </div>
              
      <div className='flex flex-col gap-4 md:w-2/5 w-full justify-start items-end pl-8'>
      <h1 className='text-white text-xl md:text-xl lg:text-3xl xl:text-2xl lg:mt-[10px] mt-[50px]   font-semibold '> 
           Redes Sociales
          </h1>
          <hr className='border-t-[4px] w-[100px] border-y-orange-500 mb-4' />
          <h1 className='text-orange-500 text-xl md:text-lxl lg:text-xl xl:text-2xl   font-semibold '> 
           <a href='https://www.instagram.com/favorygraciachurch/' target='_blank'>@favorygraciachurch</a>
          </h1>
          <h2 className='text-white font-extralight text-end tracking-wider'>Siguenos y no te pierdas los anuncios de los eventos que tenemos, tambien puedes utilizarla para comunicarte con nosotros <strong>¡Estaremos atentos!</strong></h2>
          <div className="w-full justify-end flex flex-row flex-grow flex-wrap lg:gap-7 md:gap-4 gap-2 items-center text-white">
        <FaFacebookF className="lg:text-3xl md:text-2xl text-xl transition-all transform hover:scale-110 hover:text-blue-600  hover:duration-300" />
        <FaInstagram className="lg:text-3xl md:text-2xl text-xl transition-all transform hover:scale-110 hover:text-fuchsia-700  hover:duration-300" />
        <FaXTwitter className="lg:text-3xl md:text-2xl text-xl transition-all transform hover:scale-110 hover:text-white  hover:duration-300" />
        <FaYoutube className="lg:text-3xl md:text-2xl text-xl transition-all transform hover:scale-110 hover:text-red-700  hover:duration-300" />
        </div>
      <div className="flex w-full items-end justify-end gap-8 mt-8">
        <div className="flex flex-col w-fit">
          <img src={CasaDePaz} className='h-[80px]' />
        <h1 className='text-white'>dwd</h1>
        </div>
        <div  className="flex-col w-fit">
        <img src={QRCasaPaz} className='h-[100px]' />
        </div>
      </div>
      </div>

    
        
    </div>
    </div>
    </>
  )
}

export default Escribenos