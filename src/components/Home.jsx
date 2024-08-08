import React from 'react'
import Banner from '../assets/bannermedia.png'
import HeroSection from './HeroSection'
import SocialBanner from './SocialBanner'
import Mensajes from './Mensajes'
import AboutSection from './AboutSection'
import Creencias from './Creencias'
import Liderazgo from './Liderazgo'

function Home() {
  return (
    <>
      <HeroSection />
      <SocialBanner 
      socialimg={Banner} />
      <Mensajes />
      <AboutSection />
      <Creencias />    
      <Liderazgo />
    </>
  )
}

export default Home