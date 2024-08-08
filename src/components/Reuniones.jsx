import React from 'react'
import Banner from '../assets/RECURSOSMesa-de-trabajo-7.png'
import ReunionesFondo from '../assets/RECURSOSMesa-de-trabajo-2.png'
import banderaPeru from '../assets/peru.jpg'
import banderaUsa from '../assets/usa.jpg'
import ReunionItem from './ReunionItem'
import SocialBanner from './SocialBanner'

import Galeria1 from '../assets/RECURSOSMesa-de-trabajo-14.png'
import Galeria2 from '../assets/RECURSOSMesa-de-trabajo-15.png'
import Galeria3 from '../assets/RECURSOSMesa-de-trabajo-16.png'
import Galeria4 from '../assets/RECURSOSMesa-de-trabajo-17.png'
import Galeria5 from '../assets/RECURSOSMesa-de-trabajo-18.png'
import Galeria6 from '../assets/RECURSOSMesa-de-trabajo-19.png'
import Galeria7 from '../assets/RECURSOSMesa-de-trabajo-20.png'
import Galeria8 from '../assets/RECURSOSMesa-de-trabajo-21.png'

const images = [Galeria1, Galeria2, Galeria3, Galeria4, Galeria5, Galeria6, Galeria7, Galeria8];


function Reuniones() {
  return (
    <>
    <div 
      className='px-6 py-8 md:px-8 md:py-16 lg:px-16 lg:pt-36 lg:pb-12 flex m-0 bg-cover bg-center min-h-[100vh]' 
      style={{ backgroundImage: `url(${ReunionesFondo})` }} >
      <div className='fade-in max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between items-center '>
      <div className='flex flex-col lg:w-4/12 lg:border-r lg:pb-0 pb-12 lg:border-b-0 border-b-0 border-orange-400 w-full lg:gap-3 gap-3 justify-center lg:mt-0 mt-36 lg:mb-0 mb-84'>
          <h1 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-6xl   font-semibold '> 
            Reuniones
          </h1>
        
          <hr className='border-t-[7px] w-[100px] border-y-orange-500 my-8' />

          <h1 className='uppercase titulo text-white lg:mb-4'>Domingo</h1>
          <h1 className='text-xl text-white '>Servicios en Linea</h1>


          <div className='flex flex-row flex-wrap gap-2 italic'>
            <h3  className='text-base text-white'>6:00pm</h3>
            <img src={banderaPeru} className='w-7  ' alt='Bandera Peru' />
            <h3  className='text-base text-white'>7:00pm</h3>
            <img src={banderaUsa} className='w-7 h-auto' alt='Bandera Usa'/>
            
          </div>
  
        
        </div>

        <div className='flex flex-row flex-wrap lg:w-7/12 w-full lg:gap-3 gap-3 justify-between'>
        <ReunionItem
            dia={'Lunes'}
            description={'Casa de Oracíon en Linea'} 
            horaPeru={'8:00pm'}
            horaUsa={'9:00pm'}/>
          <ReunionItem
            dia={'Miercoles'}
            description={'Casa de Oracíon en Linea'} 

            horaPeru={'8:00pm'}
            horaUsa={'9:00pm'}/>
          <ReunionItem
            dia={'Martes'}
            description={'Casa de Paz'}
            ubicacion={'Huascas SJL'} 
            horaPeru={'4:00pm'}/>
          <ReunionItem
            dia={'Jueves'}
            description={'Casa de Paz'} 
            ubicacion={'Surquillo'}
            horaPeru={'8:00pm'}/>
          <ReunionItem
            dia={'Miercoles'}
            description={'Casa de Paz'} 
            ubicacion={'12 de Mayo SJL'}
            horaPeru={'8:00pm'}/>
          <ReunionItem
            dia={'Viernes'}
            description={'Liderazgo en Linea'} 
            horaPeru={'8:00pm'}
            horaUsa={'9:00pm'}/>
  
        
        </div>

        
    </div>
    </div>
    <SocialBanner 
      socialimg={Banner} />
    <div className='px-6 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 flex m-0 bg-cover bg-center min-h-[100vh]'>
      <div className='fade-in max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between items-center'>
        {images.map((image, index) => (
          <div key={index} className='w-[49%] mb-2 sm:w-[49%] md:w-[33%] lg:w-[24.5%] '>
              <img src={image} alt={`Galeria${index + 1}`} className='rounded-md w-full h-auto object-cover' />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Reuniones