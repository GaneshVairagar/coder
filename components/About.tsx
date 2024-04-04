import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>

                <div data-aos="fade-right" className='lg:w-[500px] mx-auto md:mt-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                    <Image
                        src="/images/about.jpeg"
                        alt="user"
                        layout="fill"
                        objectFit='contain'
                        className='relative z-[11] w-[100%] h-[100%]'

                    />
                <div className='absolute w-[100%] h-[100%] z-[10] bg-[#00ffff] top-[-2rem] left-[-2rem]'></div>


                </div>

                <div className='md:flex-row-reverse'>
                    <h1 className='text-[20px]  font-bold uppercase text-[#00ffff] mb-[1rem]'>ABOUT ME</h1>

                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                        Hii, This is  <span className='text-yellow-400'>Ganesh V</span>.
                    </h2>

                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>
                        A Programmer who loves to learn more about programming. I also have some good knowledge of web development. 
                        I also love to learn new things.<br/>
                        A Tea 🍵 Lover & sometimes coffee☕.<br/>
                        Most of time love to Watch Anime- which about life lessons📱.


                        </p>
                    </div>
                    <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase
                         bg-[#00ffff] text-black flex items-center space-x-2'>
                        <p><a href='/images/FSDResume.pdf' target='blank'> Download CV </a></p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black ' />
                    </button>
                </div>


            </div>
        </div>
    )
}

export default About
