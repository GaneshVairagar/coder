import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] '>
        <p className='heading'>
            Follow Trends <span className='text-yellow-400'> Technologies</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div data-aos="fade-right">
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase
                font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto ext-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Full Stack</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Understand databases, server management, APIs, and deployment strategies. 
                    They are adept at creating responsive and user-friendly interfaces while 
                    also ensuring the functionality, security, and scalability of the entire application. 
                    </p>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300">
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300  uppercase
                font-semibold text-center p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto ext-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>MERN Stack</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    By learning the MERN stack, developers gain the ability to create modern, single-page applications with a consistent 
                    JavaScript-based technology stack, facilitating efficient
                    development and seamless integration between front-end and back-end components.
                    </p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="500">
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase
                font-semibold text-center p-[2rem]'>
                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto ext-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>NEXT JS Stack</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Developers NEXT.js  provides built-in support for TypeScript, CSS modules, and API routes, making it a comprehensive tool for building robust web applications.
                        Mastering NEXT.js empowers developers to create high-quality, production-ready web applications with ease.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services