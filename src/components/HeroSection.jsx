import React from 'react'
import fondoHome from '../assets/RECURSOSMesa-de-trabajo-1.png'
import banderaPeru from '../assets/peru.jpg'
import banderaUsa from '../assets/usa.jpg'
import Boton from './Boton'
import BotonBlanco from './BotonBlanco'

function HeroSection() {
  return (
    <div 
      className='hero-section bg-cover bg-center xl:h-[900px] h-[100vh] ' 
      style={{ backgroundImage: `url(${fondoHome})` }} >
      <div className='fade-in max-w-screen-2xl w-full mx-auto flex flex-wrap justify-start items-center '>
        <div className='flex flex-col lg:w-6/12 w-full lg:gap-6 gap-3 lg:h-full min-h-[600px] flex-grow justify-center flex-shrink-0 my-0'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-6xl   font-semibold mt-20'> 
            Bienvenido a nuestra comunidad
          </h1>
        
          <hr className='border-t-[7px] w-[100px] border-y-orange-500 my-4' />
          <h2 className='text-white lg:text-2xl text-lg font-thin tracking-wider italic'>
            Sabemos que Dios tiene algo preparado para ti.
          </h2>
          <h2 className='text-white lg:text-2xl text-lg font-light tracking-wider italic'>
            Esto va a pasar hoy, aqui:
          </h2>
          <div className='flex flex-row lg:gap-6 gap-4 mt-4'><Boton text={'Facebook Live'}
          path={'https://facebook.com'}></Boton>
          <BotonBlanco 
          text={'Más Mensajes'}
          path={'#mensajes'}
          color={'white'}></BotonBlanco></div>
          
        </div>

        <div className='flex flex-col  lg:w-6/12 w-full gap-5 flex-shrink-0 justify-end min-h-[50px] items-end lg:h-full h-auto flex-grow'>
          <div className='flex flex-row flex-wrap gap-2 italic'>
            <h3 className='text-base text-white font-medium'>Servicio en linea:</h3>
            <h3  className='text-base text-white'>6:00pm</h3>
            <img src={banderaPeru} className='w-7  ' />
            <h3  className='text-base text-white'>7:00pm</h3>
            <img src={banderaUsa} className='w-7 h-auto' />
            
         </div>
        
      </div>
    </div>
    </div>
  )
}

export default HeroSection