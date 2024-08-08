
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO-CIRCULO-BLANCO-03.png'
import { navItems } from '../constants'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from 'react';
import Boton from './Boton';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleNavbar = () => {
    setMobileMenu(!mobileMenu)
    
  }
  return (
 
    <nav className="-mb-[100px] top-0 z-50 py-0 backdrop-blur-lg border-b sticky bg-gray-950 bg-opacity-50 border-neutral-700/20">
        <div className="px-6 py-0 md:px-8 md:py-0 lg:px-16 lg:py-0  ">
          <div className='max-w-screen-2xl mx-auto justify-between  flex flex-row text-sm'>
              <Link to={'/'}><img className='w-[150px] lg:w-[220px]' src={logo} alt='logo'/></Link>
              <div className='mx-auto w-full  items-center justify-center hidden lg:flex'>
              <ul className='flex text-xs list-none justify-between w-full max-w-2xl px-4 uppercase tracking-widest'>
  {navItems.map((navItem, index) => (
    <li 
      key={index} 
      className={`relative transition-all duration-300 ease-in-out transform hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 ${index === 4 ? 'lg:hidden' : ''}`}
    >
      <Link to={navItem.path} 
        className='relative text-white transition duration-300 ease-in-out transform hover:text-gray-300 hover:scale-110'>
        {navItem.label}
      </Link>
    </li>                
  ))}
</ul>

            </div>
            <div className="flex items-center justify-end ">
            <Boton 
            className="hidden lg:flex"
            text={'Contáctanos'}
            path={'/contactanos'}></Boton>
              <div className='flex-col justify-end lg:hidden'>
                <button onClick={toggleNavbar} className='text-white'>{mobileMenu ? <IoMdClose  size={26}/> : <RiMenu4Fill size={26}/>}
                </button>
              </div>
            </div>
          </div>
          
        </div>
  
          <div className={`fixed right-0  z-20 bg-gray-900 w-full p-8 flex flex-col justify-center items-end lg:hidden transition-opacity duration-500 ${mobileMenu ? 'opacity-100 ' : 'opacity-0  pointer-events-none'}`}>            <ul className='text-right uppercase tracking-widest'>
            {navItems.map((navItem,index) => (
                <li key={index} className='py-2 transition duration-300 ease-in-out transform hover:text-gray-300 hover:scale-110'>
                  <Link to={navItem.path} 
                    className=' relative text-white text-sm '
                    onClick={toggleNavbar}>
                      {navItem.label}
                  </Link>
                </li>                
              ))}
            </ul>
          </div>

    </nav>
 
  )
}

export default Navbar