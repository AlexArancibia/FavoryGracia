import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
function MensajeItem({url,portada}) {
  return (
    <div className="md:w-[32%] mb-4 w-full flex flex-row flex-wrap lg:gap-7 md:gap-4 gap-2 justify-center items-center bg-cover lg:min-h-[400px] min-h-[200px] rounded-md relative overflow-hidden group"
     style={{ backgroundImage: `url(${portada})` }}>
    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
    <a href={url} target="_blank" rel="noopener noreferrer">
        <IoPlayCircleOutline className="text-white text-8xl md:text-9xl lg:text-9xl transition-transform transform hover:scale-110 relative z-10" />
    </a>
    </div>


  )
}

export default MensajeItem