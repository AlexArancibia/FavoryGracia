import React from 'react'
import { FaFacebookF ,FaInstagram ,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function SocialBanner({socialimg}) {
  return (
    <>
    <div 
    className=" px-6 py-4 md:px-8 md:py-4 lg:px-16 lg:py-4 flex m-0 bg-cover lg:bg-center bg-right"
    style={{ backgroundImage: `url(${socialimg})` }}>
      <div className=" fade-in max-w-screen-2xl xl:min-h-[300px] lg:min-h-[200px] md:min-h-[150px] min-h-[80px] mx-auto flex flex-wrap flex-grow">
        <div className="w-1/2 flex flex-row flex-grow flex-wrap lg:gap-7 md:gap-4 gap-4 items-center text-white">
        <FaFacebookF className="lg:text-5xl md:text-2xl text-2xl transition-all transform hover:scale-110 hover:text-blue-600  hover:duration-300" />
        <FaInstagram className="lg:text-5xl md:text-2xl text-2xl transition-all transform hover:scale-110 hover:text-fuchsia-700  hover:duration-300" />
        <FaXTwitter className="lg:text-5xl md:text-2xl text-2xl transition-all transform hover:scale-110 hover:text-white  hover:duration-300" />
        <FaYoutube className="lg:text-5xl md:text-2xl text-2xl transition-all transform hover:scale-110 hover:text-red-700  hover:duration-300" />
        </div>
        <div className="w-1/2 flex flex-col ">
          <div className="flex-grow ">
     
          </div>
        </div>
 
      </div>
    </div>     
    </>
  )
}

export default SocialBanner