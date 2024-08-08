import React from 'react'
import LiderazgoImg from '../assets/FOTO.png'
import { BiSolidRightArrow } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";
function Liderazgo() {
  return (
  	<div id='liderazgo' className=" px-6 pb-12 md:px-8 md:pb-8 lg:px-16 lg:pb-12 flex m-0 ">
      <div className="max-w-screen-2xl fade-in mx-auto flex flex-wrap flex-grow justify-between ">
			  <div className="w-full lg:mb-12 mb-12 flex flex-col lg:gap-6 gap-2 justify-center items-center ">
          <h1 className='uppercase text-center titulo text-slate-900'>Liderazgo</h1>
          <hr className="border-[3px] w-[60px] border-orange-500 " />


        </div>

        <div className="lg:w-[50%] w-full lg:mb-0 mb-6 flex flex-col lg:gap-6 gap-2 lg:justify-start lg:items-start items-center  ">
					<img src={LiderazgoImg} alt="Pastores" className='w-[70%]' />
				</div>

        <div className="lg:w-[50%] w-full lg:mb-0 mb-12 flex flex-col lg:gap-8 gap-8 justify-center  ">
					<div className="flex flex-row items-center gap-2 lg:justify-start justify-center"> 
            <BiSolidRightArrow className='hidden lg:block' />
            <h1 className='font-semibold lg:text-left text-center  text-lg text-slate-900'>
              Pastores principales:<br className='block lg:hidden' /> Ricardo & Fabiola Serquén</h1>
          </div>
          <div className="flex flex-row w-auto items-center gap-8 border-2 px-4 py-2 rounded-sm"> 
          <FaQuoteLeft className='text-4xl text-slate-300'/>

            <h2 className='font-normal  text-md text-slate-900'>
            <strong>Empezamos siguiendo una misión y obedeciendo</strong><br />
            nuestro llamado, sin imaginar a dónde nos llevaría</h2>
          </div>
          <h1 className='mt-4 lg:text-3xl text-2xl lg:text-left text-center font-bold text-slate-900'>
            Juntos llevamos la Visión de Dios
          </h1>
 
          <h2 className='text-gray-600 text-md text-justify'>
            Esto se ha convertido en una comunidad con la que no solo nos encanta servir, sino también compartir nuestras vidas. Nos trae una profunda alegría ver a dónde nos ha llevado cada paso y reflexionar sobre todo lo que Dios ha hecho en estos años. ¡Ha sido nada menos que una muestra de su fidelidad y amor!
          </h2>

          <blockquote className='text-gray-600 text-md font-semibold border-l-4 border-gray-200 pl-6'>
            <h2>
              "Lo mejor está por venir y solo Dios sabe dónde nos llevará.<br /> ¡Él nos está guiando!"
            </h2>
            <h2 className='italic'>
            <br />"El Señor llevará a feliz término su acción en mi favor.<br />
              Señor, tu amor es eterno. No dejes incompleto lo que has emprendido."<br />
              Salmos 138:8 DHH
            </h2>
          </blockquote>

          


				</div>
      </div>
    </div>
 
  )
}

export default Liderazgo