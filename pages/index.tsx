import About from '@/components/About';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav'
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

//npm install --save aos@next
//npm install --save-dev @types/aos

const HomePage = () => {
  
  
  const [isNav, setIsNav] = useState(false);
  const openNav = () => setIsNav(true);
  const closeNav = () => setIsNav(false);

  // AOS Animation setup
  useEffect(()=>{
    AOS.init({
      disable:false,
      startEvent:"DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName:"aos-animate",
      useClassNames:false,
      disableMutationObserver:false,
      debounceDelay:50,
      throttleDelay:99,

      offset:120,
      delay:0,
      duration:1000,
      easing:"ease",
      once:true,
      mirror:false,
      anchorPlacement: "top-bottom",

    });
  },[]);

  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar cha part */}
        <MobileNav isNav ={ isNav} closeNav={closeNav}/>
        <Nav openNav = {openNav} /> 

        {/* hero section cha parts */}
        <Hero />
      </div>
      {/* page cha about section aahe */}
      <div className='relative z-[30]'>
        <About /> 

        <Services />

        <Skills />

        <Testimonials />

        <Blogs />

        <Projects />


        <Footer />

      </div>
    </div>
  )
}

export default HomePage