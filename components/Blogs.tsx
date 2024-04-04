import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading'>
        My <span className='text-yellow-400'>Projects</span>
        </h1>        
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image 
                        src="/images/blog-1.png"
                        alt="blogs"
                        layout='fill'
                        className='object-cover' 
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#00ffff] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        15 dec, 2023 
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faGithub}  className='w-[1.5rem] mx-auto h-[1.5rem] text-[#00ffff]'/>
                            <p className='text-white'>
                            Disease Prediction Using ML
                            </p>    
                        </div>
                    </div>
                    <p className='text-white'>
                    A system which takes as input the symptoms of the patients to predict the disease, 
                    which is followed by recommending the appropriate medicine....
                    </p>                
                </div>
            </div>

            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image 
                        src="/images/blog-2.jpg"
                        alt="blogs"
                        layout='fill'
                        className='object-cover' 
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#00ffff] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        15 dec, 2023 
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faGithub} className='w-[1.5rem] mx-auto h-[1.5rem] text-[#00ffff]'/>
                            <p className='text-white'>
                            Emotion Detection Analysis
                            </p>    
                        </div>
                    </div>
                    <p className='text-white'>
                    to produce facial emotion detection system to identify emotions based on system could identify several people that are sad, surprised, and happy, in fear, are angry...
                    </p>                
                </div>
            </div>

            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image 
                        src="/images/blog-3.jpg"
                        alt="blogs"
                        layout='fill'
                        className='object-cover' 
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#00ffff] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        15 dec, 2023 
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faGithub} className='w-[1.5rem] mx-auto h-[1.5rem] text-[#00ffff]'/>
                            <p className='text-white'>
                            Covid Management System
                            </p>    
                        </div>
                    </div>
                    <p className='text-white'>
                    The main objective of the designed COVID Patient Management System is to manage the details of Patients, Doctor,Test,Medicine,Prescriptions...
                    </p>                
                </div>
            </div>

            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image 
                        src="/images/blog-4.png"
                        alt="blogs"
                        layout='fill'
                        className='object-cover' 
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#00ffff] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        15 dec, 2023 
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faGithub} className='w-[1.5rem] mx-auto h-[1.5rem] text-[#00ffff]'/>
                            <p className='text-white'>
                            My Prsonal Portfolio
                            </p>    
                        </div>
                    </div>
                    <p className='text-white'>
                    It contains different sections like Introduction to myself, About You, my Services, my Contact Details,<br/> and my Portfolio.
                     
                    </p>                
                </div>
            </div>

            

            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image 
                        src="/images/blog-5.png"
                        alt="blogs"
                        layout='fill'
                        className='object-cover' 
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#00ffff] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        15 dec, 2023 
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faGithub} className='w-[1.5rem] mx-auto h-[1.5rem] text-[#00ffff]'/>
                            <p className='text-white'>
                                book inventry
                            </p>    
                        </div>
                    </div>
                    <p className='text-white'>
                    Buy and Sell Your Books For the Best Prices" encapsulates a platform that facilitates both the
                     purchasing and selling of books at competitive and favorable rates.
                    </p>                
                </div>
            </div>


        </div>

        
    </div>
  )
}

export default Blogs