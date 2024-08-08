import React from 'react'
import InvolucrateFondo from '../assets/RECURSOSMesa-de-trabajo-3.png'
import Conmutador from './Conmutador'
import InvolucrateImg1 from '../assets/involucrate1.jpg'
import InvolucrateImg2 from '../assets/involucrate2.jpg'
import InvolucrateImg3 from '../assets/involucrate3.jpg'
import InvolucrateImg4 from '../assets/involucrate4.jpg'
import InvolucrateImg5 from '../assets/involucrate5.png'
import banderaPeru from '../assets/peru.jpg'
import banderaUsa from '../assets/usa.jpg'
const content = [
    { titulo: 'Evangelizar', 
      descripcion: 'Nuestra misión es compartir las buenas nuevas del Evangelio y llevar a las personas a tener una relación personal con Dios por medio de la persona de Jesucristo. Nuestra pasión es entrenar, equipar, movilizar y empoderar a cada miembro del ministerio para alcanzar al perdido a través de lo sobrenatural, así como también ayudar a cada nuevo creyente a comenzar su camino mediante el proceso de la visión.'
    },
    { titulo: 'Afirmar', 
      descripcion: 'Este proceso consiste en una serie de clases las cuales han sido diseñadas con el fin de ayudar a cada nuevo creyente para que crezca en su relación con Dios y pase de ser un creyente de Jesús a ser un discípulo de Jesús; y de ser un discípulo a ser un líder entrenado y empoderado para guiar a otros a Cristo. Dé el primer paso' 
    },
    { titulo: 'Discipular', 
      descripcion: 'Nuestro programa de liderazgo le proporciona a cada discípulo un proceso de crecimiento a fin de entrenarlos y equiparlos para cumplir con el propósito que Dios les ha dado, y que ellos, a su vez, puedan guiar a otros a Cristo Jesús.' 
    },
    { titulo: 'Enviar', 
      descripcion: 'A travez de nuestro Trabajo en las Casa de Paz, enviamos a nuestro liderazgo a servir a la comunidad en cada distrito de la ciudad . Estas reuniones, también conocidas como "CDP", son abiertas con el propósito de compartir el evangelio.' 
    },

  ];
function Involucrate() {
    
  return (
    <>
    <div 
      className='px-6 py-8 md:px-8 md:py-16 lg:px-16 lg:pt-36 lg:pb-12 flex m-0 bg-cover bg-center md:min-h-[70vh] min-h-[50vh]' 
      style={{ backgroundImage: `url(${InvolucrateFondo})` }} >
      <div className='fade-in max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between items-center '>
              
      <div className='flex flex-col lg:w-4/12   lg:pb-0 pb-12 w-full lg:gap-3 gap-3 justify-center lg:mt-0 mt-36 lg:mb-0 mb-84'>
    
          <h1 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-6xl mt-[10px]  font-semibold '> 
           Involucrate
          </h1>
        
          <hr className='border-t-[7px] w-[100px] border-y-orange-500 py-2' />

          <h1 className='tracking-wide font-extralight  texto text-white lg:mb-4 lg:text-xl text-lg'>Ve lo que Dios puede hacer a través de Ti.</h1>


  
        
        </div>

        <div className='flex flex-row flex-wrap lg:w-7/12 w-full lg:gap-3 gap-3 justify-between'>
        
        </div>

        
    </div>
    </div>

    <div 
      className='px-6 py-8 md:px-8 md:py-16 lg:px-16 lg:py-16 flex m-0 bg-cover bg-center md:min-h-[70vh] min-h-[50vh]' >      
      <div className='fade-in max-w-screen-2xl w-full mx-auto flex flex-wrap justify-between items-start '>
      <div className="lg:w-[40%] w-full lg:mb-0 mb-12 flex flex-col lg:gap-6  gap-2 justify-start bg-[#f1f5f9ad] lg:p-10 px-6 py-10 rounded-lg ">
      <div className="flex flex-row gap-4 lg:mb-4 mb-8 ">
			<div className="flex flex-col gap-0 justify-start items-start flex-grow pr-10">
				<h1 className=' text-2xl text-center font-bold text-slate-900'>La Visión en accion</h1>
				<hr className='border-t-[3px] w-[100px] border-y-orange-500 my-2' />
			</div>
					
		</div>

        
		<Conmutador content={content} ></Conmutador>
        <img 
        src={InvolucrateImg5} 
        className='rounded-md w-full object-cover mt-5' 
        style={{ aspectRatio: '5 / 6', objectPosition: 'top' }} 
        />
	  </div>
      <div className='flex flex-row flex-wrap lg:w-[59%] w-full lg:gap-0 gap-[2%]'>

      <div className="lg:w-[49%] md:w-[49%] w-full lg:mb-8 mb-12 flex flex-col lg:gap-6  gap-4 justify-start  lg:px-5  px-0 items-start rounded-lg ">
      <img 
        src={InvolucrateImg1} 
        className='rounded-md w-full object-cover' 
        style={{ aspectRatio: '4 / 3' }} 
        />
        <h1 className='uppercase text-lg tracking-widest font-semibold text-slate-900 mt-2'>Invita</h1>
        <h1 className='text-[15px] text-justify text-slate-900'>Provecha la oportunidad de ver que la vida de alguien cambie e invite a un amigo a una Casa de paz y conéctalo con la iglesia online este fin de semana</h1>
	  </div>

      <div className="lg:w-[49%] md:w-[49%] w-full lg:mb-8 mb-12 flex flex-col lg:gap-6  gap-4 justify-start  lg:px-5  px-0 items-start rounded-lg ">
      <img 
        src={InvolucrateImg2} 
        className='rounded-md w-full object-cover' 
        style={{ aspectRatio: '4 / 3' }} 
        />
        <h1 className='uppercase text-lg tracking-widest font-semibold text-slate-900 mt-2'>Casa de paz</h1>
        <h1 className='text-[15px] text-justify text-slate-900'>Es un lugar en la ciudad donde la comunidad se reúne una vez por semana para orar por sus necesidades, aprender de Dios y crecer en su estilo de vida cristiano. Donde la misma unción, el poder sobrenatural y la presencia de Dios se experimentan con tanta fuerza como en la iglesia .</h1>
	  </div>

      <div className="lg:w-[49%] md:w-[49%] w-full lg:mb-8 mb-12 flex flex-col lg:gap-6  gap-4 justify-start  lg:px-5  px-0 items-start rounded-lg ">
		<img src={InvolucrateImg3} className='rounded-md' />
        <h1 className='uppercase text-lg tracking-widest font-semibold text-slate-900 mt-2'>Casa de Oración</h1>
        <h1 className='text-[15px] text-justify text-slate-900'>Este es un tiempo que tomas para consagrar la semana en oración y conquistar nuestras bendiciones orando los unos por los otros. Unete a nosotros cada semana a través de zoom, Todos los lunes :</h1>
        <div className='flex flex-row flex-wrap gap-2 italic items-center'>
            <h3  className='text-[15px] w-full text-slate-900'>Todos los Lunes:</h3>
            <h3  className='text-[15px]  text-slate-900'>8:00pm</h3>
            <img src={banderaPeru} className='w-7 h-[16px] ' alt='Bandera Peru' />
            <h3  className='text-[15px]  text-slate-900'>9:00pm</h3>
            <img src={banderaUsa} className='w-7 h-[16px]' alt='Bandera Usa'/>
            
        </div>
      </div>

      <div className="lg:w-[49%] md:w-[49%] w-full lg:mb-8 mb-12 flex flex-col lg:gap-6  gap-4 justify-start  lg:px-5  px-0 items-start rounded-lg ">
		<img src={InvolucrateImg4} className='rounded-md' />
        <h1 className='uppercase text-lg tracking-widest font-semibold text-slate-900 mt-2'>Liderazgo</h1>
        <h1 className='text-[15px] text-justify text-slate-900'>En FGC tenemos líderes entrenados y empoderados para ayudar a cada creyente a crecer en su relación con Dios y convertirse en discípulos maduros de Jesús. Nuestro programa de liderazgo le proporciona a cada discípulo un proceso de crecimiento a fin de entrenarlos y equiparlos para cumplir con el propósito que Dios les ha dado, y que ellos, a su vez, puedan guiar a otros a Cristo Jesús.</h1>
	  </div>

       </div>
 
      
      
      </div>
    </div>
    
    </>
  )
}

export default Involucrate