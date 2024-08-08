import React from 'react'
import FondoFooter from '../assets/footer.jpg'
import logo from '../assets/LOGO-CIRCULO-BLANCO-03.png'
import { navItems } from '../constants'
import { Link } from 'react-router-dom'
import { BiSolidRightArrow } from "react-icons/bi";
import { FaFacebookF ,FaInstagram ,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FormularioBasico, FormularioCompleto } from './Formularios'
function Footer() {
  return (
    <div 
    className=" px-6 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 flex m-0 bg-cover bg-center "
    style={{ backgroundImage: `url(${FondoFooter})` }}>
      <div className="fade-in max-w-screen-2xl mx-auto flex flex-wrap flex-grow justify-between ">

        <div className="lg:w-[60%] w-full flex flex-col lg:gap-6 gap-5 lg:justify-start items-start  ">		 
		<img src={logo} className='w-[300px] '></img>
      <div className="flex flex-wrap lg:w-[80%] w-full mt-8">
      
        <ul className="flex flex-wrap pl-2 lg:text-sm text-xs list-none uppercase tracking-widest">
            {navItems.map((navItem, index) => (
            <li
                key={index}
                className="lg:pr-4 pr-8 pb-4 transition-all duration-300 ease-in-out transform hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 flex items-center"
            >
                <Link
                to={navItem.path}
                className=" text-slate-300 text-[14px] transition duration-300 ease-in-out transform hover:text-gray-300 hover:scale-110 flex items-center"
                >
                
                <BiSolidRightArrow className="mr-2 text-xs transition duration-300 ease-in-out transform group-hover:translate-x-1" />
                {navItem.label}
                </Link>
            </li>
            ))}
        </ul>
      </div>
      <hr className='lg:py-2 py-0' />
      <div className="flex flex-row flex-grow flex-wrap pl-1 lg:gap-7 md:gap-4 gap-8 items-center text-white">
        <FaFacebookF className="lg:text-2xl md:text-1xl text-xl transition-all transform hover:scale-110 hover:text-blue-600  hover:duration-300" />
        <FaInstagram className="lg:text-2xl md:text-1xl text-xl transition-all transform hover:scale-110 hover:text-fuchsia-700  hover:duration-300" />
        <FaXTwitter className="lg:text-2xl md:text-1xl text-xl transition-all transform hover:scale-110 hover:text-white  hover:duration-300" />
        <FaYoutube className="lg:text-2xl md:text-1xl text-xl transition-all transform hover:scale-110 hover:text-red-700  hover:duration-300" />
       </div>
       <hr className='border-1 lg:w-2/3 w-full border-[#e2e2e27a]' />
       <h3 className='text-sm text-white uppercase tracking-widest lg:block hidden' >© Favor & Gracia</h3>
      </div>

      <div className="lg:w-[40%] w-full flex flex-col lg:gap-8 gap-6 lg:justify-center items-start  ">
      <h1 className='mt-12 lg:mt-0 lg:text-3xl text-2xl text-white lg:text-left text-center font-bold'>
            Sé parte de la comunidad          </h1> 
        <FormularioBasico />
      </div>
      </div>
    </div>
  )
}

export default Footer