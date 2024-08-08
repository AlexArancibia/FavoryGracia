import React from 'react'
// import FondoAbout from '../assets/RECURSOSMesa-de-trabajo-8.png'
import FondoAbout from '../assets/fondoabout.jpg'

function AboutSection() {
  return (
    <div 
    id='acerca'
    className="relative px-6 py-10 md:px-8 md:py-16 lg:px-16 lg:py-24 flex m-0 bg-cover bg-right"
    style={{ backgroundImage: `url(${FondoAbout})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="fade-in max-w-screen-2xl mx-auto flex flex-wrap flex-grow relative z-10">
      <div className="w-full m-4 flex flex-col lg:gap-2 md:gap-4 gap-2 justify-center items-center">
        <h4 className="uppercase text-sm font-light tracking-widest text-white md:block hidden">ACERCA DE</h4>
        <h1 className="lg:w-3/5 w-4/5 text-center mt-3 text-white text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">
          Mira lo que Dios puede hacer a través de Tí
        </h1>
        <hr className="border-t-[6px] w-[60px] border-y-orange-500 lg:my-4 my-4" />
        <h2 className="text-white lg:text-2xl text-lg italic">
          Conoce más acerca de nosotros
        </h2>
      </div>
    </div>
  </div>
  )
}

export default AboutSection