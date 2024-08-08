import React from 'react'
import Mensaje1 from '../assets/RECURSOSMesa-de-trabajo-11.png'
import Mensaje2 from '../assets/RECURSOSMesa-de-trabajo-12.png'
import Mensaje3 from '../assets/RECURSOSMesa-de-trabajo-9.png'

import MensajeItem from './MensajeItem';

function Mensajes() {
  return (
    <div id='mensajes' className=" px-6 py-10 md:px-8 md:py-16 lg:px-16 lg:py-24 flex m-0 ">
      <div className=" fade-in max-w-screen-2xl  mx-auto flex flex-wrap flex-grow gap-[2%]">
      <div className="w-full mb-8 flex flex-col lg:gap-2 md:gap-4 gap-2 justify-center items-center ">
        <h1 className='uppercase titulo text-slate-900'>Más Mensajes</h1>
        <hr className='border-t-[6px] w-[60px] border-y-blue-950 lg:my-4 mt-4' /> 
        </div>
        <MensajeItem 
            url={'https://youtube.com'}
            portada={Mensaje1} />
        <MensajeItem 
            url={'https://youtube.com'}
            portada={Mensaje2} />
        <MensajeItem 
            url={'https://youtube.com'}
            portada={Mensaje3} />
 
 
 
      </div>
    </div>
  )
}

export default Mensajes